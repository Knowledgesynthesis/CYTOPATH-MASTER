import { useParams, Link, useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { modules } from '@/data/modules'
import { ArrowLeft, ArrowRight, AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react'
import { LessonContent, TableData } from '@/types'
import { cn } from '@/lib/utils'

export default function LessonPage() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>()
  const navigate = useNavigate()

  const module = modules.find((m) => m.id === moduleId)
  const lesson = module?.lessons.find((l) => l.id === lessonId)
  const currentLessonIndex = module?.lessons.findIndex((l) => l.id === lessonId) ?? -1
  const nextLesson = module?.lessons[currentLessonIndex + 1]
  const prevLesson = module?.lessons[currentLessonIndex - 1]

  if (!module || !lesson) {
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
            <p>Lesson not found</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderContent = (content: LessonContent, index: number) => {
    switch (content.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
            {content.content as string}
          </h2>
        )

      case 'text':
        return (
          <p key={index} className="text-foreground/90 mb-4 leading-relaxed">
            {content.content as string}
          </p>
        )

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 ml-4">
            {(content.content as string[]).map((item, i) => (
              <li key={i} className="text-foreground/90">{item}</li>
            ))}
          </ul>
        )

      case 'callout':
        const icons = {
          info: Info,
          warning: AlertTriangle,
          success: CheckCircle,
          danger: AlertCircle
        }
        const Icon = icons[content.variant || 'info']

        return (
          <Card
            key={index}
            className={cn(
              "mb-4 border-l-4",
              content.variant === 'warning' && "border-l-yellow-500 bg-yellow-500/10",
              content.variant === 'danger' && "border-l-red-500 bg-red-500/10",
              content.variant === 'success' && "border-l-green-500 bg-green-500/10",
              content.variant === 'info' && "border-l-blue-500 bg-blue-500/10"
            )}
          >
            <CardContent className="pt-4 pb-4">
              <div className="flex gap-3">
                <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium">{content.content as string}</p>
              </div>
            </CardContent>
          </Card>
        )

      case 'table':
        const tableData = content.content as TableData
        return (
          <div key={index} className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  {tableData.headers.map((header, i) => (
                    <th key={i} className="border border-border px-4 py-2 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50">
                    {row.map((cell, j) => (
                      <td key={j} className="border border-border px-4 py-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <Link to={`/module/${moduleId}`}>
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {module.title}
        </Button>
      </Link>

      <div>
        <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
          <span>{module.icon}</span>
          <span>{module.title}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{lesson.title}</h1>
      </div>

      <Card>
        <CardContent className="pt-6 prose prose-slate dark:prose-invert max-w-none">
          {lesson.content.map((content, index) => renderContent(content, index))}
        </CardContent>
      </Card>

      <div className="flex justify-between items-center pt-4">
        {prevLesson ? (
          <Button
            variant="outline"
            onClick={() => navigate(`/module/${moduleId}/lesson/${prevLesson.id}`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Button
            onClick={() => navigate(`/module/${moduleId}/lesson/${nextLesson.id}`)}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Link to={`/module/${moduleId}`}>
            <Button>
              Back to Module
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
