import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { modules } from '@/data/modules'
import { ArrowLeft, BookOpen, ClipboardCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const module = modules.find((m) => m.id === moduleId)

  if (!module) {
    return (
      <div className="space-y-4">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Card>
          <CardContent className="pt-6">
            <p>Module not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Link to="/">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{module.icon}</span>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{module.title}</h1>
            <p className="text-muted-foreground mt-1">{module.description}</p>
          </div>
        </div>

        <div className={`h-3 rounded-full bg-gradient-to-r ${module.color}`} />
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Lessons
            </CardTitle>
            <CardDescription>
              {module.lessons.length} lesson{module.lessons.length !== 1 ? 's' : ''} available
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {module.lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                to={`/module/${moduleId}/lesson/${lesson.id}`}
                className="block"
              >
                <Card className="transition-all hover:shadow-md hover:bg-accent/50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">Lesson {index + 1}</Badge>
                        <span className="font-medium">{lesson.title}</span>
                      </div>
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </CardContent>
        </Card>

        {module.quiz && (
          <Link to="/assessment" state={{ quiz: module.quiz }}>
            <Card className="transition-all hover:shadow-md hover:bg-accent/50 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5" />
                  Module Quiz
                </CardTitle>
                <CardDescription>
                  Test your knowledge with {module.quiz.questions.length} questions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        )}
      </div>
    </div>
  )
}
