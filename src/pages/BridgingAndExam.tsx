const BRIDGING_TYPES = [
  { num: 1, type: 'Text ↔ Text', color: '#5B4A8C', bg: '#F4F0FB', desc: 'Compare how two texts deal with the same theme, idea, or literary technique. Reference BOTH with specific evidence.', example: '"Compare how Angelou and Hughes use bird imagery to explore racial oppression."' },
  { num: 2, type: 'Text ↔ Author', color: '#1A7268', bg: '#E8F5F4', desc: 'Connect the work to the author\'s biography or historical context. Show how the author\'s life is reflected in the text.', example: '"How does Malamud\'s immigrant background help us understand George?"' },
  { num: 3, type: 'Text ↔ World', color: '#C0392B', bg: '#FDEDEC', desc: 'Relate the text to historical events, social issues, or contemporary relevance.', example: '"In what ways is the prejudice in \'Mr. Know-All\' still relevant today?"' },
  { num: 4, type: 'Text ↔ Self', color: '#B7410E', bg: '#FEF5EC', desc: 'Connect the text\'s themes to your own personal experience. Describe your experience and link it explicitly back to the text.', example: '"Describe a time when, like George, reputation mattered more than reality."' },
]

const FROST_EXAMPLE = {
  newInfo: '"Robert Frost was a loner who liked company; a poet of isolation who sought a mass audience; a rebel who sought to fit in." — Frost\'s biographer',
  steps: [
    { label: 'Explain', body: 'Frost\'s biographer describes him as a man of contradictions — a loner who seeks company, a rebel who seeks to fit in.' },
    { label: 'Connect to Poem — 2 Examples', body: 'Like the poet, the speaker walks the woods by himself (the loner), chooses the "less traveled" road (the rebel), yet keeps the other road as an option and imagines telling the story for an audience (seeking to fit in).' },
    { label: 'Explicit Connection', body: 'The contradictions in Frost\'s personality are mirrored in the poem\'s speaker — someone who wants to be individual but cannot fully let go of the conventional path.' },
  ],
}

export function BridgingGuide() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif text-4xl text-navy mb-3">Bridging Questions</h1>
      <p className="text-navy/60 mb-8 leading-relaxed max-w-xl">
        Bridging questions connect the literary text to a wider context. Four types — each uses the same 3-step structure.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
        {BRIDGING_TYPES.map(bt => (
          <div key={bt.num} className="bg-white rounded-xl border border-warm p-5 overflow-hidden" style={{ borderTop: `3px solid ${bt.color}` }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: bt.color }}>Type {bt.num}</div>
            <h3 className="font-semibold text-navy mb-2 text-lg">{bt.type}</h3>
            <p className="text-sm text-navy/60 leading-relaxed mb-3">{bt.desc}</p>
            <div className="text-xs italic px-3 py-2 rounded-lg" style={{ background: bt.bg, color: bt.color }}>
              "{bt.example}"
            </div>
          </div>
        ))}
      </div>

      {/* Worked example */}
      <h2 className="font-serif text-2xl text-navy mb-4">Worked Example — Text ↔ Author (Frost)</h2>
      <div className="bg-navy rounded-t-xl p-6 mb-0">
        <div className="text-xs uppercase tracking-widest text-gold/70 mb-2">New Information</div>
        <p className="font-serif text-lg text-white leading-relaxed mb-4">{FROST_EXAMPLE.newInfo}</p>
        <p className="text-white/50">How is this reflected in the poem?</p>
      </div>
      <div className="border border-warm rounded-b-xl overflow-hidden mb-10">
        {FROST_EXAMPLE.steps.map((step, i) => (
          <div key={i} className={`flex border-b border-warm last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-warm/30'}`}>
            <div className="w-10 flex items-center justify-center py-4 shrink-0">
              <div className="w-7 h-7 rounded-full bg-purple text-white text-xs font-bold flex items-center justify-center">{i + 1}</div>
            </div>
            <div className="w-36 shrink-0 border-l-4 border-purple bg-purple/5 flex items-center px-3 py-4">
              <span className="text-xs font-bold text-purple uppercase tracking-wide leading-tight">{step.label}</span>
            </div>
            <div className="flex-1 py-4 px-4 text-sm text-navy leading-relaxed">{step.body}</div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-warm rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <h3 className="col-span-full font-semibold text-navy mb-1">Bridging Tips</h3>
        {[
          { t: 'Explain first', b: 'Paraphrase the quote or bio info before connecting to the text.' },
          { t: 'Use starter phrases', b: '"This can be seen in..." / "The connection is that..." signal the structure to the examiner.' },
          { t: 'Two examples minimum', b: 'One example is not enough. Always use two pieces of textual evidence.' },
          { t: 'Name both sides explicitly', b: '"Just as [author detail], so too [character]..." — don\'t leave the connection for the examiner to infer.' },
        ].map((tip, i) => (
          <div key={i} className="border-l-4 border-gold pl-4">
            <div className="font-semibold text-navy text-sm">{tip.t}</div>
            <div className="text-sm text-navy/60 leading-relaxed">{tip.b}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ExamStrategy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif text-4xl text-navy mb-3">Exam Strategy</h1>
      <p className="text-navy/60 mb-8 max-w-xl leading-relaxed">
        How to read the question, structure the answer, and allocate your time in the 5-point Bagrut exam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-white rounded-xl border border-warm p-6">
          <h3 className="font-semibold text-navy mb-4">Before You Write — 4 Steps</h3>
          {['Read the question twice — underline key words', 'Identify the type: LOTS / Analysis / HOTS / Bridging', 'Note the point value — it tells you how much to write', 'Find the relevant section of the text before writing'].map((s, i) => (
            <div key={i} className="flex gap-3 mb-3 last:mb-0">
              <div className="w-6 h-6 rounded-full bg-gold/15 text-gold font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</div>
              <div className="text-sm text-navy">{s}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-warm p-6">
          <h3 className="font-semibold text-navy mb-4">Answer Length by Points</h3>
          {[
            { pts: '5 pts — LOTS', guide: '1–2 sentences', color: '#EBF5FB', textColor: '#1A5276' },
            { pts: '5 pts — Analysis', guide: 'Name + Quote + Effect', color: '#E8F5F4', textColor: '#1A7268' },
            { pts: '8 pts — HOTS', guide: '3–4 sentences, 2 examples', color: '#FDEDEC', textColor: '#C0392B' },
            { pts: '10 pts — HOTS', guide: 'Full 5-step paragraph', color: '#FDEDEC', textColor: '#C0392B' },
            { pts: 'Bridging', guide: '3 steps, 8–12 sentences', color: '#F4F0FB', textColor: '#5B4A8C' },
          ].map((r, i) => (
            <div key={i} className="flex justify-between items-center px-3 py-2 rounded-lg mb-2 last:mb-0" style={{ background: r.color }}>
              <span className="text-sm font-semibold" style={{ color: r.textColor }}>{r.pts}</span>
              <span className="text-xs text-navy/60">{r.guide}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-warm rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <h3 className="col-span-full font-semibold text-navy">Golden Rules</h3>
        {[
          { t: 'Claim → Evidence → Explanation', b: 'Every paragraph: make a claim, support with a quote or reference, then explain the connection.' },
          { t: 'Never end on a quote', b: 'A quote is evidence — not an answer. Always follow a quote with your explanation.' },
          { t: 'Name the thinking skill', b: 'For HOTS questions requesting a skill: "The thinking skill I use is: Inferring."' },
          { t: 'Re-read before answering', b: 'Find the relevant section of the text before you write. Answers that contradict the text lose all points.' },
        ].map((rule, i) => (
          <div key={i} className="border-l-4 border-gold pl-4">
            <div className="font-semibold text-navy text-sm">{rule.t}</div>
            <div className="text-sm text-navy/60 leading-relaxed">{rule.b}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
