import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, FlaskConical, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/cases', label: 'Cases', icon: FlaskConical },
  { path: '/assessment', label: 'Assessment', icon: BookOpen },
  { path: '/settings', label: 'Settings', icon: Settings },
]

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:static md:border-t-0 md:border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around md:justify-start md:space-x-6 h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col md:flex-row items-center justify-center md:justify-start space-y-1 md:space-y-0 md:space-x-2 px-3 py-2 rounded-md transition-colors",
                  isActive
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
