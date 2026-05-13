import { Link } from 'react-router-dom'
import { allTexts, poems, stories } from '../data/texts'
import type { TextMeta } from '../types'

function TextCard({ text }: { text: TextMeta }) {
  const path = `/${text.type === 'poem' ? 'poem' : 'story'}/${text.id}`
  const isPD = text.type === 'poem' && text.copyrightFree

  return (
    <Link
      to={path}
      className="card block overflow-hidden group transition-transform hover:-translate-y-1"
    >
      {/* Colour bar */}
      <div className="h-1.5" style={{ background: text.accentColor }} />

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p className="text-xs text-navy/40 uppercase tracking-wider mb-1">
              {text.author} · {text.year}
            </p>
            <h3 className="font-serif text-xl text-navy leading-tight group-hover:opacity-80 transition-opacity">
              {text.title}
            </h3>
          </div>
          <span
            className="text-xs font-semibold px-2 py-1 rounded-full shrink-0"
            style={{ background: `${text.accentColor}18`, color: text.accentColor }}
          >
            {text.type === 'poem' ? 'Poem' : 'Story'}
          </span>
        </div>

        <p className="text-sm text-navy/50 mb-3">
          {text.type === 'poem' ? text.keyFeature : text.synopsis.slice(0, 90) + '…'}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {text.themes.slice(0, 3).map(t => (
            <span key={t} className="text-xs bg-warm text-navy/50 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-warm">
          <span
            className="text-xs font-semibold flex items-center gap-1"
            style={{ color: text.accentColor }}
          >
            Open module →
          </span>
          <span className="text-xs text-navy/30">
            {text.type === 'poem' ? text.form : text.setting}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-block text-xs font-bold uppercase tracking-widest text-gold/70 bg-gold/10 px-3 py-1 rounded-full mb-4">
          5-Point Bagrut Preparation
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-3">
          English Literature Portal
        </h1>
        <p className="text-navy/60 max-w-xl leading-relaxed">
          Seven texts. HOTS analysis. Bridging activities. Question type guides.
          Everything you need for the 5-point Bagrut literature exam.
        </p>
        <div className="flex gap-6 mt-5">
          {[
            { n: '5', l: 'Poems' },
            { n: '2', l: 'Short Stories' },
            { n: '4', l: 'Question Types' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-2xl font-serif font-bold text-gold">{s.n}</div>
              <div className="text-xs text-navy/40 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick access tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {[
          { to: '/question-types', label: '📝 Question Types & Structures' },
          { to: '/bridging', label: '🌉 Bridging Guide' },
          { to: '/exam-strategy', label: '🎯 Exam Strategy' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="text-sm bg-white border border-warm rounded-full px-4 py-2 text-navy/70 hover:text-navy hover:border-navy/30 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Poems */}
      <section className="mb-10">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px flex-1 bg-warm" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-navy/40">
            Poetry · {poems.length} texts
          </h2>
          <div className="h-px flex-1 bg-warm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {poems.map(p => <TextCard key={p.id} text={p} />)}
        </div>
      </section>

      {/* Stories */}
      <section>
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px flex-1 bg-warm" />
          <h2 className="text-xs font-bold uppercase tracking-widest text-navy/40">
            Short Fiction · {stories.length} texts
          </h2>
          <div className="h-px flex-1 bg-warm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stories.map(s => <TextCard key={s.id} text={s} />)}
        </div>
      </section>
    </div>
  )
}
