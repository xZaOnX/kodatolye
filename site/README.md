# KodAtölye

Python sınav çözümlerinden türetilmiş boşluk doldurma çalışma sitesi.

## Çalıştır

```bash
cd site
npm install
npm run dev
```

## Yapı

- `src/data/lessons.ts` — sıfırdan Python dersleri + sorular
- `src/data/exercises.ts` — 25 exam × 3 = 75 Seviye 1 boşluk egzersizi
- `src/components/` — ana sayfa, ders, egzersiz listesi ve UI
- `scripts/verify-exercises.mjs` / `verify-ui.py` — checker + UI doğrulama
- `../exams/` — orijinal exam kaynakları
