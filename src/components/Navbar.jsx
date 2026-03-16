function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
      <a href="#about" className="font-mono text-purple-400 text-lg font-bold tracking-widest">
        arjun.
      </a>

      <div className="flex items-center gap-8">
        <a href="#about" className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">About</a>
        <a href="#skills" className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">Skills</a>
        <a href="#projects" className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">Projects</a>
        <a href="#chatbot" className="text-gray-400 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">NOVA</a>
        <a href="https://github.com/Arjunslab" target="_blank" rel="noreferrer" className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5">
          GitHub
        </a>
      </div>
    </nav>
  )
}

export default Navbar