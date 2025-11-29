import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { modules } from '@/data/modules'
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react'
import { Quiz } from '@/types'
import { cn } from '@/lib/utils'
import useStore from '@/store/useStore'

export default function AssessmentPage() {
  const location = useLocation()
  const passedQuiz = location.state?.quiz as Quiz | undefined

  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(passedQuiz || null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const { clearSession } = useStore()

  useEffect(() => {
    // Clear session when component mounts
    clearSession()
  }, [clearSession])

  if (!selectedQuiz) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assessment Center</h1>
          <p className="text-muted-foreground mt-2">
            Select a module quiz to test your knowledge
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {modules.filter(m => m.quiz).map((module) => (
            <Card
              key={module.id}
              className="cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setSelectedQuiz(module.quiz!)}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{module.icon}</span>
                </div>
                <CardTitle>{module.quiz!.title}</CardTitle>
                <CardDescription>
                  {module.quiz!.questions.length} questions • Session-only scoring
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="border-muted-foreground/20">
          <CardContent className="pt-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">Assessment Notes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>All assessments are session-only</li>
              <li>Scores are not saved or tracked</li>
              <li>You can retake quizzes as many times as you like</li>
              <li>Immediate feedback provided on completion</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleAnswer = (answerIndex: number) => {
    const question = selectedQuiz.questions[currentQuestion]
    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: answerIndex
    })
  }

  const handleNext = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    clearSession()
  }

  const handleBackToSelection = () => {
    setSelectedQuiz(null)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    clearSession()
  }

  const calculateScore = () => {
    let correct = 0
    selectedQuiz.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return {
      correct,
      total: selectedQuiz.questions.length,
      percentage: Math.round((correct / selectedQuiz.questions.length) * 100)
    }
  }

  if (showResults) {
    const score = calculateScore()

    return (
      <div className="space-y-6 max-w-4xl">
        <Button variant="ghost" size="sm" onClick={handleBackToSelection}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Assessments
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
            <CardDescription>{selectedQuiz.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="text-4xl font-bold mb-2">{score.percentage}%</div>
              <div className="text-muted-foreground">
                {score.correct} out of {score.total} correct
              </div>
            </div>

            <div className="space-y-4">
              {selectedQuiz.questions.map((question, index) => {
                const userAnswer = selectedAnswers[question.id]
                const isCorrect = userAnswer === question.correctAnswer

                return (
                  <Card key={question.id} className={cn(
                    "border-l-4",
                    isCorrect ? "border-l-green-500" : "border-l-red-500"
                  )}>
                    <CardContent className="pt-4">
                      <div className="flex gap-3 mb-3">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium mb-2">Question {index + 1}</p>
                          <p className="mb-3">{question.question}</p>

                          <div className="space-y-2 mb-4">
                            {question.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={cn(
                                  "p-2 rounded text-sm",
                                  optIndex === question.correctAnswer && "bg-green-500/20 border border-green-500",
                                  optIndex === userAnswer && optIndex !== question.correctAnswer && "bg-red-500/20 border border-red-500",
                                  optIndex !== question.correctAnswer && optIndex !== userAnswer && "bg-muted"
                                )}
                              >
                                {option}
                                {optIndex === question.correctAnswer && " ✓"}
                                {optIndex === userAnswer && optIndex !== question.correctAnswer && " ✗"}
                              </div>
                            ))}
                          </div>

                          <div className="bg-muted p-3 rounded text-sm">
                            <p className="font-medium mb-1">Explanation:</p>
                            <p className="text-muted-foreground">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex gap-3">
              <Button onClick={handleReset} className="flex-1">
                Retake Quiz
              </Button>
              <Button variant="outline" onClick={handleBackToSelection} className="flex-1">
                Choose Another Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = selectedQuiz.questions[currentQuestion]
  const currentAnswer = selectedAnswers[question.id]
  const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100

  return (
    <div className="space-y-6 max-w-4xl">
      <Button variant="ghost" size="sm" onClick={handleBackToSelection}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Assessments
      </Button>

      <div>
        <h1 className="text-2xl font-bold">{selectedQuiz.title}</h1>
        <p className="text-muted-foreground mt-1">
          Question {currentQuestion + 1} of {selectedQuiz.questions.length}
        </p>
      </div>

      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <p className="text-lg font-medium mb-4">{question.question}</p>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg border-2 transition-all",
                    currentAnswer === index
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 hover:bg-accent"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentAnswer === undefined}
            >
              {currentQuestion === selectedQuiz.questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
