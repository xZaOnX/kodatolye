import io, sys, json

OUT = {}

def section(name, stdout=None, files=None):
    OUT[name] = {}
    if stdout is not None:
        OUT[name]['stdout'] = stdout
    if files is not None:
        OUT[name]['files'] = files

# ---------------- atomic-chess ----------------
# board.txt: 8 lines, 8 comma-separated cells, ".." empty, "+P"/"-k" pieces
board = """-r,-n,-b,..,-k,..,..,-r
-p,-p,-p,..,..,-p,-p,-p
..,..,..,..,..,..,..,..
..,..,..,-p,..,..,..,..
..,..,..,+P,..,..,..,..
..,..,..,..,..,+N,..,..
+P,+P,+P,..,..,+P,+P,+P
+R,..,+B,+Q,+K,..,..,+R"""
white = 0
black = 0
for line in board.splitlines():
    for cell in line.split(','):
        if '+' in cell:
            white += 1
        elif '-' in cell:
            black += 1
ac_out = f"White: {white}\nBlack: {black}\n"
section('atomic-chess', stdout=ac_out)

# ---------------- biodiversity ----------------
# species.txt: name;dna   samples.txt: dna lines (dup possible, blanks skipped)
species = """cod;GGATTACA
shark;TTTACG
eel;ACACAC"""
samples = """ATTA

TTAC
ATTA
ACAC
GGGG
TTAC"""
seen = set()
counts = {}
sp = []
for line in species.splitlines():
    name, dna = line.split(';')
    sp.append((name, dna))
    counts[name] = 0
for s in samples.splitlines():
    s = s.strip()
    if not s:
        continue
    if s in seen:
        continue
    seen.add(s)
    for name, dna in sp:
        if s in dna:
            counts[name] += 1
bio_out = ""
for name, dna in sp:
    bio_out += f"{name}: {counts[name]}\n"
section('biodiversity', stdout=bio_out)

# ---------------- chess-selo ----------------
# matches.csv: winner,loser   start 1500, K=32, standings sorted desc score then name
def expected(ra, rb):
    return 1 / (1 + 10 ** ((rb - ra) / 400))
players = {}
def ensure(name):
    if name not in players:
        players[name] = 1500.0
matches = """ada,bob
ada,cara
bob,cara
ada,bob"""
K = 32
for line in matches.splitlines():
    w, l = line.split(',')
    ensure(w); ensure(l)
    ew = expected(players[w], players[l])
    players[w] += K * (1 - ew)
    players[l] += K * (0 - (1 - ew))
selo_out = ""
for name, score in sorted(players.items(), key=lambda kv: (-kv[1], kv[0])):
    selo_out += f"{name} {round(score)}\n"
section('chess-selo', stdout=selo_out)

# ---------------- connect-four ----------------
# 7 cols, 6 rows. moves.txt: column indices (0-based), players alternate X,O
NUM_ROWS = 6
NUM_COLS = 7
EMPTY = '.'
c4board = [[EMPTY]*NUM_COLS for _ in range(NUM_ROWS)]
def drop(board, col, sym):
    r = NUM_ROWS - 1
    while r >= 0 and board[r][col] != EMPTY:
        r -= 1
    if r < 0:
        return -1
    board[r][col] = sym
    return r
moves = "3 3 4 4 5 5 6"  # X wins horizontally on bottom row? let's see
syms = ['X', 'O']
cols = [int(x) for x in moves.split()]
winner = None
for i, col in enumerate(cols):
    sym = syms[i % 2]
    r = drop(c4board, col, sym)
# just output final board
c4_out = ""
for row in c4board:
    c4_out += "".join(row) + "\n"
section('connect-four', stdout=c4_out)

# ---------------- consumption+production ----------------
# consumption.csv & production.csv: id,date,time,energy  -> total self consumed = sum min(prod,cons) over matching keys
cons_csv = """H1,2020-01-01,08:00,3.0
H1,2020-01-01,09:00,5.0
H2,2020-01-01,08:00,2.0"""
prod_csv = """H1,2020-01-01,08:00,4.0
H1,2020-01-01,09:00,1.0
H2,2020-01-01,08:00,2.0"""
cons = {}
for line in cons_csv.splitlines():
    hid, d, t, e = line.split(',')
    cons[(hid, d, t)] = float(e)
total_self = 0.0
for line in prod_csv.splitlines():
    hid, d, t, e = line.split(',')
    key = (hid, d, t)
    if key in cons:
        total_self += min(float(e), cons[key])
cp_out = f"{total_self:.1f}\n"
section('consumption+production', stdout=cp_out)

# ---------------- crypto ----------------
# portfolio.txt: token qty ; prices.csv: date,token,price -> max value day
portfolio_txt = """BTC 2
ETH 5"""
prices_csv = """2021-01-01,BTC,100
2021-01-01,ETH,10
2021-01-02,BTC,90
2021-01-02,ETH,30
2021-01-03,BTC,120
2021-01-03,ETH,5"""
portfolio = {}
for line in portfolio_txt.splitlines():
    tok, qty = line.split()
    portfolio[tok] = float(qty)
byday = {}
order = []
for line in prices_csv.splitlines():
    d, tok, price = line.split(',')
    if d not in byday:
        byday[d] = []
        order.append(d)
    byday[d].append((tok, float(price)))
best_day = None
best_val = None
for d in order:
    val = 0.0
    for tok, price in byday[d]:
        if tok in portfolio:
            val += portfolio[tok] * price
    if best_val is None or val > best_val:
        best_val = val
        best_day = d
crypto_out = f"{best_day} {best_val:.2f}\n"
section('crypto', stdout=crypto_out)

# ---------------- everwhen ----------------
# events.txt: hh:mm offset   -> convert to UTC minutes, print label + utc time
events_txt = """00:30 -60
08:30 0
23:30 60"""
def to_minutes(h, m, offset):
    return int(h) * 60 + int(m) + offset
def day_label(raw):
    if raw < 0:
        return 'yesterday'
    if raw >= 24 * 60:
        return 'tomorrow'
    return 'today'
ew_out = ""
for line in events_txt.splitlines():
    hm, off = line.split()
    h, m = hm.split(':')
    raw = to_minutes(h, m, int(off))
    ew_out += f"{day_label(raw)}\n"
section('everwhen', stdout=ew_out)

# ---------------- flights-booking ----------------
# commands.txt: BOOK flight name seats / CANCEL flight name ; rows=2 cols=2 => cap 4
rows_, cols_ = 2, 2
passengers = {}
def ensure_flight(f):
    if f not in passengers:
        passengers[f] = []
fb_cmds = """BOOK AZ1 Ada 2
BOOK AZ1 Bob 1
BOOK AZ1 Cara 2
CANCEL AZ1 Ada
BOOK AZ1 Cara 2"""
fb_out = ""
for line in fb_cmds.splitlines():
    parts = line.split()
    if parts[0] == 'BOOK':
        f, name, seats = parts[1], parts[2], int(parts[3])
        ensure_flight(f)
        if len(passengers[f]) + seats <= rows_ * cols_:
            for _ in range(seats):
                passengers[f].append(name)
            fb_out += f"BOOK {name} ok\n"
        else:
            fb_out += f"BOOK {name} fail\n"
    else:
        f, name = parts[1], parts[2]
        ensure_flight(f)
        while name in passengers[f]:
            passengers[f].remove(name)
        fb_out += f"CANCEL {name} ok\n"
section('flights-booking', stdout=fb_out)

# ---------------- freedonia ----------------
# rules.txt: date;+/-;rule  query date -> active rules sorted
def string_to_date(s):
    d, m, y = s.split('-')
    return int(y), int(m), int(d)
rules_txt = """01-01-2020;+;A
05-01-2020;+;B
10-01-2020;-;A
15-01-2020;+;C"""
query = "12-01-2020"
qd = string_to_date(query)
active = set()
rows = []
for line in rules_txt.splitlines():
    date, op, rule = line.split(';')
    rows.append((string_to_date(date), op, rule))
rows.sort(key=lambda r: r[0])
for d, op, rule in rows:
    if d <= qd:
        if op == '+':
            active.add(rule)
        else:
            active.discard(rule)
fd_out = ""
for rule in sorted(active):
    fd_out += f"{rule}\n"
section('freedonia', stdout=fd_out)

# ---------------- heating ----------------
# heating.csv: yyyy-mm-dd hh:mm,consumption -> monthly totals sorted
heating_csv = """2020-01-05 08:00,12.5
2020-01-20 09:00,7.5
2020-02-01 00:00,10.0
2020-02-15 06:00,5.5"""
monthly = {}
order_m = []
for line in heating_csv.splitlines():
    ts, cons_v = line.split(',')
    date = ts.split(' ')[0]
    month = date[:7]
    if month not in monthly:
        monthly[month] = 0.0
        order_m.append(month)
    monthly[month] += float(cons_v)
heat_out = ""
for month in sorted(monthly):
    heat_out += f"{month}: {monthly[month]:.1f}\n"
section('heating', stdout=heat_out)

# ---------------- linmgoweave ----------------
# words.txt lines; pattern.txt single line -> total unique score
def calc_score(word, pattern):
    count = 0
    for i in range(len(pattern)):
        if pattern[i:i+len(word)] == word:
            count += 1
    return count * len(word)
words_txt = """ab
ba
ab
xy"""
pattern_txt = "abababxy"
scores = set()
total = 0
lw_out = ""
for w in words_txt.splitlines():
    s = calc_score(w, pattern_txt)
    if s in scores:
        s = 0
    else:
        scores.add(s)
    total += s
    lw_out += f"{w} {s}\n"
lw_out += f"total {total}\n"
section('linmgoweave', stdout=lw_out)

# ---------------- magic-boxes ----------------
# objects.txt lines; boxes count=3 -> place each, output final boxes
NBOXES = 3
boxes = [[] for _ in range(NBOXES)]
def find_box(boxes, obj):
    for i, box in enumerate(boxes):
        if obj in box:
            return i
    for i, box in enumerate(boxes):
        if not box:
            return i
    return None
objects_txt = """apple
pear
apple
banana
kiwi"""
mb_out = ""
for obj in objects_txt.splitlines():
    bi = find_box(boxes, obj)
    if bi is None:
        mb_out += f"{obj} rejected\n"
    else:
        boxes[bi].append(obj)
for i, box in enumerate(boxes):
    mb_out += f"box{i}: {','.join(box)}\n"
section('magic-boxes', stdout=mb_out)

# ---------------- misspell ----------------
# names.txt, dictionary.txt -> for each name, list dict words that are misspellings
def mispell(w1, w2):
    if len(w1) != len(w2):
        return False
    diff = 0
    for a, b in zip(w1.upper(), w2.upper()):
        if a != b:
            diff += 1
    return diff == 1
names_txt = """cat
dog
bird"""
dict_txt = """cot
car
dog
dig
bard"""
ms_out = ""
names = names_txt.splitlines()
dwords = dict_txt.splitlines()
for name in names:
    matches = [w for w in dwords if mispell(name, w)]
    ms_out += f"{name}: {len(matches)}\n"
section('misspell', stdout=ms_out)

# ---------------- munodi ----------------
# sequences.txt: space separated ints; check if matches munodi(first) -> valid/invalid
def munodi(num):
    c = [num]
    while num > 1:
        if num % 2 == 0:
            num //= 2
        else:
            num = num * 3 + 1
        c.append(num)
    return c
sequences_txt = """3 10 5 16 8 4 2 1
6 3 10 5 16 8 4 2 1
5 16 8 4 2
7"""
mn_out = ""
for line in sequences_txt.splitlines():
    seq = [int(x) for x in line.split()]
    correct = munodi(seq[0])
    mn_out += f"{'valid' if seq == correct else 'invalid'}\n"
section('munodi', stdout=mn_out)

# ---------------- railway-management ----------------
# routes.txt: lines "Station:hh:mm Station:hh:mm ..." -> total travel per route (last-first)
def parse_stop(info):
    st, h, m = info.split(':')
    return st, (int(h), int(m))
def travel_minutes(h1, m1, h2, m2):
    return 60 * (h2 - h1) + (m2 - m1)
routes_txt = """Torino:08:00 Milano:09:30 Roma:13:15
Napoli:10:00 Roma:12:45"""
rw_out = ""
for line in routes_txt.splitlines():
    stops = [parse_stop(x) for x in line.split()]
    (s0, (h0, m0)) = stops[0]
    (sn, (hn, mn)) = stops[-1]
    rw_out += f"{s0}->{sn}: {travel_minutes(h0, m0, hn, mn)}\n"
section('railway-management', stdout=rw_out)

# ---------------- shells ----------------
# prices.txt: item price ; basket.txt: items -> total price
sh_prices_txt = """clam 1.5
oyster 2.0
pearl 5.0"""
basket_txt = """clam
pearl
clam
oyster"""
shell_price = {}
for line in sh_prices_txt.splitlines():
    item, price = line.split()
    shell_price[item] = float(price)
total_sh = 0.0
for item in basket_txt.splitlines():
    total_sh += shell_price[item]
sh_out = f"{total_sh:.2f}\n"
section('shells', stdout=sh_out)

# ---------------- soccer ----------------
# players.csv: name,team,goals,assists,offsides,minutes -> best forward by eff
players_csv = """Ada,Red,5,3,1,450
Bob,Red,2,2,0,400
Cara,Blue,7,1,2,500"""
def forward_eff(p):
    return (p['goals'] + p['assists'] - p['offsides']) / p['minutes']
best = None
best_eff = None
for line in players_csv.splitlines():
    name, team, g, a, o, mnt = line.split(',')
    p = {'name': name, 'goals': int(g), 'assists': int(a), 'offsides': int(o), 'minutes': int(mnt)}
    eff = forward_eff(p)
    if best_eff is None or eff > best_eff:
        best_eff = eff
        best = name
soc_out = f"{best} {best_eff:.4f}\n"
section('soccer', stdout=soc_out)

# ---------------- strawberry ----------------
# text.txt -> count triplets of consecutive words with equal cleaned length
import string as _string
punct = _string.punctuation
def clean_word(w, punctuation):
    return w.strip(punctuation).upper()
text_txt = """The cat and dog ran
IS IN MY box now"""
words = []
for line in text_txt.splitlines():
    for w in line.split():
        words.append(clean_word(w, punct))
count_tr = 0
for i in range(len(words) - 2):
    a, b, c = words[i], words[i+1], words[i+2]
    if len(a) == len(b) == len(c):
        count_tr += 1
straw_out = f"{count_tr}\n"
section('strawberry', stdout=straw_out)

# ---------------- super-calculator ----------------
# expr.txt: "nums : ops" left-to-right -> result per line
def operation(op, a, b):
    if op == '+':
        return a + b
    if op == '-':
        return a - b
    if op == '*':
        return a * b
expr_txt = """1 2 3 : + *
10 2 4 : - +
5 : """
sc_out = ""
for line in expr_txt.splitlines():
    part1, part2 = line.split(':')
    nums = [int(t) for t in part1.split()]
    ops = part2.split()
    acc = nums[0]
    for i, op in enumerate(ops):
        acc = operation(op, acc, nums[i+1])
    sc_out += f"{acc}\n"
section('super-calculator', stdout=sc_out)

# ---------------- unsafe-meat ----------------
# ranges.txt: from-to per line ; batches.txt: batch numbers -> safe/unsafe
def parse_range(block):
    a, b = block.strip().split('-')
    return int(a), int(b)
def in_range(batch, f, t):
    return f <= batch <= t
ranges_txt = """10-20
35-40"""
batches_txt = """5
15
37
100
20"""
danger = [parse_range(b) for b in ranges_txt.splitlines()]
um_out = ""
for line in batches_txt.splitlines():
    b = int(line)
    unsafe = any(in_range(b, f, t) for f, t in danger)
    um_out += f"{b} {'unsafe' if unsafe else 'safe'}\n"
section('unsafe-meat', stdout=um_out)

# ---------------- wobbletron3k ----------------
# reports.txt: space-separated ints per line -> count safe (monotonic & gaps 1..3)
def is_monotonic(report):
    return report == sorted(report) or report == sorted(report, reverse=True)
def gaps_ok(report):
    for e1, e2 in zip(report, report[1:]):
        if abs(e1 - e2) < 1 or abs(e1 - e2) > 3:
            return False
    return True
reports_txt = """1 2 3 4
1 3 6 7
9 7 6 4
1 2 10
5 4 3 2"""
safe = 0
for line in reports_txt.splitlines():
    rep = [int(x) for x in line.split()]
    if is_monotonic(rep) and gaps_ok(rep):
        safe += 1
wob_out = f"{safe}\n"
section('wobbletron3k', stdout=wob_out)

# ---------------- worms ----------------
# sequence.txt single line words; query.txt two words -> min distance between any occurrences
def find_all(word, sequence):
    return [i for i, w in enumerate(sequence) if w == word]
def min_distance(p0, p1):
    return abs(p0 - p1)
seq_txt = "a b c a d b a"
query_txt = "a b"
sequence = seq_txt.split()
w1, w2 = query_txt.split()
p0s = find_all(w1, sequence)
p1s = find_all(w2, sequence)
best_d = None
for i in p0s:
    for j in p1s:
        d = min_distance(i, j)
        if best_d is None or d < best_d:
            best_d = d
worms_out = f"{best_d}\n"
section('worms', stdout=worms_out)

print(json.dumps(OUT, indent=2, ensure_ascii=False))
