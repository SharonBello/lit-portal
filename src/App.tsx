import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TextModule from './pages/TextModule'
import QuestionTypes from './pages/QuestionTypes'
import { BridgingGuide, ExamStrategy } from './pages/BridgingAndExam'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poem/:id" element={<TextModule />} />
        <Route path="/story/:id" element={<TextModule />} />
        <Route path="/question-types" element={<QuestionTypes />} />
        <Route path="/bridging" element={<BridgingGuide />} />
        <Route path="/exam-strategy" element={<ExamStrategy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
