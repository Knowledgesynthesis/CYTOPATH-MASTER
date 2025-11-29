import { Link } from 'react-router-dom'
import { Microscope } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Microscope className="h-6 w-6" />
          <span className="text-xl font-bold">CytoPath Master</span>
        </Link>
        <div className="ml-auto">
          <p className="text-xs text-muted-foreground hidden sm:block">
            Cytology made clear
          </p>
        </div>
      </div>
    </header>
  )
}
