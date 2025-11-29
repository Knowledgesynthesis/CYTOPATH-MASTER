import { create } from 'zustand'
import { SessionState } from '@/types'

interface AppStore {
  theme: 'light' | 'dark'
  sessionState: SessionState
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
  setSessionAnswer: (questionId: string, answer: number) => void
  startQuiz: (quizId: string) => void
  clearSession: () => void
}

const useStore = create<AppStore>((set) => ({
  theme: 'dark',
  sessionState: {
    answers: {}
  },

  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    return { theme: newTheme }
  }),

  setTheme: (theme) => set(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    return { theme }
  }),

  setSessionAnswer: (questionId, answer) => set((state) => ({
    sessionState: {
      ...state.sessionState,
      answers: {
        ...state.sessionState.answers,
        [questionId]: answer
      }
    }
  })),

  startQuiz: (quizId) => set(() => ({
    sessionState: {
      currentQuizId: quizId,
      answers: {},
      currentScore: undefined
    }
  })),

  clearSession: () => set(() => ({
    sessionState: {
      answers: {}
    }
  }))
}))

export default useStore
