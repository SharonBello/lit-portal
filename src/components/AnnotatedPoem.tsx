import { useState } from 'react'
import type { PoemStanza } from '../types'

interface AnnotatedPoemProps {
  stanzas: PoemStanza[]
  accentColor: string
}

export default function AnnotatedPoem({ stanzas, accentColor }: AnnotatedPoemProps) {
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl border border-warm p-6 md:p-10 max-w-2xl">
        {stanzas.map((stanza, si) => (
          <div key={si} className="mb-8 last:mb-0">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: accentColor }}
            >
              {stanza.label}
            </div>
            <div className="space-y-1">
              {stanza.lines.map((line, li) => (
                <div key={li} className="poem-line">
                  {line.annotation ? (
                    <span className="relative">
                      <button
                        className="annotated cursor-pointer"
                        onClick={() =>
                          setActiveAnnotation(
                            activeAnnotation === `${si}-${li}` ? null : `${si}-${li}`
                          )
                        }
                        aria-expanded={activeAnnotation === `${si}-${li}`}
                      >
                        {line.text}
                      </button>
                      {activeAnnotation === `${si}-${li}` && (
                        <span
                          className="absolute z-20 left-0 top-full mt-2 w-72 bg-navy text-white text-sm rounded-xl p-4 shadow-xl leading-relaxed"
                          role="tooltip"
                        >
                          <span className="block text-xs mb-1" style={{ color: accentColor }}>
                            Analysis
                          </span>
                          {line.annotation}
                          <button
                            className="mt-2 text-white/40 text-xs block hover:text-white/70"
                            onClick={() => setActiveAnnotation(null)}
                          >
                            Close ×
                          </button>
                        </span>
                      )}
                    </span>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {stanzas.some(s => s.lines.some(l => l.annotation)) && (
        <p className="text-sm text-navy/50 flex items-center gap-2">
          <span
            className="inline-block w-3 h-0.5 rounded"
            style={{ background: accentColor }}
          />
          Tap underlined text to reveal analysis
        </p>
      )}
    </div>
  )
}
