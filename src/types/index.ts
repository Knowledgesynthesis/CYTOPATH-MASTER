export interface Module {
  id: string
  title: string
  description: string
  icon: string
  color: string
  lessons: Lesson[]
  quiz?: Quiz
}

export interface Lesson {
  id: string
  title: string
  content: LessonContent[]
}

export interface LessonContent {
  type: 'text' | 'heading' | 'list' | 'callout' | 'diagram' | 'table'
  content: string | string[] | TableData
  variant?: 'info' | 'warning' | 'success' | 'danger'
}

export interface TableData {
  headers: string[]
  rows: string[][]
}

export interface Quiz {
  id: string
  title: string
  questions: Question[]
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Case {
  id: string
  specimen: string
  findings: string[]
  system: string
  options: string[]
  correctAnswer: number
  rationale: string
}

export interface SessionState {
  currentScore?: number
  currentQuizId?: string
  answers: Record<string, number>
}
