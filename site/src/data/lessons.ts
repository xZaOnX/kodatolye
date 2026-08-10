import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 'print',
    order: 1,
    title: 'print: ekrana yazmak',
    subtitle: 'İlk satır kodun ne işe yaradığını anla.',
    blocks: [
      {
        type: 'text',
        body: 'Python, bilgisayara adım adım ne yapacağını söylediğin bir dildir. Yazdiğin her satır bir komuttur. En temel komut print’tir: ekrana bir şey yazdırır.',
      },
      {
        type: 'code',
        caption: 'İlk program',
        code: `print("Merhaba")
print(42)`,
      },
      {
        type: 'text',
        body: 'Tırnak içindeki yazıya string (metin) denir. Tırnaksız 42 bir sayıdır. print bir fonksiyon çağrısıdır: isim, sonra parantez, içine ne yazdıracağını koyarsın.',
      },
      {
        type: 'callout',
        title: 'Unutma',
        body: 'Büyük/küçük harf önemlidir. Print yanlış, print doğrudur. Parantezleri unutursan hata alırsın.',
      },
      {
        type: 'code',
        caption: 'Birden fazla değer',
        code: `print("Yaş:", 20)
# Çıktı: Yaş: 20`,
      },
      {
        type: 'text',
        body: '# ile başlayan satırlar yorumdur; Python onları çalıştırmaz. Kendine not bırakmak için kullanılır.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'print-q1',
        question: 'Ekrana Merhaba yazdırmak için doğru satır hangisi?',
        options: [
          'print Merhaba',
          'print("Merhaba")',
          'Print("Merhaba")',
          'echo("Merhaba")',
        ],
        correctIndex: 1,
        explanation: 'Fonksiyon adı küçük harfle print, metin tırnak içinde, çağrı parantezli olur.',
      },
      {
        type: 'fill',
        id: 'print-q2',
        question: 'Boşluğu doldur: ekrana 7 yazdır.',
        placeholder: 'print(___)',
        answer: 'print(7)',
        accept: ['print(7)', 'print( 7 )'],
        explanation: 'Sayılar tırnaksız yazılır: print(7).',
      },
    ],
  },
  {
    id: 'variables',
    order: 2,
    title: 'Değişkenler',
    subtitle: 'Bir değere isim verip sonra tekrar kullan.',
    blocks: [
      {
        type: 'text',
        body: 'Değişken, bir değeri kutuya koyup etiketlemektir. Etiket (isim) ile kutunun içindeki değere sonra tekrar ulaşırsın.',
      },
      {
        type: 'code',
        caption: 'Atama',
        code: `isim = "Ada"
yas = 20
print(isim)
print(yas)`,
      },
      {
        type: 'text',
        body: '= burada “eşittir” değil, “ata” demektir: sağdaki değeri soldaki isme koy. Değişken adı harf veya _ ile başlar; boşluk olmaz; anlamlı isimler seç (x yerine skor gibi).',
      },
      {
        type: 'code',
        caption: 'Değeri güncellemek',
        code: `skor = 10
skor = skor + 5
print(skor)  # 15`,
      },
      {
        type: 'callout',
        title: 'İsim kuralları',
        body: 'Doğru: toplam, ogrenci_adi, n2. Yanlış: 2n, öğrenci adı, class (class Python anahtar kelimesidir).',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'var-q1',
        question: 'a = 3 satırından sonra a’nın değeri nedir?',
        options: ['Bilinmez', '3', '"a"', 'a = 3'],
        correctIndex: 1,
        explanation: 'Atama a kutusuna 3 koyar; print(a) yazınca 3 görürsün.',
      },
      {
        type: 'fill',
        id: 'var-q2',
        question: 'sehir değişkenine Istanbul ata (tırnaklı metin).',
        placeholder: 'sehir = ...',
        answer: 'sehir = "Istanbul"',
        accept: [
          'sehir = "Istanbul"',
          "sehir = 'Istanbul'",
          'sehir="Istanbul"',
          "sehir='Istanbul'",
        ],
        explanation: 'Metin tırnak ister: sehir = "Istanbul"',
      },
    ],
  },
  {
    id: 'types',
    order: 3,
    title: 'Veri tipleri',
    subtitle: 'Sayı, metin ve doğru/yanlış farklı kutulardır.',
    blocks: [
      {
        type: 'text',
        body: 'Python her değerin tipini bilir. Tip, o değerle ne yapılabileceğini belirler. En sık gördüğün dört tip:',
      },
      {
        type: 'code',
        caption: 'Temel tipler',
        code: `sayi = 7          # int  (tam sayı)
oran = 3.14       # float (ondalık)
ad = "Mert"       # str  (metin)
aktif = True      # bool (True veya False)`,
      },
      {
        type: 'text',
        body: 'type(...) ile tipini öğrenebilirsin. "7" ile 7 aynı değildir: biri metin, biri sayı. Bu yüzden "2" + "3" sonucu "23" olur; 2 + 3 sonucu 5 olur.',
      },
      {
        type: 'code',
        caption: 'Tip kontrolü',
        code: `print(type(7))
print(type("7"))
print(type(True))`,
      },
      {
        type: 'callout',
        title: 'True / False',
        body: 'Boolean değerler büyük harfle yazılır: True, False. true veya false hata verir.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'types-q1',
        question: '"42" ifadesinin tipi nedir?',
        options: ['int', 'float', 'str', 'bool'],
        correctIndex: 2,
        explanation: 'Tırnak varsa metindir (str), sayı gibi görünse bile.',
      },
      {
        type: 'mcq',
        id: 'types-q2',
        question: 'Hangisi bool tipindedir?',
        options: ['"True"', 'true', 'True', '1.0'],
        correctIndex: 2,
        explanation: 'True (büyük T) boolean’dır. "True" string, true geçersizdir.',
      },
    ],
  },
  {
    id: 'operators',
    order: 4,
    title: 'Aritmetik operatörler',
    subtitle: 'Topla, çıkar, böl, kalan al.',
    blocks: [
      {
        type: 'text',
        body: 'Sayılarla işlem yapmak için operatörler kullanılır. Sonuç genelde yeni bir değere atanır veya print ile yazdırılır.',
      },
      {
        type: 'code',
        caption: 'Operatör tablosu',
        code: `print(10 + 3)   # 13  toplama
print(10 - 3)   # 7   çıkarma
print(10 * 3)   # 30  çarpma
print(10 / 3)   # 3.333...  bölme (float)
print(10 // 3)  # 3   tam bölme (aşağı yuvarlar)
print(10 % 3)   # 1   kalan (mod)
print(2 ** 3)   # 8   üs (2 üzeri 3)`,
      },
      {
        type: 'text',
        body: '% (mod) sınavlarda çok işe yarar: sayı çift mi? n % 2 == 0. Son basamak? n % 10. // tam kısım isterken, / her zaman ondalık üretebilir.',
      },
      {
        type: 'callout',
        title: 'Öncelik',
        body: 'Önce **, sonra * / // %, sonra + -. Karışıklığı önlemek için parantez kullan: (2 + 3) * 4.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'op-q1',
        question: '17 % 5 sonucu nedir?',
        options: ['3', '2', '3.4', '0'],
        correctIndex: 1,
        explanation: '5×3=15, kalan 2. Yani 17 % 5 = 2.',
      },
      {
        type: 'fill',
        id: 'op-q2',
        question: '2 üzeri 4’ü Python’da nasıl yazarsın? (sadece ifade)',
        placeholder: '2 ?? 4',
        answer: '2 ** 4',
        accept: ['2 ** 4', '2**4', '2** 4', '2 **4'],
        explanation: 'Üs operatörü **: 2 ** 4 = 16.',
      },
    ],
  },
  {
    id: 'strings',
    order: 5,
    title: 'String (metin) işlemleri',
    subtitle: 'Metni birleştir, uzunluğunu al, parçala.',
    blocks: [
      {
        type: 'text',
        body: 'String, karakter dizisidir. Tek veya çift tırnak kullanabilirsin. Sınavlarda sık: len, indeks, birleştirme, upper/lower, strip.',
      },
      {
        type: 'code',
        caption: 'Temel string işleri',
        code: `ad = "Ada"
soyad = "Lovelace"
tam = ad + " " + soyad
print(tam)           # Ada Lovelace
print(len(ad))       # 3
print(ad[0])         # A  (ilk karakter, indeks 0'dan başlar)
print(ad.upper())    # ADA`,
      },
      {
        type: 'text',
        body: 'İndeks 0’dan başlar: s[0] ilk karakter. s[-1] son karakterdir. str(42) sayıyı metne çevirir; int("42") metni sayıya çevirir (sadece rakamlarsa).',
      },
      {
        type: 'code',
        caption: 'f-string (modern birleştirme)',
        code: `yas = 20
print(f"Yaşım {yas}")`,
      },
      {
        type: 'callout',
        title: 'Dikkat',
        body: '"3" + 1 hata verir. Önce tipleri uyumlu yap: int("3") + 1 veya "3" + str(1).',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'str-q1',
        question: 'len("Python") sonucu nedir?',
        options: ['5', '6', '7', 'Hata'],
        correctIndex: 1,
        explanation: 'P-y-t-h-o-n → 6 karakter.',
      },
      {
        type: 'fill',
        id: 'str-q2',
        question: 's = "kod" iken ilk karakteri alan ifadeyi yaz.',
        placeholder: 's[?]',
        answer: 's[0]',
        accept: ['s[0]', 's[ 0 ]'],
        explanation: 'İndeks 0’dan başlar: s[0] → "k".',
      },
    ],
  },
  {
    id: 'input-cast',
    order: 6,
    title: 'input ve tip dönüşümü',
    subtitle: 'Kullanıcıdan al, sayiya çevir, hesapla.',
    blocks: [
      {
        type: 'text',
        body: 'input(...) kullanıcıdan metin alır. Dönen değer her zaman str’dir — rakam yazsa bile. Hesap yapacaksan int veya float ile dönüştür.',
      },
      {
        type: 'code',
        caption: 'Klasik kalıp',
        code: `yas_metin = input("Yaşın? ")
yas = int(yas_metin)
print(yas + 1)`,
      },
      {
        type: 'code',
        caption: 'Tek satırda',
        code: `n = int(input("Sayı: "))
print(n * 2)`,
      },
      {
        type: 'text',
        body: 'Sık dönüşümler: int("10"), float("3.5"), str(10). Dönüşüm başarısızsa (int("abc")) program hata verir — sınavlarda girdinin beklenen formatta olduğu varsayılır.',
      },
      {
        type: 'callout',
        title: 'Sınav ipucu',
        body: 'Dosyadan okunan satırlar da metindir. int(line) veya int(line.strip()) sık görülür.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'input-q1',
        question: 'x = input() sonrası kullanıcı 5 yazarsa x’in tipi nedir?',
        options: ['int', 'str', 'float', 'bool'],
        correctIndex: 1,
        explanation: 'input her zaman str döner. Sayı istiyorsan int(x) yap.',
      },
      {
        type: 'fill',
        id: 'input-q2',
        question: '"15" metnini tam sayıya çeviren ifadeyi yaz.',
        placeholder: '???("15")',
        answer: 'int("15")',
        accept: ['int("15")', "int('15')", 'int( "15" )'],
        explanation: 'int("15") → 15 (int).',
      },
    ],
  },
  {
    id: 'comparisons',
    order: 7,
    title: 'Karşılaştırma ve mantık',
    subtitle: 'True/False üreten ifadeler.',
    blocks: [
      {
        type: 'text',
        body: 'Karşılaştırma operatörleri True veya False üretir. if ve döngüler bunlara bakar.',
      },
      {
        type: 'code',
        caption: 'Karşılaştırmalar',
        code: `print(5 > 3)    # True
print(5 == 5)   # True  (eşit mi?)
print(5 != 4)   # True  (eşit değil mi?)
print(5 >= 5)   # True
print(2 < 1)    # False`,
      },
      {
        type: 'text',
        body: '== eşitlik kontrolüdür; = atamadır. Karıştırma. Mantık bağlaçları: and (ikisi de doğru), or (en az biri doğru), not (tersine çevir).',
      },
      {
        type: 'code',
        caption: 'and / or / not',
        code: `yas = 20
print(yas >= 18 and yas < 65)  # True
print(yas < 10 or yas > 100)   # False
print(not False)               # True`,
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'cmp-q1',
        question: '3 == 3 ifadesinin değeri nedir?',
        options: ['3', 'True', 'False', 'Hata'],
        correctIndex: 1,
        explanation: '== karşılaştırır ve True/False döner.',
      },
      {
        type: 'mcq',
        id: 'cmp-q2',
        question: 'True and False sonucu?',
        options: ['True', 'False', 'TrueFalse', 'Hata'],
        correctIndex: 1,
        explanation: 'and için ikisi de True olmalı; biri False ise sonuç False.',
      },
    ],
  },
  {
    id: 'if-else',
    order: 8,
    title: 'if / elif / else',
    subtitle: 'Koşula göre farklı yollar seç.',
    blocks: [
      {
        type: 'text',
        body: 'if bloğu yalnızca koşul True ise çalışır. Python’da bloklar girinti (genelde 4 boşluk) ile belirlenir. Girinti yanlışsa hata veya yanlış mantık doğar.',
      },
      {
        type: 'code',
        caption: 'Temel if',
        code: `n = 7
if n % 2 == 0:
    print("çift")
else:
    print("tek")`,
      },
      {
        type: 'code',
        caption: 'elif zinciri',
        code: `notu = 75
if notu >= 90:
    print("A")
elif notu >= 70:
    print("B")
else:
    print("C")`,
      },
      {
        type: 'text',
        body: 'İlk doğru koşul çalışır, gerisine bakılmaz. else isteğe bağlıdır: hiçbir koşul tutmazsa devreye girer. : (iki nokta) satır sonunu unutma.',
      },
      {
        type: 'callout',
        title: 'Girinti',
        body: 'if’ten sonraki satırlar aynı miktarda içeriden yazılmalı. Karışık girinti IndentationError verir.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'if-q1',
        question: 'n = 4 iken n % 2 == 0 True ise ne yazdırılır?',
        options: ['tek', 'çift', 'Hiçbir şey', 'Hata'],
        correctIndex: 1,
        explanation: '4 çift olduğu için if dalı çalışır → "çift".',
      },
      {
        type: 'fill',
        id: 'if-q2',
        question: 'if satırının sonunda gereken karakter nedir? (tek karakter)',
        placeholder: 'if x > 0_',
        answer: ':',
        accept: [':'],
        explanation: 'Blok başında iki nokta (:) zorunludur.',
      },
    ],
  },
  {
    id: 'lists',
    order: 9,
    title: 'Listeler',
    subtitle: 'Birden fazla değeri tek kutuda tut.',
    blocks: [
      {
        type: 'text',
        body: 'Liste, sıralı bir koleksiyondur. Köşeli parantez [] ile yazılır. Elemanlar virgülle ayrılır; tipler karışabilir ama genelde aynı tip kullanılır.',
      },
      {
        type: 'code',
        caption: 'Liste oluşturma ve erişim',
        code: `sayilar = [10, 20, 30]
print(sayilar[0])      # 10
print(len(sayilar))    # 3
sayilar.append(40)     # sona ekle
print(sayilar)         # [10, 20, 30, 40]`,
      },
      {
        type: 'text',
        body: 'Liste değiştirilebilir (mutable): eleman ata, append, pop. split() metni listeye böler: "a b c".split() → ["a", "b", "c"]. Sınav dosya satırlarında çok kullanılır.',
      },
      {
        type: 'code',
        caption: 'split ve int dönüşümü',
        code: `satir = "12 6 3"
parcalar = satir.split()
sayilar = []
for p in parcalar:
    sayilar.append(int(p))
print(sayilar)  # [12, 6, 3]`,
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'list-q1',
        question: 'nums = [2, 4, 6] iken nums[1] nedir?',
        options: ['2', '4', '6', '[2, 4, 6]'],
        correctIndex: 1,
        explanation: 'İndeks 0→2, 1→4, 2→6.',
      },
      {
        type: 'fill',
        id: 'list-q2',
        question: 'Boş liste nasıl yazılır?',
        placeholder: '...',
        answer: '[]',
        accept: ['[]', 'list()'],
        explanation: 'En yaygını [] ; list() de boş liste üretir.',
      },
    ],
  },
  {
    id: 'for-loop',
    order: 10,
    title: 'for döngüsü',
    subtitle: 'Bir koleksiyonun her elemanı için tekrarla.',
    blocks: [
      {
        type: 'text',
        body: 'for, bir listedeki (veya başka yinelenebilir yapıdaki) her eleman için bloğu bir kez çalıştırır. “Her biri için şunu yap” demektir.',
      },
      {
        type: 'code',
        caption: 'Liste üzerinde for',
        code: `for meyve in ["elma", "armut"]:
    print(meyve)`,
      },
      {
        type: 'code',
        caption: 'range ile sayarak',
        code: `for i in range(3):
    print(i)
# 0
# 1
# 2`,
      },
      {
        type: 'text',
        body: 'range(n) → 0’dan n-1’e. range(1, 5) → 1,2,3,4. String üzerinde de dönebilirsin: for harf in "ab". Dosya satırları için: for line in dosya.',
      },
      {
        type: 'callout',
        title: 'Biriktirme kalıbı',
        body: 'total = 0 ile başla, döngüde total = total + x yap, döngü bitince total’i kullan. Sınavların yarısı bu kalıptır.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'for-q1',
        question: 'for i in range(3): kaç kez döner?',
        options: ['2', '3', '4', 'Sonsuz'],
        correctIndex: 1,
        explanation: 'range(3) → 0,1,2 → üç tur.',
      },
      {
        type: 'fill',
        id: 'for-q2',
        question: '0,1,2,3 üreten range ifadesini yaz.',
        placeholder: 'range(...)',
        answer: 'range(4)',
        accept: ['range(4)', 'range(0, 4)', 'range(0,4)'],
        explanation: 'range(4) veya range(0, 4) → 0..3.',
      },
    ],
  },
  {
    id: 'while-loop',
    order: 11,
    title: 'while döngüsü',
    subtitle: 'Koşul True olduğu sürece tekrarla.',
    blocks: [
      {
        type: 'text',
        body: 'while, koşul True olduğu sürece bloğu tekrarlar. Kaç tur olacağı önceden belli değilse (ör. Collatz / Munodi) while uygundur. Koşulu bir yerde False yapmayı unutursan sonsuz döngü olur.',
      },
      {
        type: 'code',
        caption: 'Sayarak while',
        code: `n = 3
while n > 0:
    print(n)
    n = n - 1
print("bitti")`,
      },
      {
        type: 'code',
        caption: 'Çiftse yarıla (basit örnek)',
        code: `x = 16
while x % 2 == 0:
    x = x // 2
print(x)  # 1`,
      },
      {
        type: 'callout',
        title: 'for mu while mı?',
        body: 'Liste/satır/range üzerinden “hepsini gez” → for. “Şu koşul bozulana kadar” → while.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'while-q1',
        question: 'while True: ve break yoksa ne olur?',
        options: ['1 kez çalışır', 'Hiç çalışmaz', 'Sonsuz döngü', 'Syntax hatası'],
        correctIndex: 2,
        explanation: 'True hep doğru olduğu için durmaz (break yoksa).',
      },
      {
        type: 'fill',
        id: 'while-q2',
        question: 'Tam bölme operatörünü yaz (10’u 3’e tam bölmek için kullanılan).',
        placeholder: '10 ? 3',
        answer: '//',
        accept: ['//'],
        explanation: 'Tam bölme // ; 10 // 3 = 3.',
      },
    ],
  },
  {
    id: 'functions',
    order: 12,
    title: 'Fonksiyonlar (def)',
    subtitle: 'İş parçasını isimlendirip tekrar kullan.',
    blocks: [
      {
        type: 'text',
        body: 'Fonksiyon, bir işi paketler. def ile tanımlarsın, isimle çağırırsın. Parametreler girdi, return çıktıdır. Sınav çözümlerinde iş mantığı çoğu zaman küçük fonksiyonlara bölünür.',
      },
      {
        type: 'code',
        caption: 'Tanım ve çağrı',
        code: `def kare(n):
    return n * n

print(kare(5))  # 25`,
      },
      {
        type: 'code',
        caption: 'return yoksa',
        code: `def selam(isim):
    print("Merhaba", isim)

sonuc = selam("Ada")
print(sonuc)  # None`,
      },
      {
        type: 'text',
        body: 'return değeri fonksiyondan dışarı verir; print sadece ekrana yazar. Hesap sonucunu sonra kullanacaksan return şart. Fonksiyon gövdesi girintilidir; çağrıda parantez gerekir: kare(5) doğru, kare yanlış (fonksiyonun kendisi).',
      },
      {
        type: 'callout',
        title: 'Sınav kalıbı',
        body: 'def armstrong(number): ... gibi bir fonksiyon yazıp main içinde çağırmak çok yaygındır. Önce fonksiyonu tek başına düşün, sonra bağla.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'fn-q1',
        question: 'def kare(n): return n*n sonrası kare(4) değeri?',
        options: ['4', '8', '16', 'None'],
        correctIndex: 2,
        explanation: '4*4 = 16 return edilir.',
      },
      {
        type: 'fill',
        id: 'fn-q2',
        question: 'Fonksiyon tanımlamak için kullanılan anahtar kelime?',
        placeholder: '___',
        answer: 'def',
        accept: ['def'],
        explanation: 'Tanım: def isim(parametreler):',
      },
    ],
  },
  {
    id: 'files',
    order: 13,
    title: 'Dosyadan okuma ve yazma',
    subtitle: 'open, with, satır satır okuma, strip, write.',
    blocks: [
      {
        type: 'text',
        body: 'Sınavların çoğu veriyi .txt dosyasından alır. with open("dosya.txt") as f: dosyayı açar; blok bitince otomatik kapatır. Varsayılan mod okumadır ("r"). Yazmak için "w", hem okuyup hem yazmak nadiren "r+" kullanılır.',
      },
      {
        type: 'code',
        caption: 'Satır satır oku (en sık kalıp)',
        code: `with open("numbers.txt") as f:
    for line in f:
        text = line.strip()
        if text == "":
            continue  # boş satırı atla
        print(text)`,
      },
      {
        type: 'text',
        body: 'for line in f: her turda bir satır verir; satırın sonunda genelde \\n vardır. strip() baştaki/sondaki boşluk ve \\n’yi siler. Dosyanın tamamını tek seferde almak için f.read() (tek string) veya f.readlines() (satır listesi) kullanılır.',
      },
      {
        type: 'code',
        caption: 'Tüm satırları listeye al',
        code: `with open("data.txt") as f:
    lines = f.readlines()
print(len(lines))`,
      },
      {
        type: 'code',
        caption: 'Dosyaya yazma',
        code: `with open("out.txt", "w") as f:
    f.write("7\\n")
    f.write("153\\n")
# "w" varsa dosyayı sıfırdan yazar (üzerine yazar)`,
      },
      {
        type: 'callout',
        title: 'try / except',
        body: 'Dosya yoksa veya açılamazsa OSError (veya FileNotFoundError) gelir. Sınavlarda sık: try: with open(...) ... except OSError as err: print(err)',
      },
      {
        type: 'code',
        caption: 'Hata yakalama',
        code: `try:
    with open("numbers.txt") as f:
        for line in f:
            print(line.strip())
except OSError as err:
    print(f"Dosya açılamadı: {err}")`,
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'file-q1',
        question: 'Dosyayı okumak için hangisi doğrudur?',
        options: [
          'open("a.txt", "w")',
          'with open("a.txt") as f:',
          'read("a.txt")',
          'file.open a.txt',
        ],
        correctIndex: 1,
        explanation: 'with open("a.txt") as f: okuma için standart kalıptır (mod varsayılan "r").',
      },
      {
        type: 'fill',
        id: 'file-q2',
        question: 'Satırdaki boşluk/\\n temizlemek için kullanılan metot adı?',
        placeholder: 'line.???()',
        answer: 'strip',
        accept: ['strip', 'strip()'],
        explanation: 'line.strip() baş/sondaki boşluk ve satır sonunu siler.',
      },
      {
        type: 'mcq',
        id: 'file-q3',
        question: 'open(..., "w") ne yapar?',
        options: [
          'Sadece okur',
          'Yazar (varsa içeriği siler/üzerine yazar)',
          'Sadece sona ekler',
          'Dosyayı siler ama açmaz',
        ],
        correctIndex: 1,
        explanation: '"w" yazma modudur; dosya yoksa oluşturur, varsa sıfırdan yazar.',
      },
    ],
  },
  {
    id: 'file-processing',
    order: 14,
    title: 'Dosya verisini işleme',
    subtitle: 'split, int/float, filtrele, biriktir, yaz — sınav kalıpları.',
    blocks: [
      {
        type: 'text',
        body: 'Dosyadan gelen her satır string’dir. İşlemek = temizle (strip) → parçala (split) → tipe çevir (int/float) → liste/sözlüğe koy → gerekirse filtrele ve başka dosyaya yaz.',
      },
      {
        type: 'code',
        caption: 'Kalıp 1: satırda tek sayı',
        code: `sayilar = []
with open("numbers.txt") as f:
    for line in f:
        n = int(line.strip())
        sayilar.append(n)
print(sayilar)`,
      },
      {
        type: 'code',
        caption: 'Kalıp 2: satırda boşlukla ayrılmış sayılar',
        code: `# Örnek satır: "12 6 3 10"
with open("seq.dat") as f:
    for line in f:
        parcalar = line.split()          # ["12", "6", "3", "10"]
        seq = []
        for p in parcalar:
            seq.append(int(p))
        print(seq)`,
      },
      {
        type: 'text',
        body: 'split() varsayılan olarak boşluk/tab’a göre böler. CSV gibi virgüllü satırda split(",") kullan. "a:b:c".split(":") → ["a","b","c"]. İki parçaya sınırlı bölmek için maxsplit: line.split(" ", maxsplit=2).',
      },
      {
        type: 'code',
        caption: 'Kalıp 3: filtrele ve dosyaya yaz',
        code: `with open("numbers.txt") as fin, open("out.txt", "w") as fout:
    for line in fin:
        n = int(line.strip())
        if n % 2 == 0:          # örnek koşul: çiftler
            fout.write(f"{n}\\n")`,
      },
      {
        type: 'code',
        caption: 'Kalıp 4: sözlükte biriktir (say / grupla)',
        code: `adet = {}
with open("words.txt") as f:
    for line in f:
        w = line.strip()
        if w not in adet:
            adet[w] = 0
        adet[w] += 1
print(adet)`,
      },
      {
        type: 'code',
        caption: 'Kalıp 5: virgüllü satır (basit CSV)',
        code: `# Örnek: "Ada,20"
with open("people.txt") as f:
    for line in f:
        ad, yas = line.strip().split(",")
        print(ad, int(yas))`,
      },
      {
        type: 'callout',
        title: 'Sınavda sık üçlü',
        body: '1) with open + for line  2) strip + split + int  3) liste/set/dict’e koy veya koşulla out.write. Bu üçlüyü ezberle.',
      },
      {
        type: 'callout',
        title: 'Sonraki adım',
        body: 'Temeller bitti. Sınava çalış yolundan bir exam seçip özet + sorularla pekiştirebilirsin.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'fproc-q1',
        question: '"10 20 30".split() sonucu nedir?',
        options: [
          '"10 20 30"',
          '["10", "20", "30"]',
          '[10, 20, 30]',
          '("10", "20", "30")',
        ],
        correctIndex: 1,
        explanation: 'split string listesi döner; sayılar hâlâ metindir, int() gerekir.',
      },
      {
        type: 'fill',
        id: 'fproc-q2',
        question: 'line.strip() sonucunu tam sayıya çeviren ifadeyi yaz (line değişkeni hazır).',
        placeholder: '???',
        answer: 'int(line.strip())',
        accept: ['int(line.strip())', 'int( line.strip() )'],
        explanation: 'Önce strip, sonra int: int(line.strip()).',
      },
      {
        type: 'mcq',
        id: 'fproc-q3',
        question: 'Okurken aynı anda yazmak için hangisi uygundur?',
        options: [
          'Sadece open("a.txt")',
          'with open("in.txt") as fin, open("out.txt", "w") as fout:',
          'print(file)',
          'split("w")',
        ],
        correctIndex: 1,
        explanation: 'İki dosyayı aynı with satırında açmak sınavda çok yaygındır.',
      },
    ],
  },
]

import { lessonsEn } from './lessons.en'
import type { Lang } from '../i18n/types'

export function getLessons(lang: Lang = 'tr'): Lesson[] {
  return lang === 'en' ? lessonsEn : lessons
}

export function getLessonById(
  id: string,
  lang: Lang = 'tr',
): Lesson | undefined {
  return getLessons(lang).find((l) => l.id === id)
}

export function getFirstLesson(lang: Lang = 'tr'): Lesson {
  return getLessons(lang)[0]
}

export function getNextLesson(
  id: string,
  lang: Lang = 'tr',
): Lesson | undefined {
  const list = getLessons(lang)
  const i = list.findIndex((l) => l.id === id)
  if (i < 0 || i >= list.length - 1) return undefined
  return list[i + 1]
}
