'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const COMMANDS = {
  help: 'Available commands:\n- whoami\n- skills\n- clear\n- exit',
  whoami: 'Mahmoud Mamdoh Soliman\nData Engineer based in Cairo, Egypt.\nBuilding scalable data platforms and pipelines.',
  skills: 'Technical Skills:\n> Apache Kafka, Spark, Airflow\n> Snowflake, Iceberg, dbt\n> ETL/ELT, Hadoop, Hive',
}

export function TerminalMode({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: 'Welcome to Mahmoud OS v1.0.0. Type "help" to see available commands.', type: 'output' },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase()
      if (!cmd) return

      const newHistory = [
        ...history,
        { text: `user@mahmoud-os:~$ ${input}`, type: 'input' },
      ]

      if (cmd === 'clear') {
        setHistory([])
      } else if (cmd === 'exit') {
        onClose()
        setHistory([
          { text: 'Welcome to Mahmoud OS v1.0.0. Type "help" to see available commands.', type: 'output' },
        ])
      } else if (COMMANDS[cmd]) {
        newHistory.push({ text: COMMANDS[cmd], type: 'output' })
        setHistory(newHistory)
      } else {
        newHistory.push({
          text: `"${cmd}" isn't a recognized command. Type "help" to see what's available.`,
          type: 'error',
        })
        setHistory(newHistory)
      }
      setInput('')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="relative flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-emerald-500/30 bg-[#0a0a0a] shadow-[0_0_50px_rgba(16,185,129,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-emerald-500/30 bg-[#111] px-4 py-2">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xs font-mono text-emerald-500/70">bash - 80x24</div>
              <button
                onClick={onClose}
                className="text-emerald-500/70 hover:text-emerald-500 transition"
                aria-label="Close terminal"
              >
                <FaTimes />
              </button>
            </div>

            <div
              className="flex-1 overflow-y-auto p-4 font-mono text-sm text-emerald-400"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div
                  key={i}
                  className={`mb-1 whitespace-pre-wrap ${
                    line.type === 'error' ? 'text-red-400' : ''
                  }`}
                >
                  {line.text}
                </div>
              ))}
              <div className="flex items-center">
                <span className="mr-2 text-emerald-500">user@mahmoud-os:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent text-emerald-400 outline-none"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
