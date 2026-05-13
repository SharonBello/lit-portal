import { useState } from 'react'
import type { QuizQuestion } from '../types'

const TYPE_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  lots:     { label: 'LOTS',     color: 'text-blue-700',   bg: 'bg-blue-50'   },
  analysis: { label: 'Analysis', color: 'text-teal-700',   bg: 'bg-teal-50'   },
  hots:     { label: 'HOTS',     color: 'text-red-700',    bg: 'bg-red-50'    },
  bridging: { label: 'Bridging', color: 'text-purple-700', bg: 'bg-purple-50' },
}

interface QuizProps {
  questions: QuizQuestion[]
  accentColor: string
}

export default function Quiz({ questions, accentColor }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const score = submitted
    ? questions.filter(q => questions.findIndex(x => x.id === q.id) >= 0 &&
        answers[q.id] !== undefined &&
        q.options[answers[q.id]]?.correct).length
    : 0

  const handleAnswer = (qId: string, idx: number) => {
    if (answers[qId] !== undefined) return
    setAnswers(prev => ({ ...prev, [qId]: idx }))
  }

  const allAnswered = questions.every(q => answers[q.id] !== undefined)

  const pct = submitted ? Math.round((score / questions.length) * 100) : 0
  const grade =
    pct >= 80 ? { label: 'Excellent', color: 'text-teal-700' }
    : pct >= 60 ? { label: 'Good', color: 'text-blue-700' }
    : pct >= 40 ? { label: 'Developing', color: 'text-orange-700' }
    : { label: 'Keep reviewing', color: 'text-red-700' }

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const answered = answers[q.id] !== undefined
        const chosenIdx = answers[q.id]
        const type = TYPE_LABELS[q.type] ?? TYPE_LABELS.hots

        return (
          <div key={q.id} className="bg-white rounded-xl border border-warm shadow-sm overflow-hidden">
            <div className="p-5">
              <span className={`pill text-xs mb-3 inline-block ${type.bg} ${type.color}`}>
                {type.label}
              </span>
              <p className="font-serif text-lg text-navy leading-relaxed mb-4">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosenIdx === oi
                  const isCorrect = opt.correct
                  const showResult = answered && submitted

                  let cls = 'w-full text-left p-3 rounded-lg border-2 text-sm transition-all flex gap-3 items-start '
                  if (!answered) {
                    cls += 'border-warm hover:border-navy/30 cursor-pointer'
                  } else if (showResult) {
                    if (isChosen && isCorrect) cls += 'border-teal bg-teal-50'
                    else if (isChosen && !isCorrect) cls += 'border-red bg-red-50'
                    else if (!isChosen && isCorrect) cls += 'border-teal/50 bg-teal-50/50'
                    else cls += 'border-warm opacity-50'
                  } else {
                    if (isChosen) cls += 'border-navy/40 bg-warm'
                    else cls += 'border-warm opacity-60'
                  }

                  return (
                    <button
                      key={oi}
                      className={cls}
                      onClick={() => handleAnswer(q.id, oi)}
                      disabled={answered}
                    >
                      <span className={`shrink-0 w-6 h-6 rounded text-xs font-bold flex items-center justify-center mt-0.5
                        ${showResult && isChosen && isCorrect ? 'bg-teal text-white' : ''}
                        ${showResult && isChosen && !isCorrect ? 'bg-red text-white' : ''}
                        ${showResult && !isChosen && isCorrect ? 'bg-teal/60 text-white' : ''}
                        ${!showResult ? 'bg-warm text-navy' : ''}
                      `}>
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span>{opt.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Feedback */}
              {answered && submitted && (
                <div className={`mt-3 p-3 rounded-lg text-sm leading-relaxed ${
                  q.options[chosenIdx]?.correct
                    ? 'bg-teal-50 border border-teal/20 text-teal-800'
                    : 'bg-red-50 border border-red/20 text-red-800'
                }`}>
                  {q.options[chosenIdx]?.correct ? '✓ ' : '✗ '}
                  {q.options[chosenIdx]?.feedback}
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Submit / Score */}
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
            allAnswered
              ? 'text-white shadow-sm hover:shadow-md active:scale-[0.99]'
              : 'bg-warm text-navy/40 cursor-not-allowed'
          }`}
          style={allAnswered ? { background: accentColor } : {}}
        >
          {allAnswered ? 'Check My Answers' : `Answer all ${questions.length} questions to submit`}
        </button>
      ) : (
        <div className="bg-navy rounded-xl p-6 text-center">
          <div className="text-5xl font-serif font-bold mb-1" style={{ color: accentColor }}>
            {score}/{questions.length}
          </div>
          <div className={`text-lg font-semibold mb-3 ${grade.color.replace('text-', 'text-').replace('-700', '-400')}`}>
            {grade.label}
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 mb-4">
            <div
              className="h-2 rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, background: accentColor }}
            />
          </div>
          <button
            onClick={() => { setAnswers({}); setSubmitted(false) }}
            className="text-white/50 text-sm hover:text-white transition-colors"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  )
}
