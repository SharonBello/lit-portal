const TYPES = [
  {
    id: 'lots',
    label: 'LOTS',
    title: 'Literal / Direct',
    color: '#1A5276',
    bg: '#EBF5FB',
    pts: '5 points',
    desc: 'The answer is stated directly in the text. Find it, paraphrase it, write it.',
    steps: [
      { label: 'Read the Question', body: 'Identify exactly what is being asked. Which word, line, or event?' },
      { label: 'Locate in Text', body: 'The answer is there. Find the relevant line or paragraph.' },
      { label: 'Answer Directly', body: 'State it clearly. No opinion or interpretation needed.', example: '✓ "His wings are clipped and his feet are tied."' },
    ],
  },
  {
    id: 'analysis',
    label: 'Analysis',
    title: 'Literary Analysis',
    color: '#1A7268',
    bg: '#E8F5F4',
    pts: '5–8 points',
    desc: 'Identify a literary device, quote it, and explain its effect on the reader.',
    steps: [
      { label: 'Name the Device', body: 'Metaphor, simile, imagery, symbolism, irony, personification, tone...' },
      { label: 'Quote the Example', body: 'Give the exact line or phrase from the text.' },
      { label: 'Explain the Effect', body: 'What does it make the reader feel or understand?' },
      { label: 'Link to Theme', body: 'Connect the device to the poem\'s or story\'s larger meaning.', example: 'Name → Quote → Effect → Theme' },
    ],
  },
  {
    id: 'hots',
    label: 'HOTS',
    title: 'Higher Order Thinking',
    color: '#C0392B',
    bg: '#FDEDEC',
    pts: '8–10 points',
    desc: 'Your reasoned opinion, supported by two pieces of textual evidence. 5-step structure.',
    steps: [
      { label: 'Answer the Question', body: 'State your position in one clear sentence.' },
      { label: 'Explain Your Answer', body: 'Expand on your position. Clarify what you mean.' },
      { label: '1st Example + Explanation', body: 'Specific textual evidence + how it supports your answer.' },
      { label: '2nd Example + Explanation', body: 'A second piece of evidence, possibly from a different part of the text.' },
      { label: 'Concluding Sentence', body: 'Restate your position with a broader literary or thematic insight.', example: 'Answer → Explain → Evidence 1 → Evidence 2 → Conclusion' },
    ],
  },
  {
    id: 'bridging',
    label: 'Bridging',
    title: 'Text Connection',
    color: '#5B4A8C',
    bg: '#F4F0FB',
    pts: '10–15 points',
    desc: 'Connect the text to new information — author biography, world events, another text, or yourself. 3-step structure.',
    steps: [
      { label: 'Explain the New Information', body: 'Paraphrase the quote or biographical info in your own words. Show you understand it.' },
      { label: 'Connect to Text — 2 Examples', body: 'Show how the new info is reflected in the text using 2 specific textual examples.' },
      { label: 'Make the Explicit Connection', body: 'State: "The connection between the text and the new information is that..."', example: 'Explain Info → 2 Text Examples → Explicit Link' },
    ],
  },
]

const WORKED_EXAMPLES = [
  {
    type: 'HOTS',
    color: '#C0392B',
    bg: '#FDEDEC',
    textTitle: '"Caged Bird" — Maya Angelou',
    question: 'What is the role of the caged bird in the poem?',
    steps: [
      { label: 'Answer the Question', body: 'The caged bird in the poem represents **oppressed people**.' },
      { label: 'Explain Your Answer', body: 'People whose **right to choose freely has been taken away**.' },
      { label: '1st Example + Explanation', body: 'Since all other rights have been deprived — **"wings are clipped, feet are tied"** — the bird is physically prevented from expressing freedom in any way.' },
      { label: '2nd Example + Explanation', body: 'The bird uses **the only thing not taken away — its voice**. This is also symbolic: Maya Angelou did not speak voluntarily for five years because she was oppressed.' },
      { label: 'Concluding Sentence', body: 'Thus the role of the caged bird manifests in both **the poet as an oppressed individual** and the imagery of the caged bird — showing that the human spirit cannot be fully silenced.' },
    ],
  },
  {
    type: 'Bridging',
    color: '#5B4A8C',
    bg: '#F4F0FB',
    textTitle: '"A Summer\'s Reading" — Bernard Malamud',
    question: 'Bernard Malamud was born in Brooklyn, son of Russian-Jewish immigrants. He was 15 at the start of the Great Depression and had to work in his twenties to support his widowed mother while still attending college. How does this biographical information help you better understand George and his background?',
    steps: [
      { label: 'Explain the New Information', body: 'I learned that Malamud\'s life was difficult when he was young. Even though he came from a poor immigrant family, he worked hard to support his family and **still got a good college education**.' },
      { label: 'Connect to Text — 2 Examples', body: 'This can be seen in \'A Summer\'s Reading\' by looking at George. His father **has to work hard in the fish market** to put food on the table. We can understand from **George\'s lie about reading a hundred books** that he also realises the only way out is through education — even if it takes him time to act on it.' },
      { label: 'Explicit Connection', body: 'The connection between the story and the new information is that **Malamud\'s life is reflected in George Stoyonovich**. They are both sons of poor immigrants who realise the only way to improve their situation is through education. George decides to go to the library while Malamud put himself through college and became an author.' },
    ],
  },
]

const THINKING_SKILLS = [
  { name: 'Inferring', desc: 'Drawing a conclusion not stated directly, based on clues in the text.' },
  { name: 'Cause & Effect', desc: 'What causes an event or feeling, and what results from it.' },
  { name: 'Distinguishing Perspectives', desc: 'How different characters see the same situation differently.' },
  { name: 'Problem Solving', desc: 'Identify problem → consider options → weigh pros/cons → decide.' },
  { name: 'Evaluating', desc: 'A judgment about effectiveness or value, supported by textual evidence.' },
  { name: 'Comparing & Contrasting', desc: 'Similarities and differences between characters, texts, or ideas.' },
]

const CONNECTORS = [
  { label: 'Analysis — Effect', color: '#1A7268', bg: '#E8F5F4', words: ['This suggests', 'This implies', 'This creates', 'This highlights', 'This shows'] },
  { label: 'HOTS — Comparison', color: '#C0392B', bg: '#FDEDEC', words: ['On one hand', 'On the other hand', 'In contrast', 'Similarly', 'Unlike'] },
  { label: 'Bridging — Linking', color: '#5B4A8C', bg: '#F4F0FB', words: ['I learned that', 'This can be seen in', 'The connection is that', 'This is reflected in'] },
  { label: 'All Types — Evidence', color: '#1A5276', bg: '#EBF5FB', words: ['For example', 'Furthermore', 'This is evident in', 'In addition'] },
]

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export default function QuestionTypes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl text-navy mb-3">Question Types & Answer Structures</h1>
        <p className="text-navy/60 max-w-xl mx-auto leading-relaxed">
          Every Bagrut literature question belongs to one of four types.
          Identifying the type tells you how much to write, what to include, and where to look.
        </p>
      </div>

      {/* 4 type cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {TYPES.map(type => (
          <div key={type.id} className="bg-white rounded-2xl border border-warm overflow-hidden">
            <div className="h-1.5" style={{ background: type.color }} />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="pill"
                  style={{ background: type.bg, color: type.color }}
                >
                  {type.label}
                </span>
                <span className="text-xs text-navy/40">{type.pts}</span>
              </div>
              <h3 className="font-serif text-xl text-navy mb-1">{type.title}</h3>
              <p className="text-sm text-navy/60 mb-4 leading-relaxed">{type.desc}</p>

              {/* Steps */}
              <div>
                {type.steps.map((step, si) => (
                  <div key={si} className="flex gap-0 mb-0">
                    <div className="flex flex-col items-center w-10 shrink-0">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: type.color }}
                      >
                        {si + 1}
                      </div>
                      {si < type.steps.length - 1 && (
                        <div className="w-0.5 flex-1 my-1" style={{ background: type.color + '30' }} />
                      )}
                    </div>
                    <div className="pb-4 pl-3 flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: type.color }}>
                        {step.label}
                      </div>
                      <p className="text-sm text-navy/70 leading-relaxed">{step.body}</p>
                      {step.example && (
                        <div className="mt-1.5 text-xs italic px-2 py-1.5 rounded" style={{ background: type.bg, color: type.color }}>
                          {step.example}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Worked Examples */}
      <h2 className="font-serif text-3xl text-navy mb-2">Worked Examples</h2>
      <p className="text-navy/60 mb-6">See how each structure looks with real answers from your texts.</p>

      <div className="space-y-8 mb-14">
        {WORKED_EXAMPLES.map((ex, ei) => (
          <div key={ei}>
            <div className="text-sm text-navy/50 mb-2">{ex.type} · {ex.textTitle}</div>
            {/* Question */}
            <div className="bg-navy rounded-t-xl p-5">
              <div className="text-xs uppercase tracking-widest text-gold/70 mb-2">Question</div>
              <p className="font-serif text-lg text-white leading-relaxed">{ex.question}</p>
            </div>
            {/* Answer steps */}
            <div className="border border-warm rounded-b-xl overflow-hidden">
              {ex.steps.map((step, si) => (
                <div key={si} className={`flex border-b border-warm last:border-b-0 ${si % 2 === 0 ? 'bg-white' : 'bg-warm/30'}`}>
                  <div className="w-10 flex items-center justify-center shrink-0 py-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: ex.color }}
                    >
                      {si + 1}
                    </div>
                  </div>
                  <div
                    className="w-36 shrink-0 py-4 pr-3 flex items-center border-l-4 pl-3"
                    style={{ borderColor: ex.color, background: ex.bg + '60' }}
                  >
                    <span className="text-xs font-bold uppercase tracking-wide leading-tight" style={{ color: ex.color }}>
                      {step.label}
                    </span>
                  </div>
                  <div className="flex-1 py-4 px-4 text-sm text-navy leading-relaxed">
                    {renderBold(step.body)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Connector Words */}
      <div className="bg-warm rounded-2xl p-6 mb-8">
        <h3 className="font-semibold text-navy mb-4">Useful Connector Words by Question Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONNECTORS.map((c, i) => (
            <div key={i}>
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: c.color }}>
                {c.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.words.map(w => (
                  <span key={w} className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: c.bg, color: c.color }}>
                    {w}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thinking Skills */}
      <div className="bg-white rounded-2xl border border-warm p-6">
        <h3 className="font-semibold text-navy mb-1">Thinking Skills for HOTS Answers</h3>
        <p className="text-sm text-navy/50 mb-4">When the question asks for a thinking skill, name it: "The thinking skill I use is: Inferring."</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {THINKING_SKILLS.map(ts => (
            <div key={ts.name} className="bg-cream rounded-xl p-3 border border-warm">
              <div className="font-semibold text-navy text-sm mb-1">{ts.name}</div>
              <div className="text-xs text-navy/60 leading-relaxed">{ts.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
