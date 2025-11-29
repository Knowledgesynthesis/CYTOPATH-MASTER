import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ModulePage from './pages/ModulePage'
import LessonPage from './pages/LessonPage'
import AssessmentPage from './pages/AssessmentPage'
import SettingsPage from './pages/SettingsPage'
import CasesPage from './pages/CasesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="module/:moduleId" element={<ModulePage />} />
        <Route path="module/:moduleId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="assessment" element={<AssessmentPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App
