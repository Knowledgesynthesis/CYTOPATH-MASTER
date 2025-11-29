import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Microscope, CheckCircle, XCircle } from 'lucide-react'
import { Case } from '@/types'
import { cn } from '@/lib/utils'

// Sample integrated cases
const cases: Case[] = [
  {
    id: 'case1',
    specimen: 'Thyroid FNA',
    findings: [
      'Cellular aspirate',
      'Scant colloid',
      'Microfollicular pattern',
      'Minimal atypia',
      'Monotonous follicular cells'
    ],
    system: 'Bethesda System for Thyroid',
    options: [
      'Bethesda II: Benign',
      'Bethesda III: AUS/FLUS',
      'Bethesda IV: Follicular Neoplasm',
      'Bethesda V: Suspicious for Malignancy'
    ],
    correctAnswer: 2,
    rationale: 'The combination of high cellularity, microfollicular pattern, and scant colloid is characteristic of Follicular Neoplasm (Bethesda IV). Cannot distinguish adenoma from carcinoma on cytology.'
  },
  {
    id: 'case2',
    specimen: 'Cervical Pap Smear',
    findings: [
      'Adequate cellularity',
      'Large cells with abundant cytoplasm',
      'Perinuclear halos',
      'Irregular, thickened nuclear membranes',
      'Binucleation common'
    ],
    system: 'Bethesda System for Cervical Cytology',
    options: [
      'NILM',
      'ASC-US',
      'LSIL',
      'HSIL'
    ],
    correctAnswer: 2,
    rationale: 'Classic koilocytic changes (perinuclear halos, irregular nuclear membranes) in large cells with abundant cytoplasm are diagnostic of LSIL (Low-Grade Squamous Intraepithelial Lesion), representing HPV effect.'
  },
  {
    id: 'case3',
    specimen: 'Urine Cytology',
    findings: [
      'Cells with high N:C ratio (>0.7)',
      'Marked hyperchromasia',
      'Coarse, irregular chromatin',
      'Irregular nuclear membranes with notches',
      'Small cell size'
    ],
    system: 'Paris System',
    options: [
      'Negative for High-Grade Urothelial Carcinoma',
      'Atypical Urothelial Cells',
      'Suspicious for HGUC',
      'High-Grade Urothelial Carcinoma'
    ],
    correctAnswer: 3,
    rationale: 'All criteria for HGUC are met: high N:C ratio (>0.7), hyperchromasia, coarse chromatin, and irregular nuclear membranes. This is diagnostic of High-Grade Urothelial Carcinoma.'
  },
  {
    id: 'case4',
    specimen: 'Salivary Gland FNA',
    findings: [
      'Epithelial and myoepithelial cells',
      'Magenta fibrillary stroma',
      'Branching epithelial fragments',
      'Metachromatic stromal balls',
      'Clean background'
    ],
    system: 'Milan System',
    options: [
      'Non-diagnostic',
      'Benign Neoplasm (Pleomorphic Adenoma)',
      'Salivary Gland Neoplasm of Uncertain Malignant Potential',
      'Malignant'
    ],
    correctAnswer: 1,
    rationale: 'The magenta chondromyxoid stroma with epithelial and myoepithelial cells is pathognomonic for pleomorphic adenoma (benign mixed tumor), the most common salivary gland tumor.'
  },
  {
    id: 'case5',
    specimen: 'Lymph Node FNA',
    findings: [
      'Polymorphous lymphoid population',
      'Tingible body macrophages',
      'Lymphoglandular bodies',
      'Plasma cells present',
      'Mixed small and large lymphocytes'
    ],
    system: 'Lymph Node Assessment',
    options: [
      'Reactive Lymphoid Hyperplasia',
      'Suspicious for Lymphoma',
      'Metastatic Carcinoma',
      'Granulomatous Inflammation'
    ],
    correctAnswer: 0,
    rationale: 'Polymorphous lymphoid population with tingible body macrophages and lymphoglandular bodies is classic for reactive hyperplasia. The mixed cell population excludes lymphoma (which would be monotonous).'
  },
  {
    id: 'case6',
    specimen: 'Pleural Effusion',
    findings: [
      'Three-dimensional cell balls',
      'Loss of intercellular windows',
      'Nuclear pleomorphism',
      'Prominent nucleoli',
      'Vacuolated cytoplasm'
    ],
    system: 'Effusion Cytology',
    options: [
      'Reactive Mesothelial Cells',
      'Adenocarcinoma',
      'Lymphoma',
      'Mesothelioma'
    ],
    correctAnswer: 1,
    rationale: 'Three-dimensional clusters with loss of windows, nuclear pleomorphism, and prominent nucleoli indicate adenocarcinoma. Reactive mesothelial cells maintain windows and have uniform chromatin.'
  }
]

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleSelectCase = (c: Case) => {
    setSelectedCase(c)
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowAnswer(true)
    }
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowAnswer(false)
  }

  const handleNextCase = () => {
    const currentIndex = cases.findIndex(c => c.id === selectedCase?.id)
    const nextIndex = (currentIndex + 1) % cases.length
    handleSelectCase(cases[nextIndex])
  }

  if (!selectedCase) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Integrated Cytology Cases</h1>
          <p className="text-muted-foreground mt-2">
            Practice pattern recognition and classification
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((c) => (
            <Card
              key={c.id}
              className="cursor-pointer transition-all hover:shadow-lg"
              onClick={() => handleSelectCase(c)}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Microscope className="h-5 w-5" />
                  <Badge variant="outline">{c.system}</Badge>
                </div>
                <CardTitle className="text-lg">{c.specimen}</CardTitle>
                <CardDescription>
                  {c.findings.length} key findings
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="border-muted-foreground/20">
          <CardContent className="pt-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">Case Notes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>All cases are synthetic and educational</li>
              <li>Practice applying classification systems</li>
              <li>Immediate feedback provided</li>
              <li>No scores are tracked</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    )
  }

  const isCorrect = selectedAnswer === selectedCase.correctAnswer

  return (
    <div className="space-y-6 max-w-4xl">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setSelectedCase(null)}
      >
        ← Back to Cases
      </Button>

      <div>
        <Badge className="mb-2">{selectedCase.system}</Badge>
        <h1 className="text-2xl font-bold">{selectedCase.specimen}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Clinical Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {selectedCase.findings.map((finding, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Classification</CardTitle>
          <CardDescription>Select the most appropriate category</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {selectedCase.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showAnswer && setSelectedAnswer(index)}
                disabled={showAnswer}
                className={cn(
                  "w-full text-left p-4 rounded-lg border-2 transition-all",
                  selectedAnswer === index && !showAnswer && "border-primary bg-primary/10",
                  showAnswer && index === selectedCase.correctAnswer && "border-green-500 bg-green-500/20",
                  showAnswer && selectedAnswer === index && index !== selectedCase.correctAnswer && "border-red-500 bg-red-500/20",
                  !showAnswer && selectedAnswer !== index && "border-border hover:border-primary/50 hover:bg-accent",
                  showAnswer && index !== selectedCase.correctAnswer && selectedAnswer !== index && "border-border opacity-50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showAnswer && index === selectedCase.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {showAnswer && selectedAnswer === index && index !== selectedCase.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {!showAnswer && (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full"
            >
              Submit Answer
            </Button>
          )}

          {showAnswer && (
            <div className="space-y-4">
              <Card className={cn(
                "border-l-4",
                isCorrect ? "border-l-green-500 bg-green-500/10" : "border-l-red-500 bg-red-500/10"
              )}>
                <CardContent className="pt-4">
                  <div className="flex gap-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium mb-2">
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCase.rationale}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  Try Again
                </Button>
                <Button onClick={handleNextCase} className="flex-1">
                  Next Case
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
