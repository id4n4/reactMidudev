
import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (isEnabled) window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [isEnabled])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        width: 40,
        height: 40,
        left: -20,
        top: -20,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }} />
      <button onClick={() => setIsEnabled((e) => !e)}>
        {isEnabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
