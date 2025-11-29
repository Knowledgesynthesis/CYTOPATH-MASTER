import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { modules } from '@/data/modules'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">CytoPath Master</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive cytopathology education for pathology residents
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Link key={module.id} to={`/module/${module.id}`}>
            <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{module.icon}</span>
                      <Badge variant="secondary">{module.lessons.length} lessons</Badge>
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-2">{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`h-2 rounded-full bg-gradient-to-r ${module.color}`} />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="border-muted-foreground/20">
        <CardHeader>
          <CardTitle>About CytoPath Master</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            This educational platform teaches cytology/cytopathology exactly as a pathology resident
            would learn it during a cytology rotation.
          </p>
          <p>
            All content is educational, synthetic, and icon-based. No real patient data or images
            are used.
          </p>
          <p className="font-medium text-foreground">
            Educational use only. Not for clinical diagnosis.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
