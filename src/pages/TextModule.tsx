import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getTextById } from '../data/texts'
import type { PoemMeta, StoryMeta, LiteraryDevice, WritingPrompt } from '../types'
import Quiz from '../components/Quiz'
import BridgingPanel from '../components/BridgingPanel'
import AnnotatedPoem from '../components/AnnotatedPoem'

// ── Tab definitions ────────────────────────────────────────────────

const POEM_TABS = ['Overview', 'The Poem', 'Analysis', 'Literary Devices', 'HOTS Quiz', 'Bridging', 'Writing']
const STORY_TABS = ['Overview', 'Synopsis', 'Characters', 'Literary Devices', 'HOTS Quiz', 'Bridging', 'Writing']

// ── Sub-components ────────────────────────────────────────────────

function DeviceCard({ device }: { device: LiteraryDevice }) {
  return (
    <div className="bg-white rounded-xl border border-warm p-5">
      <div className="text-xs font-bold uppercase tracking-wider text-navy/40 mb-1">{device.type}</div>
      <div className="font-semibold text-navy mb-1">{device.name}</div>
      <div className="font-serif text-sm italic text-navy/60 mb-2">"{device.example}"</div>
      <p className="text-sm text-navy/70 leading-relaxed">{device.explanation}</p>
    </div>
  )
}

function WritingCard({ prompt, color }: { prompt: WritingPrompt; color: string }) {
  return (
    <div className="bg-navy rounded-xl p-6">
      <div
        className="text-xs font-bold uppercase tracking-widest mb-3"
        style={{ color }}
      >
        {prompt.type}
      </div>
      <p className="font-serif text-lg text-white leading-relaxed mb-3">{prompt.prompt}</p>
      <p className="text-sm text-white/50 leading-relaxed">{prompt.guidance}</p>
    </div>
  )
}

// ── Poem tabs ─────────────────────────────────────────────────────

function PoemOverview({ poem }: { poem: PoemMeta }) {
  return (
    <div className="section-fade space-y-6">
      {/* Hero info */}
      <div
        className="rounded-2xl p-8 md:p-12 text-white"
        style={{ background: poem.bgColor }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4 inline-block border rounded-full px-3 py-1"
          style={{ color: poem.accentColor, borderColor: poem.accentColor + '40' }}
        >
          {poem.year} · {poem.form}
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mb-2">{poem.title}</h1>
        <p className="font-serif italic text-white/60 text-xl mb-6">{poem.author}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {poem.themes.map(t => (
            <span key={t} className="text-xs border border-white/20 text-white/60 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        {poem.keyFeature && (
          <div className="text-sm text-white/40">
            Key feature: <span className="text-white/70">{poem.keyFeature}</span>
          </div>
        )}
      </div>

      {/* Special note */}
      {poem.specialNote && poem.specialNoteContent && (
        <div
          className="rounded-xl border p-5"
          style={{ borderColor: poem.accentColor + '30', background: poem.accentColor + '08' }}
        >
          <div className="font-bold text-sm mb-2" style={{ color: poem.accentColor }}>
            {poem.specialNote}
          </div>
          <p className="text-sm text-navy/80 leading-relaxed">{poem.specialNoteContent}</p>
        </div>
      )}
    </div>
  )
}

function PoemText({ poem }: { poem: PoemMeta }) {
  if (!poem.copyrightFree) {
    return (
      <div className="section-fade">
        <div className="bg-warm border border-warm rounded-xl p-6 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-gold mb-2">Note on Access</div>
          <p className="text-sm text-navy/70 leading-relaxed">
            "{poem.title}" ({poem.year}) is protected by copyright. This module provides detailed analysis,
            stanza-by-stanza study, and full HOTS practice. Read the poem on the{' '}
            <a href="https://www.poetryfoundation.org" target="_blank" rel="noopener noreferrer"
              className="underline text-blue">Poetry Foundation ↗</a> before continuing.
          </p>
        </div>
        {poem.stanzaAnalysis && <StanzaAnalysisSection poem={poem} />}
      </div>
    )
  }
  if (!poem.stanzas) {
    return <p className="text-navy/50">Poem text not available.</p>
  }
  return (
    <div className="section-fade">
      <p className="text-sm text-navy/50 mb-5">Tap underlined text to reveal analysis notes.</p>
      <AnnotatedPoem stanzas={poem.stanzas} accentColor={poem.accentColor} />
    </div>
  )
}

function StanzaAnalysisSection({ poem }: { poem: PoemMeta }) {
  const [open, setOpen] = useState<number | null>(null)
  if (!poem.stanzaAnalysis) return null
  return (
    <div className="space-y-3">
      {poem.stanzaAnalysis.map((sa, i) => (
        <div key={i} className="bg-white rounded-xl border border-warm overflow-hidden">
          <button
            className="w-full text-left p-4 flex items-center gap-4 hover:bg-warm/50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div
              className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-white text-sm font-bold"
              style={{ background: poem.accentColor }}
            >
              {sa.number}
            </div>
            <div className="flex-1 font-semibold text-navy">{sa.title}</div>
            <span className="text-navy/30 text-lg">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 border-t border-warm">
              <p className="text-sm text-navy/80 leading-relaxed mt-4 mb-3">{sa.analysis}</p>
              <div
                className="rounded-lg p-3 text-sm font-serif italic leading-relaxed"
                style={{ background: poem.accentColor + '10', color: poem.accentColor }}
              >
                {sa.keyInsight}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function PoemAnalysis({ poem }: { poem: PoemMeta }) {
  return (
    <div className="section-fade space-y-6">
      {poem.specialNote && poem.specialNoteContent && (
        <div className="rounded-xl border p-5" style={{ borderColor: poem.accentColor + '30', background: poem.accentColor + '08' }}>
          <div className="font-bold text-sm mb-2" style={{ color: poem.accentColor }}>{poem.specialNote}</div>
          <p className="text-sm text-navy/80 leading-relaxed">{poem.specialNoteContent}</p>
        </div>
      )}
      <StanzaAnalysisSection poem={poem} />
    </div>
  )
}

// ── Story tabs ────────────────────────────────────────────────────

function StoryOverview({ story }: { story: StoryMeta }) {
  return (
    <div className="section-fade space-y-6">
      <div className="rounded-2xl p-8 md:p-12 text-white" style={{ background: story.bgColor }}>
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4 inline-block border rounded-full px-3 py-1"
          style={{ color: story.accentColor, borderColor: story.accentColor + '40' }}
        >
          {story.year} · Short Story
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mb-2">{story.title}</h1>
        <p className="font-serif italic text-white/60 text-xl mb-6">{story.author}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {story.themes.map(t => (
            <span key={t} className="text-xs border border-white/20 text-white/60 px-3 py-1 rounded-full">{t}</span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><div className="text-white/40 text-xs uppercase tracking-wider mb-1">Setting</div><div className="text-white/80">{story.setting}</div></div>
          <div><div className="text-white/40 text-xs uppercase tracking-wider mb-1">Narrator</div><div className="text-white/80">{story.narrator}</div></div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-warm p-6">
        <h3 className="font-semibold text-navy mb-2">Synopsis</h3>
        <p className="text-navy/70 leading-relaxed">{story.synopsis}</p>
      </div>
    </div>
  )
}

function StorySynopsis({ story }: { story: StoryMeta }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="section-fade space-y-3">
      {story.sections.map((sec, i) => (
        <div key={i} className="bg-white rounded-xl border border-warm overflow-hidden">
          <button
            className="w-full text-left p-4 flex items-center gap-4 hover:bg-warm/50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: story.accentColor }}>
              {i + 1}
            </div>
            <div className="font-semibold text-navy flex-1">{sec.title}</div>
            <span className="text-navy/30 text-lg">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 border-t border-warm space-y-3">
              <p className="text-sm text-navy/70 leading-relaxed mt-4">{sec.summary}</p>
              {sec.keyQuote && (
                <blockquote className="border-l-4 pl-4 font-serif italic text-navy/60 text-sm"
                  style={{ borderColor: story.accentColor }}>
                  "{sec.keyQuote}"
                </blockquote>
              )}
              <div className="bg-warm rounded-lg p-3 text-sm text-navy/80 leading-relaxed">
                <span className="font-semibold text-navy/50 text-xs uppercase tracking-wider block mb-1">Analysis</span>
                {sec.analysis}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function StoryCharacters({ story }: { story: StoryMeta }) {
  return (
    <div className="section-fade grid grid-cols-1 md:grid-cols-2 gap-4">
      {story.characters.map((ch, i) => (
        <div key={i} className="bg-white rounded-xl border border-warm p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ background: story.accentColor }}>
              {ch.name[0]}
            </div>
            <div>
              <div className="font-semibold text-navy">{ch.name}</div>
              <div className="text-xs text-navy/40 uppercase tracking-wider">{ch.role}</div>
            </div>
          </div>
          <p className="text-sm text-navy/70 leading-relaxed mb-2">{ch.description}</p>
          <div className="bg-warm rounded-lg p-3 text-sm text-navy/70 leading-relaxed">
            <span className="font-semibold text-navy/50 text-xs uppercase tracking-wider block mb-1">Arc</span>
            {ch.arc}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main TextModule ───────────────────────────────────────────────

export default function TextModule() {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState(0)

  if (!id) return <Navigate to="/" replace />
  const text = getTextById(id)
  if (!text) return <Navigate to="/" replace />

  const tabs = text.type === 'poem' ? POEM_TABS : STORY_TABS
  const accentColor = text.accentColor

  // Render the active tab content
  const renderTab = () => {
    if (text.type === 'poem') {
      const poem = text as PoemMeta
      switch (activeTab) {
        case 0: return <PoemOverview poem={poem} />
        case 1: return <PoemText poem={poem} />
        case 2: return <PoemAnalysis poem={poem} />
        case 3: return (
          <div className="section-fade grid grid-cols-1 md:grid-cols-2 gap-4">
            {poem.devices?.map((d, i) => <DeviceCard key={i} device={d} />)}
          </div>
        )
        case 4: return poem.quizQuestions ? (
          <div className="section-fade">
            <Quiz questions={poem.quizQuestions} accentColor={accentColor} />
          </div>
        ) : <p className="text-navy/50">No quiz questions yet.</p>
        case 5: return poem.bridging ? (
          <div className="section-fade">
            <BridgingPanel activities={poem.bridging} />
          </div>
        ) : null
        case 6: return (
          <div className="section-fade space-y-4">
            {poem.writingPrompts?.map((wp, i) => (
              <WritingCard key={i} prompt={wp} color={accentColor} />
            ))}
          </div>
        )
        default: return null
      }
    } else {
      const story = text as StoryMeta
      switch (activeTab) {
        case 0: return <StoryOverview story={story} />
        case 1: return <div className="section-fade"><StorySynopsis story={story} /></div>
        case 2: return <StoryCharacters story={story} />
        case 3: return (
          <div className="section-fade grid grid-cols-1 md:grid-cols-2 gap-4">
            {story.devices?.map((d, i) => <DeviceCard key={i} device={d} />)}
          </div>
        )
        case 4: return story.quizQuestions ? (
          <div className="section-fade">
            <Quiz questions={story.quizQuestions} accentColor={accentColor} />
          </div>
        ) : null
        case 5: return story.bridging ? (
          <div className="section-fade">
            <BridgingPanel activities={story.bridging} />
          </div>
        ) : null
        case 6: return (
          <div className="section-fade space-y-4">
            {story.writingPrompts?.map((wp, i) => (
              <WritingCard key={i} prompt={wp} color={accentColor} />
            ))}
          </div>
        )
        default: return null
      }
    }
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="h-1 bg-warm">
        <div
          className="h-1 transition-all duration-500"
          style={{
            background: accentColor,
            width: `${((activeTab + 1) / tabs.length) * 100}%`,
          }}
        />
      </div>

      {/* Tab navigation */}
      <div className="bg-white border-b border-warm sticky top-14 z-40">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-0">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === i
                    ? 'font-semibold border-current'
                    : 'border-transparent text-navy/40 hover:text-navy/70'
                }`}
                style={activeTab === i ? { color: accentColor, borderColor: accentColor } : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {renderTab()}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-12 pt-6 border-t border-warm">
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            disabled={activeTab === 0}
            className="px-5 py-2.5 rounded-lg border border-warm text-sm text-navy/50 hover:text-navy hover:border-navy/30 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))}
            disabled={activeTab === tabs.length - 1}
            className="px-5 py-2.5 rounded-lg text-sm text-white font-medium transition-all hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none"
            style={{ background: accentColor }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
