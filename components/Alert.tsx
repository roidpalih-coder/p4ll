"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

type AlertType = "success" | "error" | "info" | "warning"

interface AlertProps {
  type: AlertType
  message: string
  show: boolean
  onClose: () => void
}

const icons: Record<AlertType, string> = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "⚠",
}

const colors: Record<AlertType, string> = {
  success: "border-green-500/30 bg-green-500/10 text-green-400",
  error: "border-red-500/30 bg-red-500/10 text-red-400",
  info: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  warning: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
}

export default function AlertMessage({ type, message, show, onClose }: AlertProps) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onClose, 4000)
      return () => clearTimeout(t)
    }
  }, [show, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-6 right-6 z-[200] flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-sm ${colors[type]}`}
        >
          <span className="font-bold text-lg">{icons[type]}</span>
          <span className="text-sm font-medium">{message}</span>
          <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 transition-opacity">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
