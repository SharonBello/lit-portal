import type { BridgingActivity } from '../types'

const TYPE_META = {
  'text-text':   { icon: '↔', label: 'Text ↔ Text',   color: 'border-purple/30 bg-purple/5', tagColor: 'text-purple-700 bg-purple-50' },
  'text-author': { icon: '✍', label: 'Text ↔ Author', color: 'border-teal/30 bg-teal/5',     tagColor: 'text-teal-700 bg-teal-50' },
  'text-world':  { icon: '🌍', label: 'Text ↔ World',  color: 'border-red/30 bg-red/5',       tagColor: 'text-red-700 bg-red-50' },
  'text-self':   { icon: '💭', label: 'Text ↔ Self',   color: 'border-gold/30 bg-gold/5',     tagColor: 'text-amber-700 bg-amber-50' },
}

interface BridgingProps {
  activities: BridgingActivity[]
}

export default function BridgingPanel({ activities }: BridgingProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {activities.map((act, i) => {
        const meta = TYPE_META[act.type]
        return (
          <div key={i} className={`rounded-xl border p-5 ${meta.color}`}>
            <span className={`pill text-xs mb-3 inline-block ${meta.tagColor}`}>
              {meta.label}
            </span>
            <p className="font-serif text-base text-navy leading-relaxed mb-3">
              {act.question}
            </p>
            <div className="bg-white/80 rounded-lg p-3 text-sm text-navy/70 leading-relaxed">
              <span className="font-semibold text-navy/50 text-xs uppercase tracking-wider block mb-1">
                Scaffold
              </span>
              {act.scaffold}
            </div>
          </div>
        )
      })}
    </div>
  )
}
