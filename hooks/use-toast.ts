"use client"

import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, type = "default", duration = 3000 }) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, title, description, type, duration }

    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)
  }

  return { toast, toasts }
}
