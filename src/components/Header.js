import React, { useEffect, useState } from 'react'
import '../styles/header.scss'

export default function Header() {
  const [themeMode, setThemeMode] = useState("")

  useEffect(() => {
    if (isThemeModeSet()) {
      setThemeMode(localStorage.getItem("theme"))
      return
    }
    
    if (isLightModeSetAsDefault()) {
      setThemeMode("light")
      return
    } 
  }, [])

  useEffect(changeThemeMode, [themeMode])

  function isThemeModeSet() {
    return JSON.stringify(localStorage.getItem("theme")) !== "null"
  }

  function isLightModeSetAsDefault() {
    return window.matchMedia("(prefers-color-scheme: light)").matches
  }

  function changeThemeMode() {
    const themeBtn = document.querySelector('.theme-btn')

    if (themeMode === "light") {
      localStorage.setItem("theme", "light")
      document.body.classList.add('light-mode')
      themeBtn.classList.add('light-icon-theme')
    } else if (themeMode === "dark") {
      localStorage.setItem("theme", "dark")
      document.body.classList.remove('light-mode')
      themeBtn.classList.remove('light-icon-theme')
    }
  }

  function toggleThemeMode() {
    switch (themeMode) {
      case "dark":
        setThemeMode("light")
        break
      case "light":
        setThemeMode("dark")
        break
    }
  }

  return (
    <header>
        <h1>Todo</h1>
        <div className='theme-btn' onClick={toggleThemeMode}>
        </div>
    </header>
  )
}
