import type { Exercise } from '../types'
import { exercisesEn } from './exercises.en'
import type { Lang } from '../i18n/types'

/** Auto-generated Level-1 scaffold exercises from exams/ */
export const exercises: Exercise[] = [
  {
    id: "armstrong-l1-def",
    examId: "armstrong",
    examTitle: "Armstrong Numbers",
    level: 1,
    title: "Basamak kuvveti",
    goal: "Armstrong kontrolünde boşlukları doldur.",
    hint: "153 → text '153', power 3, toplam digit**power.",
    template: `def armstrong(number):
    text = str({{1}})
    power = len({{2}})
    total = 0
    for digit in text:
        total = total + int(digit) ** {{3}}
    return total == {{4}}`,
    blanks: [
      { id: "1", answer: "number" },
      { id: "2", answer: "text" },
      { id: "3", answer: "power" },
      { id: "4", answer: "number" },
    ],
  },
  {
    id: "armstrong-l1-filter",
    examId: "armstrong",
    examTitle: "Armstrong Numbers",
    level: 1,
    title: "Dosyadan filtrele",
    goal: "Satırları oku, Armstrong olanları yaz.",
    hint: "int(line) ile sayıya çevir, armstrong True ise yaz.",
    template: `def filter_armstrong(lines, out):
    for line in lines:
        n = {{1}}(line)
        if armstrong(n):
            out.write(f"{n}\\n")`,
    blanks: [
      { id: "1", answer: "int" },
    ],
  },
  {
    id: "armstrong-l1-sum",
    examId: "armstrong",
    examTitle: "Armstrong Numbers",
    level: 1,
    title: "Tek satırda sum",
    goal: "sum + generator ile Armstrong kontrolü.",
    hint: "Her basamak int(d)**len(str(number)).",
    template: `def armstrong(number):
    return number == {{1}}(int(d) ** len(str(number)) for d in str(number))`,
    blanks: [
      { id: "1", answer: "sum" },
    ],
  },
  {
    id: "ascii-stats-l1-read",
    examId: "ascii-stats",
    examTitle: "ASCII Stats",
    level: 1,
    title: "Dosyayı listeye oku",
    goal: "Satırları listeye ekle.",
    hint: "readlines veya extend kullan.",
    template: `def readfile(filename):
    data = list()
    with open(filename) as file:
        data.{{1}}(file.readlines())
    return data`,
    blanks: [
      { id: "1", answer: "extend" },
    ],
  },
  {
    id: "ascii-stats-l1-count",
    examId: "ascii-stats",
    examTitle: "ASCII Stats",
    level: 1,
    title: "Kare içinde say",
    goal: "İç içe döngüde sembol say.",
    hint: "stat[symbol] yoksa 0, sonra += 1.",
    template: `for r in range(y, y + size):
    for c in range(x, x + size):
        symbol = landscape[r][c]
        if symbol not in stat:
            stat[symbol] = {{1}}
        stat[symbol] {{2}} 1`,
    blanks: [
      { id: "1", answer: "0" },
      { id: "2", answer: "+=" },
    ],
  },
  {
    id: "ascii-stats-l1-bounds",
    examId: "ascii-stats",
    examTitle: "ASCII Stats",
    level: 1,
    title: "Sınır kontrolü",
    goal: "Karenin görüntü içinde olduğunu doğrula.",
    hint: "0 <= x <= columns - size benzeri.",
    template: `if not 0 <= x <= columns - size {{1}} not 0 <= y <= rows - size:
    print("ERROR!!")
    exit(1)`,
    blanks: [
      { id: "1", answer: "or" },
    ],
  },
  {
    id: "atomic-chess-l1-index",
    examId: "atomic-chess",
    examTitle: "Atomic Chess",
    level: 1,
    title: "Kare → indeks",
    goal: "Satranç notasyonunu satır/sütuna çevir.",
    hint: "square[1] satır, 'abcdefgh'.index(square[0]) sütun.",
    template: `def square_to_indexes(square):
    return int(square[{{1}}]) - 1, "abcdefgh".index(square[{{2}}])`,
    blanks: [
      { id: "1", answer: "1" },
      { id: "2", answer: "0" },
    ],
  },
  {
    id: "atomic-chess-l1-player",
    examId: "atomic-chess",
    examTitle: "Atomic Chess",
    level: 1,
    title: "Oyuncu kim?",
    goal: "+ / - / boş kareden oyuncu bul.",
    hint: "+ → 1, - → -1, else 0.",
    template: `def get_player(board, r, c):
    if '+' in board[r][c]:
        return {{1}}
    elif '-' in board[r][c]:
        return {{2}}
    else:
        return {{3}}`,
    blanks: [
      { id: "1", answer: "1" },
      { id: "2", answer: "-1" },
      { id: "3", answer: "0" },
    ],
  },
  {
    id: "atomic-chess-l1-clear",
    examId: "atomic-chess",
    examTitle: "Atomic Chess",
    level: 1,
    title: "Patlama temizliği",
    goal: "Hedef kareyi EMPTY yap.",
    hint: "board[rl][cl] = EMPTY",
    template: `def clear_square(board, rl, cl, EMPTY):
    board[rl][cl] = {{1}}`,
    blanks: [
      { id: "1", answer: "EMPTY" },
    ],
  },
  {
    id: "battleship-l1-coord",
    examId: "battleship",
    examTitle: "Battleship",
    level: 1,
    title: "Koordinat çöz",
    goal: "A,5 gibi atışı satır/sütuna çevir.",
    hint: "ord('A') tabanlı satır, int ile sütun.",
    template: `def parse_shot(coord):
    row = ord(coord[0]) - ord({{1}})
    col = int(coord.split(',')[1]) - {{2}}
    return row, col`,
    blanks: [
      { id: "1", answer: "'A'", accept: ["\"A\""] },
      { id: "2", answer: "1" },
    ],
  },
  {
    id: "battleship-l1-hit",
    examId: "battleship",
    examTitle: "Battleship",
    level: 1,
    title: "İsabet mi?",
    goal: "Rakip haritada # ise isabet.",
    hint: "hit → '*', miss → 'o'",
    template: `if opponent[row][col] == {{1}}:
    shot_map[row][col] = '*'
    result = 'hit'
else:
    shot_map[row][col] = {{2}}
    result = 'miss' `,
    blanks: [
      { id: "1", answer: "'#'", accept: ["\"#\""] },
      { id: "2", answer: "'o'", accept: ["\"o\""] },
    ],
  },
  {
    id: "battleship-l1-turn",
    examId: "battleship",
    examTitle: "Battleship",
    level: 1,
    title: "Sıra kimde?",
    goal: "Çift/tek indekse göre oyuncu.",
    hint: "i % 2 == 0 → oyuncu 1",
    template: `player = 1 if i % 2 == {{1}} else 2`,
    blanks: [
      { id: "1", answer: "0" },
    ],
  },
  {
    id: "biodiversity-l1-dup",
    examId: "biodiversity",
    examTitle: "Biodiversity",
    level: 1,
    title: "Tekrarlayan örnek",
    goal: "Aynı satırı set ile yakala.",
    hint: "set'te varsa skip, yoksa add.",
    template: `if text in parsed_lines:
    print("Repeated sample")
    continue
parsed_lines.{{1}}(text)`,
    blanks: [
      { id: "1", answer: "add" },
    ],
  },
  {
    id: "biodiversity-l1-split",
    examId: "biodiversity",
    examTitle: "Biodiversity",
    level: 1,
    title: "DNA ayır",
    goal: "id;dna satırını böl.",
    hint: "split(';') ikinci parça DNA.",
    template: `_, dna = text.{{1}}(';')
samples.add(dna)`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "biodiversity-l1-match",
    examId: "biodiversity",
    examTitle: "Biodiversity",
    level: 1,
    title: "Alt dizi eşleşmesi",
    goal: "Örnek DNA tür DNA'sında mı?",
    hint: "sample in dna",
    template: `if sample {{1}} species_dna:
    matching_samples.add(sample)`,
    blanks: [
      { id: "1", answer: "in" },
    ],
  },
  {
    id: "chess-selo-l1-default",
    examId: "chess-selo",
    examTitle: "Chess SELO",
    level: 1,
    title: "Bilinmeyen oyuncu",
    goal: "Yoksa 1500 ver.",
    hint: "not in players → 1500",
    template: `if row['PLAYER A'] {{1}} players:
    players[row['PLAYER A']] = {{2}}`,
    blanks: [
      { id: "1", answer: "not in" },
      { id: "2", answer: "1500" },
    ],
  },
  {
    id: "chess-selo-l1-elo",
    examId: "chess-selo",
    examTitle: "Chess SELO",
    level: 1,
    title: "Kazanç/kayıp",
    goal: "Kazanan ve kaybeden skorunu güncelle.",
    hint: "winner += 200*d, loser -= 200*d",
    template: `d = delta(winner, loser)
winner += 200 * d
loser -= {{1}} * d
return round(winner), round(loser)`,
    blanks: [
      { id: "1", answer: "200" },
    ],
  },
  {
    id: "chess-selo-l1-sort",
    examId: "chess-selo",
    examTitle: "Chess SELO",
    level: 1,
    title: "Skora göre sırala",
    goal: "Oyuncuları puana göre azalan yazdır.",
    hint: "sorted(..., reverse=True)",
    template: `for p in sorted(players, key=lambda p: players[p], {{1}}=True):
    print(f"{p}: {players[p]}")`,
    blanks: [
      { id: "1", answer: "reverse" },
    ],
  },
  {
    id: "connect-four-l1-gravity",
    examId: "connect-four",
    examTitle: "Connect Four",
    level: 1,
    title: "Yerçekimi",
    goal: "Sütunda en alttaki boş satırı bul.",
    hint: "EMPTY olmayan hücrede bottom -= 1",
    template: `def find_bottom(board, column, EMPTY, NUM_ROWS):
    bottom = NUM_ROWS - 1
    while board[bottom][column] != EMPTY:
        bottom {{1}} 1
    return bottom`,
    blanks: [
      { id: "1", answer: "-=" },
    ],
  },
  {
    id: "connect-four-l1-symbol",
    examId: "connect-four",
    examTitle: "Connect Four",
    level: 1,
    title: "Sıra sembolü",
    goal: "Hamle sayısına göre O veya X.",
    hint: "tek → O, çift → X (örnek çözüme göre)",
    template: `symbol = 'O' if num_moves % 2 == {{1}} else 'X'
board[pos][column] = symbol`,
    blanks: [
      { id: "1", answer: "1" },
    ],
  },
  {
    id: "connect-four-l1-win",
    examId: "connect-four",
    examTitle: "Connect Four",
    level: 1,
    title: "Yatay dörtlü",
    goal: "Dört eşit dolu hücre.",
    hint: "board[r][c] == board[r][c+1] == ...",
    template: `if (board[r][c] != EMPTY
    and board[r][c] == board[r][c+1] == board[r][c+2] == board[r][{{1}}]):
    return board[r][c]`,
    blanks: [
      { id: "1", answer: "c+3", accept: ["c + 3"] },
    ],
  },
  {
    id: "consumption-l1-key",
    examId: "consumption+production",
    examTitle: "Consumption+Production",
    level: 1,
    title: "Sözlük anahtarı",
    goal: "Tüketimi (ID, Date, Time) ile sakla.",
    hint: "tuple key kullan.",
    template: `consumption[(row['Household_ID'], row['Date'], row['Time'])] = {{1}}(row['Energy_consumption'])`,
    blanks: [
      { id: "1", answer: "float" },
    ],
  },
  {
    id: "consumption-l1-produce",
    examId: "consumption+production",
    examTitle: "Consumption+Production",
    level: 1,
    title: "Üretim formülü",
    goal: "size × efficiency × GHI.",
    hint: "üç değeri çarp.",
    template: `produced = size {{1}} efficiency {{2}} ghi`,
    blanks: [
      { id: "1", answer: "*" },
      { id: "2", answer: "*" },
    ],
  },
  {
    id: "consumption-l1-self",
    examId: "consumption+production",
    examTitle: "Consumption+Production",
    level: 1,
    title: "Öz tüketim",
    goal: "min(üretim, tüketim) kadar öz tüketim.",
    hint: "min kullan.",
    template: `self_consumed = {{1}}(produced_energy, consumed_energy)
excess = {{2}}(0, produced_energy - consumed_energy)`,
    blanks: [
      { id: "1", answer: "min" },
      { id: "2", answer: "max" },
    ],
  },
  {
    id: "crypto-l1-portfolio",
    examId: "crypto",
    examTitle: "Cryptocurrency",
    level: 1,
    title: "Portföy oku",
    goal: "Token → miktar sözlüğü.",
    hint: "float miktar.",
    template: `portfolio[record[FIELD_TOKEN]] = {{1}}(record[FIELD_QTY])`,
    blanks: [
      { id: "1", answer: "float" },
    ],
  },
  {
    id: "crypto-l1-group",
    examId: "crypto",
    examTitle: "Cryptocurrency",
    level: 1,
    title: "Fiyatları tarihe grupla",
    goal: "Tarih yoksa boş liste aç.",
    hint: "not in → list()",
    template: `if record[FIELD_DATE] not in prices:
    prices[record[FIELD_DATE]] = {{1}}()
prices[record[FIELD_DATE]].append((token, price))`,
    blanks: [
      { id: "1", answer: "list" },
    ],
  },
  {
    id: "crypto-l1-value",
    examId: "crypto",
    examTitle: "Cryptocurrency",
    level: 1,
    title: "Portföy değeri",
    goal: "qty × price topla.",
    hint: "token portföydeyse ekle.",
    template: `total = 0
for token, price in prices:
    if token in portfolio:
        total {{1}} portfolio[token] * price
return total`,
    blanks: [
      { id: "1", answer: "+=" },
    ],
  },
  {
    id: "everwhen-l1-split",
    examId: "everwhen",
    examTitle: "Everwhen",
    level: 1,
    title: "Satırı 3 parçaya böl",
    goal: "maxsplit=2 ile ayır.",
    hint: "split(' ', maxsplit=2)",
    template: `w1, w2, w3 = line.{{1}}(' ', maxsplit=2)`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "everwhen-l1-day",
    examId: "everwhen",
    examTitle: "Everwhen",
    level: 1,
    title: "Gün etiketi",
    goal: "Dakika wrap'ine göre yesterday/today/tomorrow.",
    hint: "raw < 0 → yesterday, >= 24*60 → tomorrow",
    template: `if raw < 0:
    day = {{1}}
elif raw >= 24 * 60:
    day = {{2}}
else:
    day = {{3}}`,
    blanks: [
      { id: "1", answer: "'yesterday'", accept: ["\"yesterday\""] },
      { id: "2", answer: "'tomorrow'", accept: ["\"tomorrow\""] },
      { id: "3", answer: "'today'", accept: ["\"today\""] },
    ],
  },
  {
    id: "everwhen-l1-minutes",
    examId: "everwhen",
    examTitle: "Everwhen",
    level: 1,
    title: "Saati dakikaya çevir",
    goal: "h*60 + m + offset.",
    hint: "int(h) * 60",
    template: `raw = int(h) * {{1}} + int(m) + offset`,
    blanks: [
      { id: "1", answer: "60" },
    ],
  },
  {
    id: "flights-l1-parse",
    examId: "flights-booking",
    examTitle: "Flights Booking",
    level: 1,
    title: "Uçuş kapasitesi",
    goal: "rows ve seats'i int yap.",
    hint: "split sonrası int.",
    template: `flight, _, rows, seats = line.split()
info[flight] = ({{1}}(rows), {{2}}(seats))
passengers[flight] = list()`,
    blanks: [
      { id: "1", answer: "int" },
      { id: "2", answer: "int" },
    ],
  },
  {
    id: "flights-l1-book",
    examId: "flights-booking",
    examTitle: "Flights Booking",
    level: 1,
    title: "BOOK kapasite",
    goal: "Kapasite aşılırsa Fail.",
    hint: "len + seats > rows * seats_per_row",
    template: `if code == 'BOOK' and len(passengers[flight]) + seats > rows * cols:
    print("Fail")
elif code == 'BOOK':
    passengers[flight].{{1}}([name] * seats)`,
    blanks: [
      { id: "1", answer: "extend" },
    ],
  },
  {
    id: "flights-l1-cancel",
    examId: "flights-booking",
    examTitle: "Flights Booking",
    level: 1,
    title: "CANCEL tüm koltuklar",
    goal: "İsim bitene kadar remove.",
    hint: "while name in list",
    template: `while name {{1}} passengers[flight]:
    passengers[flight].remove(name)`,
    blanks: [
      { id: "1", answer: "in" },
    ],
  },
  {
    id: "freedonia-l1-date",
    examId: "freedonia",
    examTitle: "Freedonia",
    level: 1,
    title: "Tarihi tuple yap",
    goal: "dd-mm-yyyy → (y,m,d).",
    hint: "sıra yıl-ay-gün.",
    template: `d, m, y = string.split('-')
return int({{1}}), int({{2}}), int({{3}})`,
    blanks: [
      { id: "1", answer: "y" },
      { id: "2", answer: "m" },
      { id: "3", answer: "d" },
    ],
  },
  {
    id: "freedonia-l1-plusminus",
    examId: "freedonia",
    examTitle: "Freedonia",
    level: 1,
    title: "+/− kural ayır",
    goal: "+ekle / -sil setlerine koy.",
    hint: "r[0] == '+' → add r[1:]",
    template: `for r in rlist.split():
    if r[0] == '+':
        r_add.add(r[{{1}}:])
    elif r[0] == '-':
        r_del.add(r[{{2}}:])`,
    blanks: [
      { id: "1", answer: "1" },
      { id: "2", answer: "1" },
    ],
  },
  {
    id: "freedonia-l1-active",
    examId: "freedonia",
    examTitle: "Freedonia",
    level: 1,
    title: "Aktif kurallar",
    goal: "Set birleşim ve fark.",
    hint: "|= ve -=",
    template: `active = set()
for d, ra, rd in rules:
    if d <= day:
        active {{1}} ra
        active {{2}} rd
return active`,
    blanks: [
      { id: "1", answer: "|=" },
      { id: "2", answer: "-=" },
    ],
  },
  {
    id: "heating-l1-parse",
    examId: "heating",
    examTitle: "Heating",
    level: 1,
    title: "CSV satırı parse",
    goal: "timestamp,value ayır.",
    hint: "split(',')",
    template: `timestamp, consumption = line.{{1}}(',')
building_data.append((date, float(consumption)))`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "heating-l1-month",
    examId: "heating",
    examTitle: "Heating",
    level: 1,
    title: "Aylık biriktir",
    goal: "Ay yoksa 0, sonra ekle.",
    hint: "dict biriktirme kalıbı.",
    template: `if month not in monthly:
    monthly[month] = {{1}}
monthly[month] {{2}} consumption`,
    blanks: [
      { id: "1", answer: "0" },
      { id: "2", answer: "+=" },
    ],
  },
  {
    id: "heating-l1-max",
    examId: "heating",
    examTitle: "Heating",
    level: 1,
    title: "Maksimum günlük",
    goal: "Daha büyük tüketimi kaydet.",
    hint: "consumption > maximum[1]",
    template: `if consumption {{1}} maximum_daily[1]:
    maximum_daily = (date, consumption)`,
    blanks: [
      { id: "1", answer: ">" },
    ],
  },
  {
    id: "lingo-l1-window",
    examId: "linmgoweave",
    examTitle: "LingoWeave",
    level: 1,
    title: "Pencerede ara",
    goal: "pattern içinde word say.",
    hint: "slice == word ise count+=1",
    template: `for i in range(len(pattern)):
    if pattern[i : i + len(word)] == {{1}}:
        count += 1
return count * len(word)`,
    blanks: [
      { id: "1", answer: "word" },
    ],
  },
  {
    id: "lingo-l1-unique",
    examId: "linmgoweave",
    examTitle: "LingoWeave",
    level: 1,
    title: "Tekrar skoru sıfırla",
    goal: "Skor set'te varsa 0 yap.",
    hint: "s not in scores → add, else 0",
    template: `if s not in scores:
    scores.add(s)
else:
    s = {{1}}`,
    blanks: [
      { id: "1", answer: "0" },
    ],
  },
  {
    id: "lingo-l1-print",
    examId: "linmgoweave",
    examTitle: "LingoWeave",
    level: 1,
    title: "Pozitifleri yaz",
    goal: "Skora göre azalan, s>0.",
    hint: "sorted reverse, if s > 0",
    template: `for s, w in sorted(results, reverse=True):
    if s {{1}} 0:
        print(f"{w}: {s}")`,
    blanks: [
      { id: "1", answer: ">" },
    ],
  },
  {
    id: "magic-l1-find",
    examId: "magic-boxes",
    examTitle: "Magic Boxes",
    level: 1,
    title: "Aynı tip kutu",
    goal: "obj zaten varsa o kutuyu dön.",
    hint: "obj in box",
    template: `for index, box in enumerate(boxes):
    if obj {{1}} box:
        return index`,
    blanks: [
      { id: "1", answer: "in" },
    ],
  },
  {
    id: "magic-l1-empty",
    examId: "magic-boxes",
    examTitle: "Magic Boxes",
    level: 1,
    title: "Boş kutu bul",
    goal: "not box → boş.",
    hint: "if not box: return index",
    template: `for index, box in enumerate(boxes):
    if {{1}} box:
        return index
return None`,
    blanks: [
      { id: "1", answer: "not" },
    ],
  },
  {
    id: "magic-l1-add",
    examId: "magic-boxes",
    examTitle: "Magic Boxes",
    level: 1,
    title: "Nesne ekle",
    goal: "Kutu yoksa False, varsa append.",
    hint: "append(obj)",
    template: `bi = find_box(boxes, obj)
if bi is None:
    return False
boxes[bi].{{1}}(obj)
return True`,
    blanks: [
      { id: "1", answer: "append" },
    ],
  },
  {
    id: "misspell-l1-len",
    examId: "misspell",
    examTitle: "Misspell",
    level: 1,
    title: "Aynı uzunluk",
    goal: "Farklı uzunlukta False.",
    hint: "len eşit değilse False",
    template: `if len(word1) != len(word2):
    return {{1}}`,
    blanks: [
      { id: "1", answer: "False" },
    ],
  },
  {
    id: "misspell-l1-diff",
    examId: "misspell",
    examTitle: "Misspell",
    level: 1,
    title: "Tek harf farkı",
    goal: "zip ile fark say, == 1 mü?",
    hint: "num_diff == 1",
    template: `num_diff = 0
for w1, w2 in zip(word1.upper(), word2.upper()):
    if w1 != w2:
        num_diff += 1
return num_diff == {{1}}`,
    blanks: [
      { id: "1", answer: "1" },
    ],
  },
  {
    id: "misspell-l1-read",
    examId: "misspell",
    examTitle: "Misspell",
    level: 1,
    title: "Kelime listesi oku",
    goal: "Dosyayı satırlara böl.",
    hint: "read().split('\\n')",
    template: `with open(file_name) as fin:
    words = fin.read().{{1}}('\\n')
return words`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "munodi-l1-rule",
    examId: "munodi",
    examTitle: "Munodi",
    level: 1,
    title: "Collatz adımı",
    goal: "Çiftse //2, tekse 3n+1.",
    hint: "% 2 == 0 → // 2",
    template: `while num > 1:
    if num % 2 == {{1}}:
        num = num // 2
    else:
        num = num * 3 + {{2}}
    c.append(num)`,
    blanks: [
      { id: "1", answer: "0" },
      { id: "2", answer: "1" },
    ],
  },
  {
    id: "munodi-l1-parse",
    examId: "munodi",
    examTitle: "Munodi",
    level: 1,
    title: "Satırı int listesine",
    goal: "split ve int.",
    hint: "seq.append(int(elem))",
    template: `seq = list()
for elem in line.split():
    seq.append({{1}}(elem))
sequences.append(seq)`,
    blanks: [
      { id: "1", answer: "int" },
    ],
  },
  {
    id: "munodi-l1-check",
    examId: "munodi",
    examTitle: "Munodi",
    level: 1,
    title: "Dizi doğrula",
    goal: "Dosyadaki dizi üretilenle aynı mı?",
    hint: "seq == munodi(seq[0])",
    template: `if seq == munodi(seq[{{1}}]):
    print(f"Munodi (length {len(seq)})")`,
    blanks: [
      { id: "1", answer: "0" },
    ],
  },
  {
    id: "railway-l1-parse",
    examId: "railway-management",
    examTitle: "Railway",
    level: 1,
    title: "Durak:saat parse",
    goal: "Station:hh:min parçala.",
    hint: "split(':') üç parça",
    template: `train, hour, minute = info.{{1}}(':')
database[trip].append((train, (int(hour), int(minute))))`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "railway-l1-stations",
    examId: "railway-management",
    examTitle: "Railway",
    level: 1,
    title: "Benzersiz istasyonlar",
    goal: "set ile topla, sorted yazdır.",
    hint: "stations.add(s)",
    template: `stations = set()
for stops in database.values():
    for s, _ in stops:
        stations.{{1}}(s)
print(", ".join(sorted(stations)))`,
    blanks: [
      { id: "1", answer: "add" },
    ],
  },
  {
    id: "railway-l1-duration",
    examId: "railway-management",
    examTitle: "Railway",
    level: 1,
    title: "Seyahat süresi",
    goal: "Dakikaya çevir: 60*saat + dakika farkı.",
    hint: "60 * (h2-h1) + (m2-m1)",
    template: `travel = {{1}} * (h2 - h1) + (m2 - m1)`,
    blanks: [
      { id: "1", answer: "60" },
    ],
  },
  {
    id: "shells-l1-includes",
    examId: "shells",
    examTitle: "Sea Shells",
    level: 1,
    title: "Multiset içerir mi?",
    goal: "count ile containment.",
    hint: "seqx.count > seqy.count → False",
    template: `for o in seqx:
    if seqx.count(o) {{1}} seqy.count(o):
        return False
return True`,
    blanks: [
      { id: "1", answer: ">" },
    ],
  },
  {
    id: "shells-l1-remove",
    examId: "shells",
    examTitle: "Sea Shells",
    level: 1,
    title: "Hediye çıkar",
    goal: "Sepetten gift ve requisites sil.",
    hint: "cart.remove",
    template: `items_to_pay.remove(gift)
cart.{{1}}(gift)
for req in requisites:
    cart.{{2}}(req)`,
    blanks: [
      { id: "1", answer: "remove" },
      { id: "2", answer: "remove" },
    ],
  },
  {
    id: "shells-l1-total",
    examId: "shells",
    examTitle: "Sea Shells",
    level: 1,
    title: "Toplam fiyat",
    goal: "Kalan ürünlerin fiyatını topla.",
    hint: "total += price",
    template: `total = 0.0
for item in items_to_pay:
    total {{1}} shell_price[item]
print(f"Final price: {total:.2f} EUR")`,
    blanks: [
      { id: "1", answer: "+=" },
    ],
  },
  {
    id: "soccer-l1-fw",
    examId: "soccer",
    examTitle: "Soccer Stats",
    level: 1,
    title: "Forvet verimi",
    goal: "(g+a-o)/minutes formülü.",
    hint: "goals + assists - offsides",
    template: `p['forward_efficiency'] = (p['goals'] + p['assists'] - p['offsides']) {{1}} p['minutes']`,
    blanks: [
      { id: "1", answer: "/" },
    ],
  },
  {
    id: "soccer-l1-team",
    examId: "soccer",
    examTitle: "Soccer Stats",
    level: 1,
    title: "Takıma grupla",
    goal: "team yoksa liste aç, append.",
    hint: "dict of lists",
    template: `if p['team'] not in teams:
    teams[p['team']] = {{1}}()
teams[p['team']].append(dict(p))`,
    blanks: [
      { id: "1", answer: "list" },
    ],
  },
  {
    id: "soccer-l1-age",
    examId: "soccer",
    examTitle: "Soccer Stats",
    level: 1,
    title: "Yaş hesabı",
    goal: "2022 - birth_year.",
    hint: "çıkarma",
    template: `age = {{1}} - player['birth_year']`,
    blanks: [
      { id: "1", answer: "2022" },
    ],
  },
  {
    id: "strawberry-l1-token",
    examId: "strawberry",
    examTitle: "Strawberry Fields",
    level: 1,
    title: "Kelime temizle",
    goal: "strip punctuation + upper.",
    hint: "w.strip(punctuation).upper()",
    template: `for w in file_in.read().split():
    words.append(w.strip(punctuation).{{1}}())`,
    blanks: [
      { id: "1", answer: "upper" },
    ],
  },
  {
    id: "strawberry-l1-window",
    examId: "strawberry",
    examTitle: "Strawberry Fields",
    level: 1,
    title: "Üçlü pencere",
    goal: "range(len-2) ile kaydır.",
    hint: "len(words) - 2",
    template: `for i in range(len(words) - {{1}}):
    if len(words[i]) == len(words[i+1]) == len(words[i+2]):
        print((words[i], words[i+1], words[i+2]))`,
    blanks: [
      { id: "1", answer: "2" },
    ],
  },
  {
    id: "strawberry-l1-len",
    examId: "strawberry",
    examTitle: "Strawberry Fields",
    level: 1,
    title: "Eşit uzunluk",
    goal: "Üç kelimenin len'i eşit mi?",
    hint: "len karşılaştır",
    template: `if {{1}}(words[i]) == {{2}}(words[i+1]) and {{3}}(words[i]) == {{4}}(words[i+2]):
    print((words[i], words[i+1], words[i+2]))`,
    blanks: [
      { id: "1", answer: "len" },
      { id: "2", answer: "len" },
      { id: "3", answer: "len" },
      { id: "4", answer: "len" },
    ],
  },
  {
    id: "calc-l1-op",
    examId: "super-calculator",
    examTitle: "Super Calculator",
    level: 1,
    title: "Operatör seç",
    goal: "+ - * dallanması.",
    hint: "op == '+'",
    template: `def operation(op, a, b):
    if op == '+':
        return a + b
    if op == '-':
        return a - b
    if op == {{1}}:
        return a * b`,
    blanks: [
      { id: "1", answer: "'*'", accept: ["\"*\""] },
    ],
  },
  {
    id: "calc-l1-split",
    examId: "super-calculator",
    examTitle: "Super Calculator",
    level: 1,
    title: "':' ile ayır",
    goal: "sayilar : ops",
    hint: "line.split(':')",
    template: `part_1, part_2 = line.{{1}}(':')
nums = [int(t) for t in part_1.split()]
ops = part_2.split()`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "calc-l1-fold",
    examId: "super-calculator",
    examTitle: "Super Calculator",
    level: 1,
    title: "Sırayla uygula",
    goal: "pop iki sayı, operation, append.",
    hint: "numbers.pop() iki kez",
    template: `for op in operators:
    numbers.append(operation(op, numbers.{{1}}(), numbers.{{2}}()))
return numbers[0]`,
    blanks: [
      { id: "1", answer: "pop" },
      { id: "2", answer: "pop" },
    ],
  },
  {
    id: "meat-l1-range",
    examId: "unsafe-meat",
    examTitle: "Unsafe Meat",
    level: 1,
    title: "Aralık parse",
    goal: "from-to → int tuple.",
    hint: "split('-')",
    template: `from_, to = block.strip().{{1}}('-')
dangerous_ranges.append((int(from_), int(to)))`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "meat-l1-check",
    examId: "unsafe-meat",
    examTitle: "Unsafe Meat",
    level: 1,
    title: "Aralıkta mı?",
    goal: "from_ <= batch <= to",
    hint: "üçlü karşılaştırma",
    template: `if from_ {{1}} batch {{2}} to:
    print(batch)
    break`,
    blanks: [
      { id: "1", answer: "<=" },
      { id: "2", answer: "<=" },
    ],
  },
  {
    id: "meat-l1-blocks",
    examId: "unsafe-meat",
    examTitle: "Unsafe Meat",
    level: 1,
    title: "İki blok ayır",
    goal: "Boş satırla ranges / batches.",
    hint: "split('\\n\\n')",
    template: `ranges_raw, batches_raw = file.read().{{1}}('\\n\\n')`,
    blanks: [
      { id: "1", answer: "split" },
    ],
  },
  {
    id: "wobble-l1-mono",
    examId: "wobbletron3k",
    examTitle: "Wobbletron 3000",
    level: 1,
    title: "Monoton mu?",
    goal: "sorted veya reverse sorted.",
    hint: "report != sorted(...) and != sorted(..., reverse=True) → False",
    template: `if report != sorted(report) and report != sorted(report, reverse={{1}}):
    return False`,
    blanks: [
      { id: "1", answer: "True" },
    ],
  },
  {
    id: "wobble-l1-gap",
    examId: "wobbletron3k",
    examTitle: "Wobbletron 3000",
    level: 1,
    title: "Komşu farkı 1..3",
    goal: "abs farkı kontrol et.",
    hint: "1 <= abs <= 3",
    template: `for e1, e2 in zip(report, report[1:]):
    if abs(e1 - e2) < 1 or abs(e1 - e2) > {{1}}:
        return False
return True`,
    blanks: [
      { id: "1", answer: "3" },
    ],
  },
  {
    id: "wobble-l1-parse",
    examId: "wobbletron3k",
    examTitle: "Wobbletron 3000",
    level: 1,
    title: "Rapor satırı",
    goal: "Satırı int listesine çevir.",
    hint: "int(level)",
    template: `rep = list()
for level in line.split():
    rep.append({{1}}(level))
reports.append(rep)`,
    blanks: [
      { id: "1", answer: "int" },
    ],
  },
  {
    id: "worms-l1-find",
    examId: "worms",
    examTitle: "Worms of Words",
    level: 1,
    title: "Tüm indeksler",
    goal: "Kelimenin geçtiği yerleri topla.",
    hint: "enumerate + append i",
    template: `indexes = list()
for i, w in enumerate(sequence):
    if w == word:
        indexes.{{1}}(i)
return indexes`,
    blanks: [
      { id: "1", answer: "append" },
    ],
  },
  {
    id: "worms-l1-dist",
    examId: "worms",
    examTitle: "Worms of Words",
    level: 1,
    title: "Minimum mesafe",
    goal: "abs(p0-p1) daha küçükse güncelle.",
    hint: "abs kullan",
    template: `if min_distance is None or {{1}}(p0 - p1) < min_distance:
    min_distance = {{2}}(p0 - p1)`,
    blanks: [
      { id: "1", answer: "abs" },
      { id: "2", answer: "abs" },
    ],
  },
  {
    id: "worms-l1-warn",
    examId: "worms",
    examTitle: "Worms of Words",
    level: 1,
    title: "Hiç birlikte yok",
    goal: "None ise uyarı yaz.",
    hint: "is not None",
    template: `if sequence_with_min_distance is {{1}}:
    print("never appear")
else:
    print("Min distance found")`,
    blanks: [
      { id: "1", answer: "None" },
    ],
  },
]

export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((e) => e.id === id)
}

export function getFirstExercise(): Exercise {
  return exercises[0]
}

export function getNextExercise(id: string): Exercise | undefined {
  const i = exercises.findIndex((e) => e.id === id)
  if (i < 0 || i >= exercises.length - 1) return undefined
  return exercises[i + 1]
}

export function getPrevExercise(id: string): Exercise | undefined {
  const i = exercises.findIndex((e) => e.id === id)
  if (i <= 0) return undefined
  return exercises[i - 1]
}

export function getExercisesByExam(): { examId: string; examTitle: string; items: Exercise[] }[] {
  const map = new Map<string, { examId: string; examTitle: string; items: Exercise[] }>()
  for (const e of exercises) {
    if (!map.has(e.examId)) {
      map.set(e.examId, { examId: e.examId, examTitle: e.examTitle, items: [] })
    }
    map.get(e.examId)!.items.push(e)
  }
  return Array.from(map.values())
}

export function localizeExercise(exercise: Exercise, lang: Lang): Exercise {
  if (lang !== 'en') return exercise
  const copy = exercisesEn[exercise.id]
  if (!copy) return exercise
  return { ...exercise, title: copy.title, goal: copy.goal, hint: copy.hint }
}

export function getExercises(lang: Lang = 'tr'): Exercise[] {
  return exercises.map((e) => localizeExercise(e, lang))
}

export function getExercisesForExam(examId: string, lang: Lang = 'tr'): Exercise[] {
  return exercises
    .filter((e) => e.examId === examId)
    .map((e) => localizeExercise(e, lang))
}

