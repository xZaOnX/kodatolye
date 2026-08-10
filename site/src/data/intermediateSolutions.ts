/** Reference solutions keyed by intermediate challenge id.
 *  Auto-generated + verified against intermediateChallenges.ts fixtures.
 *  Covers all 50 `*-int-fn-*` function challenges and 25 `*-int-full` programs.
 */
export const intermediateSolutions: Record<string, string> = {
  'armstrong-int-fn-armstrong': `def armstrong(number):
    digits = str(number)
    power = len(digits)
    return number == sum(int(d) ** power for d in digits)
`,
  'armstrong-int-fn-filter': `def armstrong(number):
    return number == sum(int(d) ** len(str(number)) for d in str(number))

def filter_armstrong(lines):
    result = []
    for line in lines:
        text = line.strip()
        if not text:
            continue
        try:
            n = int(text)
        except ValueError:
            continue
        if armstrong(n):
            result.append(n)
    return result
`,
  'armstrong-int-full': `def armstrong(number):
    return number == sum(int(d) ** len(str(number)) for d in str(number))

keepers = []
with open("numbers.txt") as f:
    for line in f:
        text = line.strip()
        if not text:
            continue
        try:
            n = int(text)
        except ValueError:
            continue
        if armstrong(n):
            keepers.append(n)

with open("armstrong.txt", "w") as f:
    for n in keepers:
        f.write(str(n) + "\\n")
`,
  'ascii-stats-int-fn-bounds': `def square_in_bounds(rows, cols, x, y, size):
    return 0 <= y <= x <= cols - size
`,
  'ascii-stats-int-fn-count': `def count_square(landscape, x, y, size):
    counts = {}
    for r in range(y, y + size):
        row = landscape[r]
        for c in range(x, x + size):
            ch = row[c]
            counts[ch] = counts.get(ch, 0) + 1
    return counts
`,
  'ascii-stats-int-full': `import sys

def count_square(landscape, x, y, size):
    counts = {}
    for r in range(y, y + size):
        row = landscape[r]
        for c in range(x, x + size):
            ch = row[c]
            counts[ch] = counts.get(ch, 0) + 1
    return counts

with open("landscape.txt") as f:
    landscape = [line.rstrip("\\n") for line in f]

rows = len(landscape)
cols = len(landscape[0]) if landscape else 0

data = sys.stdin.read().split("\\n")
x_str, y_str = data[0].split(",")
x, y = int(x_str), int(y_str)
size = int(data[1])

if not (0 <= x <= cols - size and 0 <= y <= rows - size):
    print("ERROR!! the square to analyze is out of limits")
else:
    counts = count_square(landscape, x, y, size)
    total = size * size
    for ch, cnt in sorted(counts.items(), key=lambda kv: -kv[1]):
        pct = cnt / total * 100
        print(f"{ch}-> {pct:4.1f}%")
`,
  'battleship-int-fn-parse': `def parse_shot(coord):
    coord = coord.strip()
    letter, num = coord.split(",")
    row = ord(letter.strip().upper()) - ord("A")
    col = int(num) - 1
    if not (0 <= row <= 9) or not (0 <= col <= 9):
        raise ValueError("shot out of range")
    return (row, col)
`,
  'battleship-int-fn-apply': `def apply_shot(opponent, shot_map, row, col):
    if opponent[row][col] == "#":
        opponent[row][col] = "-"
        shot_map[row][col] = "*"
        return "hit"
    shot_map[row][col] = "o"
    return "miss"
`,
  'battleship-int-full': `def parse_shot(coord):
    letter, num = coord.strip().split(",")
    return (ord(letter.strip().upper()) - ord("A"), int(num) - 1)

def apply_shot(opponent, shot_map, row, col):
    if opponent[row][col] == "#":
        opponent[row][col] = "-"
        shot_map[row][col] = "*"
        return "hit"
    shot_map[row][col] = "o"
    return "miss"

def read_board(name):
    rows = []
    with open(name) as f:
        for line in f:
            line = line.rstrip("\\n")
            if line:
                rows.append(list(line))
    return rows

def ships_left(board):
    return sum(row.count("#") for row in board)

map1 = read_board("map1.dat")
map2 = read_board("map2.dat")
with open("moves.txt") as f:
    moves = [line.strip() for line in f if line.strip()]

shot_maps = [[["-"] * 10 for _ in range(10)] for _ in range(2)]
targets = [map2, map1]  # Player 1 -> map2, Player 2 -> map1

for i, move in enumerate(moves):
    player = i % 2
    row, col = parse_shot(move)
    result = apply_shot(targets[player], shot_maps[player], row, col)
    print(f"Player {player + 1}")
    print(move)
    print(result)
    if ships_left(targets[player]) == 0:
        print(f"Player {player + 1} wins")
        break

for p in range(2):
    print(f"=== Player {p + 1} ===")
    for row in shot_maps[p]:
        print("".join(row))
`,
  'atomic-chess-int-fn-square': `def square_to_indexes(square):
    square = square.strip()
    if len(square) != 2:
        raise ValueError("bad square")
    col_ch, row_ch = square[0], square[1]
    if not ("a" <= col_ch <= "h") or not ("1" <= row_ch <= "8"):
        raise ValueError("bad square")
    return (int(row_ch) - 1, ord(col_ch) - ord("a"))
`,
  'atomic-chess-int-fn-player': `def get_player(cell):
    if cell.startswith("+"):
        return 1
    if cell.startswith("-"):
        return -1
    return 0
`,
  'atomic-chess-int-full': `white = 0
black = 0
with open("board.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        for cell in line.split(","):
            if cell.startswith("+"):
                white += 1
            elif cell.startswith("-"):
                black += 1

print(f"White: {white}")
print(f"Black: {black}")
`,
  'biodiversity-int-fn-dup': `def is_duplicate(text, seen):
    if text in seen:
        return True
    seen.add(text)
    return False
`,
  'biodiversity-int-fn-dna': `def dna_match(sample, species_dna):
    return sample in species_dna
`,
  'biodiversity-int-full': `def is_duplicate(text, seen):
    if text in seen:
        return True
    seen.add(text)
    return False

def dna_match(sample, species_dna):
    return sample in species_dna

species = []
with open("species.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        name, dna = line.split(";")
        species.append((name, dna))

seen = set()
samples = []
with open("samples.txt") as f:
    for line in f:
        text = line.strip()
        if not text or is_duplicate(text, seen):
            continue
        samples.append(text)

for name, dna in species:
    count = sum(1 for s in samples if dna_match(s, dna))
    print(f"{name}: {count}")
`,
  'chess-selo-int-fn-expected': `def expected_score(ra, rb):
    return 1 / (1 + 10 ** ((rb - ra) / 400))
`,
  'chess-selo-int-fn-ensure': `def ensure_player(players, name):
    players.setdefault(name, 1500.0)
`,
  'chess-selo-int-full': `def expected_score(ra, rb):
    return 1 / (1 + 10 ** ((rb - ra) / 400))

def ensure_player(players, name):
    players.setdefault(name, 1500.0)

K = 32
players = {}
with open("matches.csv") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        winner, loser = line.split(",")
        ensure_player(players, winner)
        ensure_player(players, loser)
        ew = expected_score(players[winner], players[loser])
        el = expected_score(players[loser], players[winner])
        players[winner] += K * (1 - ew)
        players[loser] += K * (0 - el)

for name, rating in sorted(players.items(), key=lambda kv: -kv[1]):
    print(f"{name} {round(rating)}")
`,
  'connect-four-int-fn-bottom': `def find_bottom(board, column, EMPTY, NUM_ROWS):
    for r in range(NUM_ROWS - 1, -1, -1):
        if board[r][column] == EMPTY:
            return r
    return -1
`,
  'connect-four-int-fn-horiz': `def four_horizontal(board, r, c, EMPTY):
    row = board[r]
    if c + 4 > len(row):
        return False
    first = row[c]
    if first == EMPTY:
        return False
    return all(row[c + i] == first for i in range(4))
`,
  'connect-four-int-full': `NUM_ROWS = 6
NUM_COLS = 7
EMPTY = "."

def find_bottom(board, column, EMPTY, NUM_ROWS):
    for r in range(NUM_ROWS - 1, -1, -1):
        if board[r][column] == EMPTY:
            return r
    return -1

board = [[EMPTY] * NUM_COLS for _ in range(NUM_ROWS)]
with open("moves.txt") as f:
    columns = f.read().split()

players = ["X", "O"]
for i, tok in enumerate(columns):
    col = int(tok)
    r = find_bottom(board, col, EMPTY, NUM_ROWS)
    if r == -1:
        continue
    board[r][col] = players[i % 2]

for row in board:
    print("".join(row))
`,
  'consumption+production-int-fn-self': `def self_consumed(produced, consumed):
    return min(produced, consumed)
`,
  'consumption+production-int-fn-key': `def make_key(hid, date, time):
    return (hid, date, time)
`,
  'consumption+production-int-full': `def self_consumed(produced, consumed):
    return min(produced, consumed)

def make_key(hid, date, time):
    return (hid, date, time)

def read_energy(name):
    data = {}
    with open(name) as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            hid, date, time, energy = line.split(",")
            data[make_key(hid, date, time)] = float(energy)
    return data

consumed = read_energy("consumption.csv")
produced = read_energy("production.csv")

total = 0.0
for key, c in consumed.items():
    if key in produced:
        total += self_consumed(produced[key], c)

print(f"{total:.1f}")
`,
  'crypto-int-fn-eval': `def evaluate_portfolio(portfolio, prices):
    return sum(qty * prices[token] for token, qty in portfolio.items() if token in prices)
`,
  'crypto-int-fn-add': `def add_price(prices_by_day, date, token, price):
    prices_by_day.setdefault(date, {})[token] = price
`,
  'crypto-int-full': `def evaluate_portfolio(portfolio, prices):
    return sum(qty * prices[token] for token, qty in portfolio.items() if token in prices)

def add_price(prices_by_day, date, token, price):
    prices_by_day.setdefault(date, {})[token] = price

portfolio = {}
with open("portfolio.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        token, qty = line.split()
        portfolio[token] = float(qty)

prices_by_day = {}
with open("prices.csv") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        date, token, price = line.split(",")
        add_price(prices_by_day, date, token, float(price))

best_day = None
best_value = None
for date, prices in prices_by_day.items():
    value = evaluate_portfolio(portfolio, prices)
    if best_value is None or value > best_value:
        best_value = value
        best_day = date

print(f"{best_day} {best_value:.2f}")
`,
  'everwhen-int-fn-mins': `def to_minutes(h, m, offset):
    return h * 60 + m + offset
`,
  'everwhen-int-fn-label': `def day_label(raw):
    if raw < 0:
        return "yesterday"
    if raw >= 1440:
        return "tomorrow"
    return "today"
`,
  'everwhen-int-full': `def to_minutes(h, m, offset):
    return h * 60 + m + offset

def day_label(raw):
    if raw < 0:
        return "yesterday"
    if raw >= 1440:
        return "tomorrow"
    return "today"

with open("events.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        hhmm, offset = line.split()
        h, m = hhmm.split(":")
        raw = to_minutes(int(h), int(m), int(offset))
        print(day_label(raw))
`,
  'flights-booking-int-fn-can': `def can_book(taken, seats, rows, cols):
    return taken + seats <= rows * cols
`,
  'flights-booking-int-fn-cancel': `def cancel_all(passengers, name):
    passengers[:] = [p for p in passengers if p != name]
`,
  'flights-booking-int-full': `def can_book(taken, seats, rows, cols):
    return taken + seats <= rows * cols

def cancel_all(passengers, name):
    passengers[:] = [p for p in passengers if p != name]

ROWS = 2
COLS = 2
passengers = []
with open("commands.txt") as f:
    for line in f:
        parts = line.split()
        if not parts:
            continue
        cmd = parts[0]
        if cmd == "BOOK":
            name = parts[2]
            seats = int(parts[3])
            if can_book(len(passengers), seats, ROWS, COLS):
                passengers.extend([name] * seats)
                print(f"BOOK {name} ok")
            else:
                print(f"BOOK {name} fail")
        elif cmd == "CANCEL":
            name = parts[2]
            cancel_all(passengers, name)
            print(f"CANCEL {name} ok")
`,
  'freedonia-int-fn-date': `def string_to_date(string):
    d, m, y = string.strip().split("-")
    return (int(y), int(m), int(d))
`,
  'freedonia-int-fn-apply': `def apply_rules(active, r_add, r_del):
    active |= r_add
    active -= r_del
`,
  'freedonia-int-full': `import sys

def string_to_date(string):
    d, m, y = string.strip().split("-")
    return (int(y), int(m), int(d))

def apply_rules(active, r_add, r_del):
    active |= r_add
    active -= r_del

query = string_to_date(sys.stdin.readline())

rules = []
with open("rules.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        date_s, sign, rule = line.split(";")
        rules.append((string_to_date(date_s), sign, rule))

rules.sort(key=lambda item: item[0])
active = set()
for date, sign, rule in rules:
    if date > query:
        break
    if sign == "+":
        apply_rules(active, {rule}, set())
    else:
        apply_rules(active, set(), {rule})

for rule in sorted(active):
    print(rule)
`,
  'heating-int-fn-parse': `def parse_csv_line(line):
    dt, value = line.strip().split(",")
    date = dt.split()[0]
    return (date, float(value))
`,
  'heating-int-fn-month': `def add_month(monthly, month, consumption):
    monthly[month] = monthly.get(month, 0) + consumption
`,
  'heating-int-full': `def parse_csv_line(line):
    dt, value = line.strip().split(",")
    date = dt.split()[0]
    return (date, float(value))

def add_month(monthly, month, consumption):
    monthly[month] = monthly.get(month, 0) + consumption

monthly = {}
with open("heating.csv") as f:
    for line in f:
        if not line.strip():
            continue
        date, value = parse_csv_line(line)
        add_month(monthly, date[:7], value)

for month in sorted(monthly):
    print(f"{month}: {monthly[month]:.1f}")
`,
  'linmgoweave-int-fn-score': `def calculate_score(word, pattern):
    count = 0
    for i in range(len(pattern) - len(word) + 1):
        if pattern[i:i + len(word)] == word:
            count += 1
    return count * len(word)
`,
  'linmgoweave-int-fn-unique': `def unique_score(s, scores):
    if s in scores:
        return 0
    scores.add(s)
    return s
`,
  'linmgoweave-int-full': `def calculate_score(word, pattern):
    count = 0
    for i in range(len(pattern) - len(word) + 1):
        if pattern[i:i + len(word)] == word:
            count += 1
    return count * len(word)

def unique_score(s, scores):
    if s in scores:
        return 0
    scores.add(s)
    return s

with open("pattern.txt") as f:
    pattern = f.read().strip()

words = []
with open("words.txt") as f:
    for line in f:
        w = line.strip()
        if w:
            words.append(w)

scores = set()
total = 0
for w in words:
    s = calculate_score(w, pattern)
    u = unique_score(s, scores)
    print(f"{w} {u}")
    total += u

print(f"total {total}")
`,
  'magic-boxes-int-fn-find': `def find_box(boxes, obj):
    for i, box in enumerate(boxes):
        if obj in box:
            return i
    for i, box in enumerate(boxes):
        if not box:
            return i
    return None
`,
  'magic-boxes-int-fn-add': `def find_box(boxes, obj):
    for i, box in enumerate(boxes):
        if obj in box:
            return i
    for i, box in enumerate(boxes):
        if not box:
            return i
    return None

def add_object(boxes, obj):
    i = find_box(boxes, obj)
    if i is None:
        return False
    boxes[i].append(obj)
    return True
`,
  'magic-boxes-int-full': `def find_box(boxes, obj):
    for i, box in enumerate(boxes):
        if obj in box:
            return i
    for i, box in enumerate(boxes):
        if not box:
            return i
    return None

def add_object(boxes, obj):
    i = find_box(boxes, obj)
    if i is None:
        return False
    boxes[i].append(obj)
    return True

boxes = [[], [], []]
with open("objects.txt") as f:
    for line in f:
        obj = line.strip()
        if not obj:
            continue
        if not add_object(boxes, obj):
            print(f"{obj} rejected")

for i, box in enumerate(boxes):
    print(f"box{i}: {','.join(box)}")
`,
  'misspell-int-fn-mis': `def mispell(word1, word2):
    if len(word1) != len(word2):
        return False
    diff = sum(1 for a, b in zip(word1.casefold(), word2.casefold()) if a != b)
    return diff == 1
`,
  'misspell-int-fn-read': `def read_list(filename):
    with open(filename) as f:
        return [line.strip() for line in f]
`,
  'misspell-int-full': `def mispell(word1, word2):
    if len(word1) != len(word2):
        return False
    diff = sum(1 for a, b in zip(word1.casefold(), word2.casefold()) if a != b)
    return diff == 1

def read_list(filename):
    with open(filename) as f:
        return [line.strip() for line in f]

names = [n for n in read_list("names.txt") if n]
dictionary = [d for d in read_list("dictionary.txt") if d]

for name in names:
    count = sum(1 for word in dictionary if mispell(name, word))
    print(f"{name}: {count}")
`,
  'munodi-int-fn-mun': `def munodi(num):
    seq = [num]
    while num != 1:
        num = num // 2 if num % 2 == 0 else 3 * num + 1
        seq.append(num)
    return seq
`,
  'munodi-int-fn-parse': `def parse_sequence(line):
    return [int(x) for x in line.split()]
`,
  'munodi-int-full': `def munodi(num):
    seq = [num]
    while num != 1:
        num = num // 2 if num % 2 == 0 else 3 * num + 1
        seq.append(num)
    return seq

def parse_sequence(line):
    return [int(x) for x in line.split()]

with open("sequences.txt") as f:
    for line in f:
        if not line.strip():
            continue
        seq = parse_sequence(line)
        if seq and seq == munodi(seq[0]):
            print("valid")
        else:
            print("invalid")
`,
  'railway-management-int-fn-stop': `def parse_stop(info):
    parts = info.strip().rsplit(":", 2)
    return (parts[0], (int(parts[1]), int(parts[2])))
`,
  'railway-management-int-fn-travel': `def travel_minutes(h1, m1, h2, m2):
    return 60 * (h2 - h1) + (m2 - m1)
`,
  'railway-management-int-full': `def parse_stop(info):
    parts = info.strip().rsplit(":", 2)
    return (parts[0], (int(parts[1]), int(parts[2])))

def travel_minutes(h1, m1, h2, m2):
    return 60 * (h2 - h1) + (m2 - m1)

with open("routes.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        stops = [parse_stop(tok) for tok in line.split()]
        first_name, (h1, m1) = stops[0]
        last_name, (h2, m2) = stops[-1]
        print(f"{first_name}->{last_name}: {travel_minutes(h1, m1, h2, m2)}")
`,
  'shells-int-fn-inc': `def includes(need, have):
    for item in set(need):
        if need.count(item) > have.count(item):
            return False
    return True
`,
  'shells-int-fn-sum': `def sum_prices(items, shell_price):
    return sum(shell_price[item] for item in items)
`,
  'shells-int-full': `def sum_prices(items, shell_price):
    return sum(shell_price[item] for item in items)

prices = {}
with open("prices.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        name, price = line.split()
        prices[name] = float(price)

basket = []
with open("basket.txt") as f:
    for line in f:
        item = line.strip()
        if item:
            basket.append(item)

print(f"{sum_prices(basket, prices):.2f}")
`,
  'soccer-int-fn-eff': `def forward_eff(p):
    return (p["goals"] + p["assists"] - p["offsides"]) / p["minutes"]
`,
  'soccer-int-fn-team': `def add_to_team(teams, p):
    teams.setdefault(p["team"], []).append(p)
`,
  'soccer-int-full': `def forward_eff(p):
    return (p["goals"] + p["assists"] - p["offsides"]) / p["minutes"]

players = []
with open("players.csv") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        name, team, goals, assists, offsides, minutes = line.split(",")
        players.append({
            "name": name,
            "team": team,
            "goals": int(goals),
            "assists": int(assists),
            "offsides": int(offsides),
            "minutes": int(minutes),
        })

best = max(players, key=forward_eff)
print(f"{best['name']} {forward_eff(best):.4f}")
`,
  'strawberry-int-fn-clean': `def clean_word(w, punctuation):
    return w.strip(punctuation).upper()
`,
  'strawberry-int-fn-trip': `def equal_triplet(a, b, c):
    return len(a) == len(b) == len(c)
`,
  'strawberry-int-full': `import string

def clean_word(w, punctuation):
    return w.strip(punctuation).upper()

def equal_triplet(a, b, c):
    return len(a) == len(b) == len(c)

words = []
with open("text.txt") as f:
    for line in f:
        for token in line.split():
            cleaned = clean_word(token, string.punctuation)
            if cleaned:
                words.append(cleaned)

count = 0
for i in range(len(words) - 2):
    if equal_triplet(words[i], words[i + 1], words[i + 2]):
        count += 1

print(count)
`,
  'super-calculator-int-fn-op': `def operation(op, a, b):
    if op == "+":
        return a + b
    if op == "-":
        return a - b
    if op == "*":
        return a * b
`,
  'super-calculator-int-fn-split': `def split_expr(line):
    left, right = line.split(":")
    nums = [int(x) for x in left.split()]
    ops = right.split()
    return (nums, ops)
`,
  'super-calculator-int-full': `def operation(op, a, b):
    if op == "+":
        return a + b
    if op == "-":
        return a - b
    if op == "*":
        return a * b

def split_expr(line):
    left, right = line.split(":")
    nums = [int(x) for x in left.split()]
    ops = right.split()
    return (nums, ops)

with open("expr.txt") as f:
    for line in f:
        if ":" not in line:
            continue
        nums, ops = split_expr(line)
        result = nums[0]
        for i, op in enumerate(ops):
            result = operation(op, result, nums[i + 1])
        print(result)
`,
  'unsafe-meat-int-fn-range': `def parse_range(block):
    a, b = block.strip().split("-")
    return (int(a), int(b))
`,
  'unsafe-meat-int-fn-in': `def in_range(batch, from_, to):
    return from_ <= batch <= to
`,
  'unsafe-meat-int-full': `def parse_range(block):
    a, b = block.strip().split("-")
    return (int(a), int(b))

def in_range(batch, from_, to):
    return from_ <= batch <= to

ranges = []
with open("ranges.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        ranges.append(parse_range(line))

with open("batches.txt") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        batch = int(line)
        unsafe = any(in_range(batch, lo, hi) for lo, hi in ranges)
        print(f"{batch} {'unsafe' if unsafe else 'safe'}")
`,
  'wobbletron3k-int-fn-mono': `def is_monotonic(report):
    return report == sorted(report) or report == sorted(report, reverse=True)
`,
  'wobbletron3k-int-fn-gaps': `def gaps_ok(report):
    for i in range(len(report) - 1):
        d = abs(report[i + 1] - report[i])
        if d < 1 or d > 3:
            return False
    return True
`,
  'wobbletron3k-int-full': `def is_monotonic(report):
    return report == sorted(report) or report == sorted(report, reverse=True)

def gaps_ok(report):
    for i in range(len(report) - 1):
        d = abs(report[i + 1] - report[i])
        if d < 1 or d > 3:
            return False
    return True

count = 0
with open("reports.txt") as f:
    for line in f:
        if not line.strip():
            continue
        report = [int(x) for x in line.split()]
        if is_monotonic(report) and gaps_ok(report):
            count += 1

print(count)
`,
  'worms-int-fn-find': `def find_all(word, sequence):
    return [i for i, w in enumerate(sequence) if w == word]
`,
  'worms-int-fn-dist': `def min_distance(p0, p1):
    return abs(p0 - p1)
`,
  'worms-int-full': `def find_all(word, sequence):
    return [i for i, w in enumerate(sequence) if w == word]

def min_distance(p0, p1):
    return abs(p0 - p1)

with open("sequence.txt") as f:
    sequence = f.read().split()

with open("query.txt") as f:
    w1, w2 = f.read().split()

pos1 = find_all(w1, sequence)
pos2 = find_all(w2, sequence)
best = min(min_distance(p, q) for p in pos1 for q in pos2)
print(best)
`,
}
