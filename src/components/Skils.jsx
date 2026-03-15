const skills = {
  Frontend: ['React', 'HTML', 'CSS', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'FastAPI', 'Python'],
  Tools: ['Git', 'Android Studio', 'VS Code', 'MicroPython'],
  Hardware: ['ESP32', 'IR Sensor', 'RGB LED', 'RFID Module'],
}

function Skills() {
  return (
    <section className="px-8 py-24 max-w-5xl mx-auto">
      <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">What I know</p>
      <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span key={skill} className="bg-white/5 border border-white/10 text-gray-300 text-sm font-mono px-3 py-1 rounded-full hover:-translate-y-1 transition-all duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills