import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'
import { Label } from './components/ui/label'
import img from './imgs/logo192.png'

function App() {
  return (
    <div className="w-full h-full">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <header className="w-full bg-card flex p-4 items-center justify-between border-b border-border">
          <div className="flex items-center justify-center gap-2">
            <img src={img} alt="logo jetsales" className="size-12" />
            <Label className="text-2xl">Dashboard</Label>
          </div>
          <ModeToggle />
        </header>
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
