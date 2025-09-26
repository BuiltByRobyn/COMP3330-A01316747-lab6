
import { AppCard } from './components/AppCard'
import { ThemeToggle } from './components/themeToggle'

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="mx-auto max-w-3xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">COMP3330 – Frontend Setup</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Vite • React • Tailwind • ShadCN
            </p>
          </div>
          <ThemeToggle />
        </div>
        
        <AppCard />
      </div>
    </main>
  )
}