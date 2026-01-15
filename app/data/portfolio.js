export const roles = [
    "AI Engineer",
    "Full-Stack Developer",
    "Competitive Programmer",
];

export const focusAreas = [
    { label: "Deep Learning", accent: "bg-primary" },
    { label: "Full-Stack Systems", accent: "bg-secondary" },
    { label: "Competitive Coding", accent: "bg-white" },
];

export const toolkit = [
    {
        title: "Languages & Scripting",
        items: ["Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "Bash"],
    },
    {
        title: "AI & ML Stack",
        items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "XGBoost", "OpenCV", "LangChain", "Gemini API", "Leffa ML"],
    },
    {
        title: "Full-Stack & Cloud",
        items: ["Next.js", "React", "FastAPI", "Tailwind CSS", "Firebase", "Docker", "AWS", "Google Cloud", "Razorpay"],
    },
    {
        title: "Hardware & Tools",
        items: ["Raspberry Pi", "Git/GitHub", "Linux", "VS Code"],
    }
];

export const achievements = [
    "Top 5 in TRACS @ WASP 2025 (4th Rank on Kaggle Leaderboard)",
    "Winner, Web Wonders 2025 (1st Rank in Fashion Theme)",
    "Finalist, ACM Summer Challenge 2025"
];

export const bio = {
    heading: <>Engineering <span className="text-primary">AI products</span> with measurable impact</>,
    description1: "I’m Arshad Khatib, a B.Tech (AI) candidate at the National Institute of Technology, Surat. My work pairs human-centred design with production grade machine learning. I’m eager to contribute on Research and Development in the field of Deep Learning, Natural Language Processing and Computer Vision.",
    description2: "I’m passionate about creating tools that make life easier for people as well as building AI solutions that drive business value. I love crafting efficient algorithms that balance performance and scalability to solve real-world problems.",
    location: "Surat · Pune, India",
    status: "Open for collaborations"
};

export const experiences = [
    {
        slug: "hft-trading-platform",
        title: "HFT Market Analysis & Trading Platform",
        organization: "Surveillance & Pattern discovery",
        date: "Dec 2025 - Jan 2026",
        description:
            "Engineered a production-grade HFT platform processing 160+ snapshots/sec with <10ms latency, utilizing a dual-core C++ gRPC and Python architecture for high-speed analytics.",
        details: {
            problem: "Financial markets require ultra-low latency systems to detect irregularities and capitalize on short-term price movements amidst massive data volumes.",
            solution: "Architected a high-speed system using C++ for execution and Python for analytics. Deployed a DeepLOB CNN model for real-time price direction prediction.",
            features: [
                "High-Frequency Data Processing (<10ms latency)",
                "DeepLOB CNN Model (63.4% Accuracy)",
                "Market Manipulation Detection (Spoofing/Layering)",
                "Scalable AWS Cloud Infrastructure (ECS, RDS, S3)"
            ],
            impact: "Achieved 60% win rate and 1.82 Sharpe Ratio in simulations. Optimized time-series storage with TimescaleDB (8:1 compression)."
        },
        tech: ["C++", "Python", "gRPC", "DeepLOB CNN", "AWS", "TimescaleDB"],
        links: {
            external: "https://trading-hub.live",
            github: "https://github.com/Arshad-13/genesis2025"
        },
        status: "LIVE"
    },
    {
        slug: "tracs-wasp-2025",
        title: "Hybrid Ensemble for Astrophysical Document Classification",
        organization: "TRACS @ WASP 2025 | Team - Clutch or Cry",
        date: "Sept 2025 - Oct 2025",
        description:
            "Developed a hybrid ensemble model to solve a complex multi-label classification problem: automatically identifying and classifying the roles of telescope facilities in astrophysical literature. Achieved 4th Place on the official Kaggle leaderboard.",
        details: {
            problem: "Classifying telescope facility roles (Observation, Citation, etc.) in scientific papers is manually intensive due to ambiguous context.",
            solution: "Designed a two-stage hybrid ensemble. Stage 1 used domain-adapted astroBERT for semantic understanding and a rule-based keyword classifier for high-precision pattern matching. Stage 2 fused predictions using XGBoost meta-learners to handle class imbalances.",
            features: [
                "Domain-Adapted BERT Model (astroBERT)",
                "Rule-based Keyword Extraction System",
                "XGBoost Meta-Learner Ensemble",
                "Automated Data Cleaning Pipeline"
            ],
            impact: "Achieved 4th Place on Kaggle. Approach accepted for publication at WASP 2025 Workshop."
        },
        tech: ["Python", "PyTorch", "astroBERT", "XGBoost", "Scikit-learn"],
        links: {
            external: "https://drive.google.com/file/d/1XF2nmSg34A0-X_xcRxb3luJMccrycz71/view?usp=sharing",
            kaggle: "https://www.kaggle.com/competitions/tracs-wasp-2025/leaderboard"
        },
        status: "PUBLISHED"
    },
    {
        slug: "trendora-ecommerce",
        title: "Trendora (1st Place Winner)",
        organization: "Web Wonders 2025 · Nexus, NIT Surat",
        date: "July 2025 – Aug 2025",
        description:
            "A futuristic fashion marketplace fusing social interaction with AI-driven styling. Won 1st Place at Web Wonders 2025 for best Fashion Theme implementation.",
        details: {
            problem: "Traditional e-commerce lacks social engagement and personalization, making shopping a solitary and static experience.",
            solution: "Trendora introduces 'StyleSphere', a social feed for sharing looks, and 'Zyra', an AI stylist. Integrated virtual try-on tech to bridge the gap between online browsing and physical trial.",
            features: [
                "Social Hub 'StyleSphere' for Look sharing",
                "AI Stylist 'Zyra' (Gemini 2.5 + LangChain)",
                "Virtual Try-On (Leffa ML)",
                "Live Stream Shopping Support",
                "Full E-commerce Stack (Cart, Razorpay)"
            ],
            impact: "Secured 1st Rank in Fashion Theme. Demonstrated potential for 40% higher user engagement via social features."
        },
        tech: ["Next.js", "Tailwind CSS", "Firebase", "Razorpay", "Shiprocket", "LangChain", "Gemini 2.5 Flash", "Leffa ML"],
        links: {
            github: "https://github.com/GAURAVSVNIT/Namaste.dev",
            external: "https://namaste-dev.vercel.app/",
        },
        status: "WINNER"
    },
    {
        slug: "biodegradable-classifier",
        title: "Biodegradable Material Classification",
        organization: "Makernova - Drishti (Robotics club), NIT Surat",
        date: "Aug 2025 – Sept 2025",
        description:
            "Designed a CNN model to autonomously classify materials as Biodegradable or Non-Biodegradable with 97% accuracy, deployed on edge hardware.",
        details: {
            problem: "Automated waste segregation at source is critical for sustainability but requires efficient, real-time identification of materials.",
            solution: "Trained a resolute CNN on a custom dataset of 5,000+ waste images. Optimized the model for inference on low-power Raspberry Pi 4 hardware using TFLite.",
            features: [
                "Custom CNN Architecture (97% Val Accuracy)",
                "Real-time Webcam Inference",
                "Raspberry Pi Edge Deployment",
                "OpenCV Image Preprocessing Pipeline"
            ],
            impact: "Successfully demonstrated real-time waste segregation prototype at Makernova technical fest."
        },
        tech: ["TensorFlow", "Keras", "OpenCV", "Python", "Raspberry Pi"],
        links: {
            github: "https://github.com/Arshad-13/Makernova",
            documentation: "https://docs.google.com/document/d/175QO3hpH85RUP6PY5FiqolnbVJcuIt83MistBMIyYoY/edit?usp=sharing"
        },
        status: "COMPLETED"
    },
    {
        slug: "oneflow-platform",
        title: "OneFlow: Plan-to-Bill Platform",
        organization: "Oddo x Amalthea Hackathon (IIT Gandhinagar)",
        date: "2024",
        description:
            "A comprehensive project management and billing solution developed within a strict 24-hour hackathon environment. Features RBAC and automated data ingestion.",
        details: {
            problem: "Managing the lifecycle from project planning to billing while handling user permissions and legacy data import is complex for enterprises.",
            solution: "Built a robust Next.js platform with PostgreSQL. Implemented strict Role-Based Access Control and automated bulk data ingestion via CSV.",
            features: [
                "Role-Based Access Control (RBAC)",
                "Bulk Data Ingestion (CSV Parsing)",
                "Automated Billing Integration",
                "OCR Document Data Extraction"
            ],
            impact: "Developed a functional MVP with secure permission hierarchies and data automation in under 24 hours."
        },
        tech: ["Next.js", "PostgreSQL", "Prisma ORM", "OCR", "TypeScript"],
        links: {
            external: "https://oddo-hackathon-pied.vercel.app",
            github: "https://github.com/manavdhamecha77/Oddo-Hackathon"
        },
        status: "HACKATHON"
    },
];
