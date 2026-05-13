import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEmbedMode } from '../hooks/useEmbedMode'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { isEmbedded } = useEmbedMode()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav — hidden when embedded (portfolio handles it) */}
      {!isEmbedded && (
        <header className="bg-navy sticky top-0 z-50 shadow-md">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
            <Link to="/" className="font-serif text-gold text-lg font-bold shrink-0 leading-tight">
              Lit<span className="text-white/60">Portal</span>
            </Link>
            <nav className="flex gap-1 overflow-x-auto scrollbar-hide">
              {[
                { to: '/', label: 'Texts' },
                { to: '/question-types', label: 'Question Types' },
                { to: '/bridging', label: 'Bridging' },
                { to: '/exam-strategy', label: 'Exam Strategy' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-3 py-1.5 rounded text-sm whitespace-nowrap transition-colors ${
                    location.pathname === to
                      ? 'bg-white/10 text-gold font-medium'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
      )}

      {/* Back bar — shown on text module pages */}
      {!isHome && (
        <div className="bg-warm border-b border-warm px-4 py-2 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-navy/60 hover:text-navy flex items-center gap-1 transition-colors"
          >
            ← Back
          </button>
        </div>
      )}

      <main className="flex-1">
        {children}
      </main>

      {!isEmbedded && (
        <footer className="bg-navy text-white/30 text-xs py-4 px-6 text-center">
          5-Point English Literature Portal · Sharon Bello · Bagrut Preparation
        </footer>
      )}
    </div>
  )
}
