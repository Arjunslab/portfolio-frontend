const skills = {
  Frontend: [
    { name: 'React', url: 'https://react.dev' },
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Tailwind', url: 'https://tailwindcss.com' },
  ],
  Backend: [
    { name: 'Node.js', url: 'https://nodejs.org' },
    { name: 'Express', url: 'https://expressjs.com' },
    { name: 'FastAPI', url: 'https://fastapi.tiangolo.com' },
    { name: 'Python', url: 'https://python.org' },
  ],
  Tools: [
    { name: 'Git', url: 'https://git-scm.com' },
    { name: 'Android Studio', url: 'https://developer.android.com/studio' },
    { name: 'VS Code', url: 'https://code.visualstudio.com' },
    { name: 'MicroPython', url: 'https://micropython.org' },
  ],
  Hardware: [
    { name: 'ESP32', url: 'https://docs.espressif.com' },
    { name: 'IR Sensor', url: 'https://components101.com/sensors/ir-sensor-module' },
    { name: 'RGB LED', url: 'https://components101.com/diodes/rgb-led-pinout-configuration-circuit-datasheet' },
    { name: 'RFID Module', url: 'https://components101.com/wireless/rc522-rfid-module' },
  ],
}

function Skills() {
  return (
    <section id="skills" className="px-8 py-24 max-w-5xl mx-auto">
      <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">What I know</p>
      <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/5 border border-white/10 text-gray-300 text-sm font-mono px-3 py-1 rounded-full hover:-translate-y-1 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-200 cursor-pointer"
                >
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills