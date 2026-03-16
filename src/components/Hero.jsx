function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 max-w-5xl mx-auto">
      <p className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-3">Full Stack Developer</p>
      <h1 className="text-6xl font-bold text-white mb-4">
        Hi, I'm <span className="text-purple-400">Arjun</span> 👋
      </h1>
      <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
        A 12 year old dev from Delhi building cool stuff with React, Node.js, FastAPI and ESP32. Check out my work below.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1">
          View Projects
        </a>
        <a href="#chatbot" className="border border-sky-400 text-sky-400 hover:bg-sky-400/10 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1">
          Talk to NOVA
        </a>
      </div>
    </section>
  )
}

export default Hero