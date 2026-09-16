const Profile = require('../models/Profile');

// @desc    Get profile
// @route   GET /api/profile
exports.getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      // Return default profile data
      profile = getDefaultProfile();
    }
    res.json(profile);
  } catch (error) {
    res.json(getDefaultProfile());
  }
};

// @desc    Update profile
// @route   PUT /api/profile
exports.updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

function getDefaultProfile() {
  return {
    name: 'Syed Ali Hussain',
    title: 'AI/ML Engineer',
    email: 'syedalihussain@email.com',
    location: 'Hyderabad, India',
    bio: 'AI/ML Engineer building production-grade systems — from data pipelines to deployed models. Specializing in Azure ML, Deep Learning, NLP, and Computer Vision.',
    linkedin: 'https://linkedin.com/in/syedalihussain',
    github: 'https://github.com/syedalihussain',
    kaggle: 'https://kaggle.com/syedalihussain',
    stats: [
      { label: 'Internships', value: '4+' },
      { label: 'Technologies', value: '15+' },
      { label: 'ML Projects', value: '6+' },
      { label: 'CV Variants', value: '3' }
    ],
    skills: [
      {
        group: 'Languages & Frameworks',
        icon: '🐍',
        items: ['Python', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'PySpark', 'SQL', 'R', 'Java', 'FastAPI', 'Next.js']
      },
      {
        group: 'Cloud & MLOps',
        icon: '☁️',
        items: ['Azure ML', 'Azure DevOps', 'Azure Data Lake', 'Azure Synapse', 'Azure Cognitive Services', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions']
      },
      {
        group: 'AI Domains',
        icon: '🤖',
        items: ['Deep Learning', 'NLP', 'Computer Vision', 'RAG', 'Generative AI', 'MLOps', 'Metric Learning', 'XAI']
      },
      {
        group: 'Tools & Databases',
        icon: '🛠️',
        items: ['OpenCV', 'Hugging Face', 'Qdrant', 'FAISS', 'Power BI', 'Tableau', 'Git', 'Pandas', 'NumPy', 'Jupyter']
      }
    ],
    experience: [
      {
        role: 'AI/ML Engineer Intern',
        company: 'Finesse Customized Solutions',
        location: 'Hyderabad',
        date: 'Sep 2025 — Present',
        color: '#6366f1',
        description: [
          'Built end-to-end ML pipelines on Azure — data ingestion, feature engineering, model training, and deployment',
          'Trained and versioned supervised/unsupervised models in Azure ML Studio with HyperDrive tuning',
          'Designed deep learning architectures (CNNs, RNNs, LSTMs, Transformers) for NLP, CV, and speech tasks',
          'Implemented CI/CD pipelines using Azure DevOps, Docker, and Kubernetes for automated model retraining',
          'Built production NLP pipelines for text classification, sentiment analysis, and NER using BERT, GPT, T5',
          'Applied XAI techniques (SHAP, LIME) and cross-validation for model interpretability'
        ]
      },
      {
        role: 'Solution Architect',
        company: 'ACADOCAI',
        location: 'Hyderabad',
        date: '2025 — Present',
        color: '#ec4899',
        description: [
          'Designed and built ACADOCAI — a live, production-grade AI-powered medical education platform for MBBS students',
          'Deployed RAG pipeline grounding answers in indexed medical textbooks using vector embeddings',
          'Built adaptive recall engine using spaced repetition and cognitive science principles',
          'Developed automated case-based MCQ and clinical vignette generation using BERT and T5',
          'Architected full stack: Next.js frontend, Python/FastAPI backend, Qdrant/FAISS vector DB, Docker containers'
        ]
      },
      {
        role: 'Summer Research Intern — Computer Vision',
        company: 'Osmania University',
        location: 'Hyderabad',
        date: 'May 2024 — Aug 2024',
        color: '#06b6d4',
        description: [
          'Tackled cross-camera Vehicle Re-identification (Re-ID) using deep metric learning',
          'Implemented ResNet-50 backbone with triplet loss and batch-hard mining for interclass separation',
          'Fused deep embeddings with HSV colour histograms, LBP texture descriptors, and YOLO-based licence plate proposals',
          'Built GPU-accelerated PyTorch training pipeline with PK-sampler and data augmentation',
          'Evaluated on VeRi-776 and VehicleID benchmarks using Rank-1/5 Accuracy and mAP'
        ]
      },
      {
        role: 'Data Analytics & Technology Virtual Intern',
        company: 'Deloitte',
        location: 'Virtual',
        date: '2024',
        color: '#f59e0b',
        description: [
          'Completed Deloitte\'s industry-structured virtual program covering data analysis and technology consulting',
          'Applied analytical thinking to real-world business scenarios with data-driven recommendations',
          'Gained exposure to enterprise technology strategy and digital transformation'
        ]
      }
    ],
    education: [
      {
        degree: 'BE in Computer Science & Engineering (AIML)',
        university: 'Osmania University, Hyderabad',
        year: '2022 — 2026',
        cgpa: '73%'
      }
    ],
    certifications: [
      { name: 'Azure ML Engineer', issuer: 'Microsoft Azure', icon: '🔷' },
      { name: 'Deep Learning Specialization', issuer: 'Coursera / DeepLearning.AI', icon: '🧠' },
      { name: 'Data Analytics', issuer: 'Deloitte Virtual Internship', icon: '📊' },
      { name: 'Docker & Kubernetes', issuer: 'Container Orchestration', icon: '🐳' }
    ]
  };
}
