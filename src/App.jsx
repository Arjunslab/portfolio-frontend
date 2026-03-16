import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Chatbot from './components/Chatbot'
import Navbar from './components/Navbar'

function App() {
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

export default App