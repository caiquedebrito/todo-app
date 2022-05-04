import React from 'react'
import '../styles/header.scss'

export default function Header() {
  function toggleMode() {
    document.body.classList.toggle('light-mode')
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.classList.toggle('light-icon-theme')
  }

  return (
    <header>
        <h1>Todo</h1>
        <div className='theme-btn' onClick={toggleMode}>
        </div>
    </header>
  )
}
