import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'

function StatPill({ label, value }) {
  return (
    <div className="rounded-md border border-border/40 bg-slate-900 px-3 py-2 text-left">
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <p className="text-xl font-semibold text-foreground">{value}</p>
    </div>
  )
}

function SceneControlPanel({ settings, onSettingChange, onReset, onRandomizeColor }) {
  return (
    <Card className="border-slate-800/60 bg-slate-950/70">
      <CardHeader>
        <CardTitle>Scene Controls</CardTitle>
        <CardDescription>
          Tweak the cube&apos;s state on the right. Updates propagate to the WebGL
          scene instantly.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>Spin speed</span>
            <span className="text-muted-foreground">{settings.spinSpeed.toFixed(1)}×</span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={settings.spinSpeed}
            onChange={(event) => onSettingChange('spinSpeed', Number(event.target.value))}
            className="h-2 w-full cursor-ew-resize appearance-none rounded-full bg-slate-800 accent-emerald-400"
          />
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>Wireframe</span>
            <label className="inline-flex cursor-pointer items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={settings.wireframe}
                onChange={(event) => onSettingChange('wireframe', event.target.checked)}
                className="h-4 w-4 accent-emerald-400"
              />
              Enabled
            </label>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>Auto orbit</span>
            <label className="inline-flex cursor-pointer items-center gap-2 text-xs">
              <input
                type="checkbox"
                checked={settings.autoOrbit}
                onChange={(event) => onSettingChange('autoOrbit', event.target.checked)}
                className="h-4 w-4 accent-emerald-400"
              />
              Enabled
            </label>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>Surface color</span>
            <span className="text-muted-foreground">{settings.color.toUpperCase()}</span>
          </div>
          <input
            type="color"
            value={settings.color}
            onChange={(event) => onSettingChange('color', event.target.value)}
            className="h-12 w-full cursor-pointer rounded-md border border-slate-800 bg-transparent p-1"
          />
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Snapshot</p>
          <div className="mt-2 grid grid-cols-3 gap-3">
            <StatPill label="Vertices" value="8" />
            <StatPill label="Faces" value="6" />
            <StatPill label="FPS" value="60" />
          </div>
        </section>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 sm:flex-row">
        <Button onClick={onRandomizeColor} variant="secondary" className="w-full">
          Randomize color
        </Button>
        <Button onClick={onReset} className="w-full">
          Reset scene
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SceneControlPanel
