import type { ExamPack } from '../types'

export const examPacks: ExamPack[] = [
  {
    "examId": "armstrong",
    "examTitle": "Armstrong Numbers",
    "summary": "Armstrong sayısı: n basamaklı bir sayıda her basamağın n. kuvvetinin toplamı sayının kendisine eşittir (ör. 153 = 1³+5³+3³).",
    "goalBullets": [
      "numbers.txt dosyasından satır satır sayı oku",
      "Armstrong olanları bul",
      "armstrong.txt dosyasına aynı sırayla yaz"
    ],
    "mcqs": [
      {
        "id": "armstrong-mcq-1",
        "question": "153 Armstrong mudur? (1³+5³+3³)",
        "options": [
          "Hayır",
          "Evet",
          "Sadece 3 basamaklıysa",
          "Sadece çiftse"
        ],
        "correctIndex": 1,
        "explanation": "1+125+27 = 153; evet Armstrong."
      },
      {
        "id": "armstrong-mcq-2",
        "question": "Program girdi/çıktıyı nereden alır?",
        "options": [
          "Sadece klavyeden",
          "numbers.txt → armstrong.txt",
          "Sadece ekrana basar",
          "Veritabanından"
        ],
        "correctIndex": 1,
        "explanation": "Dosyadan okuyup Armstrong olanları dosyaya yazar."
      }
    ]
  },
  {
    "examId": "ascii-stats",
    "examTitle": "ASCII Stats",
    "summary": "ASCII manzara dosyasında kullanıcının seçtiği bir kare içinde karakter frekanslarını sayıp yüzdeleri yazdırırsın.",
    "goalBullets": [
      "Manzarayı dosyadan oku",
      "Verilen kare sınırlarını kontrol et",
      "Kare içindeki karakterleri say ve yüzde hesapla"
    ],
    "mcqs": [
      {
        "id": "ascii-stats-mcq-1",
        "question": "İstatistik hangi bölgede hesaplanır?",
        "options": [
          "Tüm dosyada",
          "Kullanıcının seçtiği karede",
          "Sadece ilk satırda",
          "Sadece boşluklarda"
        ],
        "correctIndex": 1,
        "explanation": "Seçilen kare (x,y,size) içindeki karakterler sayılır."
      },
      {
        "id": "ascii-stats-mcq-2",
        "question": "Kare görüntü dışına taşıyorsa ne yapılır?",
        "options": [
          "Yoksayılır",
          "Hata mesajı verilir",
          "Otomatik küçültülür",
          "Sadece kenar sayılır"
        ],
        "correctIndex": 1,
        "explanation": "Sınır dışıysa ERROR basılır."
      }
    ]
  },
  {
    "examId": "atomic-chess",
    "examTitle": "Atomic Chess",
    "summary": "Atomik satranç: taşlar normal hareket eder ama alma (capture) olunca patlama olur; etraf temizlenir, şah patlarsa oyun biter.",
    "goalBullets": [
      "Tahta ve hamleleri dosyadan oku",
      "Hamleleri uygula",
      "Capture’da patlamayı işle ve kazananı bul"
    ],
    "mcqs": [
      {
        "id": "atomic-chess-mcq-1",
        "question": "Atomik satrançta capture sonrası ne olur?",
        "options": [
          "Sadece alınan taş silinir",
          "Patlama ile çevre temizlenir",
          "Hamle geri alınır",
          "Hiçbir şey"
        ],
        "correctIndex": 1,
        "explanation": "Capture patlama tetikler."
      },
      {
        "id": "atomic-chess-mcq-2",
        "question": "a2 karesinin sütun harfi hangisidir?",
        "options": [
          "2",
          "a",
          "b",
          "h"
        ],
        "correctIndex": 1,
        "explanation": "Notasyon: harf sütun, rakam satır → a."
      }
    ]
  },
  {
    "examId": "battleship",
    "examTitle": "Battleship",
    "summary": "İki oyuncunun haritaları ve atış listesiyle Battleship simüle edilir: isabet/ıska, filo batınca oyun biter.",
    "goalBullets": [
      "Haritaları ve moves.txt’yi oku",
      "Atışları sırayla uygula (hit/miss)",
      "Filo bitince sonucu yaz"
    ],
    "mcqs": [
      {
        "id": "battleship-mcq-1",
        "question": "Rakip haritada '#' genelde ne anlama gelir?",
        "options": [
          "Boş deniz",
          "Gemi parçası",
          "Önceki ıska",
          "Kenar"
        ],
        "correctIndex": 1,
        "explanation": "README’de gemi hücreleri # ile işaretlenir."
      },
      {
        "id": "battleship-mcq-2",
        "question": "Atış koordinatı örneği hangi formattadır?",
        "options": [
          "(1,1)",
          "A,5",
          "a2e4",
          "row=1"
        ],
        "correctIndex": 1,
        "explanation": "Satır harf, sütun sayı: A,5 gibi."
      }
    ]
  },
  {
    "examId": "biodiversity",
    "examTitle": "Biodiversity",
    "summary": "eDNA örneklerini tür DNA veritabanıyla eşleştirirsin; tekrarları bulur, eşleşme oranını ve taksonomi ağacını raporlarsın.",
    "goalBullets": [
      "Tür DNA veritabanını yükle",
      "Örnekleri oku (tekrarları tespit et)",
      "Alt dizi eşleşmesiyle tür bul ve raporla"
    ],
    "mcqs": [
      {
        "id": "biodiversity-mcq-1",
        "question": "Örnek DNA’nın tür DNA’sında olup olmadığı nasıl bakılır?",
        "options": [
          "== ile tam eşitlik",
          "in ile alt dizi",
          "len ile",
          "sort ile"
        ],
        "correctIndex": 1,
        "explanation": "sample in dna substring kontrolüdür."
      },
      {
        "id": "biodiversity-mcq-2",
        "question": "Aynı örnek satırı iki kez gelirse ne yapılır?",
        "options": [
          "İkisi de sayılır",
          "Tekrar diye işaretlenir/atlanır",
          "Program çöker",
          "Dosya silinir"
        ],
        "correctIndex": 1,
        "explanation": "Repeated sample uyarısı verilir."
      }
    ]
  },
  {
    "examId": "chess-selo",
    "examTitle": "Chess SELO",
    "summary": "Oyuncu SELO puanlarını oyun sonuçlarına göre günceller, bilinmeyen oyuncuya varsayılan puan verir, sıralı listelersin.",
    "goalBullets": [
      "Oyuncu ve maç CSV’lerini oku",
      "Kazanan/kaybeden puanını güncelle",
      "Puana göre sıralayıp yazdır"
    ],
    "mcqs": [
      {
        "id": "chess-selo-mcq-1",
        "question": "Listede olmayan oyuncuya genelde ne verilir?",
        "options": [
          "0",
          "1500",
          "2000",
          "None"
        ],
        "correctIndex": 1,
        "explanation": "Çözümde varsayılan 1500."
      },
      {
        "id": "chess-selo-mcq-2",
        "question": "Kazananın puanı tipik olarak nasıl değişir?",
        "options": [
          "Hep azalır",
          "Delta kadar artar",
          "Sabit kalır",
          "Sıfırlanır"
        ],
        "correctIndex": 1,
        "explanation": "Kazanan += faktör * delta."
      }
    ]
  },
  {
    "examId": "connect-four",
    "examTitle": "Connect Four",
    "summary": "6×7 tahtada yerçekimiyle taş düşürülür; dört aynı sembol yan yana/çapraz gelince kazanan bulunur.",
    "goalBullets": [
      "moves.txt’ten sütun hamlelerini oku",
      "Taşı sütunun en altına yerleştir",
      "Dörtlü kontrolü yap"
    ],
    "mcqs": [
      {
        "id": "connect-four-mcq-1",
        "question": "Connect Four’da taş nereye düşer?",
        "options": [
          "Seçilen satıra",
          "Sütundaki en alt boş hücreye",
          "Rastgele",
          "Hep üste"
        ],
        "correctIndex": 1,
        "explanation": "Yerçekimi: en alttaki boş satır."
      },
      {
        "id": "connect-four-mcq-2",
        "question": "Kazanç için kaç aynı taş gerekir?",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "correctIndex": 1,
        "explanation": "Dört-in-a-row."
      }
    ]
  },
  {
    "examId": "consumption+production",
    "examTitle": "Consumption+Production",
    "summary": "Ev tüketimi, PV üretimi ve hava verisini birleştirip öz tüketim / şebekeye fazla gibi toplamları hesaplarsın.",
    "goalBullets": [
      "Tüketim ve üretim verilerini oku",
      "Aynı an için üretimi hesapla",
      "Öz tüketim ve fazlayı topla"
    ],
    "mcqs": [
      {
        "id": "consumption+production-mcq-1",
        "question": "Üretilen enerji tipik formülü?",
        "options": [
          "size + efficiency + GHI",
          "size × efficiency × GHI",
          "size / GHI",
          "sadece GHI"
        ],
        "correctIndex": 1,
        "explanation": "Çarpım formülü."
      },
      {
        "id": "consumption+production-mcq-2",
        "question": "Öz tüketim için hangi fonksiyon uygundur?",
        "options": [
          "max(üretim, tüketim)",
          "min(üretim, tüketim)",
          "sum",
          "abs"
        ],
        "correctIndex": 1,
        "explanation": "İkisinden küçük olan kadar öz tüketilir."
      }
    ]
  },
  {
    "examId": "crypto",
    "examTitle": "Cryptocurrency",
    "summary": "Sabit bir token portföyünün her günkü değerini fiyatlardan hesaplar, en yüksek değerli günü bulursun.",
    "goalBullets": [
      "Portföy miktarlarını oku",
      "Günlük fiyatları grupla",
      "qty × price toplamını hesapla ve max günü bul"
    ],
    "mcqs": [
      {
        "id": "crypto-mcq-1",
        "question": "Bir günün portföy değeri nasıl bulunur?",
        "options": [
          "Sadece token sayısı",
          "Σ (miktar × fiyat)",
          "Max fiyat",
          "Min fiyat"
        ],
        "correctIndex": 1,
        "explanation": "Sahip olunan tokenler için qty*price toplamı."
      },
      {
        "id": "crypto-mcq-2",
        "question": "Fiyatlar neden tarihe göre gruplanır?",
        "options": [
          "Dosya küçük olsun diye",
          "Her gün ayrı değer hesabı için",
          "Sıralama yasak",
          "CSV kuralı"
        ],
        "correctIndex": 1,
        "explanation": "Her tarih için ayrı değerlendirme."
      }
    ]
  },
  {
    "examId": "everwhen",
    "examTitle": "Everwhen",
    "summary": "Aynı gün olaylarını farklı saat dilimlerinden UTC’ye çevirir; yesterday/today/tomorrow etiketiyle sıralayıp yazdırırsın.",
    "goalBullets": [
      "Olay satırlarını ve timezone offset’lerini oku",
      "Yerel saati UTC dakikasına çevir",
      "Gün etiketine göre sırala/yazdır"
    ],
    "mcqs": [
      {
        "id": "everwhen-mcq-1",
        "question": "UTC’ye çevirirken raw < 0 ise etiket?",
        "options": [
          "today",
          "yesterday",
          "tomorrow",
          "error"
        ],
        "correctIndex": 1,
        "explanation": "Negatif dakika → önceki gün."
      },
      {
        "id": "everwhen-mcq-2",
        "question": "1 saat kaç dakikadır?",
        "options": [
          "24",
          "60",
          "100",
          "3600"
        ],
        "correctIndex": 1,
        "explanation": "Offset hesabında 60 kullanılır."
      }
    ]
  },
  {
    "examId": "flights-booking",
    "examTitle": "Flights Booking",
    "summary": "Uçuşlara BOOK/CANCEL istekleri uygularsın; kapasite aşılırsa BOOK fail olur; sonunda koltuk haritasını basarsın.",
    "goalBullets": [
      "Uçuş kapasitelerini oku",
      "BOOK/CANCEL işlemlerini işle",
      "Koltuk yerleşimini yazdır"
    ],
    "mcqs": [
      {
        "id": "flights-booking-mcq-1",
        "question": "Kapasite doluyken BOOK ne olur?",
        "options": [
          "Yine ekler",
          "Fail basar",
          "CANCEL yapar",
          "Sessizce geçer"
        ],
        "correctIndex": 1,
        "explanation": "Kapasite aşımı Fail."
      },
      {
        "id": "flights-booking-mcq-2",
        "question": "CANCEL ne yapar?",
        "options": [
          "Uçuşu siler",
          "O isme ait koltukları çıkarır",
          "Yeni koltuk ekler",
          "Dosyayı kapatır"
        ],
        "correctIndex": 1,
        "explanation": "İsim listeden temizlenir."
      }
    ]
  },
  {
    "examId": "freedonia",
    "examTitle": "Freedonia",
    "summary": "Tarihe göre +kural / −kural değişikliklerini uygular; sorgu tarihinde hangi kuralların aktif olduğunu yazdırırsın.",
    "goalBullets": [
      "Kuralları tarihe göre oku",
      "+ ekle, − çıkar",
      "Sorgu gününe kadar aktif seti bul"
    ],
    "mcqs": [
      {
        "id": "freedonia-mcq-1",
        "question": "+RULE ne demektir?",
        "options": [
          "Kuralı sil",
          "Kuralı ekle",
          "Tarihi değiştir",
          "Dosyayı aç"
        ],
        "correctIndex": 1,
        "explanation": "+ ekleme, − silme."
      },
      {
        "id": "freedonia-mcq-2",
        "question": "Aktif kurallar hangi yapıyla tutulmaya uygundur?",
        "options": [
          "Sadece int",
          "set",
          "float",
          "True/False tek değişken"
        ],
        "correctIndex": 1,
        "explanation": "Birleşim/fark için set idealdir."
      }
    ]
  },
  {
    "examId": "heating",
    "examTitle": "Heating",
    "summary": "İki binanın ısı tüketim CSV’lerinden dönem, aylık ve bina bazlı günlük istatistikler üretirsin.",
    "goalBullets": [
      "CSV satırlarını (tarih, değer) parse et",
      "Aylık toplamları biriktir",
      "Bina için max günlük tüketimi bul"
    ],
    "mcqs": [
      {
        "id": "heating-mcq-1",
        "question": "Aylık toplam için tipik kalıp?",
        "options": [
          "Sadece print",
          "dict’te yoksa 0, sonra +=",
          "set.add",
          "sort"
        ],
        "correctIndex": 1,
        "explanation": "Biriktirme sözlüğü."
      },
      {
        "id": "heating-mcq-2",
        "question": "CSV alanı genelde nasıl ayrılır?",
        "options": [
          "split(',')",
          "split(';') zorunlu",
          "split() yetmez asla",
          "json.loads"
        ],
        "correctIndex": 0,
        "explanation": "timestamp,value → split(',')."
      }
    ]
  },
  {
    "examId": "linmgoweave",
    "examTitle": "LingoWeave",
    "summary": "Her kelimenin skoru = (pattern içinde kaç kez geçtiği) × uzunluk; aynı skor ikinci kez gelirse 0 olur; pozitifler azalan yazılır.",
    "goalBullets": [
      "pattern ve kelimeleri oku",
      "Skor hesapla (count × len)",
      "Tekrar skoru sıfırla, sırala, yazdır"
    ],
    "mcqs": [
      {
        "id": "linmgoweave-mcq-1",
        "question": "Skor formülü nedir?",
        "options": [
          "sadece len(word)",
          "count × len(word)",
          "count + len",
          "pattern uzunluğu"
        ],
        "correctIndex": 1,
        "explanation": "Geçiş sayısı × kelime uzunluğu."
      },
      {
        "id": "linmgoweave-mcq-2",
        "question": "Aynı skor daha önce görüldüyse?",
        "options": [
          "İki katına çıkar",
          "0 yapılır",
          "Silinir",
          "Hata"
        ],
        "correctIndex": 1,
        "explanation": "İlk kelime skoru tutar, sonrakiler 0."
      }
    ]
  },
  {
    "examId": "magic-boxes",
    "examTitle": "Magic Boxes",
    "summary": "42 tip-kilitli kutu: Bob nesne koyar, Carl alır; uygun kutu yoksa Alice başarısız olur.",
    "goalBullets": [
      "Aynı tipteki kutuyu tercih et, yoksa boş kutu bul",
      "Bob ekle / Carl çıkar işlemlerini uygula",
      "İlk başarısızlıkta mesaj bas"
    ],
    "mcqs": [
      {
        "id": "magic-boxes-mcq-1",
        "question": "Nesne eklerken önce nereye bakılır?",
        "options": [
          "Rastgele kutu",
          "Aynı tipin olduğu kutu",
          "Hep son kutu",
          "Sadece dolu kutular"
        ],
        "correctIndex": 1,
        "explanation": "Tip kilidi: aynı tip tercih edilir."
      },
      {
        "id": "magic-boxes-mcq-2",
        "question": "Uygun kutu yoksa ne olur?",
        "options": [
          "Yeni 43. kutu açılır",
          "İşlem başarısız sayılır",
          "Nesne silinir",
          "Carl ekler"
        ],
        "correctIndex": 1,
        "explanation": "Alice cannot store..."
      }
    ]
  },
  {
    "examId": "misspell",
    "examTitle": "Misspell",
    "summary": "Her isim için sözlükte aynı uzunlukta ve tam bir harf farkı olan kelimeleri bulursun.",
    "goalBullets": [
      "İsim ve sözlük dosyalarını oku",
      "Uzunluk eşit + tam 1 harf farkı kontrol et",
      "Eşleşenleri yazdır"
    ],
    "mcqs": [
      {
        "id": "misspell-mcq-1",
        "question": "Geçerli benzerlik için kaç harf farklı olmalı?",
        "options": [
          "0",
          "1",
          "2",
          "fark etmez"
        ],
        "correctIndex": 1,
        "explanation": "Tam olarak bir harf."
      },
      {
        "id": "misspell-mcq-2",
        "question": "Uzunluklar farklıysa sonuç?",
        "options": [
          "True",
          "False",
          "1",
          "None"
        ],
        "correctIndex": 1,
        "explanation": "Önce uzunluk eşitliği gerekir."
      }
    ]
  },
  {
    "examId": "munodi",
    "examTitle": "Munodi",
    "summary": "Munodi (Collatz) dizisi: çiftse /2, tekse 3n+1; 1’e inene kadar. Dosyadaki dizinin bu kurala uyup uymadığını kontrol edersin.",
    "goalBullets": [
      "seq.dat satırlarını int listesine çevir",
      "İlk elemandan Munodi dizisi üret",
      "Eşitse uzunlukla birlikte yazdır"
    ],
    "mcqs": [
      {
        "id": "munodi-mcq-1",
        "question": "Çift sayıda sonraki terim?",
        "options": [
          "3n+1",
          "n//2",
          "n*2",
          "n-1"
        ],
        "correctIndex": 1,
        "explanation": "Çift → yarısı."
      },
      {
        "id": "munodi-mcq-2",
        "question": "Dizi ne zaman biter?",
        "options": [
          "0 gelince",
          "1 gelince",
          "Negatif olunca",
          "10 adımda"
        ],
        "correctIndex": 1,
        "explanation": "1’e ulaşınca sonlanır."
      }
    ]
  },
  {
    "examId": "railway-management",
    "examTitle": "Railway",
    "summary": "Tren seferlerini yükler; Stazioni / Orario / Viaggio işlemleriyle istasyon listesi, saatler ve en kısa yolculuğu bulursun.",
    "goalBullets": [
      "corse.txt seferlerini parse et",
      "operazioni.txt komutlarını çalıştır",
      "İstasyon / saat / süre sonuçlarını bas"
    ],
    "mcqs": [
      {
        "id": "railway-management-mcq-1",
        "question": "Station:hh:min ifadesi neyi taşır?",
        "options": [
          "Sadece istasyon",
          "İstasyon + saat + dakika",
          "Sadece süre",
          "Bilet fiyatı"
        ],
        "correctIndex": 1,
        "explanation": "Üç parça: ad, saat, dakika."
      },
      {
        "id": "railway-management-mcq-2",
        "question": "İki saat farkını dakikaya çevirmek için?",
        "options": [
          "24*(h2-h1)",
          "60*(h2-h1)+(m2-m1)",
          "h2-h1",
          "m2*h1"
        ],
        "correctIndex": 1,
        "explanation": "Klasik dakika formülü."
      }
    ]
  },
  {
    "examId": "shells",
    "examTitle": "Sea Shells",
    "summary": "Sepete buy-X-get-Y-free kampanyaları uygular; hediyeleri düşüp kalanların tutarını yazdırırsın.",
    "goalBullets": [
      "Kampanya ve sepeti oku",
      "Koşul sağlanıyorsa hediyeyi ücretsiz düş",
      "Kalan ürünlerin toplam fiyatını bas"
    ],
    "mcqs": [
      {
        "id": "shells-mcq-1",
        "question": "Kampanya uygulanınca hediye fiyata dahil midir?",
        "options": [
          "Evet, tam fiyat",
          "Hayır, ücretsiz düşülür",
          "Yarı fiyat",
          "Vergi kadar"
        ],
        "correctIndex": 1,
        "explanation": "Gift items_to_pay’den çıkarılır."
      },
      {
        "id": "shells-mcq-2",
        "question": "Sepet kampanya şartını içeriyor mu kontrolü neye benzer?",
        "options": [
          "Sadece len eşitliği",
          "Multiset/count kontrolü",
          "sort tersi",
          "hash yok"
        ],
        "correctIndex": 1,
        "explanation": "includes: count karşılaştırması."
      }
    ]
  },
  {
    "examId": "soccer",
    "examTitle": "Soccer Stats",
    "summary": "Oyuncu CSV’sinden forvet/orta saha verimleri, genç takımlar ve en verimli forvet üçlüsünü hesaplarsın.",
    "goalBullets": [
      "Oyuncuları oku ve takıma grupla",
      "Verim formüllerini uygula",
      "Yaş ve verim sıralamalarını yazdır"
    ],
    "mcqs": [
      {
        "id": "soccer-mcq-1",
        "question": "Forvet veriminde goals ve assists nasıl girer?",
        "options": [
          "Çıkarılır",
          "Toplanır (offsides düşülür)",
          "Çarpılır",
          "Yoksayılır"
        ],
        "correctIndex": 1,
        "explanation": "(goals+assists-offsides)/minutes."
      },
      {
        "id": "soccer-mcq-2",
        "question": "Oyuncuları takıma ayırmak için uygun yapı?",
        "options": [
          "set of int",
          "dict: team → list",
          "tek string",
          "True/False"
        ],
        "correctIndex": 1,
        "explanation": "Gruplama sözlüğü."
      }
    ]
  },
  {
    "examId": "strawberry",
    "examTitle": "Strawberry Fields",
    "summary": "Metindeki kelimeleri noktalamadan arındırıp büyütür; yan yana aynı uzunlukta üçlüleri yazdırırsın.",
    "goalBullets": [
      "Dosyayı kelimelere böl",
      "strip(punctuation) + upper",
      "Eşit uzunlukta ardışık üçlüleri bas"
    ],
    "mcqs": [
      {
        "id": "strawberry-mcq-1",
        "question": "Üçlü için kayan pencere boyutu?",
        "options": [
          "2",
          "3",
          "4",
          "len(words)"
        ],
        "correctIndex": 1,
        "explanation": "Üç ardışık kelime."
      },
      {
        "id": "strawberry-mcq-2",
        "question": "Noktalama ne yapılır?",
        "options": [
          "Aynen bırakılır",
          "strip ile temizlenir",
          "Sadece ! silinir",
          "lower yapılır"
        ],
        "correctIndex": 1,
        "explanation": "strip(punctuation)."
      }
    ]
  },
  {
    "examId": "super-calculator",
    "examTitle": "Super Calculator",
    "summary": "\"sayılar : operatörler\" satırlarını soldan sağa sadece + − * ile değerlendirirsin (öncelik yok).",
    "goalBullets": [
      "Satırı ':' ile ikiye böl",
      "Operatörleri sırayla uygula",
      "Sonucu yazdır"
    ],
    "mcqs": [
      {
        "id": "super-calculator-mcq-1",
        "question": "İzin verilen operatörler?",
        "options": [
          "+, -, *, /",
          "+, -, *",
          "sadece +",
          "** ve %"
        ],
        "correctIndex": 1,
        "explanation": "README: + − *."
      },
      {
        "id": "super-calculator-mcq-2",
        "question": "Değerlendirme sırası?",
        "options": [
          "Önce çarpma önceliği",
          "Soldan sağa",
          "Sağdan sola",
          "Rastgele"
        ],
        "correctIndex": 1,
        "explanation": "Öncelik yok, soldan sağa."
      }
    ]
  },
  {
    "examId": "unsafe-meat",
    "examTitle": "Unsafe Meat",
    "summary": "Tehlikeli parti numarası aralıklarıyla satın alınan partileri karşılaştırır; aralığa düşenleri yazdırırsın.",
    "goalBullets": [
      "report.txt’ten aralık ve parti bloklarını oku",
      "Her partiyi aralıklarla kontrol et",
      "from ≤ batch ≤ to ise yazdır"
    ],
    "mcqs": [
      {
        "id": "unsafe-meat-mcq-1",
        "question": "Parti tehlikeli mi kontrolü?",
        "options": [
          "batch == from",
          "from_ <= batch <= to",
          "batch > to",
          "batch in string"
        ],
        "correctIndex": 1,
        "explanation": "Kapalı aralık."
      },
      {
        "id": "unsafe-meat-mcq-2",
        "question": "İki blok genelde nasıl ayrılır?",
        "options": [
          "Tek satır",
          "Boş satır (\\n\\n)",
          "CSV",
          "JSON"
        ],
        "correctIndex": 1,
        "explanation": "ranges ve batches boş satırla ayrılır."
      }
    ]
  },
  {
    "examId": "wobbletron3k",
    "examTitle": "Wobbletron 3000",
    "summary": "Rapor satırları ya sıkı artan ya sıkı azalan olmalı ve komşu farkları 1..3 aralığında; uygunları yazıp yüzde doğru basarsın.",
    "goalBullets": [
      "Raporları int listelerine çevir",
      "Monoton + komşu fark kontrolü yap",
      "Doğru raporları yaz ve yüzde bas"
    ],
    "mcqs": [
      {
        "id": "wobbletron3k-mcq-1",
        "question": "Komşu eleman farkı hangi aralıkta olmalı?",
        "options": [
          "0..1",
          "1..3",
          "2..5",
          "sadece 1"
        ],
        "correctIndex": 1,
        "explanation": "abs fark 1 ile 3 arası."
      },
      {
        "id": "wobbletron3k-mcq-2",
        "question": "Rapor hem artan hem azalan değilse?",
        "options": [
          "Kabul",
          "Red (False)",
          "Yarı puan",
          "Yeniden sırala"
        ],
        "correctIndex": 1,
        "explanation": "Monoton değilse güvenli değil."
      }
    ]
  },
  {
    "examId": "worms",
    "examTitle": "Worms of Words",
    "summary": "İki kelimenin aynı dizideki en küçük indeks mesafesini bulursun; hiç birlikte yoksa uyarı yazarsın.",
    "goalBullets": [
      "Dizilerde kelime konumlarını bul",
      "Tüm konum çiftleri için min |p0-p1| hesapla",
      "En iyi diziyi veya uyarıyı yazdır"
    ],
    "mcqs": [
      {
        "id": "worms-mcq-1",
        "question": "Mesafe nasıl ölçülür?",
        "options": [
          "p0 + p1",
          "abs(p0 - p1)",
          "max(p0,p1)",
          "len(seq)"
        ],
        "correctIndex": 1,
        "explanation": "İndeks farkının mutlak değeri."
      },
      {
        "id": "worms-mcq-2",
        "question": "İki kelime aynı dizide hiç yoksa?",
        "options": [
          "Mesafe 0",
          "Uyarı mesajı",
          "İlk dizi seçilir",
          "Sonsuz döngü"
        ],
        "correctIndex": 1,
        "explanation": "never appear uyarısı."
      }
    ]
  }
]

export function getExamPack(examId: string): ExamPack | undefined {
  return examPacks.find((p) => p.examId === examId)
}

export function getAllExamPacks(): ExamPack[] {
  return examPacks
}
