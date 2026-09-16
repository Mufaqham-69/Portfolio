const Project = require('../models/Project');

// Default projects fallback
const defaultProjectsList = [
  {
    _id: '1',
    title: 'ACADOCAI — Medical Education Platform',
    description: 'Production-grade AI platform for MBBS students. RAG pipeline grounded in medical textbooks, adaptive recall engine, automated MCQ generation, and clinical vignette creation.',
    tags: ['RAG', 'FastAPI', 'Qdrant', 'Next.js', 'BERT', 'T5'],
    category: 'ai-ml',
    icon: '🏥',
    featured: true,
    order: 1
  },
  {
    _id: '2',
    title: 'Vehicle Re-ID System',
    description: 'Cross-camera vehicle re-identification using deep metric learning. ResNet-50 backbone with triplet loss, fused with HSV, LBP, and YOLO features. Evaluated on VeRi-776 and VehicleID.',
    tags: ['PyTorch', 'ResNet-50', 'Triplet Loss', 'YOLO', 'OpenCV'],
    category: 'cv',
    icon: '🚗',
    featured: true,
    order: 2
  },
  {
    _id: '3',
    title: 'Azure ML Pipeline',
    description: 'End-to-end MLOps pipeline on Azure — data ingestion from Data Lake, model training with HyperDrive, CI/CD via Azure DevOps, Docker/Kubernetes deployment.',
    tags: ['Azure ML', 'Docker', 'Kubernetes', 'Azure DevOps', 'PySpark'],
    category: 'mlops',
    icon: '☁️',
    featured: true,
    order: 3
  },
  {
    _id: '4',
    title: 'Production NLP Pipeline',
    description: 'Text classification, sentiment analysis, and NER using BERT, GPT, and T5. Production-grade with SHAP/LIME explainability and Power BI monitoring dashboards.',
    tags: ['BERT', 'GPT', 'T5', 'SHAP', 'Power BI'],
    category: 'nlp',
    icon: '💬',
    featured: true,
    order: 4
  },
  {
    _id: '5',
    title: 'Adaptive Recall Engine',
    description: 'Spaced repetition system using cognitive science principles. Tracks weak areas and schedules optimal review cycles for medical students.',
    tags: ['FastAPI', 'Spaced Repetition', 'Python', 'Cognitive Science'],
    category: 'ai-ml',
    icon: '🧠',
    featured: true,
    order: 5
  },
  {
    _id: '6',
    title: 'Real-time Model Monitoring',
    description: 'Interactive Power BI dashboards for real-time model performance monitoring. Azure Synapse Analytics for analytical SQL queries and drift detection.',
    tags: ['Power BI', 'Synapse Analytics', 'Azure SQL', 'Monitoring'],
    category: 'mlops',
    icon: '📊',
    featured: true,
    order: 6
  }
];

// @desc    Get all projects
// @route   GET /api/projects
exports.getProjects = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    let projects = await Project.find(filter).sort({ order: 1, createdAt: -1 });
    if (!projects || projects.length === 0) {
      projects = category 
        ? defaultProjectsList.filter(p => p.category === category)
        : defaultProjectsList;
    }
    res.json(projects);
  } catch (error) {
    const { category } = req.query;
    const filtered = category 
      ? defaultProjectsList.filter(p => p.category === category)
      : defaultProjectsList;
    res.json(filtered);
  }
};

// @desc    Get featured projects
// @route   GET /api/projects/featured
exports.getFeaturedProjects = async (req, res) => {
  try {
    let projects = await Project.find({ featured: true }).sort({ order: 1 });
    if (!projects || projects.length === 0) {
      projects = defaultProjectsList.filter(p => p.featured);
    }
    res.json(projects);
  } catch (error) {
    res.json(defaultProjectsList.filter(p => p.featured));
  }
};

// @desc    Create project
// @route   POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Seed default projects
// @route   POST /api/projects/seed
exports.seedProjects = async (req, res) => {
  try {
    const defaultProjects = [
      {
        title: 'ACADOCAI — Medical Education Platform',
        description: 'Production-grade AI platform for MBBS students. RAG pipeline grounded in medical textbooks, adaptive recall engine, automated MCQ generation, and clinical vignette creation.',
        tags: ['RAG', 'FastAPI', 'Qdrant', 'Next.js', 'BERT', 'T5'],
        category: 'ai-ml',
        icon: '🏥',
        featured: true,
        order: 1
      },
      {
        title: 'Vehicle Re-ID System',
        description: 'Cross-camera vehicle re-identification using deep metric learning. ResNet-50 backbone with triplet loss, fused with HSV, LBP, and YOLO features. Evaluated on VeRi-776 and VehicleID.',
        tags: ['PyTorch', 'ResNet-50', 'Triplet Loss', 'YOLO', 'OpenCV'],
        category: 'cv',
        icon: '🚗',
        featured: true,
        order: 2
      },
      {
        title: 'Azure ML Pipeline',
        description: 'End-to-end MLOps pipeline on Azure — data ingestion from Data Lake, model training with HyperDrive, CI/CD via Azure DevOps, Docker/Kubernetes deployment.',
        tags: ['Azure ML', 'Docker', 'Kubernetes', 'Azure DevOps', 'PySpark'],
        category: 'mlops',
        icon: '☁️',
        featured: true,
        order: 3
      },
      {
        title: 'Production NLP Pipeline',
        description: 'Text classification, sentiment analysis, and NER using BERT, GPT, and T5. Production-grade with SHAP/LIME explainability and Power BI monitoring dashboards.',
        tags: ['BERT', 'GPT', 'T5', 'SHAP', 'Power BI'],
        category: 'nlp',
        icon: '💬',
        featured: true,
        order: 4
      },
      {
        title: 'Adaptive Recall Engine',
        description: 'Spaced repetition system using cognitive science principles. Tracks weak areas and schedules optimal review cycles for medical students.',
        tags: ['FastAPI', 'Spaced Repetition', 'Python', 'Cognitive Science'],
        category: 'ai-ml',
        icon: '🧠',
        featured: true,
        order: 5
      },
      {
        title: 'Real-time Model Monitoring',
        description: 'Interactive Power BI dashboards for real-time model performance monitoring. Azure Synapse Analytics for analytical SQL queries and drift detection.',
        tags: ['Power BI', 'Synapse Analytics', 'Azure SQL', 'Monitoring'],
        category: 'mlops',
        icon: '📊',
        featured: true,
        order: 6
      }
    ];

    await Project.deleteMany({});
    const projects = await Project.insertMany(defaultProjects);
    res.status(201).json({ message: `${projects.length} projects seeded`, projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
