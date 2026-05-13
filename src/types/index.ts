// ── Core content types ───────────────────────────────────────────

export type QuestionType = 'lots' | 'analysis' | 'hots' | 'bridging'

export interface QuizOption {
  label: string
  correct: boolean
  feedback: string
}

export interface QuizQuestion {
  id: string
  type: QuestionType
  question: string
  options: QuizOption[]
}

export interface AnnotatedLine {
  text: string
  annotation?: string  // tooltip content, if annotated
}

export interface PoemStanza {
  label: string
  lines: AnnotatedLine[]
}

export interface LiteraryDevice {
  type: string
  name: string
  example: string
  explanation: string
}

export interface BridgingActivity {
  type: 'text-text' | 'text-author' | 'text-world' | 'text-self'
  label: string
  question: string
  scaffold: string
}

export interface WritingPrompt {
  type: string
  prompt: string
  guidance: string
}

export interface StanzaAnalysis {
  number: number
  title: string
  analysis: string
  keyInsight: string
}

// ── Text module types ─────────────────────────────────────────────

export interface PoemMeta {
  id: string
  type: 'poem'
  title: string
  author: string
  year: number
  accentColor: string
  bgColor: string
  themes: string[]
  form: string
  keyFeature: string
  copyrightFree: boolean  // if false, show analysis-only mode
  stanzas?: PoemStanza[]
  stanzaAnalysis?: StanzaAnalysis[]
  devices?: LiteraryDevice[]
  quizQuestions?: QuizQuestion[]
  bridging?: BridgingActivity[]
  writingPrompts?: WritingPrompt[]
  specialNote?: string  // e.g. "The Famous Misreading" for Frost
  specialNoteContent?: string
}

export interface StoryMeta {
  id: string
  type: 'story'
  title: string
  author: string
  year: number
  accentColor: string
  bgColor: string
  themes: string[]
  setting: string
  narrator: string
  synopsis: string
  sections: StorySectionData[]
  characters: CharacterData[]
  devices?: LiteraryDevice[]
  quizQuestions?: QuizQuestion[]
  bridging?: BridgingActivity[]
  writingPrompts?: WritingPrompt[]
}

export interface StorySectionData {
  title: string
  summary: string
  keyQuote?: string
  analysis: string
}

export interface CharacterData {
  name: string
  role: string
  description: string
  arc: string
}

export type TextMeta = PoemMeta | StoryMeta
