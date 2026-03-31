import { useState } from 'react'

export default function Footer() {
  const [isDark, setIsDark] = useState(false)

  const toggle = () => {
    const body = document.body
    const root = document.documentElement
    body.classList.toggle('light')
    root.classList.toggle('light')
    const isLight = body.classList.contains('light')
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
    setIsDark(isLight)
  }

  return (
    <>
      <button className="theme-toggle" onClick={toggle}>
        <i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i>
      </button>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Arnav Tomar. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}