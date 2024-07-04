import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'
import { Label } from './components/ui/label'

function App() {
  return (
    <div className="w-full h-full">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <header className="w-full bg-card flex p-4 items-center justify-between border-b border-border">
          <Label className="text-2xl">Dashboard</Label>
          <ModeToggle />
        </header>
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
