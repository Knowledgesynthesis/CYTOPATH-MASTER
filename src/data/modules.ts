import { Module } from '@/types'

export const modules: Module[] = [
  {
    id: 'foundations',
    title: 'Foundations of Cytology',
    description: 'Core principles, sample types, preparation methods, and adequacy assessment',
    icon: '🔬',
    color: 'from-blue-500 to-cyan-500',
    lessons: [
      {
        id: 'intro',
        title: 'What is Cytopathology?',
        content: [
          { type: 'heading', content: 'Introduction to Cytopathology' },
          { type: 'text', content: 'Cytopathology is the study of disease at the cellular level. Unlike histopathology, which examines tissue architecture, cytopathology focuses on individual cells and small cell groups.' },
          { type: 'heading', content: 'Key Differences from Histology' },
          { type: 'list', content: [
            'Examines dispersed cells rather than intact tissue',
            'Faster turnaround time',
            'Less invasive sampling',
            'Architecture is limited or absent',
            'Nuclear and cytoplasmic features are paramount'
          ]},
          { type: 'callout', content: 'Cytology complements histology—they are not interchangeable. Each has unique strengths and limitations.', variant: 'info' }
        ]
      },
      {
        id: 'sample-types',
        title: 'Sample Types',
        content: [
          { type: 'heading', content: 'Exfoliative Cytology' },
          { type: 'text', content: 'Naturally shed cells from epithelial surfaces:' },
          { type: 'list', content: [
            'Pap smears (cervical)',
            'Urine cytology',
            'Sputum cytology',
            'Body cavity fluids (pleural, peritoneal, pericardial)',
            'Brushings and washings (bronchial, biliary, pancreatic)'
          ]},
          { type: 'heading', content: 'Fine Needle Aspiration (FNA)' },
          { type: 'text', content: 'Active sampling of masses and lymph nodes:' },
          { type: 'list', content: [
            'Thyroid nodules',
            'Lymph nodes',
            'Salivary glands',
            'Breast masses',
            'Soft tissue lesions',
            'Deep organ lesions (liver, pancreas, lung)'
          ]}
        ]
      },
      {
        id: 'preparation',
        title: 'Preparation Methods',
        content: [
          { type: 'heading', content: 'Direct Smears' },
          { type: 'text', content: 'Material spread directly on glass slides. Used for FNA specimens and rapid evaluation.' },
          { type: 'list', content: [
            'Immediate fixation (alcohol) or air-dried',
            'Air-dried smears: Diff-Quik, Romanowsky stains',
            'Alcohol-fixed: Papanicolaou stain',
            'Preserves cellular detail and architecture'
          ]},
          { type: 'heading', content: 'Liquid-Based Cytology (LBC)' },
          { type: 'text', content: 'Cells suspended in preservative fluid, then processed:' },
          { type: 'list', content: [
            'ThinPrep, SurePath systems',
            'Cleaner backgrounds',
            'Standardized cell distribution',
            'Allows ancillary testing from same sample',
            'Commonly used for Pap smears'
          ]},
          { type: 'heading', content: 'Cell Block' },
          { type: 'text', content: 'Residual material processed like a mini-biopsy:' },
          { type: 'list', content: [
            'Allows IHC and special stains',
            'Preserves some architectural information',
            'Essential for effusions and some FNAs',
            'Increases diagnostic yield'
          ]},
          { type: 'callout', content: 'Diff-Quik vs Pap: Diff-Quik is fast (minutes) and excellent for ROSE, showing cytoplasmic detail. Pap stain takes hours but gives superior nuclear detail.', variant: 'info' }
        ]
      },
      {
        id: 'adequacy',
        title: 'Adequacy Principles',
        content: [
          { type: 'heading', content: 'General Adequacy Criteria' },
          { type: 'text', content: 'Always decide adequacy before interpreting morphology. An inadequate specimen may lead to false-negative diagnoses.' },
          { type: 'callout', content: 'CRITICAL RULE: Adequacy assessment is specimen-specific. Different criteria apply to different organs.', variant: 'warning' },
          { type: 'heading', content: 'Common Adequacy Factors' },
          { type: 'list', content: [
            'Sufficient cellularity',
            'Appropriate cell types present',
            'Well-preserved cells',
            'Minimal obscuring elements (blood, inflammation)',
            'Proper fixation/preparation'
          ]},
          { type: 'heading', content: 'Specimen-Specific Examples' },
          { type: 'text', content: 'Thyroid FNA: ≥6 groups of follicular cells, each with ≥10 cells' },
          { type: 'text', content: 'Pap smear: ≥5,000 squamous cells (conventional), transformation zone component' },
          { type: 'text', content: 'Urine: Variable by institution, generally well-preserved urothelial cells' }
        ]
      },
      {
        id: 'background',
        title: 'Background Elements',
        content: [
          { type: 'heading', content: 'Recognizing Background Patterns' },
          { type: 'text', content: 'The background provides crucial diagnostic clues:' },
          { type: 'heading', content: 'Blood' },
          { type: 'list', content: [
            'Common in many specimens',
            'Obscures cellular detail when excessive',
            'May indicate trauma, vascularity, or malignancy'
          ]},
          { type: 'heading', content: 'Necrosis' },
          { type: 'list', content: [
            'Granular, dirty background',
            'Suggests high-grade malignancy or infection',
            'Tumor diathesis: blood + necrotic debris'
          ]},
          { type: 'heading', content: 'Inflammation' },
          { type: 'list', content: [
            'Neutrophils: acute inflammation, infection',
            'Lymphocytes: chronic inflammation',
            'Histiocytes/macrophages: chronic inflammation, debris clearance',
            'Eosinophils: allergic, parasitic, or certain tumors'
          ]},
          { type: 'heading', content: 'Mucus' },
          { type: 'text', content: 'Seen in mucinous lesions (mucoepidermoid carcinoma, colloid carcinoma, GI adenocarcinoma)' },
          { type: 'heading', content: 'Colloid' },
          { type: 'text', content: 'Thyroid-specific: pink, watery material. Abundant colloid suggests benign thyroid.' },
          { type: 'callout', content: 'Tumor diathesis = blood + necrosis. When you see syncytial sheets + tumor diathesis, think high-grade carcinoma.', variant: 'warning' }
        ]
      }
    ],
    quiz: {
      id: 'foundations-quiz',
      title: 'Foundations Quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which stain is best for rapid on-site evaluation (ROSE) during FNA?',
          options: ['Papanicolaou', 'Diff-Quik', 'H&E', 'Immunohistochemistry'],
          correctAnswer: 1,
          explanation: 'Diff-Quik can be performed in minutes and provides excellent cytoplasmic detail for rapid assessment.'
        },
        {
          id: 'q2',
          question: 'What does "tumor diathesis" refer to?',
          options: ['Abundant mucin', 'Blood and necrotic debris', 'Inflammatory cells', 'Colloid material'],
          correctAnswer: 1,
          explanation: 'Tumor diathesis is the combination of blood and necrotic debris, often seen with high-grade malignancies.'
        },
        {
          id: 'q3',
          question: 'What is the primary advantage of cell block preparation?',
          options: ['Faster processing', 'Better nuclear detail', 'Allows IHC and special stains', 'Requires less material'],
          correctAnswer: 2,
          explanation: 'Cell blocks can be treated like tissue, allowing immunohistochemistry and special stains to be performed.'
        }
      ]
    }
  },
  {
    id: 'pap',
    title: 'Pap Smears (Bethesda System)',
    description: 'Cervical cytology classification, adequacy, and diagnostic categories',
    icon: '🔬',
    color: 'from-pink-500 to-rose-500',
    lessons: [
      {
        id: 'bethesda-intro',
        title: 'Bethesda System Overview',
        content: [
          { type: 'heading', content: 'The Bethesda System for Cervical Cytology' },
          { type: 'text', content: 'A standardized reporting system ensuring clear communication between pathologists and clinicians.' },
          { type: 'heading', content: 'Diagnostic Categories' },
          { type: 'list', content: [
            'Negative for Intraepithelial Lesion or Malignancy (NILM)',
            'Atypical Squamous Cells of Undetermined Significance (ASC-US)',
            'Atypical Squamous Cells, cannot exclude HSIL (ASC-H)',
            'Low-Grade Squamous Intraepithelial Lesion (LSIL)',
            'High-Grade Squamous Intraepithelial Lesion (HSIL)',
            'Atypical Glandular Cells (AGC)',
            'Squamous Cell Carcinoma',
            'Adenocarcinoma'
          ]},
          { type: 'callout', content: 'ASC-US is not a trash can—use it judiciously and only when criteria are met.', variant: 'warning' }
        ]
      },
      {
        id: 'adequacy-pap',
        title: 'Specimen Adequacy',
        content: [
          { type: 'heading', content: 'Adequate Pap Smear Criteria' },
          { type: 'heading', content: 'Conventional Smears' },
          { type: 'list', content: [
            'Minimum 8,000-12,000 well-preserved squamous cells',
            'Endocervical/transformation zone component present',
            'Absence of excessive obscuring factors'
          ]},
          { type: 'heading', content: 'Liquid-Based (ThinPrep/SurePath)' },
          { type: 'list', content: [
            'Minimum 5,000 well-preserved squamous cells',
            'Endocervical/transformation zone component',
            'Partially obscured acceptable if adequate cells visible'
          ]},
          { type: 'heading', content: 'Transformation Zone Component' },
          { type: 'text', content: 'Evidence that the transformation zone was sampled:' },
          { type: 'list', content: [
            '≥10 well-preserved endocervical or metaplastic cells',
            'Indicates sampling of cancer-prone area',
            'Required for "satisfactory" designation'
          ]},
          { type: 'callout', content: 'Unsatisfactory specimens should be repeated. Satisfactory but lacking transformation zone component may still be negative, but repeat should be recommended.', variant: 'info' }
        ]
      },
      {
        id: 'nilm',
        title: 'NILM and Infections',
        content: [
          { type: 'heading', content: 'Negative for Intraepithelial Lesion or Malignancy' },
          { type: 'text', content: 'Normal cellular components with possible benign changes.' },
          { type: 'heading', content: 'Organisms' },
          { type: 'text', content: 'Trichomonas vaginalis:' },
          { type: 'list', content: [
            'Pear-shaped organisms',
            'Slightly larger than neutrophils',
            'Gray-green cytoplasm',
            'Eccentric nucleus'
          ]},
          { type: 'text', content: 'Candida species:' },
          { type: 'list', content: [
            'Pseudohyphae and budding yeast forms',
            'Spores smaller than RBCs',
            'Background may show inflammation'
          ]},
          { type: 'text', content: 'Bacterial vaginosis (shift in flora):' },
          { type: 'list', content: [
            'Coccobacilli coating squamous cells',
            '"Clue cells" with obscured borders',
            'Mixed bacterial flora'
          ]},
          { type: 'text', content: 'Herpes simplex virus (HSV):' },
          { type: 'list', content: [
            'Multinucleation',
            'Nuclear molding',
            'Ground-glass chromatin',
            'Intranuclear inclusions (Cowdry A)'
          ]}
        ]
      },
      {
        id: 'lsil-hsil',
        title: 'LSIL and HSIL',
        content: [
          { type: 'heading', content: 'Low-Grade Squamous Intraepithelial Lesion (LSIL)' },
          { type: 'text', content: 'Encompasses HPV effect and CIN 1. Reflects productive viral infection.' },
          { type: 'list', content: [
            'Nuclear enlargement (3x normal intermediate cell nucleus)',
            'Mild hyperchromasia',
            'Binucleation common',
            'Koilocytes: perinuclear halos with irregular, thickened membranes',
            'Retained cytoplasm'
          ]},
          { type: 'heading', content: 'High-Grade Squamous Intraepithelial Lesion (HSIL)' },
          { type: 'text', content: 'Encompasses CIN 2 and CIN 3. True dysplasia with malignant potential.' },
          { type: 'list', content: [
            'Smaller cells with high N:C ratio',
            'Hyperchromatic, irregular nuclei',
            'Coarse chromatin',
            'Irregular nuclear membranes',
            'Cells appear as syncytial groups or single',
            'Less cytoplasm than LSIL'
          ]},
          { type: 'callout', content: 'LSIL cells are LARGE with abundant cytoplasm. HSIL cells are SMALL with scant cytoplasm and high N:C ratios.', variant: 'warning' }
        ]
      },
      {
        id: 'asc',
        title: 'Atypical Squamous Cells',
        content: [
          { type: 'heading', content: 'ASC-US: Atypical Squamous Cells of Undetermined Significance' },
          { type: 'text', content: 'Changes greater than reactive but not definitively SIL.' },
          { type: 'list', content: [
            'Nuclear enlargement 2.5-3x normal',
            'Mild hyperchromasia',
            'Slight irregularity',
            'Does not meet full LSIL criteria',
            'Often associated with inflammation, atrophy, or reparative changes'
          ]},
          { type: 'heading', content: 'ASC-H: Cannot Exclude HSIL' },
          { type: 'text', content: 'Findings suggestive of HSIL but quantitatively or qualitatively insufficient.' },
          { type: 'list', content: [
            'Small cells with dense nuclei',
            'High N:C ratio',
            'Few cells or poor preservation limits interpretation',
            'Higher risk category than ASC-US',
            'Requires colposcopy'
          ]},
          { type: 'callout', content: 'ASC-H carries ~30-40% risk of underlying CIN 2+. It is a high-risk category.', variant: 'danger' }
        ]
      },
      {
        id: 'agc-carcinoma',
        title: 'AGC and Carcinoma',
        content: [
          { type: 'heading', content: 'Atypical Glandular Cells (AGC)' },
          { type: 'text', content: 'Glandular cells with atypia beyond reactive changes.' },
          { type: 'list', content: [
            'Nuclear enlargement and hyperchromasia',
            'Irregular chromatin',
            'Increased N:C ratio',
            'Loss of honeycomb arrangement',
            'Feathering, rosettes, or strips',
            'Can be endocervical or endometrial origin'
          ]},
          { type: 'heading', content: 'Squamous Cell Carcinoma' },
          { type: 'list', content: [
            'Marked pleomorphism',
            'Keratinization (orangeophilic dense cytoplasm)',
            'Bizarre cell shapes',
            'Tumor diathesis often present',
            'Nucleoli may be prominent'
          ]},
          { type: 'heading', content: 'Adenocarcinoma' },
          { type: 'list', content: [
            'Loss of polarity',
            'Three-dimensional clusters',
            'Irregular chromatin with prominent nucleoli',
            'Feathering and rosettes',
            'Vacuolated cytoplasm',
            'May see tumor diathesis'
          ]}
        ]
      }
    ],
    quiz: {
      id: 'pap-quiz',
      title: 'Pap Smear Quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which feature is characteristic of LSIL?',
          options: [
            'Small cells with high N:C ratio',
            'Large cells with koilocytic halos',
            'Orangeophilic keratinization',
            'Three-dimensional glandular clusters'
          ],
          correctAnswer: 1,
          explanation: 'LSIL features include large cells with abundant cytoplasm and koilocytic changes (perinuclear halos).'
        },
        {
          id: 'q2',
          question: 'What is the approximate risk of CIN 2+ with ASC-H?',
          options: ['5-10%', '15-20%', '30-40%', '60-70%'],
          correctAnswer: 2,
          explanation: 'ASC-H carries approximately 30-40% risk of underlying CIN 2 or higher lesion.'
        },
        {
          id: 'q3',
          question: 'What characterizes koilocytes?',
          options: [
            'Dense keratinization',
            'Perinuclear halo with irregular nuclear membranes',
            'Prominent nucleoli',
            'Syncytial arrangement'
          ],
          correctAnswer: 1,
          explanation: 'Koilocytes show perinuclear clearing (halo) with irregular, thickened nuclear membranes, characteristic of HPV effect.'
        }
      ]
    }
  },
  {
    id: 'urine',
    title: 'Urine Cytology (Paris System)',
    description: 'Urothelial neoplasia classification and adequacy criteria',
    icon: '💧',
    color: 'from-amber-500 to-orange-500',
    lessons: [
      {
        id: 'paris-intro',
        title: 'Paris System Overview',
        content: [
          { type: 'heading', content: 'The Paris System for Reporting Urinary Cytology' },
          { type: 'text', content: 'Standardized reporting to reduce interobserver variability and improve clinical utility.' },
          { type: 'heading', content: 'Diagnostic Categories' },
          { type: 'list', content: [
            'Non-diagnostic/Unsatisfactory',
            'Negative for High-Grade Urothelial Carcinoma (NHGUC)',
            'Atypical Urothelial Cells (AUC)',
            'Suspicious for High-Grade Urothelial Carcinoma (SHGUC)',
            'High-Grade Urothelial Carcinoma (HGUC)',
            'Low-Grade Urothelial Neoplasia',
            'Other malignancies'
          ]},
          { type: 'callout', content: 'The Paris System focuses on detecting HIGH-GRADE lesions. Low-grade tumors are notoriously difficult to diagnose on cytology.', variant: 'info' }
        ]
      },
      {
        id: 'adequacy-urine',
        title: 'Adequacy and Normal Components',
        content: [
          { type: 'heading', content: 'Adequacy Criteria' },
          { type: 'text', content: 'Variable by institution, but generally:' },
          { type: 'list', content: [
            'Well-preserved urothelial cells present',
            'Absence of excessive obscuring elements',
            'Properly labeled and fixed',
            'Clinical history provided'
          ]},
          { type: 'heading', content: 'Normal Urothelial Cells' },
          { type: 'list', content: [
            'Superficial cells: large, umbrella-shaped, often binucleate',
            'Intermediate cells: smaller, round to oval',
            'Deep/basal cells: smallest, rare in normal voided specimens',
            'Minimal N:C variability within groups',
            'Fine, evenly distributed chromatin',
            'Smooth nuclear membranes'
          ]},
          { type: 'heading', content: 'Benign Findings' },
          { type: 'text', content: 'Instrumentation effect: degeneration, nuclear enlargement, but chromatin remains fine' },
          { type: 'text', content: 'Reactive changes: inflammation, stones, infection can cause atypia' },
          { type: 'text', content: 'Polyomavirus: intranuclear inclusions with ground-glass chromatin, nuclear enlargement' }
        ]
      },
      {
        id: 'hguc',
        title: 'High-Grade Urothelial Carcinoma',
        content: [
          { type: 'heading', content: 'HGUC Criteria (Need to Meet ALL)' },
          { type: 'list', content: [
            'High N:C ratio (>0.7)',
            'Hyperchromasia',
            'Irregular, coarse chromatin',
            'Irregular nuclear membranes with notches/grooves',
            'Cells may be single or in clusters',
            'Three-dimensional clusters suggest invasive disease'
          ]},
          { type: 'callout', content: 'HGUC cells are SMALLER than normal superficial cells, with marked nuclear abnormalities.', variant: 'warning' },
          { type: 'heading', content: 'Suspicious for HGUC (SHGUC)' },
          { type: 'text', content: 'Features suggest HGUC but fall short quantitatively or qualitatively:' },
          { type: 'list', content: [
            'Few atypical cells',
            'Degeneration limiting assessment',
            'Borderline features',
            'Clinical follow-up recommended'
          ]}
        ]
      },
      {
        id: 'atypical-low-grade',
        title: 'Atypical and Low-Grade',
        content: [
          { type: 'heading', content: 'Atypical Urothelial Cells (AUC)' },
          { type: 'text', content: 'Atypia beyond reactive but not meeting SHGUC/HGUC criteria.' },
          { type: 'list', content: [
            'Mild nuclear enlargement',
            'Mild hyperchromasia',
            'Maintained fine chromatin',
            'Often due to inflammation, stones, therapy, instrumentation',
            'Recommend clinical correlation'
          ]},
          { type: 'heading', content: 'Low-Grade Urothelial Neoplasia' },
          { type: 'text', content: 'Extremely difficult to diagnose on cytology. Features:' },
          { type: 'list', content: [
            'Increased cellularity',
            'Mild nuclear enlargement',
            'Fine chromatin (key difference from HGUC)',
            'Low N:C ratio',
            'Cells often in papillary clusters',
            'Low sensitivity on cytology'
          ]},
          { type: 'callout', content: 'Cytology is poor at detecting low-grade urothelial neoplasia. Negative cytology does not exclude low-grade tumors.', variant: 'info' }
        ]
      }
    ],
    quiz: {
      id: 'urine-quiz',
      title: 'Urine Cytology Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the primary focus of The Paris System?',
          options: [
            'Detecting low-grade urothelial neoplasia',
            'Detecting high-grade urothelial carcinoma',
            'Identifying infectious organisms',
            'Assessing specimen adequacy'
          ],
          correctAnswer: 1,
          explanation: 'The Paris System is optimized for detecting high-grade urothelial carcinoma, which is clinically significant.'
        },
        {
          id: 'q2',
          question: 'Which N:C ratio is typical for HGUC?',
          options: ['<0.3', '0.3-0.5', '0.5-0.7', '>0.7'],
          correctAnswer: 3,
          explanation: 'HGUC cells have high N:C ratios, typically >0.7, along with hyperchromasia and irregular chromatin.'
        },
        {
          id: 'q3',
          question: 'Why is low-grade urothelial neoplasia difficult to diagnose on cytology?',
          options: [
            'Cells are too large',
            'Nuclear features overlap with reactive changes',
            'Specimens are usually inadequate',
            'Special stains are required'
          ],
          correctAnswer: 1,
          explanation: 'Low-grade lesions have only mild nuclear atypia with fine chromatin, overlapping significantly with reactive/benign processes.'
        }
      ]
    }
  },
  {
    id: 'thyroid',
    title: 'FNA: Thyroid',
    description: 'Bethesda System for Thyroid Cytopathology and adequacy criteria',
    icon: '🦋',
    color: 'from-purple-500 to-indigo-500',
    lessons: [
      {
        id: 'bethesda-thyroid',
        title: 'Bethesda System for Thyroid',
        content: [
          { type: 'heading', content: 'The Bethesda System for Reporting Thyroid Cytopathology' },
          { type: 'text', content: 'Six diagnostic categories with associated malignancy risk:' },
          { type: 'table', content: {
            headers: ['Category', 'Risk of Malignancy', 'Management'],
            rows: [
              ['I. Non-diagnostic', '1-4%', 'Repeat FNA'],
              ['II. Benign', '0-3%', 'Clinical follow-up'],
              ['III. AUS/FLUS', '5-15%', 'Repeat FNA or molecular'],
              ['IV. Follicular Neoplasm', '15-30%', 'Surgery or molecular'],
              ['V. Suspicious for Malignancy', '60-75%', 'Surgery'],
              ['VI. Malignant', '97-99%', 'Surgery']
            ]
          }},
          { type: 'callout', content: 'Risk stratification guides clinical management. Molecular testing can help refine risk in indeterminate categories.', variant: 'info' }
        ]
      },
      {
        id: 'adequacy-thyroid',
        title: 'Adequacy Criteria',
        content: [
          { type: 'heading', content: 'Bethesda Category I: Non-diagnostic' },
          { type: 'text', content: 'Adequate thyroid FNA requires:' },
          { type: 'list', content: [
            'At least 6 groups of follicular cells',
            'Each group containing at least 10 well-preserved cells',
            'Preferably from 2 separate needle passes'
          ]},
          { type: 'heading', content: 'Exceptions to Adequacy Rules' },
          { type: 'list', content: [
            'Cyst fluid only: non-diagnostic unless atypical cells present',
            'Abundant colloid alone: non-diagnostic',
            'Purely lymphocytic: adequate if consistent with lymphocytic thyroiditis',
            'Any atypia: adequate regardless of cellularity',
            'Anaplastic carcinoma: often necrotic, fewer cells acceptable'
          ]},
          { type: 'callout', content: 'If you see definite atypia, the specimen is adequate by definition—report the atypia!', variant: 'warning' }
        ]
      },
      {
        id: 'benign',
        title: 'Benign Thyroid',
        content: [
          { type: 'heading', content: 'Bethesda II: Benign' },
          { type: 'text', content: 'Adequate cellularity with benign follicular nodule or thyroiditis patterns.' },
          { type: 'heading', content: 'Benign Follicular Nodule (Colloid Nodule)' },
          { type: 'list', content: [
            'Abundant colloid',
            'Bland follicular cells in sheets and microfollicles',
            'Macrophages often present',
            'Monotonous population',
            'No significant atypia'
          ]},
          { type: 'heading', content: 'Hashimoto Thyroiditis' },
          { type: 'list', content: [
            'Polymorphous lymphoid population',
            'Plasma cells',
            'Germinal centers (lymphoglandular bodies)',
            'Hurthle cells (oncocytes)',
            'Follicular cells with reactive changes',
            'Scant colloid'
          ]},
          { type: 'heading', content: 'Granulomatous (Subacute) Thyroiditis' },
          { type: 'list', content: [
            'Granulomas with epithelioid histiocytes',
            'Multinucleated giant cells',
            'Acute and chronic inflammation',
            'Colloid and follicular cells may be scant'
          ]}
        ]
      },
      {
        id: 'atypia',
        title: 'AUS/FLUS and Follicular Neoplasm',
        content: [
          { type: 'heading', content: 'Bethesda III: Atypia of Undetermined Significance / Follicular Lesion of Undetermined Significance' },
          { type: 'text', content: 'Heterogeneous category for findings that are neither convincingly benign nor suspicious.' },
          { type: 'list', content: [
            'Architectural or nuclear atypia insufficient for higher category',
            'Extensive but focal Hurthle cell change',
            'Follicular lesion, not otherwise specified',
            'Atypical lymphoid infiltrate',
            'Atypical cyst-lining cells',
            'Should be used sparingly (<10% of cases)'
          ]},
          { type: 'heading', content: 'Bethesda IV: Follicular Neoplasm (FN) / Suspicious for Follicular Neoplasm (SFN)' },
          { type: 'text', content: 'Cellular aspirate suggesting a follicular-patterned lesion. Cannot distinguish adenoma from carcinoma.' },
          { type: 'list', content: [
            'Highly cellular',
            'Scant or absent colloid',
            'Microfollicles and crowded groups',
            'Monotonous follicular cells',
            'Minimal atypia',
            'Distinction from nodular hyperplasia may be difficult'
          ]},
          { type: 'text', content: 'Hurthle cell (oncocytic) variant: >75% Hurthle cells. Specify if present.' },
          { type: 'callout', content: 'Microfollicles + scant colloid = FN. Abundant colloid favors benign nodular hyperplasia.', variant: 'info' }
        ]
      },
      {
        id: 'suspicious-malignant',
        title: 'Suspicious and Malignant',
        content: [
          { type: 'heading', content: 'Bethesda V: Suspicious for Malignancy' },
          { type: 'text', content: 'Features suggest malignancy but are not definitive.' },
          { type: 'list', content: [
            'Some features of papillary carcinoma but not all',
            'Limited cellularity or suboptimal preparation',
            'Worrisome features in follicular lesion',
            '60-75% malignancy risk'
          ]},
          { type: 'heading', content: 'Bethesda VI: Malignant' },
          { type: 'text', content: 'Diagnostic features of malignancy.' },
          { type: 'heading', content: 'Papillary Thyroid Carcinoma (PTC)' },
          { type: 'list', content: [
            'Nuclear enlargement and crowding/overlap',
            'Nuclear grooves',
            'Intranuclear cytoplasmic pseudoinclusions',
            'Irregular nuclear membranes',
            'Pale "ground-glass" chromatin',
            'Papillae with fibrovascular cores',
            'Dense cytoplasm',
            'Psammoma bodies (rare but specific)'
          ]},
          { type: 'heading', content: 'Medullary Thyroid Carcinoma (MTC)' },
          { type: 'list', content: [
            'Dispersed plasmacytoid or spindle cells',
            'Eccentric nuclei with "salt-and-pepper" chromatin',
            'Red granules in cytoplasm (neuroendocrine)',
            'Amyloid in background (Congo red positive)',
            'Positive for calcitonin (IHC/serum)'
          ]},
          { type: 'heading', content: 'Anaplastic Thyroid Carcinoma' },
          { type: 'list', content: [
            'Pleomorphic, bizarre cells',
            'Spindled, epithelioid, or giant cells',
            'Necrosis common',
            'High mitotic activity',
            'Aggressive clinical course'
          ]},
          { type: 'callout', content: 'PTC triad: nuclear grooves + pseudoinclusions + pale chromatin. Not all need to be present.', variant: 'warning' }
        ]
      }
    ],
    quiz: {
      id: 'thyroid-quiz',
      title: 'Thyroid FNA Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the adequacy requirement for thyroid FNA?',
          options: [
            '3 groups of 10 cells each',
            '6 groups of 10 cells each',
            '10 groups of 6 cells each',
            '20 well-preserved cells'
          ],
          correctAnswer: 1,
          explanation: 'Adequate thyroid FNA requires at least 6 groups of follicular cells, each containing at least 10 well-preserved cells.'
        },
        {
          id: 'q2',
          question: 'Which feature is most specific for papillary thyroid carcinoma?',
          options: [
            'Nuclear grooves',
            'Intranuclear pseudoinclusions',
            'Psammoma bodies',
            'Pale chromatin'
          ],
          correctAnswer: 2,
          explanation: 'While all features can be seen in PTC, psammoma bodies are the most specific (though not always present).'
        },
        {
          id: 'q3',
          question: 'What distinguishes Follicular Neoplasm from benign nodular hyperplasia?',
          options: [
            'Nuclear atypia',
            'Scant colloid and microfollicular pattern',
            'Presence of Hurthle cells',
            'Lymphocytic infiltrate'
          ],
          correctAnswer: 1,
          explanation: 'FN is characterized by high cellularity with microfollicles and scant colloid, unlike hyperplasia which has abundant colloid.'
        }
      ]
    }
  },
  {
    id: 'salivary',
    title: 'FNA: Salivary Gland',
    description: 'Milan System for salivary gland cytology and key tumor patterns',
    icon: '👅',
    color: 'from-green-500 to-emerald-500',
    lessons: [
      {
        id: 'milan-intro',
        title: 'Milan System Overview',
        content: [
          { type: 'heading', content: 'The Milan System for Reporting Salivary Gland Cytopathology' },
          { type: 'text', content: 'Standardized six-tier system:' },
          { type: 'table', content: {
            headers: ['Category', 'Risk of Malignancy'],
            rows: [
              ['I. Non-diagnostic', '~25%'],
              ['II. Non-neoplastic', '~10%'],
              ['IIIa. Atypia of Undetermined Significance', '~20%'],
              ['IIIb. Salivary Gland Neoplasm of Uncertain Malignant Potential', '~35%'],
              ['IVa. Benign Neoplasm', '<5%'],
              ['IVb. Neoplasm: Uncertain Malignant Potential', '~60%'],
              ['V. Suspicious for Malignancy', '~85%'],
              ['VI. Malignant', '~95%']
            ]
          }}
        ]
      },
      {
        id: 'benign-salivary',
        title: 'Benign Salivary Lesions',
        content: [
          { type: 'heading', content: 'Pleomorphic Adenoma (Benign Mixed Tumor)' },
          { type: 'text', content: 'Most common salivary gland tumor.' },
          { type: 'list', content: [
            'Epithelial and myoepithelial cells',
            'Magenta fibrillary stroma (chondromyxoid matrix)',
            'Branching epithelial fragments',
            'Metachromatic stromal balls',
            'Background: clean'
          ]},
          { type: 'heading', content: 'Warthin Tumor (Papillary Cystadenoma Lymphomatosum)' },
          { type: 'list', content: [
            'Oncocytic (Hurthle-like) epithelial cells',
            'Polymorphous lymphoid population in background',
            'Cystic background with macrophages',
            'Epithelial cells in sheets with granular cytoplasm',
            'Almost exclusively in parotid'
          ]},
          { type: 'heading', content: 'Chronic Sialadenitis' },
          { type: 'list', content: [
            'Acinar cells, ductal cells',
            'Chronic inflammation (lymphocytes, plasma cells)',
            'Fibrosis',
            'Macrophages, debris',
            'Reactive atypia may be present'
          ]},
          { type: 'callout', content: 'Pleomorphic adenoma: magenta stroma is key. Warthin tumor: oncocytes + lymphocytes.', variant: 'info' }
        ]
      },
      {
        id: 'malignant-salivary',
        title: 'Malignant Salivary Tumors',
        content: [
          { type: 'heading', content: 'Mucoepidermoid Carcinoma' },
          { type: 'text', content: 'Most common malignant salivary tumor.' },
          { type: 'list', content: [
            'Three cell types: mucous, epidermoid (squamoid), intermediate',
            'Mucin in background',
            'Cystic or solid architecture',
            'Low-grade: abundant mucin, bland cytology',
            'High-grade: solid, more atypia, less mucin'
          ]},
          { type: 'heading', content: 'Acinic Cell Carcinoma' },
          { type: 'list', content: [
            'Cells resemble normal acinar cells',
            'Basophilic granular cytoplasm (zymogen granules)',
            'Round, eccentric nuclei',
            'Relatively bland cytology',
            'PAS-positive, diastase-resistant granules'
          ]},
          { type: 'heading', content: 'Adenoid Cystic Carcinoma' },
          { type: 'list', content: [
            'Basaloid cells in tight clusters',
            'Hyaline globules (basement membrane material)',
            'Cylindromatous pattern',
            'High nuclear:cytoplasmic ratio',
            'Scant cytoplasm',
            'Perineural invasion on histology'
          ]},
          { type: 'heading', content: 'Carcinoma ex Pleomorphic Adenoma' },
          { type: 'list', content: [
            'Features of pleomorphic adenoma',
            'Plus: significant atypia, necrosis, mitoses',
            'Mixed benign and malignant elements',
            'Often high-grade carcinoma component'
          ]},
          { type: 'callout', content: 'Mucoepidermoid: mucin + mixed cell types. Adenoid cystic: basaloid cells + hyaline globules.', variant: 'warning' }
        ]
      }
    ],
    quiz: {
      id: 'salivary-quiz',
      title: 'Salivary Gland Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the key feature of pleomorphic adenoma?',
          options: [
            'Oncocytic cells with lymphocytes',
            'Magenta chondromyxoid stroma',
            'Basaloid cells with hyaline globules',
            'Mucin-producing cells'
          ],
          correctAnswer: 1,
          explanation: 'Pleomorphic adenoma is characterized by epithelial cells with magenta fibrillary (chondromyxoid) stroma.'
        },
        {
          id: 'q2',
          question: 'Which tumor features oncocytic cells and lymphocytes?',
          options: [
            'Pleomorphic adenoma',
            'Warthin tumor',
            'Mucoepidermoid carcinoma',
            'Acinic cell carcinoma'
          ],
          correctAnswer: 1,
          explanation: 'Warthin tumor is characterized by oncocytic epithelial cells with a polymorphous lymphoid background.'
        },
        {
          id: 'q3',
          question: 'What is the most common malignant salivary gland tumor?',
          options: [
            'Adenoid cystic carcinoma',
            'Acinic cell carcinoma',
            'Mucoepidermoid carcinoma',
            'Carcinoma ex pleomorphic adenoma'
          ],
          correctAnswer: 2,
          explanation: 'Mucoepidermoid carcinoma is the most common malignant salivary gland tumor.'
        }
      ]
    }
  },
  {
    id: 'lymph-node',
    title: 'FNA: Lymph Nodes',
    description: 'Reactive vs neoplastic patterns and flow cytometry indications',
    icon: '🔵',
    color: 'from-blue-500 to-violet-500',
    lessons: [
      {
        id: 'reactive-lymph',
        title: 'Reactive Lymph Node',
        content: [
          { type: 'heading', content: 'Reactive Hyperplasia' },
          { type: 'text', content: 'Polymorphous lymphoid population representing a normal immune response.' },
          { type: 'list', content: [
            'Mixed small lymphocytes, large lymphocytes, immunoblasts',
            'Tingible body macrophages',
            'Lymphoglandular bodies (bare germinal center nuclei)',
            'Plasma cells may be present',
            'No monotonous population',
            'Background usually clean'
          ]},
          { type: 'callout', content: 'Polymorphous = reactive. Monotonous = concerning for lymphoma.', variant: 'info' }
        ]
      },
      {
        id: 'lymphoma',
        title: 'Lymphoma Patterns',
        content: [
          { type: 'heading', content: 'Features Suspicious for Lymphoma' },
          { type: 'list', content: [
            'Monotonous lymphoid population',
            'Predominance of one cell size',
            'Absent tingible body macrophages',
            'Lymphoglandular bodies may be present or absent',
            'Atypical nuclear features'
          ]},
          { type: 'heading', content: 'Hodgkin Lymphoma Clues' },
          { type: 'list', content: [
            'Reed-Sternberg cells: large binucleate/multinucleate',
            'Mirror-image nuclei ("owl eyes")',
            'Prominent eosinophilic nucleoli',
            'Mixed inflammatory background',
            'Eosinophils may be present'
          ]},
          { type: 'callout', content: 'ALWAYS recommend flow cytometry when you suspect lymphoma. Cytology alone cannot fully classify lymphoid neoplasms.', variant: 'warning' }
        ]
      },
      {
        id: 'metastatic',
        title: 'Metastatic Carcinoma',
        content: [
          { type: 'heading', content: 'General Features' },
          { type: 'list', content: [
            'Cohesive epithelial cells (unusual in lymph node)',
            'Three-dimensional clusters',
            'Nuclear atypia',
            'Prominent nucleoli',
            'Background: lymphocytes'
          ]},
          { type: 'heading', content: 'Common Primaries' },
          { type: 'text', content: 'Squamous cell carcinoma: keratinization, intercellular bridges' },
          { type: 'text', content: 'Adenocarcinoma: glandular architecture, mucin, irregular chromatin' },
          { type: 'text', content: 'Papillary thyroid carcinoma: nuclear grooves, pseudoinclusions, psammoma bodies' },
          { type: 'text', content: 'Melanoma: pigment, intranuclear pseudoinclusions, dispersed cells' }
        ]
      },
      {
        id: 'ancillary-lymph',
        title: 'Flow Cytometry Indications',
        content: [
          { type: 'heading', content: 'When to Order Flow Cytometry' },
          { type: 'list', content: [
            'Monotonous lymphoid population',
            'Clinical suspicion of lymphoma',
            'Atypical lymphoid cells',
            'History of lymphoma (recurrence evaluation)',
            'Unexplained lymphadenopathy'
          ]},
          { type: 'heading', content: 'What Flow Provides' },
          { type: 'list', content: [
            'Immunophenotyping: B vs T cell',
            'Light chain restriction (kappa/lambda)',
            'Aberrant antigen expression',
            'Classification of lymphoma subtypes',
            'Clonality assessment'
          ]},
          { type: 'callout', content: 'Reserve at least 1 pass in EDTA or RPMI for flow cytometry when lymphoma is suspected.', variant: 'info' }
        ]
      }
    ],
    quiz: {
      id: 'lymph-quiz',
      title: 'Lymph Node FNA Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What characterizes a reactive lymph node?',
          options: [
            'Monotonous small lymphocytes',
            'Polymorphous lymphoid population',
            'Reed-Sternberg cells',
            'Epithelial clusters'
          ],
          correctAnswer: 1,
          explanation: 'Reactive lymph nodes show a polymorphous (mixed) lymphoid population with various cell sizes and tingible body macrophages.'
        },
        {
          id: 'q2',
          question: 'What are lymphoglandular bodies?',
          options: [
            'Reed-Sternberg cells',
            'Bare germinal center nuclei',
            'Plasma cells',
            'Epithelial fragments'
          ],
          correctAnswer: 1,
          explanation: 'Lymphoglandular bodies are bare nuclei from fragile germinal center cells, indicating lymphoid tissue.'
        },
        {
          id: 'q3',
          question: 'When should flow cytometry be ordered?',
          options: [
            'All lymph node FNAs',
            'Only when Reed-Sternberg cells are seen',
            'When monotonous lymphoid population or clinical suspicion',
            'Never, morphology is sufficient'
          ],
          correctAnswer: 2,
          explanation: 'Flow cytometry should be ordered when there is a monotonous population, atypical features, or clinical suspicion of lymphoma.'
        }
      ]
    }
  },
  {
    id: 'breast',
    title: 'FNA: Breast',
    description: 'Breast lesion cytology and triple test concept',
    icon: '🎀',
    color: 'from-pink-500 to-fuchsia-500',
    lessons: [
      {
        id: 'breast-intro',
        title: 'Triple Test & Adequacy',
        content: [
          { type: 'heading', content: 'Triple Test' },
          { type: 'text', content: 'Breast lesion evaluation requires three components:' },
          { type: 'list', content: [
            '1. Clinical examination',
            '2. Imaging (mammography/ultrasound)',
            '3. Pathology (FNA or core biopsy)'
          ]},
          { type: 'text', content: 'Concordance among all three increases diagnostic accuracy.' },
          { type: 'callout', content: 'Core needle biopsy has largely replaced FNA in breast due to better architecture preservation and ability to assess invasion.', variant: 'info' },
          { type: 'heading', content: 'Adequacy' },
          { type: 'list', content: [
            'Adequate epithelial cells for evaluation',
            'Well-preserved cells',
            'Proper fixation',
            'Clinical correlation essential'
          ]}
        ]
      },
      {
        id: 'benign-breast',
        title: 'Benign Breast Lesions',
        content: [
          { type: 'heading', content: 'Fibroadenoma' },
          { type: 'text', content: 'Most common benign breast tumor in young women.' },
          { type: 'list', content: [
            'Cohesive sheets of bland epithelial cells',
            'Branching staghorn-like fragments',
            'Bipolar bare nuclei (stromal)',
            'Stromal fragments',
            'Minimal atypia',
            'Background: clean'
          ]},
          { type: 'heading', content: 'Fibrocystic Changes' },
          { type: 'list', content: [
            'Apocrine metaplasia: abundant granular cytoplasm, round nuclei',
            'Foam cells (macrophages)',
            'Ductal epithelial cells in sheets',
            'Stromal fragments',
            'Cyst contents if cystic'
          ]},
          { type: 'heading', content: 'Fat Necrosis' },
          { type: 'list', content: [
            'Foamy macrophages',
            'Multinucleated giant cells',
            'Inflammatory cells',
            'Fat globules',
            'History of trauma often present'
          ]}
        ]
      },
      {
        id: 'malignant-breast',
        title: 'Breast Carcinoma',
        content: [
          { type: 'heading', content: 'Ductal Carcinoma' },
          { type: 'text', content: 'Most common breast malignancy.' },
          { type: 'list', content: [
            'Discohesive cells (loss of cohesion)',
            'High N:C ratio',
            'Nuclear pleomorphism',
            'Prominent nucleoli',
            'Irregular nuclear membranes',
            'Mitoses may be seen',
            'Necrosis in high-grade lesions'
          ]},
          { type: 'heading', content: 'Lobular Carcinoma' },
          { type: 'list', content: [
            'Dispersed single cells',
            'Monotonous small cells',
            'Intracytoplasmic lumina (targetoid)',
            'Minimal pleomorphism',
            'Indian file pattern on histology',
            'E-cadherin negative (IHC)'
          ]},
          { type: 'heading', content: 'DCIS (Ductal Carcinoma In Situ)' },
          { type: 'text', content: 'Difficult to distinguish from invasive on cytology alone:' },
          { type: 'list', content: [
            'Atypical epithelial cells',
            'May see necrosis (high-grade)',
            'Architecture limited on cytology',
            'Core biopsy preferred for definitive diagnosis'
          ]},
          { type: 'callout', content: 'Cytology cannot reliably distinguish DCIS from invasive carcinoma. Core biopsy is essential.', variant: 'warning' }
        ]
      }
    ],
    quiz: {
      id: 'breast-quiz',
      title: 'Breast FNA Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What are the three components of the triple test?',
          options: [
            'FNA, core biopsy, excision',
            'Clinical exam, imaging, pathology',
            'Mammogram, ultrasound, MRI',
            'Cytology, IHC, molecular'
          ],
          correctAnswer: 1,
          explanation: 'The triple test consists of clinical examination, imaging (mammography/ultrasound), and pathology (FNA or core).'
        },
        {
          id: 'q2',
          question: 'What is characteristic of fibroadenoma cytology?',
          options: [
            'Discohesive malignant cells',
            'Staghorn epithelial fragments and bipolar bare nuclei',
            'Indian file pattern',
            'Abundant foam cells'
          ],
          correctAnswer: 1,
          explanation: 'Fibroadenoma shows characteristic staghorn-like branching epithelial fragments with bipolar bare nuclei (stromal cells).'
        },
        {
          id: 'q3',
          question: 'Why is core biopsy preferred over FNA for breast lesions?',
          options: [
            'Less invasive',
            'Faster results',
            'Can assess architecture and invasion',
            'Requires less expertise'
          ],
          correctAnswer: 2,
          explanation: 'Core biopsy preserves tissue architecture, allowing assessment of invasion versus in situ disease, which cytology cannot reliably distinguish.'
        }
      ]
    }
  },
  {
    id: 'effusion',
    title: 'Effusion Cytology',
    description: 'Pleural, peritoneal, and pericardial fluid analysis',
    icon: '💧',
    color: 'from-cyan-500 to-blue-500',
    lessons: [
      {
        id: 'effusion-basics',
        title: 'Effusion Basics',
        content: [
          { type: 'heading', content: 'Types of Effusions' },
          { type: 'list', content: [
            'Pleural (lung/chest)',
            'Peritoneal (abdominal/ascites)',
            'Pericardial (heart)'
          ]},
          { type: 'heading', content: 'Transudates vs Exudates' },
          { type: 'text', content: 'Clinical distinction based on protein, LDH, and specific gravity:' },
          { type: 'text', content: 'Transudate: CHF, cirrhosis, nephrotic syndrome (low protein, low cellularity)' },
          { type: 'text', content: 'Exudate: infection, malignancy, inflammation (high protein, higher cellularity)' },
          { type: 'callout', content: 'Cell block preparation is essential for effusions—allows IHC and special stains.', variant: 'info' }
        ]
      },
      {
        id: 'mesothelial',
        title: 'Mesothelial Cells',
        content: [
          { type: 'heading', content: 'Reactive Mesothelial Cells' },
          { type: 'text', content: 'Lining cells of serous cavities. Can look alarming when reactive!' },
          { type: 'list', content: [
            'Round to polygonal cells',
            'Abundant cytoplasm with peripheral "windows"',
            'Central round nucleus',
            'Small nucleolus',
            'May be binucleate',
            'Form flat sheets or balls',
            'Microvilli on cell surface'
          ]},
          { type: 'heading', content: 'Reactive vs Malignant Mesothelial Cells' },
          { type: 'table', content: {
            headers: ['Feature', 'Reactive', 'Malignant'],
            rows: [
              ['Cell arrangement', 'Flat sheets, windows', 'Papillae, loss of windows'],
              ['Nuclei', 'Uniform, central', 'Pleomorphic, eccentric'],
              ['Nucleoli', 'Small', 'Prominent'],
              ['Chromatin', 'Fine', 'Irregular, coarse'],
              ['Cell size', 'Uniform', 'Variable']
            ]
          }},
          { type: 'callout', content: 'Reactive mesothelial cells can have significant atypia. Look for windows, uniform chromatin, and lack of true malignant features.', variant: 'warning' }
        ]
      },
      {
        id: 'malignant-effusion',
        title: 'Malignant Effusions',
        content: [
          { type: 'heading', content: 'Adenocarcinoma in Effusions' },
          { type: 'text', content: 'Most common malignancy in effusions.' },
          { type: 'list', content: [
            'Three-dimensional cell balls',
            'Loss of windows',
            'Nuclear pleomorphism',
            'Prominent nucleoli',
            'Irregular chromatin',
            'Vacuolated cytoplasm (mucin)',
            'Background: may see psammoma bodies'
          ]},
          { type: 'heading', content: 'Psammoma Bodies' },
          { type: 'list', content: [
            'Concentric laminated calcifications',
            'Associated with serous adenocarcinomas',
            'Ovary, lung, thyroid (papillary), mesothelioma',
            'Can be seen in benign conditions (rare)'
          ]},
          { type: 'heading', content: 'Lymphoma in Effusions' },
          { type: 'list', content: [
            'Monotonous lymphoid population',
            'Large cells with prominent nucleoli (often large B-cell)',
            'Flow cytometry essential',
            'Cell block for IHC'
          ]},
          { type: 'heading', content: 'Mesothelioma' },
          { type: 'text', content: 'Rare but important diagnosis:' },
          { type: 'list', content: [
            'Clusters of atypical mesothelial cells',
            'Loss of windows',
            'Papillary groups',
            'Calretinin, WT1, D2-40 positive (IHC)',
            'History of asbestos exposure',
            'Requires cell block and IHC for diagnosis'
          ]}
        ]
      }
    ],
    quiz: {
      id: 'effusion-quiz',
      title: 'Effusion Cytology Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the key feature distinguishing reactive from malignant mesothelial cells?',
          options: [
            'Cell size',
            'Presence of windows in reactive cells',
            'Cytoplasm color',
            'Number of cells'
          ],
          correctAnswer: 1,
          explanation: 'Reactive mesothelial cells maintain intercellular windows and uniform chromatin, while malignant cells lose windows and show nuclear pleomorphism.'
        },
        {
          id: 'q2',
          question: 'What are psammoma bodies associated with?',
          options: [
            'Lymphoma',
            'Squamous cell carcinoma',
            'Serous adenocarcinomas',
            'Reactive mesothelial cells'
          ],
          correctAnswer: 2,
          explanation: 'Psammoma bodies (concentric calcifications) are associated with serous adenocarcinomas, especially from ovary, lung, and thyroid.'
        },
        {
          id: 'q3',
          question: 'Why is cell block important for effusions?',
          options: [
            'Faster processing',
            'Better nuclear detail',
            'Allows IHC and special stains',
            'Required for adequacy'
          ],
          correctAnswer: 2,
          explanation: 'Cell block allows immunohistochemistry and special stains, which are often essential for distinguishing reactive mesothelial cells from adenocarcinoma and for diagnosing lymphoma and mesothelioma.'
        }
      ]
    }
  },
  {
    id: 'ancillary',
    title: 'Ancillary Studies',
    description: 'IHC, flow cytometry, molecular testing in cytology',
    icon: '🔬',
    color: 'from-violet-500 to-purple-500',
    lessons: [
      {
        id: 'ihc-basics',
        title: 'Immunohistochemistry in Cytology',
        content: [
          { type: 'heading', content: 'IHC Applications' },
          { type: 'text', content: 'IHC can be performed on cell blocks, smears, and liquid-based preparations.' },
          { type: 'list', content: [
            'Determine site of origin (CK7/CK20, TTF-1, etc.)',
            'Classify lymphomas (CD20, CD3, etc.)',
            'Confirm mesothelial vs carcinoma (calretinin, MOC31)',
            'Assess proliferation (Ki-67)',
            'Identify specific tumor types'
          ]},
          { type: 'heading', content: 'Common IHC Panels' },
          { type: 'text', content: 'Carcinoma of unknown primary:' },
          { type: 'list', content: [
            'CK7/CK20: organ patterns',
            'TTF-1: lung, thyroid',
            'PAX8: kidney, thyroid, Mullerian',
            'CDX2: GI tract',
            'GATA3: breast, urothelial',
            'ER/PR: breast, gynecologic'
          ]},
          { type: 'text', content: 'Mesothelial vs Adenocarcinoma:' },
          { type: 'list', content: [
            'Mesothelial: calretinin(+), WT1(+), D2-40(+)',
            'Adenocarcinoma: MOC31(+), BerEP4(+), CEA(+)',
            'Combined panel recommended'
          ]}
        ]
      },
      {
        id: 'flow-cytometry',
        title: 'Flow Cytometry',
        content: [
          { type: 'heading', content: 'Principles and Sample Handling' },
          { type: 'text', content: 'Flow cytometry analyzes cell surface and intracellular antigens on live cells.' },
          { type: 'list', content: [
            'Fresh sample required (EDTA or RPMI)',
            'Viable cells essential',
            'Process within 24-48 hours',
            'Reserve at least 1 FNA pass for flow'
          ]},
          { type: 'heading', content: 'Applications' },
          { type: 'list', content: [
            'Lymphoma diagnosis and classification',
            'B-cell vs T-cell lineage',
            'Light chain restriction (kappa/lambda)',
            'Aberrant antigen expression',
            'Minimal residual disease detection'
          ]},
          { type: 'heading', content: 'Basic Markers' },
          { type: 'text', content: 'B-cell: CD19, CD20, CD22, surface immunoglobulin' },
          { type: 'text', content: 'T-cell: CD2, CD3, CD5, CD7' },
          { type: 'text', content: 'Light chains: kappa, lambda (should have 3:1 or 1:3 ratio if restricted)' }
        ]
      },
      {
        id: 'molecular',
        title: 'Molecular Testing',
        content: [
          { type: 'heading', content: 'Molecular Applications in Cytology' },
          { type: 'list', content: [
            'Thyroid: BRAF, RAS, RET/PTC for indeterminate nodules',
            'Lung: EGFR, ALK, ROS1 for targeted therapy',
            'Lymphoma: IgH rearrangement, t(14;18)',
            'HPV testing in cervical cytology',
            'UroVysion FISH for bladder cancer'
          ]},
          { type: 'heading', content: 'Thyroid Molecular Panels' },
          { type: 'text', content: 'Used to refine risk in AUS/FLUS and FN categories:' },
          { type: 'list', content: [
            'BRAF V600E: specific for papillary carcinoma',
            'RAS mutations: follicular lesions, some papillary',
            'RET/PTC rearrangement: papillary carcinoma',
            'NTRK fusions: various carcinomas',
            'Gene expression classifiers available'
          ]},
          { type: 'callout', content: 'Molecular testing refines risk but does not replace cytologic interpretation. Use in conjunction with morphology and clinical context.', variant: 'info' }
        ]
      }
    ],
    quiz: {
      id: 'ancillary-quiz',
      title: 'Ancillary Studies Quiz',
      questions: [
        {
          id: 'q1',
          question: 'Which markers favor mesothelial cells over adenocarcinoma?',
          options: [
            'MOC31, BerEP4, CEA',
            'Calretinin, WT1, D2-40',
            'CK7, CK20, TTF-1',
            'CD20, CD3, CD10'
          ],
          correctAnswer: 1,
          explanation: 'Mesothelial cells are positive for calretinin, WT1, and D2-40, while adenocarcinomas are typically positive for MOC31, BerEP4, and CEA.'
        },
        {
          id: 'q2',
          question: 'What sample requirement is critical for flow cytometry?',
          options: [
            'Formalin-fixed',
            'Air-dried',
            'Fresh viable cells',
            'Paraffin-embedded'
          ],
          correctAnswer: 2,
          explanation: 'Flow cytometry requires fresh, viable cells typically collected in EDTA or RPMI medium and processed within 24-48 hours.'
        },
        {
          id: 'q3',
          question: 'What does BRAF V600E mutation indicate in thyroid cytology?',
          options: [
            'Benign follicular nodule',
            'Hashimoto thyroiditis',
            'Papillary thyroid carcinoma',
            'Follicular adenoma'
          ],
          correctAnswer: 2,
          explanation: 'BRAF V600E mutation is highly specific for papillary thyroid carcinoma and indicates malignancy.'
        }
      ]
    }
  },
  {
    id: 'rose',
    title: 'ROSE & Reporting',
    description: 'Rapid on-site evaluation and structured cytology reporting',
    icon: '⚡',
    color: 'from-yellow-500 to-amber-500',
    lessons: [
      {
        id: 'rose-principles',
        title: 'ROSE Principles',
        content: [
          { type: 'heading', content: 'Rapid On-Site Evaluation (ROSE)' },
          { type: 'text', content: 'Real-time assessment during FNA procedure to ensure adequacy and guide sampling.' },
          { type: 'list', content: [
            'Performed at point of care during procedure',
            'Uses Diff-Quik or toluidine blue (rapid stains)',
            'Assesses adequacy',
            'Guides need for additional passes',
            'Determines need for ancillary studies',
            'Preliminary interpretation (not final diagnosis)'
          ]},
          { type: 'heading', content: 'ROSE Benefits' },
          { type: 'list', content: [
            'Reduces non-diagnostic rates',
            'Fewer repeat procedures',
            'Ensures material for ancillary tests',
            'Real-time clinical communication',
            'Cost-effective'
          ]},
          { type: 'callout', content: 'ROSE interpretation is preliminary. Final diagnosis requires review of all preparations and clinical correlation.', variant: 'warning' }
        ]
      },
      {
        id: 'rose-technique',
        title: 'ROSE Workflow',
        content: [
          { type: 'heading', content: 'Specimen Triage' },
          { type: 'list', content: [
            'Pass 1-2: Direct smears for Diff-Quik (ROSE)',
            'Pass 3-4: Alcohol-fixed for Pap stain',
            'Additional passes: Flow (EDTA), molecular, cell block',
            'Remaining material: cell block or liquid-based'
          ]},
          { type: 'heading', content: 'Common ROSE Interpretations' },
          { type: 'text', content: 'Thyroid:' },
          { type: 'list', content: [
            '"Adequate benign follicular nodule"',
            '"Adequate, favor papillary carcinoma" (if features present)',
            '"Non-diagnostic, needs repeat"',
            '"Lymphocytic thyroiditis"'
          ]},
          { type: 'text', content: 'Lymph node:' },
          { type: 'list', content: [
            '"Reactive lymphoid hyperplasia"',
            '"Atypical, recommend flow cytometry"',
            '"Favor metastatic carcinoma"',
            '"Granulomatous inflammation"'
          ]}
        ]
      },
      {
        id: 'reporting',
        title: 'Structured Reporting',
        content: [
          { type: 'heading', content: 'Essential Report Elements' },
          { type: 'list', content: [
            'Specimen type and site',
            'Adequacy statement',
            'Diagnosis/category',
            'Descriptive findings',
            'Ancillary studies performed',
            'Clinical correlation/recommendations'
          ]},
          { type: 'heading', content: 'Example Report Structure' },
          { type: 'text', content: 'SPECIMEN: FNA, thyroid, right lobe nodule' },
          { type: 'text', content: 'ADEQUACY: Satisfactory for evaluation' },
          { type: 'text', content: 'DIAGNOSIS: Bethesda Category II - Benign (Benign Follicular Nodule)' },
          { type: 'text', content: 'DESCRIPTION: Abundant colloid with bland follicular cells in sheets and microfollicles. Macrophages present. No significant atypia.' },
          { type: 'text', content: 'COMMENT: Features consistent with benign follicular nodule/nodular hyperplasia. Clinical and radiologic correlation recommended.' },
          { type: 'heading', content: 'Language Considerations' },
          { type: 'list', content: [
            'Be specific and clear',
            'Use appropriate classification system',
            'Avoid ambiguous terms like "cannot exclude"',
            'Provide management recommendations when appropriate',
            'Document limitations (e.g., "definitive classification requires histology")'
          ]},
          { type: 'callout', content: 'Clear, structured reporting reduces misinterpretation and guides appropriate clinical management.', variant: 'info' }
        ]
      }
    ],
    quiz: {
      id: 'rose-quiz',
      title: 'ROSE & Reporting Quiz',
      questions: [
        {
          id: 'q1',
          question: 'What is the primary purpose of ROSE?',
          options: [
            'Provide final diagnosis',
            'Ensure adequacy and guide sampling',
            'Perform molecular testing',
            'Replace formal cytology review'
          ],
          correctAnswer: 1,
          explanation: 'ROSE (Rapid On-Site Evaluation) ensures specimen adequacy and guides the need for additional passes and ancillary studies during the procedure.'
        },
        {
          id: 'q2',
          question: 'Which stain is typically used for ROSE?',
          options: [
            'Papanicolaou',
            'H&E',
            'Diff-Quik',
            'PAS'
          ],
          correctAnswer: 2,
          explanation: 'Diff-Quik is a rapid stain that can be performed in minutes at the point of care, making it ideal for ROSE.'
        },
        {
          id: 'q3',
          question: 'What makes a cytology report effective?',
          options: [
            'Using complex medical terminology',
            'Structured format with clear diagnosis and clinical correlation',
            'Listing all possible differential diagnoses',
            'Avoiding any recommendations'
          ],
          correctAnswer: 1,
          explanation: 'Effective cytology reports use structured format, clear diagnoses with appropriate classification systems, and provide clinical correlation and recommendations.'
        }
      ]
    }
  }
]
