import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Chatbot from './components/Chatbot'
import NotFound from './components/Notfound'

function Home() {
  return (
    <main className="bg-[#050510] min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Chatbot />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
