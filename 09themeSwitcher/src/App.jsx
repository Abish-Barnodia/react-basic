import { useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme.jsx'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  // Theme changes are now handled by the ThemeProvider
  useEffect(() => {
    console.log("App component mounted")
  }, [])

  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <div className="p-4 mb-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg">
              Theme Test - Should change colors
            </div>
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
