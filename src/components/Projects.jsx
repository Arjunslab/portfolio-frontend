const projects = [
  {
    icon: '🤖',
    name: 'JARVIS / Phoenix',
    desc: 'Python voice assistant with multi-user support and signup system.',
    tags: ['Python', 'Voice AI', 'CLI'],
    color: 'purple',
  },
  {
    icon: '🏠',
    name: 'ESP32 Home Automation',
    desc: 'Control home devices from a web dashboard using ESP32 and WebSockets.',
    tags: ['ESP32', 'MicroPython', 'FastAPI'],
    color: 'sky',
  },
  {
    icon: '🔐',
    name: 'Multi-User Calculator',
    desc: 'CLI calculator with authentication, history files and admin profile.',
    tags: ['Python', 'Auth', 'CLI'],
    color: 'emerald',
  },
  {
    icon: '📡',
    name: 'RFID Attendance System',
    desc: 'Attendance system using RFID module and LCD display.',
    tags: ['ESP32', 'RFID', 'LCD'],
    color: 'amber',
  },
]

const colorMap = {
  purple: 'border-purple-500/40 hover:border-purple-500',
  sky: 'border-sky-500/40 hover:border-sky-500',
  emerald: 'border-emerald-500/40 hover:border-emerald-500',
  amber: 'border-amber-500/40 hover:border-amber-500',
}

const tagColorMap = {
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  sky: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
}

function Projects() {
  return (
    <section className="px-8 py-24 max-w-5xl mx-auto">
      <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">What I've built</p>
      <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.name} className={`bg-white/5 border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${colorMap[p.color]}`}>
            <div className="text-3xl mb-4">{p.icon}</div>
            <h3 className="text-white font-bold text-lg mb-2">{p.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className={`text-xs font-mono px-3 py-1 rounded-full border ${tagColorMap[p.color]}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects