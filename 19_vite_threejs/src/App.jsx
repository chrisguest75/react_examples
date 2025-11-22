import { useCallback, useMemo, useState } from 'react'
import AppShell from './components/layout/AppShell'
import SceneCanvas from './components/scene/SceneCanvas'
import SceneControlPanel from './components/panels/SceneControlPanel'
import './index.css'

const INITIAL_SETTINGS = Object.freeze({
  spinSpeed: 1.2,
  wireframe: false,
  autoOrbit: true,
  color: '#64ffda'
})

function App() {
  const [settings, setSettings] = useState(INITIAL_SETTINGS)

  const handleSettingChange = useCallback((key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value
    }))
  }, [])

  const handleReset = useCallback(() => {
    setSettings(INITIAL_SETTINGS)
  }, [])

  const handleRandomizeColor = useCallback(() => {
    const color = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`
    handleSettingChange('color', color)
  }, [handleSettingChange])

  const sceneSettings = useMemo(() => settings, [settings])

  return (
    <AppShell title="Three.js Cube Playground" subtitle="Prototype 01">
      <SceneCanvas settings={sceneSettings} />
      <SceneControlPanel
        settings={sceneSettings}
        onSettingChange={handleSettingChange}
        onReset={handleReset}
        onRandomizeColor={handleRandomizeColor}
      />
    </AppShell>
  )
}

export default App
