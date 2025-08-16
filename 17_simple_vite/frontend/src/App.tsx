import { useState, useEffect } from 'react'
import Card from './Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  // Fetch the current count from the server on component mount
  useEffect(() => {
    fetchCount()
  }, [])

  const fetchCount = async () => {
    try {
      const response = await fetch('/api/count')
      const data = await response.json()
      setCount(data.count)
    } catch (error) {
      console.error('Error fetching count:', error)
    }
  }

  const incrementCount = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/count', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ increment: 1 }),
      })
      const data = await response.json()
      setCount(data.count)
    } catch (error) {
      console.error('Error incrementing count:', error)
    } finally {
      setLoading(false)
    }
  }

  const resetCount = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/count', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: 0 }),
      })
      const data = await response.json()
      setCount(data.count)
    } catch (error) {
      console.error('Error resetting count:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card
        count={count}
        loading={loading}
        onIncrement={incrementCount}
        onReset={resetCount}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
