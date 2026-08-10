import type { Exercise } from '../types'

type ExerciseListProps = {
  groups: { examId: string; examTitle: string; items: Exercise[] }[]
  solvedIds: string[]
  onBack: () => void
  onPick: (exercise: Exercise) => void
}

export function ExerciseList({
  groups,
  solvedIds,
  onBack,
  onPick,
}: ExerciseListProps) {
  const total = groups.reduce((n, g) => n + g.items.length, 0)
  const solved = solvedIds.length

  return (
    <section className="exercise-list">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Ana sayfa
        </button>
        <span className="meta">
          {solved}/{total} çözüldü · {groups.length} exam
        </span>
      </header>

      <h2 className="exercise-title">Boşluk doldur</h2>
      <p className="exercise-goal">
        Her exam’den Seviye 1 scaffold soruları. Birini seç, yazarak çöz.
      </p>

      <div className="exam-groups">
        {groups.map((group) => {
          const done = group.items.filter((i) => solvedIds.includes(i.id)).length
          return (
            <div key={group.examId} className="exam-group">
              <div className="exam-group-head">
                <h3>{group.examTitle}</h3>
                <span>
                  {done}/{group.items.length}
                </span>
              </div>
              <ul className="exam-item-list">
                {group.items.map((item) => {
                  const ok = solvedIds.includes(item.id)
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`exam-item ${ok ? 'is-done' : ''}`}
                        onClick={() => onPick(item)}
                      >
                        <span className="exam-item-title">{item.title}</span>
                        <span className="exam-item-goal">{item.goal}</span>
                        {ok && <span className="exam-item-badge">✓</span>}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
