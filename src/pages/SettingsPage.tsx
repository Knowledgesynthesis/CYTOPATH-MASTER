import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Moon, Sun, Microscope, AlertTriangle, BookOpen, Mail } from 'lucide-react'
import useStore from '@/store/useStore'

export default function SettingsPage() {
  const { theme, toggleTheme } = useStore()

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your preferences and learn about the app
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how CytoPath Master looks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  Currently using {theme === 'dark' ? 'dark' : 'light'} mode
                </p>
              </div>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              {theme === 'dark' ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            About CytoPath Master
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-medium mb-2">Mission</p>
            <p className="text-muted-foreground leading-relaxed">
              CytoPath Master is a comprehensive educational platform designed to teach
              cytology/cytopathology exactly as a pathology resident would learn it during a
              cytology rotation. Our goal is to make cytology approachable, pattern-based, and
              clinically meaningful.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">What We Cover</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Exfoliative cytology (Pap smears, urine, effusions, sputum)</li>
              <li>Fine-needle aspiration cytology (thyroid, lymph node, salivary gland, breast)</li>
              <li>Ancillary studies (IHC, flow cytometry, molecular)</li>
              <li>Screening principles (Bethesda, Paris, Milan systems)</li>
              <li>Cell morphology, background patterns, and diagnostic pitfalls</li>
              <li>Adequacy assessment & ROSE logic</li>
            </ul>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">Educational Approach</p>
            <p className="text-muted-foreground leading-relaxed">
              All content emphasizes pattern recognition, practical workflows, classification
              systems, and integrated diagnostic reasoning. Content is presented in a structured,
              high-yield format optimized for pathology trainees.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">Technology</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Mobile-first responsive design</li>
              <li>Dark mode optimized for extended learning sessions</li>
              <li>Offline-capable progressive web app</li>
              <li>Session-only assessments with no data tracking</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-yellow-500/50 bg-yellow-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-500">
            <AlertTriangle className="h-5 w-5" />
            Important Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-medium mb-2">Educational Use Only</p>
            <p className="text-muted-foreground leading-relaxed">
              This application is designed solely for educational purposes. It is NOT intended for
              clinical diagnosis, patient care, or medical decision-making. Always consult
              appropriate medical professionals for clinical decisions.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">No Real Patient Data</p>
            <p className="text-muted-foreground leading-relaxed">
              All examples, cases, and content are synthetic, icon-based, and textual. No real
              patient images, data, or protected health information (PHI) are used in this
              application.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">No Data Tracking</p>
            <p className="text-muted-foreground leading-relaxed">
              This application does not track user progress, store scores, or collect personal
              information. All assessments are session-only and results are not saved. Your privacy
              is fully protected.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">Not a Substitute for Formal Training</p>
            <p className="text-muted-foreground leading-relaxed">
              While this app provides comprehensive educational content, it is not a replacement
              for formal pathology training, mentorship, or hands-on microscopy experience.
              Clinical cytopathology requires supervised training and board certification.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">Content Accuracy</p>
            <p className="text-muted-foreground leading-relaxed">
              While every effort has been made to ensure accuracy, cytopathology is a complex field
              with evolving guidelines. Always refer to current literature, institutional
              protocols, and expert consultation for clinical practice.
            </p>
          </div>

          <Separator />

          <div>
            <p className="font-medium mb-2">Liability</p>
            <p className="text-muted-foreground leading-relaxed">
              The creators of this application assume no liability for any decisions made or
              actions taken based on information provided in this educational tool. This is a
              learning resource, not a clinical tool.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact/Feedback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Feedback & Support
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="text-muted-foreground leading-relaxed">
            This is an educational project designed for pathology trainees. If you have feedback,
            suggestions, or notice any errors in the educational content, please contact your
            institution's pathology education team or cytopathology faculty.
          </p>
        </CardContent>
      </Card>

      {/* Version Info */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Microscope className="h-4 w-4" />
              <span>CytoPath Master v1.0.0</span>
            </div>
            <span>Educational Use Only</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
