import React from 'react'
import iconSun from '../images/icon-sun.svg'
import '../styles/header.scss'

export default function Header() {
  return (
    <header>
        <h1>Todo</h1>
        <div>
          <img src={iconSun}/>
        </div>
    </header>
  )
}
