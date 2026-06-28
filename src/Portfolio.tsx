import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  Cpu, 
  Compass, 
  Award, 
  Send, 
  CheckCircle,
  FileText,
  MapPin,
  Calendar,
  Sparkles
} from "lucide-react";

const PROFILE = {
  name: "Gaurav Yadav",
  role: "AI Engineer · Machine Learning · LLMs",
  tagline:
    "Result-driven AI Engineer with 5+ years of experience building production ML systems, LLMs, and data pipelines that deliver measurable business impact.",
  location: "London, UK",
  email: "kumarrooprao@gmail.com",
  github: "https://github.com/aaovaba",
  linkedin: "https://linkedin.com/in/roop555kumar",
};

const PROJECTS = [
  {
    title: "Multilingual Healthcare LLM (Doctoria)",
    description:
      "Building a multilingual LLM for healthcare Q&A with secure, compliant AI pipelines.",
    impacts: [
      "Designed and fine-tuned domain-specific LLMs for multilingual clinical dialogue",
      "Implemented RAG for accurate, contextual question answering",
      "Built GDPR, DTAC, and NHS-aligned secure AI pipelines",
      "Deployed cloud-based APIs integrated into real-time medical products",
    ],
    tech: ["LLMs", "RAG", "Python", "APIs", "Cloud"],
    live: "",
    code: "",
  },
  {
    title: "Churn Prediction & Personalization Platform",
    description:
      "Production ML platform over 10M+ events driving retention and engagement growth.",
    impacts: [
      "Processed 10M+ user events for churn prediction and personalization",
      "Improved user retention by 15% using DL and ensemble models",
      "Deployed models on AWS/GCP with Docker & Kubernetes",
      "Reduced inference latency by 40% via quantization and TensorRT",
    ],
    tech: ["PyTorch", "TensorFlow", "XGBoost", "AWS", "Kubernetes"],
    live: "",
    code: "",
  },
  {
    title: "Deep Reinforcement Learning Trading System",
    description:
      "MSc dissertation: DRL agents for algorithmic trading with strong risk-adjusted returns.",
    impacts: [
      "Built PPO, DQN, and A2C agents in a custom OpenAI Gym environment",
      "Integrated NASDAQ, Binance, and Yahoo Finance market data",
      "Achieved Sharpe Ratio of 1.42 with 18% benchmark outperformance",
      "Delivered full-stack dashboard for strategy analysis and interpretability",
    ],
    tech: ["Reinforcement Learning", "PyTorch", "FinRL", "Ray RLlib"],
    live: "",
    code: "",
    github: "https://github.com/roop555kumar/ppo_real_agent",
    paper: "/Dissertation.pdf",  
  },
  {
    title: "Mental Health LLM Agent",
    description:
      "LLM-powered conversational agent with analytics over large-scale user interactions.",
    impacts: [
      "Built LLM-based mental health support agent with structured logging",
      "Analyzed 10k+ anonymized conversations using NLP and transformers",
      "Identified high-risk interaction patterns via topic modeling",
      "Increased user engagement by 15% and session completion by 12%",
    ],
    tech: ["LLMs", "NLP", "Transformers", "Analytics"],
    live: "",
    code: "",
    github: "",
    paper: "/mental-health-LLM.pdf",  
  },
];

const EXPERIENCE = [
  {
    company: "Alps International",
    role: "Senior AI Engineer /Senior Data Scientist",
    location: "India",
    period: "Jan 2021 – Jan 2025",
    bullets: [],
  },
  {
    company: "Alps International",
    role: "Data Intern",
    location: "India",
    period: "April 2018 – July 2019",
    bullets: [],
  },
];

const EDUCATION = {
  degree: "MSc in Data Science & Artificial Intelligence",
  institution: "University of Liverpool, UK",
  result: "Distinction",
  highlights: [
    "Dissertation: Deep Reinforcement Learning for Algorithmic Trading (PPO, DQN, A2C)",
    "Achieved Sharpe Ratio of 1.42 with 18% benchmark outperformance",
    "Built LLM-powered mental health chatbot for real-world user support",
  ],
};

const CERTIFICATIONS = [
  "Deep Learning Specialization — Andrew Ng (Coursera)",
  "Microsoft Certified: Data Fundamentals",
  "Data Science and Business Analytics — Crio.Do",
];

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 selection:bg-teal-500/30 selection:text-teal-200 relative overflow-hidden">
      {/* Decorative Radial Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#030712]/80 backdrop-blur-md border-b border-zinc-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#"
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform animate-pulse" />
            <span className="font-mono font-semibold tracking-tight text-lg text-white group-hover:text-teal-300 transition-colors">
              {PROFILE.name}
            </span>
          </motion.a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#experience" className="hover:text-white hover:underline decoration-teal-400 underline-offset-4 transition-colors">Work Experience</a>
            <a href="#education" className="hover:text-white hover:underline decoration-teal-400 underline-offset-4 transition-colors">Education</a>
            <a href="#work" className="hover:text-white hover:underline decoration-teal-400 underline-offset-4 transition-colors">Projects</a>
            <a href="#about" className="hover:text-white hover:underline decoration-teal-400 underline-offset-4 transition-colors">About</a>
            <a href="#contact" className="hover:text-white hover:underline decoration-teal-400 underline-offset-4 transition-colors">Contact</a>
          </nav>

          {/* Mobile Nav Toggle / CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a 
              href={`mailto:${PROFILE.email}`}
              className="text-xs font-mono px-4 py-2 rounded-full border border-zinc-700/80 hover:border-teal-500 hover:text-teal-300 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10">
        
        {/* Hero Section */}
        <section id="hero" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center mb-32">
          
          {/* Hero Left Info */}
          <motion.div 
            className="md:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/20 shadow-sm animate-pulse">
                <Sparkles size={12} /> Open to roles · 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700">
                <MapPin size={12} /> {PROFILE.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Hola!, I’m <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent">{PROFILE.name}</span>.
            </h1>

            <div className="text-lg md:text-xl font-mono text-teal-400 font-medium tracking-tight">
              {PROFILE.role}
            </div>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl">
              {PROFILE.tagline}
            </p>

            {/* Recent Updates Panel */}
            <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 p-5 rounded-2xl max-w-xl shadow-xl">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Recent Updates
              </h2>
              <ul className="space-y-2 text-zinc-300 text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Just finished my MSc in <strong>Data Science and AI [University of Liverpool]</strong></span>
                </li>
              </ul>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#work" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/10 hover:shadow-teal-400/20 hover:-translate-y-0.5"
              >
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>

              <div className="flex items-center gap-3 pl-2">
                <a 
                  href={PROFILE.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={PROFILE.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all shadow-md"
                  aria-label="Email Me"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hero Right: Profile Image */}
          <motion.div 
            className="md:col-span-5 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-3xl p-1.5 bg-gradient-to-tr from-zinc-800 via-zinc-700 to-teal-500/50 shadow-2xl overflow-hidden group-hover:shadow-teal-500/10 transition-shadow">
                <img
                  src="/profile.png"
                  alt="Roop Kumar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[20px] filter saturate-[0.85] contrast-[1.05] group-hover:saturate-100 group-hover:scale-102 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

        </section>

        {/* Projects Section */}
        <section id="work" className="mb-32">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-sm tracking-wider mb-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Selected Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              I invested my time in developing these projects
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mt-3">
              Real-world AI systems with measurable impact across healthcare, personalization, finance, and analytics.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {PROJECTS.map((p) => (
              <motion.article
                key={p.title}
                className="flex flex-col justify-between bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 hover:border-teal-500/50 p-6 md:p-8 rounded-2xl transition-all duration-300 relative group"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                {/* Subtle top card outline glow */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    {p.description}
                  </p>
                  
                  <ul className="mt-5 space-y-2.5">
                    {p.impacts.map((i, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400/70 shrink-0 mt-1.5" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span 
                        key={t} 
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {p.github && (
                      <a 
                        href={p.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-teal-300 transition-colors"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                    {p.paper && (
                      <a 
                        href={p.paper} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-teal-300 transition-colors"
                      >
                        <FileText size={14} /> Paper
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-sm tracking-wider mb-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Technical Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Core Skills
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Skill Card 1 */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20 group-hover:scale-110 transition-transform">
                <Cpu size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                Machine Learning & AI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span>Supervised & unsupervised learning at scale</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span>Deep learning: CNNs, RNNs, LSTMs, Transformers</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span>LLMs, retrieval-augmented generation (RAG), NLP</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span>Reinforcement learning: PPO, DQN, A2C</span>
                </li>
              </ul>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Compass size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                Data Science & Experimentation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>A/B testing and large-scale experimentation (50k+ users)</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>Causal inference, KPI design, and metrics monitoring</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>Feature engineering and data storytelling</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  <span>Cross-functional collaboration with product and engineering</span>
                </li>
              </ul>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Briefcase size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                MLOps & Data Engineering
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <span>Model deployment, monitoring, and retraining pipelines</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <span>ETL pipelines with Airflow and cloud data platforms</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <span>Docker, Kubernetes, CI/CD for ML systems</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <span>AWS & GCP for scalable production workloads</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32 scroll-mt-24">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-sm tracking-wider mb-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Career Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mt-3">
              Industry experience building and deploying production machine learning systems across healthcare, experimentation, and large-scale data platforms.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.company + exp.role + idx}
                className="relative"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-teal-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                </div>

                <div className="bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <p className="text-teal-400 font-medium text-sm mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-500">
                      <span className="flex items-center gap-1.5 text-zinc-400">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="text-zinc-500 mt-0.5">{exp.location}</span>
                    </div>
                  </div>

                  {/* Render bullets if they are added in future */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                          <span className="w-1 h-1 rounded-full bg-teal-400 shrink-0 mt-2" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="mb-32 scroll-mt-24">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-sm tracking-wider mb-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Credentials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Education & Certifications
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mt-3">
              Strong academic foundation combined with industry-recognised certifications in machine learning and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Education Card */}
            <div className="md:col-span-7 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {EDUCATION.degree}
                </h3>
                <div className="text-teal-400 font-medium text-sm mt-1 flex flex-wrap items-center gap-2">
                  <span>{EDUCATION.institution}</span>
                  <span className="text-zinc-600">|</span>
                  <span className="font-semibold text-white bg-teal-500/20 border border-teal-500/30 px-1.5 py-0.5 rounded text-xs">{EDUCATION.result}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {EDUCATION.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="md:col-span-5 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 md:p-8 rounded-2xl flex flex-col hover:border-zinc-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                  <Award size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Certifications
                </h3>

                <ul className="space-y-4">
                  {CERTIFICATIONS.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 bg-zinc-950/40 p-3 rounded-xl border border-zinc-800/60">
                      <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-200 text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* What I'm Looking For Section */}
        <section id="looking-for" className="mb-32 scroll-mt-24">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-sm tracking-wider mb-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Preference
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              What I’m Looking For
            </h2>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mt-3">
              Roles where I can apply machine learning and AI at scale, contribute to product decisions, and work closely with cross-functional teams to deliver measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Roles Card */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                Roles
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-teal-400 shrink-0 mt-1" />
                  <span>Senior Data Scientist</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-teal-400 shrink-0 mt-1" />
                  <span>AI Engineer / Applied ML Engineer</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-teal-400 shrink-0 mt-1" />
                  <span>LLM / GenAI-focused roles</span>
                </li>
              </ul>
            </div>

            {/* Environment Card */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Environment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-1" />
                  <span>UK-based teams or UK time-zone aligned</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-1" />
                  <span>Production-focused, data-driven organisations</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-1" />
                  <span>Strong collaboration between data, product, and engineering</span>
                </li>
              </ul>
            </div>

            {/* What I Value Card */}
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl hover:border-zinc-700 transition-colors group">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                What I Value
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-blue-400 shrink-0 mt-1" />
                  <span>Ownership of ML systems end-to-end</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-blue-400 shrink-0 mt-1" />
                  <span>Clear metrics, experimentation, and accountability</span>
                </li>
                <li className="flex items-start gap-2.5 text-zinc-300 text-sm">
                  <CheckCircle size={14} className="text-blue-400 shrink-0 mt-1" />
                  <span>Ethical, reliable AI — especially in regulated domains</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="flex flex-col mb-12">
            <div className="flex items-center gap-2 text-teal-400 font-mono text-sm tracking-wider mb-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              Biography
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              About
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
          </div>

          <div className="bg-zinc-900/20 backdrop-blur-sm border border-zinc-800/80 p-6 md:p-10 rounded-2xl hover:border-zinc-700 transition-colors">
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              I’m a Senior Data Scientist and AI Engineer with an MSc in Data Science & AI
              and over 5+ years of industry experience building, deploying, and scaling
              machine learning systems in production environments.
              <br /><br />
              I did my Bachelor's in Engineering from India, and recently completed my MSc from UK.
              <br /><br />
              My work spans large-scale experimentation, deep learning, and LLM-powered
              applications, with a strong focus on translating data into measurable
              business impact. I’ve delivered AI solutions across healthcare, finance,
              and personalization use cases, working closely with product, engineering,
              and stakeholder teams.
              <br /><br />
              I care deeply about model reliability, interpretability, and deployment
              quality — especially in regulated domains — and I enjoy owning problems
              end-to-end, from research and experimentation through to production rollout.
              <br /><br />
              Apart from this professional stuff, I am a full stack web developer as well as a tech enthusiast. I love to explore new technologies and build projects around them.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 scroll-mt-24">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 border border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent pointer-events-none" />
            
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Let's Build Something Impactful
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-md">
                I'm always open to discussing new opportunities, machine learning collaborations, or AI initiatives. Let's get in touch!
              </p>
            </div>

            <a 
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-slate-950 font-semibold px-6 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5" 
              href={`mailto:${PROFILE.email}`}
            >
              <Send size={18} /> Email Me
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950/60 py-8 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-zinc-500 text-xs font-mono">
          <p>
            Built with React by Rooop Kumar. © 2024.
          </p>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>·</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>·</span>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
