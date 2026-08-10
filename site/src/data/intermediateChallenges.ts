import type { IntermediatePack } from '../types'
import { intermediatePacksEn } from './intermediateChallenges.en'
import type { Lang } from '../i18n/types'

const LANDSCAPE_SMALL = `^^^^^^^~~^~^~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^!YJYY7^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^!PPPPJ~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^!5PPPJ!~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^!5PPPPPJ!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^YPPPPP7~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^JPPGP57^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^!YPGP5PJ!~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^~J5555555!~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^!!J5555555!^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^!!7YYYYYYY!^^~~~~~~~~~~~~~~~~~~!!!!!!!!~
`

const MAP1 = `#---------
#---------
----------
----------
----------
----------
----------
----------
----------
----------
`

const MAP2 = `----#-----
----#-----
----------
----------
----------
----------
----------
----------
----------
----------
`

const BATTLE_MOVES = `A,5
A,1
B,5
B,1
`

const BATTLE_STDOUT = `Player 1
A,5
hit
Player 2
A,1
hit
Player 1
B,5
hit
Player 1 wins
=== Player 1 ===
----*-----
----*-----
----------
----------
----------
----------
----------
----------
----------
----------
=== Player 2 ===
*---------
----------
----------
----------
----------
----------
----------
----------
----------
----------
`

/** Intermediate packs — all curated exams */
export const intermediatePacks: IntermediatePack[] = [
  {
    examId: 'armstrong',
    examTitle: 'Armstrong Numbers',
    summary:
      'Scaffold yok: Armstrong fonksiyonunu ve dosya filtresini sıfırdan yaz, sonra tam programı çalıştır.',
    functions: [
      {
        id: 'armstrong-int-fn-armstrong',
        examId: 'armstrong',
        examTitle: 'Armstrong Numbers',
        title: 'armstrong(number)',
        purpose:
          'n basamaklı bir sayıda her basamağın n. kuvvetinin toplamı sayıya eşitse True döndür. 0 ve tek basamaklı sayılar Armstrong sayılır.',
        signature: 'def armstrong(number: int) -> bool:',
        examples: [
          { call: 'armstrong(153)', result: 'True' },
          { call: 'armstrong(42)', result: 'False' },
          { call: 'armstrong(0)', result: 'True' },
          { call: 'armstrong(9474)', result: 'True' },
        ],
        starterCode: 'def armstrong(number):\n    pass\n',
        tests: [
          { name: '153', assertCode: 'assert armstrong(153) is True' },
          { name: '42', assertCode: 'assert armstrong(42) is False' },
          { name: '0', assertCode: 'assert armstrong(0) is True' },
          { name: '7', assertCode: 'assert armstrong(7) is True' },
          { name: '9474', assertCode: 'assert armstrong(9474) is True' },
          { name: '9475', assertCode: 'assert armstrong(9475) is False' },
          { name: '370', assertCode: 'assert armstrong(370) is True' },
        ],
        hint: 'power = len(str(number)); her basamak int(d) ** power.',
      },
      {
        id: 'armstrong-int-fn-filter',
        examId: 'armstrong',
        examTitle: 'Armstrong Numbers',
        title: 'filter_armstrong(lines)',
        purpose:
          'Satır listesinden Armstrong olanları sırayla döndür. Boş satırları ve int’e çevrilemeyen satırları atla (exception yutma / devam et).',
        signature: 'def filter_armstrong(lines: list[str]) -> list[int]:',
        examples: [
          {
            call: "filter_armstrong(['153\\n', '  ', 'x', '42\\n', '7'])",
            result: '[153, 7]',
          },
        ],
        starterCode:
          'def armstrong(number):\n    return number == sum(int(d) ** len(str(number)) for d in str(number))\n\ndef filter_armstrong(lines):\n    pass\n',
        tests: [
          {
            name: 'basic',
            assertCode:
              "assert filter_armstrong(['153\\n', '42\\n', '7\\n']) == [153, 7]",
          },
          {
            name: 'skip blank and junk',
            assertCode:
              "assert filter_armstrong(['', '  \\n', 'nope', '370']) == [370]",
          },
          {
            name: 'empty',
            assertCode: 'assert filter_armstrong([]) == []',
          },
          {
            name: 'keep order',
            assertCode:
              "assert filter_armstrong(['9474', '1', '9475', '0']) == [9474, 1, 0]",
          },
        ],
        hint: 'strip + try/except ValueError; armstrong True ise ekle.',
      },
    ],
    fullProgram: {
      id: 'armstrong-int-full',
      examId: 'armstrong',
      examTitle: 'Armstrong Numbers',
      title: 'Tam program',
      brief:
        'numbers.txt dosyasından satır satır oku. Boş/geçersiz satırları atla. Armstrong olanları armstrong.txt dosyasına aynı sırayla yaz (her satırda bir sayı).',
      goalBullets: [
        'numbers.txt oku',
        'Boş ve int olmayan satırları yok say',
        'Armstrong olanları armstrong.txt dosyasına yaz',
      ],
      starterCode: `# numbers.txt -> armstrong.txt
# Boş / geçersiz satırları atla.

`,
      inputFiles: {
        'numbers.txt': `42
7

1634
not-a-number
1743
2
  153  
9475
0
370
`,
      },
      expectedFiles: {
        'armstrong.txt': `7
1634
2
153
0
370
`,
      },
      hint: 'try/except OSError ve ValueError; strip sonrası int.',
      rubricNotes: 'Beginner’dan fark: boş/geçersiz satırlar atlanır.',
    },
  },
  {
    examId: 'ascii-stats',
    examTitle: 'ASCII Stats',
    summary:
      'Kare sınır kontrolü ve frekans sayımını sıfırdan yaz; sonra küçük bir manzarada tam programı çalıştır.',
    functions: [
      {
        id: 'ascii-stats-int-fn-bounds',
        examId: 'ascii-stats',
        examTitle: 'ASCII Stats',
        title: 'square_in_bounds(...)',
        purpose:
          'Üst-sol (x,y) ve kenar N ile tanımlı karenin, rows×cols ızgaranın tamamen içinde olup olmadığını kontrol et. Satır uzunlukları \\n içermez (cols = karakter sayısı).',
        signature:
          'def square_in_bounds(rows: int, cols: int, x: int, y: int, size: int) -> bool:',
        examples: [
          { call: 'square_in_bounds(10, 40, 6, 1, 10)', result: 'True' },
          { call: 'square_in_bounds(10, 40, 35, 1, 10)', result: 'False' },
        ],
        starterCode:
          'def square_in_bounds(rows, cols, x, y, size):\n    pass\n',
        tests: [
          {
            name: 'inside',
            assertCode: 'assert square_in_bounds(10, 40, 6, 1, 10) is True',
          },
          {
            name: 'x overflow',
            assertCode: 'assert square_in_bounds(10, 40, 31, 0, 10) is False',
          },
          {
            name: 'y overflow',
            assertCode: 'assert square_in_bounds(10, 40, 0, 1, 10) is False',
          },
          {
            name: 'origin size 1',
            assertCode: 'assert square_in_bounds(5, 5, 0, 0, 1) is True',
          },
          {
            name: 'negative',
            assertCode: 'assert square_in_bounds(5, 5, -1, 0, 1) is False',
          },
          {
            name: 'exact fit',
            assertCode: 'assert square_in_bounds(10, 10, 0, 0, 10) is True',
          },
        ],
        hint: '0 <= x <= cols - size and 0 <= y <= rows - size (size > 0).',
      },
      {
        id: 'ascii-stats-int-fn-count',
        examId: 'ascii-stats',
        examTitle: 'ASCII Stats',
        title: 'count_square(landscape, x, y, size)',
        purpose:
          'landscape satır listesinde (x,y) üst-soldan size×size karedeki karakter frekanslarını dict olarak döndür. Satırlardaki \\n yok sayılır / strip edilmez — indeksler ham karakter.',
        signature:
          'def count_square(landscape: list[str], x: int, y: int, size: int) -> dict:',
        examples: [
          {
            call: "count_square(['ab', 'cd'], 0, 0, 2)",
            result: "{'a':1,'b':1,'c':1,'d':1}",
          },
        ],
        starterCode:
          'def count_square(landscape, x, y, size):\n    pass\n',
        tests: [
          {
            name: '2x2',
            assertCode:
              "assert count_square(['ab\\n', 'cd\\n'], 0, 0, 2) == {'a': 1, 'b': 1, 'c': 1, 'd': 1}",
          },
          {
            name: 'offset',
            assertCode:
              "assert count_square(['^^^^', '^ab^', '^^^^'], 1, 1, 2) == {'a': 1, 'b': 1, '^': 2}",
          },
          {
            name: 'single',
            assertCode:
              "assert count_square(['Z'], 0, 0, 1) == {'Z': 1}",
          },
        ],
        hint: 'İç içe for; dict.setdefault veya Counter.',
      },
    ],
    fullProgram: {
      id: 'ascii-stats-int-full',
      examId: 'ascii-stats',
      examTitle: 'ASCII Stats',
      title: 'Tam program',
      brief:
        'landscape.txt dosyasını oku. stdin’den iki satır oku: ilki "x,y", ikincisi size (ekstra prompt metni basma — sadece sonuç çıksın). Kare dışarıdaysa tam olarak: ERROR!! the square to analyze is out of limits. İçerdeyse karakter yüzdelerini frekansa göre azalan sırada yaz. Biçim: "P-> 23.0%" (:4.1f).',
      goalBullets: [
        'landscape.txt oku',
        'Koordinat ve size al (stdin)',
        'Sınır dışıysa ERROR mesajı',
        'İçerdeyse yüzde istatistiklerini bas',
      ],
      starterCode: `# landscape.txt + stdin coordinates/size

`,
      inputFiles: {
        'landscape.txt': LANDSCAPE_SMALL,
      },
      stdin: `6,1
10
`,
      expectedStdout: `P-> 23.0%
5-> 18.0%
^-> 17.0%
Y-> 12.0%
!-> 11.0%
J->  8.0%
~->  5.0%
7->  4.0%
G->  2.0%
`,
      hint: 'coords satırını virgülle ayır; yüzde = count / (size*size) * 100, format :4.1f.',
      rubricNotes:
        'Beginner’dan fark: scaffold yok; çıktı formatı ve sınır hatası net eşleşmeli.',
    },
  },
  {
    examId: 'battleship',
    examTitle: 'Battleship',
    summary:
      'Atış parse ve isabet mantığını sıfırdan yaz; küçük bir senaryoda oyunu dosyalardan simüle et.',
    functions: [
      {
        id: 'battleship-int-fn-parse',
        examId: 'battleship',
        examTitle: 'Battleship',
        title: 'parse_shot(coord)',
        purpose:
          "'A,1' … 'J,10' biçimini (row, col) 0-tabanlı indekse çevir. Geçersiz biçimde ValueError fırlat.",
        signature: 'def parse_shot(coord: str) -> tuple[int, int]:',
        examples: [
          { call: "parse_shot('A,1')", result: '(0, 0)' },
          { call: "parse_shot('J,10')", result: '(9, 9)' },
        ],
        starterCode: 'def parse_shot(coord):\n    pass\n',
        tests: [
          {
            name: 'A1',
            assertCode: "assert parse_shot('A,1') == (0, 0)",
          },
          {
            name: 'J10',
            assertCode: "assert parse_shot('J,10') == (9, 9)",
          },
          {
            name: 'C5',
            assertCode: "assert parse_shot('C,5') == (2, 4)",
          },
          {
            name: 'strip',
            assertCode: "assert parse_shot('  B,3\\n') == (1, 2)",
          },
          {
            name: 'bad letter',
            assertCode: `
ok = False
try:
    parse_shot('K,1')
except ValueError:
    ok = True
assert ok
`,
          },
        ],
        hint: "row = ord(letter) - ord('A'); col = int(n) - 1; aralık kontrol et.",
      },
      {
        id: 'battleship-int-fn-apply',
        examId: 'battleship',
        examTitle: 'Battleship',
        title: 'apply_shot(opponent, shot_map, row, col)',
        purpose:
          "opponent hücreleri '#' (gemi) veya '-' (deniz). İsabet: opponent hücresini '-' yap, shot_map'e '*', 'hit' döndür. Iska: shot_map'e 'o', 'miss' döndür. shot_map ve opponent list-of-lists (mutable).",
        signature:
          "def apply_shot(opponent, shot_map, row, col) -> str:",
        examples: [
          {
            call: "opponent[0][0]=='#'",
            result: "'hit' ve shot_map[0][0]=='*'",
          },
        ],
        starterCode:
          'def apply_shot(opponent, shot_map, row, col):\n    pass\n',
        tests: [
          {
            name: 'hit clears ship',
            assertCode: `
opp = [['#', '-'], ['-', '-']]
sm = [['-', '-'], ['-', '-']]
assert apply_shot(opp, sm, 0, 0) == 'hit'
assert sm[0][0] == '*'
assert opp[0][0] == '-'
`,
          },
          {
            name: 'miss',
            assertCode: `
opp = [['-', '#'], ['-', '-']]
sm = [['-', '-'], ['-', '-']]
assert apply_shot(opp, sm, 0, 0) == 'miss'
assert sm[0][0] == 'o'
assert opp[0][0] == '-'
`,
          },
        ],
        hint: "Hit'te gemiyi tahtadan sil (# → -) ki batma takibi çalışsın.",
      },
    ],
    fullProgram: {
      id: 'battleship-int-full',
      examId: 'battleship',
      examTitle: 'Battleship',
      title: 'Tam program (kısa senaryo)',
      brief: `map1.dat ve map2.dat 10×10 tahtalar (# gemi, - deniz). moves.txt satırları R,C atışları; sırayla Player 1, Player 2, … Player 1 map2'ye, Player 2 map1'e ateş eder.

Her atışta stdout:
Player N
R,C
hit|miss

Bir oyuncunun hedefindeki tüm gemiler bitince: "Player N wins" yaz ve dur.
Sonra her oyuncunun atış haritasını bas (isabet *, ıska o, diğer -):
=== Player 1 ===
(10 satır)
=== Player 2 ===
(10 satır)`,
      goalBullets: [
        'map1.dat, map2.dat, moves.txt oku',
        'Sırayla atışları uygula ve sonucu bas',
        'Batan taraf olunca kazananı yaz',
        'Atış haritalarını bas',
      ],
      starterCode: `# Fixed inputs: map1.dat, map2.dat, moves.txt

`,
      inputFiles: {
        'map1.dat': MAP1,
        'map2.dat': MAP2,
        'moves.txt': BATTLE_MOVES,
      },
      expectedStdout: BATTLE_STDOUT,
      hint: 'Player 1 → map2, Player 2 → map1; gemiler bitince hemen dur.',
      rubricNotes:
        'Bu Intermediate senaryosu küçük özel haritalar kullanır (README örneğinden farklı).',
    },
  },
  {
    examId: "atomic-chess",
    examTitle: "Atomic Chess",
    summary: "Kare parse ve taş sahibi; tahtadaki +/- taş sayılarını raporla.",
    functions: [
      {
        id: "atomic-chess-int-fn-square",
        examId: "atomic-chess",
        examTitle: "Atomic Chess",
        title: "square_to_indexes(square)",
        purpose: "a1=(0,0)..h8=(7,7). ValueError geçersizde.",
        signature: "def square_to_indexes(square: str) -> tuple[int, int]:",
        examples: [
        { call: "square_to_indexes('e2')", result: "(1, 4)" }
        ],
        starterCode: "def square_to_indexes(square):\n    pass\n",
        tests: [
        { name: "a1", assertCode: "assert square_to_indexes('a1')==(0,0)" },
        { name: "e2", assertCode: "assert square_to_indexes('e2')==(1,4)" },
        { name: "h8", assertCode: "assert square_to_indexes('h8')==(7,7)" },
        { name: "bad", assertCode: "ok=False\ntry:\n square_to_indexes('z9')\nexcept ValueError:\n ok=True\nassert ok" }
        ],
        hint: "row=int-1; col=ord-a",
      },
      {
        id: "atomic-chess-int-fn-player",
        examId: "atomic-chess",
        examTitle: "Atomic Chess",
        title: "get_player(cell)",
        purpose: "+→1, -→-1, aksi 0.",
        signature: "def get_player(cell: str) -> int:",
        examples: [
        { call: "get_player('+K')", result: "1" }
        ],
        starterCode: "def get_player(cell):\n    pass\n",
        tests: [
        { name: "w", assertCode: "assert get_player('+K')==1" },
        { name: "b", assertCode: "assert get_player('-p')==-1" },
        { name: "e", assertCode: "assert get_player('..')==0" }
        ],
        hint: "startswith",
      }
    ],
    fullProgram:
      {
        id: "atomic-chess-int-full",
        examId: "atomic-chess",
        examTitle: "Atomic Chess",
        title: "Tam program",
        brief: "board.txt 8x8 virgüllü hücreler. \"White: N\" ve \"Black: M\" bas.",
        goalBullets: [
          "board oku",
          "say",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "board.txt": "-r,-n,-b,..,-k,..,..,-r\n-p,-p,-p,..,..,-p,-p,-p\n..,..,..,..,..,..,..,..\n..,..,..,-p,..,..,..,..\n..,..,..,+P,..,..,..,..\n..,..,..,..,..,+N,..,..\n+P,+P,+P,..,..,+P,+P,+P\n+R,..,+B,+Q,+K,..,..,+R\n"
        },
        expectedStdout: "White: 13\nBlack: 12\n",
        hint: "+/- ara",
        rubricNotes: "Sadece sayım.",
      },
  },
  {
    examId: "biodiversity",
    examTitle: "Biodiversity",
    summary: "Tekrar ve DNA eşleşmesi; tür başına benzersiz eşleşme sayısı.",
    functions: [
      {
        id: "biodiversity-int-fn-dup",
        examId: "biodiversity",
        examTitle: "Biodiversity",
        title: "is_duplicate(text, seen)",
        purpose: "Varsa True; yoksa ekle False.",
        signature: "def is_duplicate(text: str, seen: set) -> bool:",
        examples: [
        { call: "flow", result: "False then True" }
        ],
        starterCode: "def is_duplicate(text, seen):\n    pass\n",
        tests: [
        { name: "flow", assertCode: "s=set()\nassert is_duplicate('x',s) is False\nassert is_duplicate('x',s) is True" }
        ],
        hint: "in+add",
      },
      {
        id: "biodiversity-int-fn-dna",
        examId: "biodiversity",
        examTitle: "Biodiversity",
        title: "dna_match(sample, species_dna)",
        purpose: "Alt dizi mi?",
        signature: "def dna_match(sample: str, species_dna: str) -> bool:",
        examples: [
        { call: "dna_match('AT','GGAT')", result: "True" }
        ],
        starterCode: "def dna_match(sample, species_dna):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert dna_match('AT','GGATGG') is True" },
        { name: "n", assertCode: "assert dna_match('AT','GGCC') is False" }
        ],
        hint: "in",
      }
    ],
    fullProgram:
      {
        id: "biodiversity-int-full",
        examId: "biodiversity",
        examTitle: "Biodiversity",
        title: "Tam program",
        brief: "species.txt name;dna. samples.txt. Tekrarları atla. \"name: N\" species sırasıyla.",
        goalBullets: [
          "oku",
          "eşleştir",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "species.txt": "cod;GGATTACA\nshark;TTTACG\neel;ACACAC\n",
          "samples.txt": "ATTA\n\nTTAC\nATTA\nACAC\nGGGG\nTTAC\n"
        },
        expectedStdout: "cod: 2\nshark: 1\neel: 1\n",
        hint: "seen+in",
        rubricNotes: "Küçük fixture.",
      },
  },
  {
    examId: "chess-selo",
    examTitle: "Chess SELO",
    summary: "Elo expected + ensure; K=32 sıralama.",
    functions: [
      {
        id: "chess-selo-int-fn-expected",
        examId: "chess-selo",
        examTitle: "Chess SELO",
        title: "expected_score(ra, rb)",
        purpose: "1/(1+10**((rb-ra)/400)).",
        signature: "def expected_score(ra: float, rb: float) -> float:",
        examples: [
        { call: "1500,1500", result: "0.5" }
        ],
        starterCode: "def expected_score(ra, rb):\n    pass\n",
        tests: [
        { name: "eq", assertCode: "assert abs(expected_score(1500,1500)-0.5)<1e-9" },
        { name: "fav", assertCode: "assert expected_score(1600,1400)>0.5" }
        ],
        hint: "Elo formula",
      },
      {
        id: "chess-selo-int-fn-ensure",
        examId: "chess-selo",
        examTitle: "Chess SELO",
        title: "ensure_player(players, name)",
        purpose: "Yoksa 1500.0.",
        signature: "def ensure_player(players: dict, name: str) -> None:",
        examples: [
        { call: "{}", result: "1500" }
        ],
        starterCode: "def ensure_player(players, name):\n    pass\n",
        tests: [
        { name: "add", assertCode: "p={}\nensure_player(p,'Ada')\nassert p['Ada']==1500.0" },
        { name: "keep", assertCode: "p={'Ada':1600.0}\nensure_player(p,'Ada')\nassert p['Ada']==1600.0" }
        ],
        hint: "setdefault",
      }
    ],
    fullProgram:
      {
        id: "chess-selo-int-full",
        examId: "chess-selo",
        examTitle: "Chess SELO",
        title: "Tam program",
        brief: "matches.csv winner,loser. K=32. Yuvarlak puan azalan \"name score\".",
        goalBullets: [
          "matches",
          "Elo",
          "sırala"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "matches.csv": "ada,bob\nada,cara\nbob,cara\nada,bob\n"
        },
        expectedStdout: "ada 1546\nbob 1485\ncara 1469\n",
        hint: "K*(1-E)",
        rubricNotes: "K=32.",
      },
  },
  {
    examId: "connect-four",
    examTitle: "Connect Four",
    summary: "Yerçekimi + yatay dörtlü; hamlelerle tahtayı bas.",
    functions: [
      {
        id: "connect-four-int-fn-bottom",
        examId: "connect-four",
        examTitle: "Connect Four",
        title: "find_bottom(board, column, EMPTY, NUM_ROWS)",
        purpose: "En alt EMPTY satır; doluysa -1.",
        signature: "def find_bottom(board, column, EMPTY, NUM_ROWS) -> int:",
        examples: [
        { call: "empty", result: "NUM_ROWS-1" }
        ],
        starterCode: "def find_bottom(board, column, EMPTY, NUM_ROWS):\n    pass\n",
        tests: [
        { name: "empty", assertCode: "b=[['.']*3 for _ in range(4)]\nassert find_bottom(b,1,'.',4)==3" },
        { name: "full", assertCode: "b=[['X'] for _ in range(2)]\nassert find_bottom(b,0,'.',2)==-1" }
        ],
        hint: "scan up",
      },
      {
        id: "connect-four-int-fn-horiz",
        examId: "connect-four",
        examTitle: "Connect Four",
        title: "four_horizontal(board, r, c, EMPTY)",
        purpose: "4 aynı dolu yatay.",
        signature: "def four_horizontal(board, r, c, EMPTY) -> bool:",
        examples: [
        { call: "XXXX", result: "True" }
        ],
        starterCode: "def four_horizontal(board, r, c, EMPTY):\n    pass\n",
        tests: [
        { name: "yes", assertCode: "assert four_horizontal([['X','X','X','X']],0,0,'.') is True" },
        { name: "no", assertCode: "assert four_horizontal([['X','X','X','O']],0,0,'.') is False" },
        { name: "oob", assertCode: "assert four_horizontal([['X','X','X']],0,0,'.') is False" }
        ],
        hint: "slice",
      }
    ],
    fullProgram:
      {
        id: "connect-four-int-full",
        examId: "connect-four",
        examTitle: "Connect Four",
        title: "Tam program",
        brief: "6x7. moves.txt boşlukla sütunlar; X/O sırayla. Final tahtayı bas (.XO).",
        goalBullets: [
          "hamle",
          "düşür",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "moves.txt": "3 3 4 4 5 5 6\n"
        },
        expectedStdout: ".......\n.......\n.......\n.......\n...OOO.\n...XXXX\n",
        hint: "find_bottom",
        rubricNotes: "Tahta çıktısı.",
      },
  },
  {
    examId: "consumption+production",
    examTitle: "Consumption+Production",
    summary: "Öz tüketim ve kayıt anahtarı; toplam öz tüketimi bas.",
    functions: [
      {
        id: "consumption+production-int-fn-self",
        examId: "consumption+production",
        examTitle: "Consumption+Production",
        title: "self_consumed(produced, consumed)",
        purpose: "min(produced,consumed).",
        signature: "def self_consumed(produced: float, consumed: float) -> float:",
        examples: [
        { call: "self_consumed(4,3)", result: "3" }
        ],
        starterCode: "def self_consumed(produced, consumed):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert self_consumed(4,3)==3" },
        { name: "b", assertCode: "assert self_consumed(1,5)==1" }
        ],
        hint: "min",
      },
      {
        id: "consumption+production-int-fn-key",
        examId: "consumption+production",
        examTitle: "Consumption+Production",
        title: "make_key(hid, date, time)",
        purpose: "(hid, date, time) tuple.",
        signature: "def make_key(hid: str, date: str, time: str) -> tuple:",
        examples: [
        { call: "make_key('H1','2020-01-01','08:00')", result: "('H1',...)" }
        ],
        starterCode: "def make_key(hid, date, time):\n    pass\n",
        tests: [
        { name: "t", assertCode: "assert make_key('H1','2020-01-01','08:00')==('H1','2020-01-01','08:00')" }
        ],
        hint: "tuple",
      }
    ],
    fullProgram:
      {
        id: "consumption+production-int-full",
        examId: "consumption+production",
        examTitle: "Consumption+Production",
        title: "Tam program",
        brief: "consumption.csv & production.csv: id,date,time,energy. Eşleşen anahtarlarda sum(min). Bir ondalık.",
        goalBullets: [
          "oku",
          "eşleştir",
          "topla"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "consumption.csv": "H1,2020-01-01,08:00,3.0\nH1,2020-01-01,09:00,5.0\nH2,2020-01-01,08:00,2.0\n",
          "production.csv": "H1,2020-01-01,08:00,4.0\nH1,2020-01-01,09:00,1.0\nH2,2020-01-01,08:00,2.0\n"
        },
        expectedStdout: "6.0\n",
        hint: "min per key",
        rubricNotes: "Toplam öz tüketim.",
      },
  },
  {
    examId: "crypto",
    examTitle: "Cryptocurrency",
    summary: "Portföy değeri ve fiyat ekleme; max günü bul.",
    functions: [
      {
        id: "crypto-int-fn-eval",
        examId: "crypto",
        examTitle: "Cryptocurrency",
        title: "evaluate_portfolio(portfolio, prices)",
        purpose: "sum qty*price for tokens in prices dict.",
        signature: "def evaluate_portfolio(portfolio: dict, prices: dict) -> float:",
        examples: [
        { call: "{'BTC':2}, {'BTC':100}", result: "200" }
        ],
        starterCode: "def evaluate_portfolio(portfolio, prices):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert evaluate_portfolio({'BTC':2,'ETH':5},{'BTC':100,'ETH':10})==250" },
        { name: "miss", assertCode: "assert evaluate_portfolio({'BTC':1},{'ETH':10})==0" }
        ],
        hint: "qty*price",
      },
      {
        id: "crypto-int-fn-add",
        examId: "crypto",
        examTitle: "Cryptocurrency",
        title: "add_price(prices_by_day, date, token, price)",
        purpose: "prices_by_day[date][token]=price.",
        signature: "def add_price(prices_by_day: dict, date: str, token: str, price: float) -> None:",
        examples: [
        { call: "add", result: "nested dict" }
        ],
        starterCode: "def add_price(prices_by_day, date, token, price):\n    pass\n",
        tests: [
        { name: "a", assertCode: "d={}\nadd_price(d,'2021-01-01','BTC',100)\nassert d['2021-01-01']['BTC']==100" }
        ],
        hint: "setdefault",
      }
    ],
    fullProgram:
      {
        id: "crypto-int-full",
        examId: "crypto",
        examTitle: "Cryptocurrency",
        title: "Tam program",
        brief: "portfolio.txt token qty; prices.csv date,token,price. Max değer günü: \"date value\" (.2f). İlk max.",
        goalBullets: [
          "portföy",
          "fiyat",
          "max"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "portfolio.txt": "BTC 2\nETH 5\n",
          "prices.csv": "2021-01-01,BTC,100\n2021-01-01,ETH,10\n2021-01-02,BTC,90\n2021-01-02,ETH,30\n2021-01-03,BTC,120\n2021-01-03,ETH,5\n"
        },
        expectedStdout: "2021-01-02 330.00\n",
        hint: "groupby date",
        rubricNotes: "Max day.",
      },
  },
  {
    examId: "everwhen",
    examTitle: "Everwhen",
    summary: "UTC dakika ve gün etiketi; olayları etiketle.",
    functions: [
      {
        id: "everwhen-int-fn-mins",
        examId: "everwhen",
        examTitle: "Everwhen",
        title: "to_minutes(h, m, offset)",
        purpose: "h*60+m+offset.",
        signature: "def to_minutes(h, m, offset) -> int:",
        examples: [
        { call: "to_minutes(1,0,-60)", result: "-0? 0" }
        ],
        starterCode: "def to_minutes(h, m, offset):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert to_minutes(1,30,0)==90" },
        { name: "b", assertCode: "assert to_minutes(0,30,-60)==-30" }
        ],
        hint: "h*60+m+offset",
      },
      {
        id: "everwhen-int-fn-label",
        examId: "everwhen",
        examTitle: "Everwhen",
        title: "day_label(raw)",
        purpose: "<0 yesterday; >=1440 tomorrow; else today.",
        signature: "def day_label(raw: int) -> str:",
        examples: [
        { call: "day_label(-1)", result: "yesterday" }
        ],
        starterCode: "def day_label(raw):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert day_label(-1)=='yesterday'" },
        { name: "t", assertCode: "assert day_label(0)=='today'" },
        { name: "m", assertCode: "assert day_label(1440)=='tomorrow'" }
        ],
        hint: "thresholds",
      }
    ],
    fullProgram:
      {
        id: "everwhen-int-full",
        examId: "everwhen",
        examTitle: "Everwhen",
        title: "Tam program",
        brief: "events.txt: hh:mm offset. Her satır için day_label bas.",
        goalBullets: [
          "oku",
          "UTC",
          "etiket"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "events.txt": "00:30 -60\n08:30 0\n23:30 60\n"
        },
        expectedStdout: "yesterday\ntoday\ntomorrow\n",
        hint: "to_minutes then label",
        rubricNotes: "Sadece etiket.",
      },
  },
  {
    examId: "flights-booking",
    examTitle: "Flights Booking",
    summary: "BOOK kapasite ve CANCEL; komut günlüğü bas.",
    functions: [
      {
        id: "flights-booking-int-fn-can",
        examId: "flights-booking",
        examTitle: "Flights Booking",
        title: "can_book(taken, seats, rows, cols)",
        purpose: "taken+seats <= rows*cols.",
        signature: "def can_book(taken: int, seats: int, rows: int, cols: int) -> bool:",
        examples: [
        { call: "can_book(2,2,2,2)", result: "True" }
        ],
        starterCode: "def can_book(taken, seats, rows, cols):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert can_book(2,2,2,2) is True" },
        { name: "n", assertCode: "assert can_book(3,2,2,2) is False" }
        ],
        hint: "capacity",
      },
      {
        id: "flights-booking-int-fn-cancel",
        examId: "flights-booking",
        examTitle: "Flights Booking",
        title: "cancel_all(passengers, name)",
        purpose: "Listeden name tümünü sil; inplace.",
        signature: "def cancel_all(passengers: list, name: str) -> None:",
        examples: [
        { call: "cancel_all(['A','B','A'],'A')", result: "['B']" }
        ],
        starterCode: "def cancel_all(passengers, name):\n    pass\n",
        tests: [
        { name: "a", assertCode: "p=['Ada','Bob','Ada']\ncancel_all(p,'Ada')\nassert p==['Bob']" }
        ],
        hint: "remove loop",
      }
    ],
    fullProgram:
      {
        id: "flights-booking-int-full",
        examId: "flights-booking",
        examTitle: "Flights Booking",
        title: "Tam program",
        brief: "commands.txt BOOK/CANCEL. rows=cols=2 (kapasite 4). \"BOOK name ok|fail\" / \"CANCEL name ok\".",
        goalBullets: [
          "komut",
          "kapasite",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "commands.txt": "BOOK AZ1 Ada 2\nBOOK AZ1 Bob 1\nBOOK AZ1 Cara 2\nCANCEL AZ1 Ada\nBOOK AZ1 Cara 2\n"
        },
        expectedStdout: "BOOK Ada ok\nBOOK Bob ok\nBOOK Cara fail\nCANCEL Ada ok\nBOOK Cara ok\n",
        hint: "cap=4",
        rubricNotes: "Tek uçuş AZ1.",
      },
  },
  {
    examId: "freedonia",
    examTitle: "Freedonia",
    summary: "Tarih parse ve kural seti; sorgu günü aktif kurallar.",
    functions: [
      {
        id: "freedonia-int-fn-date",
        examId: "freedonia",
        examTitle: "Freedonia",
        title: "string_to_date(string)",
        purpose: "dd-mm-yyyy → (y,m,d).",
        signature: "def string_to_date(string: str) -> tuple:",
        examples: [
        { call: "string_to_date('01-02-2020')", result: "(2020,2,1)" }
        ],
        starterCode: "def string_to_date(string):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert string_to_date('01-02-2020')==(2020,2,1)" },
        { name: "b", assertCode: "assert string_to_date('15-01-2020')==(2020,1,15)" }
        ],
        hint: "split -",
      },
      {
        id: "freedonia-int-fn-apply",
        examId: "freedonia",
        examTitle: "Freedonia",
        title: "apply_rules(active, r_add, r_del)",
        purpose: "active |= add; active -= del. inplace set.",
        signature: "def apply_rules(active: set, r_add: set, r_del: set) -> None:",
        examples: [
        { call: "add/del", result: "updated set" }
        ],
        starterCode: "def apply_rules(active, r_add, r_del):\n    pass\n",
        tests: [
        { name: "a", assertCode: "a={'A'}\napply_rules(a,{'B'},{'A'})\nassert a=={'B'}" }
        ],
        hint: "|=",
      }
    ],
    fullProgram:
      {
        id: "freedonia-int-full",
        examId: "freedonia",
        examTitle: "Freedonia",
        title: "Tam program",
        brief: "rules.txt date;+/-;rule. stdin query date. O güne kadar aktif kuralları sıralı bas. Query: 12-01-2020.",
        goalBullets: [
          "kurallar",
          "uygula",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "rules.txt": "01-01-2020;+;A\n05-01-2020;+;B\n10-01-2020;-;A\n15-01-2020;+;C\n"
        },
        stdin: "12-01-2020\n",
        expectedStdout: "B\n",
        hint: "sort by date",
        rubricNotes: "Aktif set.",
      },
  },
  {
    examId: "heating",
    examTitle: "Heating",
    summary: "CSV parse ve aylık birikim; aylık toplamları bas.",
    functions: [
      {
        id: "heating-int-fn-parse",
        examId: "heating",
        examTitle: "Heating",
        title: "parse_csv_line(line)",
        purpose: "(date, float) from \"yyyy-mm-dd hh:mm,val\".",
        signature: "def parse_csv_line(line: str) -> tuple:",
        examples: [
        { call: "'2020-01-01 00:00,12.5'", result: "('2020-01-01',12.5)" }
        ],
        starterCode: "def parse_csv_line(line):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert parse_csv_line('2020-01-01 00:00,12.5')==('2020-01-01',12.5)" }
        ],
        hint: "split",
      },
      {
        id: "heating-int-fn-month",
        examId: "heating",
        examTitle: "Heating",
        title: "add_month(monthly, month, consumption)",
        purpose: "monthly[month]+=consumption.",
        signature: "def add_month(monthly: dict, month: str, consumption: float) -> None:",
        examples: [
        { call: "add", result: "accumulate" }
        ],
        starterCode: "def add_month(monthly, month, consumption):\n    pass\n",
        tests: [
        { name: "a", assertCode: "m={}\nadd_month(m,'2020-01',10)\nadd_month(m,'2020-01',5)\nassert m['2020-01']==15" }
        ],
        hint: "+=",
      }
    ],
    fullProgram:
      {
        id: "heating-int-full",
        examId: "heating",
        examTitle: "Heating",
        title: "Tam program",
        brief: "heating.csv satırları. Aylık toplam \"YYYY-MM: X.1\" sıralı.",
        goalBullets: [
          "parse",
          "ay",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "heating.csv": "2020-01-05 08:00,12.5\n2020-01-20 09:00,7.5\n2020-02-01 00:00,10.0\n2020-02-15 06:00,5.5\n"
        },
        expectedStdout: "2020-01: 20.0\n2020-02: 15.5\n",
        hint: "date[:7]",
        rubricNotes: "Aylık.",
      },
  },
  {
    examId: "linmgoweave",
    examTitle: "LingoWeave",
    summary: "Skor ve tekil skor; kelime skorları + total.",
    functions: [
      {
        id: "linmgoweave-int-fn-score",
        examId: "linmgoweave",
        examTitle: "LingoWeave",
        title: "calculate_score(word, pattern)",
        purpose: "count overlaps * len(word).",
        signature: "def calculate_score(word: str, pattern: str) -> int:",
        examples: [
        { call: "calculate_score('ab','abab')", result: "4" }
        ],
        starterCode: "def calculate_score(word, pattern):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert calculate_score('ab','abab')==4" },
        { name: "b", assertCode: "assert calculate_score('xy','abababxy')==2" }
        ],
        hint: "sliding",
      },
      {
        id: "linmgoweave-int-fn-unique",
        examId: "linmgoweave",
        examTitle: "LingoWeave",
        title: "unique_score(s, scores)",
        purpose: "s scores’taysa 0; değilse ekle s.",
        signature: "def unique_score(s: int, scores: set) -> int:",
        examples: [
        { call: "dup→0", result: "0" }
        ],
        starterCode: "def unique_score(s, scores):\n    pass\n",
        tests: [
        { name: "a", assertCode: "sc=set()\nassert unique_score(4,sc)==4\nassert unique_score(4,sc)==0" }
        ],
        hint: "set",
      }
    ],
    fullProgram:
      {
        id: "linmgoweave-int-full",
        examId: "linmgoweave",
        examTitle: "LingoWeave",
        title: "Tam program",
        brief: "words.txt + pattern.txt. Her kelime \"w s\"; sonda total.",
        goalBullets: [
          "skor",
          "unique",
          "total"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "words.txt": "ab\nba\nab\nxy\n",
          "pattern.txt": "abababxy\n"
        },
        expectedStdout: "ab 6\nba 4\nab 0\nxy 2\ntotal 12\n",
        hint: "unique zeros repeats",
        rubricNotes: "total satırı.",
      },
  },
  {
    examId: "magic-boxes",
    examTitle: "Magic Boxes",
    summary: "Kutu bulma ve yerleştirme; 3 kutu simülasyonu.",
    functions: [
      {
        id: "magic-boxes-int-fn-find",
        examId: "magic-boxes",
        examTitle: "Magic Boxes",
        title: "find_box(boxes, obj)",
        purpose: "Aynı objenin olduğu kutu; yoksa ilk boş; yoksa None.",
        signature: "def find_box(boxes: list, obj) -> int | None:",
        examples: [
        { call: "prefer same", result: "index" }
        ],
        starterCode: "def find_box(boxes, obj):\n    pass\n",
        tests: [
        { name: "same", assertCode: "b=[['a'],[],[]]\nassert find_box(b,'a')==0" },
        { name: "empty", assertCode: "b=[[],['x'],[]]\nassert find_box(b,'y')==0" },
        { name: "none", assertCode: "b=[['a'],['b'],['c']]\nassert find_box(b,'z') is None" }
        ],
        hint: "two passes",
      },
      {
        id: "magic-boxes-int-fn-add",
        examId: "magic-boxes",
        examTitle: "Magic Boxes",
        title: "add_object(boxes, obj)",
        purpose: "find_box ile ekle; False if None.",
        signature: "def add_object(boxes: list, obj) -> bool:",
        examples: [
        { call: "add", result: "True/False" }
        ],
        starterCode: "def add_object(boxes, obj):\n    pass\n",
        tests: [
        { name: "ok", assertCode: "b=[[],[],[]]\nassert add_object(b,'a') is True\nassert b[0]==['a']" },
        { name: "fail", assertCode: "b=[['a'],['b'],['c']]\nassert add_object(b,'z') is False" }
        ],
        hint: "find then append",
      }
    ],
    fullProgram:
      {
        id: "magic-boxes-int-full",
        examId: "magic-boxes",
        examTitle: "Magic Boxes",
        title: "Tam program",
        brief: "objects.txt; 3 kutu. Reddedilen \"obj rejected\"; sonra boxi: items.",
        goalBullets: [
          "yerleştir",
          "reject",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "objects.txt": "apple\npear\napple\nbanana\nkiwi\n"
        },
        expectedStdout: "kiwi rejected\nbox0: apple,apple\nbox1: pear\nbox2: banana\n",
        hint: "3 boxes",
        rubricNotes: "Reject + dump.",
      },
  },
  {
    examId: "misspell",
    examTitle: "Misspell",
    summary: "Tek harf farkı ve dosya okuma; isim başına eşleşme sayısı.",
    functions: [
      {
        id: "misspell-int-fn-mis",
        examId: "misspell",
        examTitle: "Misspell",
        title: "mispell(word1, word2)",
        purpose: "Aynı uzunluk + tam 1 harf fark (casefold).",
        signature: "def mispell(word1: str, word2: str) -> bool:",
        examples: [
        { call: "mispell('cat','cot')", result: "True" }
        ],
        starterCode: "def mispell(word1, word2):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert mispell('cat','cot') is True" },
        { name: "two", assertCode: "assert mispell('cat','cog') is False" },
        { name: "len", assertCode: "assert mispell('cat','cats') is False" },
        { name: "case", assertCode: "assert mispell('Cat','cot') is True" }
        ],
        hint: "zip count",
      },
      {
        id: "misspell-int-fn-read",
        examId: "misspell",
        examTitle: "Misspell",
        title: "read_list(filename)",
        purpose: "satır strip listesi.",
        signature: "def read_list(filename: str) -> list:",
        examples: [
        { call: "read_list('f')", result: "lines" }
        ],
        starterCode: "def read_list(filename):\n    pass\n",
        tests: [
        { name: "a", assertCode: "open('t.txt','w').write('a\\nb\\n')\nassert read_list('t.txt')==['a','b']" }
        ],
        hint: "readlines",
      }
    ],
    fullProgram:
      {
        id: "misspell-int-full",
        examId: "misspell",
        examTitle: "Misspell",
        title: "Tam program",
        brief: "names.txt + dictionary.txt. Her isim için \"name: count\" mispell eşleşmesi.",
        goalBullets: [
          "oku",
          "karşılaştır",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "names.txt": "cat\ndog\nbird\n",
          "dictionary.txt": "cot\ncar\ndog\ndig\nbard\n"
        },
        expectedStdout: "cat: 2\ndog: 1\nbird: 1\n",
        hint: "diff==1",
        rubricNotes: "Count only.",
      },
  },
  {
    examId: "munodi",
    examTitle: "Munodi",
    summary: "Collatz dizisi ve parse; valid/invalid.",
    functions: [
      {
        id: "munodi-int-fn-mun",
        examId: "munodi",
        examTitle: "Munodi",
        title: "munodi(num)",
        purpose: "1’e kadar Collatz listesi (num dahil).",
        signature: "def munodi(num: int) -> list:",
        examples: [
        { call: "munodi(3)", result: "[3,10,5,16,8,4,2,1]" }
        ],
        starterCode: "def munodi(num):\n    pass\n",
        tests: [
        { name: "3", assertCode: "assert munodi(3)==[3,10,5,16,8,4,2,1]" },
        { name: "1", assertCode: "assert munodi(1)==[1]" }
        ],
        hint: "even/odd",
      },
      {
        id: "munodi-int-fn-parse",
        examId: "munodi",
        examTitle: "Munodi",
        title: "parse_sequence(line)",
        purpose: "int list.",
        signature: "def parse_sequence(line: str) -> list:",
        examples: [
        { call: "'1 2 3'", result: "[1,2,3]" }
        ],
        starterCode: "def parse_sequence(line):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert parse_sequence('3 10 5')==[3,10,5]" }
        ],
        hint: "split",
      }
    ],
    fullProgram:
      {
        id: "munodi-int-full",
        examId: "munodi",
        examTitle: "Munodi",
        title: "Tam program",
        brief: "sequences.txt. Her satır munodi(first) ile eşitse valid değilse invalid.",
        goalBullets: [
          "parse",
          "karşılaştır",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "sequences.txt": "3 10 5 16 8 4 2 1\n6 3 10 5 16 8 4 2 1\n5 16 8 4 2\n7\n"
        },
        expectedStdout: "valid\nvalid\ninvalid\ninvalid\n",
        hint: "full sequence",
        rubricNotes: "valid/invalid.",
      },
  },
  {
    examId: "railway-management",
    examTitle: "Railway",
    summary: "Durak parse ve süre; rota sürelerini bas.",
    functions: [
      {
        id: "railway-management-int-fn-stop",
        examId: "railway-management",
        examTitle: "Railway",
        title: "parse_stop(info)",
        purpose: "Station:hh:mm → (st,(h,m)).",
        signature: "def parse_stop(info: str) -> tuple:",
        examples: [
        { call: "parse_stop('Torino:08:00')", result: "('Torino',(8,0))" }
        ],
        starterCode: "def parse_stop(info):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert parse_stop('Torino:08:00')==('Torino',(8,0))" }
        ],
        hint: "rsplit",
      },
      {
        id: "railway-management-int-fn-travel",
        examId: "railway-management",
        examTitle: "Railway",
        title: "travel_minutes(h1,m1,h2,m2)",
        purpose: "60*(h2-h1)+(m2-m1).",
        signature: "def travel_minutes(h1, m1, h2, m2) -> int:",
        examples: [
        { call: "08:00→09:30", result: "90" }
        ],
        starterCode: "def travel_minutes(h1, m1, h2, m2):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert travel_minutes(8,0,9,30)==90" },
        { name: "b", assertCode: "assert travel_minutes(10,0,12,45)==165" }
        ],
        hint: "formula",
      }
    ],
    fullProgram:
      {
        id: "railway-management-int-full",
        examId: "railway-management",
        examTitle: "Railway",
        title: "Tam program",
        brief: "routes.txt: durak listesi. \"First->Last: minutes\" (ilk-son).",
        goalBullets: [
          "parse",
          "süre",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "routes.txt": "Torino:08:00 Milano:09:30 Roma:13:15\nNapoli:10:00 Roma:12:45\n"
        },
        expectedStdout: "Torino->Roma: 315\nNapoli->Roma: 165\n",
        hint: "first to last",
        rubricNotes: "End-to-end minutes.",
      },
  },
  {
    examId: "shells",
    examTitle: "Sea Shells",
    summary: "Multiset includes ve fiyat toplamı; sepet tutarı.",
    functions: [
      {
        id: "shells-int-fn-inc",
        examId: "shells",
        examTitle: "Sea Shells",
        title: "includes(need, have)",
        purpose: "need counts <= have counts (list multiset).",
        signature: "def includes(need: list, have: list) -> bool:",
        examples: [
        { call: "includes(['a'],['a','b'])", result: "True" }
        ],
        starterCode: "def includes(need, have):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert includes(['clam','clam'],['clam','clam','oyster']) is True" },
        { name: "n", assertCode: "assert includes(['pearl'],['clam']) is False" }
        ],
        hint: "count",
      },
      {
        id: "shells-int-fn-sum",
        examId: "shells",
        examTitle: "Sea Shells",
        title: "sum_prices(items, shell_price)",
        purpose: "sum prices.",
        signature: "def sum_prices(items: list, shell_price: dict) -> float:",
        examples: [
        { call: "sum", result: "float" }
        ],
        starterCode: "def sum_prices(items, shell_price):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert abs(sum_prices(['clam','pearl'],{'clam':1.5,'pearl':5.0})-6.5)<1e-9" }
        ],
        hint: "+=",
      }
    ],
    fullProgram:
      {
        id: "shells-int-full",
        examId: "shells",
        examTitle: "Sea Shells",
        title: "Tam program",
        brief: "prices.txt + basket.txt. Toplam fiyat .2f (kampanya yok — ara seviye sade).",
        goalBullets: [
          "fiyat",
          "sepet",
          "topla"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "prices.txt": "clam 1.5\noyster 2.0\npearl 5.0\n",
          "basket.txt": "clam\npearl\nclam\noyster\n"
        },
        expectedStdout: "10.00\n",
        hint: "sum all",
        rubricNotes: "No promo; plain sum.",
      },
  },
  {
    examId: "soccer",
    examTitle: "Soccer Stats",
    summary: "Forvet verimi ve takım ekleme; en iyi forvet.",
    functions: [
      {
        id: "soccer-int-fn-eff",
        examId: "soccer",
        examTitle: "Soccer Stats",
        title: "forward_eff(p)",
        purpose: "(g+a-offsides)/minutes; p dict.",
        signature: "def forward_eff(p: dict) -> float:",
        examples: [
        { call: "eff", result: "float" }
        ],
        starterCode: "def forward_eff(p):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert abs(forward_eff({'goals':5,'assists':3,'offsides':1,'minutes':450})-7/450)<1e-9" }
        ],
        hint: "formula",
      },
      {
        id: "soccer-int-fn-team",
        examId: "soccer",
        examTitle: "Soccer Stats",
        title: "add_to_team(teams, p)",
        purpose: "teams[team].append(p).",
        signature: "def add_to_team(teams: dict, p: dict) -> None:",
        examples: [
        { call: "add", result: "grouped" }
        ],
        starterCode: "def add_to_team(teams, p):\n    pass\n",
        tests: [
        { name: "a", assertCode: "t={}\nadd_to_team(t,{'name':'Ada','team':'Red'})\nassert t['Red'][0]['name']=='Ada'" }
        ],
        hint: "setdefault",
      }
    ],
    fullProgram:
      {
        id: "soccer-int-full",
        examId: "soccer",
        examTitle: "Soccer Stats",
        title: "Tam program",
        brief: "players.csv name,team,goals,assists,offsides,minutes. En verimli: \"name eff\" .4f.",
        goalBullets: [
          "oku",
          "verim",
          "max"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "players.csv": "Ada,Red,5,3,1,450\nBob,Red,2,2,0,400\nCara,Blue,7,1,2,500\n"
        },
        expectedStdout: "Ada 0.0156\n",
        hint: "max eff",
        rubricNotes: "Best forward.",
      },
  },
  {
    examId: "strawberry",
    examTitle: "Strawberry Fields",
    summary: "Kelime temizleme ve eşit üçlü; üçlü sayısı.",
    functions: [
      {
        id: "strawberry-int-fn-clean",
        examId: "strawberry",
        examTitle: "Strawberry Fields",
        title: "clean_word(w, punctuation)",
        purpose: "strip punct + upper.",
        signature: "def clean_word(w: str, punctuation: str) -> str:",
        examples: [
        { call: "clean_word('Hi!','!')", result: "'HI'" }
        ],
        starterCode: "def clean_word(w, punctuation):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert clean_word('Hi!','!')=='HI'" },
        { name: "b", assertCode: "assert clean_word('(ok)', '()')=='OK'" }
        ],
        hint: "strip+upper",
      },
      {
        id: "strawberry-int-fn-trip",
        examId: "strawberry",
        examTitle: "Strawberry Fields",
        title: "equal_triplet(a, b, c)",
        purpose: "len eşit mi?",
        signature: "def equal_triplet(a: str, b: str, c: str) -> bool:",
        examples: [
        { call: "equal_triplet('A','B','C')", result: "True" }
        ],
        starterCode: "def equal_triplet(a, b, c):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert equal_triplet('AA','BB','CC') is True" },
        { name: "n", assertCode: "assert equal_triplet('A','BB','C') is False" }
        ],
        hint: "len",
      }
    ],
    fullProgram:
      {
        id: "strawberry-int-full",
        examId: "strawberry",
        examTitle: "Strawberry Fields",
        title: "Tam program",
        brief: "text.txt. Temiz kelimelerde eşit uzunlukta ardışık üçlü sayısı.",
        goalBullets: [
          "temizle",
          "üçlü",
          "say"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "text.txt": "The cat and dog ran\nIS IN MY box now\n"
        },
        expectedStdout: "4\n",
        hint: "string.punctuation",
        rubricNotes: "Count.",
      },
  },
  {
    examId: "super-calculator",
    examTitle: "Super Calculator",
    summary: "Operasyon ve split; soldan sağa değerlendir.",
    functions: [
      {
        id: "super-calculator-int-fn-op",
        examId: "super-calculator",
        examTitle: "Super Calculator",
        title: "operation(op, a, b)",
        purpose: "+ - *.",
        signature: "def operation(op: str, a: int, b: int) -> int:",
        examples: [
        { call: "operation('*',2,3)", result: "6" }
        ],
        starterCode: "def operation(op, a, b):\n    pass\n",
        tests: [
        { name: "+", assertCode: "assert operation('+',1,2)==3" },
        { name: "*", assertCode: "assert operation('*',2,3)==6" },
        { name: "-", assertCode: "assert operation('-',10,2)==8" }
        ],
        hint: "if",
      },
      {
        id: "super-calculator-int-fn-split",
        examId: "super-calculator",
        examTitle: "Super Calculator",
        title: "split_expr(line)",
        purpose: "(nums list, ops list) around \":\".",
        signature: "def split_expr(line: str) -> tuple:",
        examples: [
        { call: "'1 2 : +'", result: "([1,2],[\"+\"])" }
        ],
        starterCode: "def split_expr(line):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert split_expr('1 2 3 : + *')==([1,2,3],['+','*'])" },
        { name: "b", assertCode: "assert split_expr('5 : ')==([5],[])" }
        ],
        hint: "split :",
      }
    ],
    fullProgram:
      {
        id: "super-calculator-int-full",
        examId: "super-calculator",
        examTitle: "Super Calculator",
        title: "Tam program",
        brief: "expr.txt satırları. Soldan sağa sonuçları bas.",
        goalBullets: [
          "split",
          "eval",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "expr.txt": "1 2 3 : + *\n10 2 4 : - +\n5 : \n"
        },
        expectedStdout: "9\n12\n5\n",
        hint: "no precedence",
        rubricNotes: "LTR.",
      },
  },
  {
    examId: "unsafe-meat",
    examTitle: "Unsafe Meat",
    summary: "Aralık parse ve kontrol; safe/unsafe.",
    functions: [
      {
        id: "unsafe-meat-int-fn-range",
        examId: "unsafe-meat",
        examTitle: "Unsafe Meat",
        title: "parse_range(block)",
        purpose: "\"10-20\"→(10,20).",
        signature: "def parse_range(block: str) -> tuple:",
        examples: [
        { call: "parse_range('10-20')", result: "(10,20)" }
        ],
        starterCode: "def parse_range(block):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert parse_range('10-20')==(10,20)" }
        ],
        hint: "split -",
      },
      {
        id: "unsafe-meat-int-fn-in",
        examId: "unsafe-meat",
        examTitle: "Unsafe Meat",
        title: "in_range(batch, from_, to)",
        purpose: "from_<=batch<=to.",
        signature: "def in_range(batch: int, from_: int, to: int) -> bool:",
        examples: [
        { call: "in_range(15,10,20)", result: "True" }
        ],
        starterCode: "def in_range(batch, from_, to):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert in_range(15,10,20) is True" },
        { name: "n", assertCode: "assert in_range(5,10,20) is False" },
        { name: "edge", assertCode: "assert in_range(20,10,20) is True" }
        ],
        hint: "closed",
      }
    ],
    fullProgram:
      {
        id: "unsafe-meat-int-full",
        examId: "unsafe-meat",
        examTitle: "Unsafe Meat",
        title: "Tam program",
        brief: "ranges.txt + batches.txt. \"N safe|unsafe\".",
        goalBullets: [
          "aralık",
          "kontrol",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "ranges.txt": "10-20\n35-40\n",
          "batches.txt": "5\n15\n37\n100\n20\n"
        },
        expectedStdout: "5 safe\n15 unsafe\n37 unsafe\n100 safe\n20 unsafe\n",
        hint: "any range",
        rubricNotes: "Labels.",
      },
  },
  {
    examId: "wobbletron3k",
    examTitle: "Wobbletron 3000",
    summary: "Monoton ve gap kontrolü; güvenli rapor sayısı.",
    functions: [
      {
        id: "wobbletron3k-int-fn-mono",
        examId: "wobbletron3k",
        examTitle: "Wobbletron 3000",
        title: "is_monotonic(report)",
        purpose: "sıkı artan veya azalan (sorted eşitliği).",
        signature: "def is_monotonic(report: list) -> bool:",
        examples: [
        { call: "[1,2,3]", result: "True" }
        ],
        starterCode: "def is_monotonic(report):\n    pass\n",
        tests: [
        { name: "up", assertCode: "assert is_monotonic([1,2,3,4]) is True" },
        { name: "down", assertCode: "assert is_monotonic([4,3,2,1]) is True" },
        { name: "no", assertCode: "assert is_monotonic([1,3,2]) is False" }
        ],
        hint: "sorted",
      },
      {
        id: "wobbletron3k-int-fn-gaps",
        examId: "wobbletron3k",
        examTitle: "Wobbletron 3000",
        title: "gaps_ok(report)",
        purpose: "komşu |diff| in 1..3.",
        signature: "def gaps_ok(report: list) -> bool:",
        examples: [
        { call: "[1,2,4]", result: "True" }
        ],
        starterCode: "def gaps_ok(report):\n    pass\n",
        tests: [
        { name: "y", assertCode: "assert gaps_ok([1,2,4]) is True" },
        { name: "n", assertCode: "assert gaps_ok([1,2,10]) is False" }
        ],
        hint: "abs",
      }
    ],
    fullProgram:
      {
        id: "wobbletron3k-int-full",
        examId: "wobbletron3k",
        examTitle: "Wobbletron 3000",
        title: "Tam program",
        brief: "reports.txt. Monoton+gaps_ok sayısı.",
        goalBullets: [
          "parse",
          "kontrol",
          "say"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "reports.txt": "1 2 3 4\n1 3 6 7\n9 7 6 4\n1 2 10\n5 4 3 2\n"
        },
        expectedStdout: "4\n",
        hint: "both checks",
        rubricNotes: "Count safe.",
      },
  },
  {
    examId: "worms",
    examTitle: "Worms of Words",
    summary: "Pozisyonlar ve min mesafe; iki kelime arası min.",
    functions: [
      {
        id: "worms-int-fn-find",
        examId: "worms",
        examTitle: "Worms of Words",
        title: "find_all(word, sequence)",
        purpose: "indeks listesi.",
        signature: "def find_all(word: str, sequence: list) -> list:",
        examples: [
        { call: "find_all('a',['a','b','a'])", result: "[0,2]" }
        ],
        starterCode: "def find_all(word, sequence):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert find_all('a',['a','b','a'])==[0,2]" },
        { name: "none", assertCode: "assert find_all('z',['a'])==[]" }
        ],
        hint: "enumerate",
      },
      {
        id: "worms-int-fn-dist",
        examId: "worms",
        examTitle: "Worms of Words",
        title: "min_distance(p0, p1)",
        purpose: "abs.",
        signature: "def min_distance(p0: int, p1: int) -> int:",
        examples: [
        { call: "min_distance(0,2)", result: "2" }
        ],
        starterCode: "def min_distance(p0, p1):\n    pass\n",
        tests: [
        { name: "a", assertCode: "assert min_distance(0,2)==2" },
        { name: "b", assertCode: "assert min_distance(5,1)==4" }
        ],
        hint: "abs",
      }
    ],
    fullProgram:
      {
        id: "worms-int-full",
        examId: "worms",
        examTitle: "Worms of Words",
        title: "Tam program",
        brief: "sequence.txt kelimeler; query.txt iki kelime. Min indeks mesafesi.",
        goalBullets: [
          "pozisyon",
          "min",
          "bas"
        ],
        starterCode: "# Intermediate full program\n\n",
        inputFiles: {
          "sequence.txt": "a b c a d b a\n",
          "query.txt": "a b\n"
        },
        expectedStdout: "1\n",
        hint: "all pairs",
        rubricNotes: "Min distance.",
      },
  }
]

function localizePack(pack: IntermediatePack, lang: Lang): IntermediatePack {
  if (lang !== 'en') return pack
  const copy = intermediatePacksEn[pack.examId]
  if (!copy) return pack
  return {
    ...pack,
    examTitle: copy.examTitle ?? pack.examTitle,
    summary: copy.summary,
    functions: pack.functions.map((fn) => {
      const f = copy.functions?.[fn.id]
      if (!f) return fn
      return {
        ...fn,
        title: f.title ?? fn.title,
        purpose: f.purpose,
        hint: f.hint ?? fn.hint,
        examples: f.examples ?? fn.examples,
      }
    }),
    fullProgram: {
      ...pack.fullProgram,
      title: copy.fullProgram?.title ?? pack.fullProgram.title,
      brief: copy.fullProgram?.brief ?? pack.fullProgram.brief,
      goalBullets:
        copy.fullProgram?.goalBullets ?? pack.fullProgram.goalBullets,
      hint: copy.fullProgram?.hint ?? pack.fullProgram.hint,
      rubricNotes:
        copy.fullProgram?.rubricNotes ?? pack.fullProgram.rubricNotes,
    },
  }
}

export function getAllIntermediatePacks(lang: Lang = 'tr'): IntermediatePack[] {
  return intermediatePacks.map((p) => localizePack(p, lang))
}

export function getIntermediatePack(
  examId: string,
  lang: Lang = 'tr',
): IntermediatePack | undefined {
  const pack = intermediatePacks.find((p) => p.examId === examId)
  return pack ? localizePack(pack, lang) : undefined
}

export function getIntermediateIdsForExam(examId: string): string[] {
  const pack = intermediatePacks.find((p) => p.examId === examId)
  if (!pack) return []
  return [...pack.functions.map((f) => f.id), pack.fullProgram.id]
}

export function countIntermediateQuestions(): number {
  return intermediatePacks.reduce(
    (n, p) => n + p.functions.length + 1,
    0,
  )
}
