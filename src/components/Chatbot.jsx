import { useState } from 'react'
import axios from 'axios'

function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hey! I'm NOVA, Arjun's AI. Ask me anything about him 🔮" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMsg = { role: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await axios.post('https://backend.bajpai.dev/api/chat', { message: input })
      setMessages(prev => [...prev, { role: 'bot', text: res.data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'bot', text: 'Something went wrong 😭 try again!' }])
    }

    setLoading(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <section className="px-8 py-24 max-w-5xl mx-auto pb-32">
      <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2">AI Assistant</p>
      <h2 className="text-4xl font-bold text-white mb-12">Talk to NOVA</h2>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

        {/* header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-purple-500/5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-white font-semibold text-sm">NOVA</span>
          <span className="text-gray-500 font-mono text-xs ml-auto">Arjun's AI</span>
        </div>

        {/* messages */}
        <div className="h-80 overflow-y-auto flex flex-col gap-4 p-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 border ${msg.role === 'bot' ? 'bg-purple-500/15 text-purple-300 border-purple-500/30' : 'bg-sky-500/15 text-sky-300 border-sky-500/30'}`}>
                {msg.role === 'bot' ? 'N' : 'U'}
              </div>
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'bot' ? 'bg-purple-500/10 border border-purple-500/20 text-gray-200 rounded-tl-none' : 'bg-sky-500/10 border border-sky-500/20 text-gray-200 rounded-tr-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2 items-center px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tl-none w-fit">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]"></div>
            </div>
          )}
        </div>

        {/* input */}
        <div className="flex gap-3 px-6 py-4 border-t border-white/10 bg-black/20">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask NOVA anything about Arjun..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500/50 transition-all font-mono"
          />
          <button
            onClick={sendMessage}
            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Send
          </button>
        </div>

      </div>
    </section>
  )
}

export default Chatbot
