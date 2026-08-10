type HomeProps = {
  lessonCount: number
  examCount: number
  questionCount: number
  lessonsDone: number
  questionsDone: number
  onStartBasics: () => void
  onStartExamPrep: () => void
}

export function Home({
  lessonCount,
  examCount,
  questionCount,
  lessonsDone,
  questionsDone,
  onStartBasics,
  onStartExamPrep,
}: HomeProps) {
  return (
    <section className="home">
      <p className="eyebrow">Python sınav atölyesi</p>
      <h1 className="brand">KodAtölye</h1>
      <p className="lede">
        Önce temeli öğren, sonra bir exam seçip özet + sorularla çalış.
      </p>

      <div className="path-grid">
        <button type="button" className="path-card" onClick={onStartBasics}>
          <span className="path-kicker">1 · Başlangıç</span>
          <span className="path-title">Sıfırdan Python</span>
          <span className="path-desc">
            print’ten def’e kadar tek tek anlatım, her dersin sonunda soru.
          </span>
          <span className="path-meta">
            {lessonsDone}/{lessonCount} ders bitti
          </span>
        </button>

        <button type="button" className="path-card" onClick={onStartExamPrep}>
          <span className="path-kicker">2 · Sınav</span>
          <span className="path-title">Sınava çalış</span>
          <span className="path-desc">
            Exam seç → ne yapacağını oku → çoktan seçmeli + boşluk soruları.
          </span>
          <span className="path-meta">
            {examCount} exam · {questionsDone}/{questionCount} soru
          </span>
        </button>
      </div>
    </section>
  )
}
