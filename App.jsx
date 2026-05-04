import { useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    title: "Placement Portal",
    year: "2026",
    stack: ["Vue.js", "Flask", "Celery", "Redis", "SQLite"],
    desc: "Full-stack campus recruitment system with role-based access for Admins, Companies & Students. Async task processing for email reminders, report generation and CSV exports.",
    highlights: ["JWT Auth & RBAC", "Redis Caching", "Async via Celery", "Edge case handling"],
    github: "https://github.com/VEMURU-VENISHA",
    color: "#6366f1",
  },
  {
    title: "Weather App System",
    year: "2024",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    desc: "Full-stack weather application integrating third-party APIs with proper error handling for timeouts, missing data, and malformed responses.",
    highlights: ["Third-party API integration", "PostgreSQL caching", "Error resilience", "REST APIs"],
    github: "https://github.com/VEMURU-VENISHA",
    color: "#06b6d4",
  },
  {
    title: "Student Report System",
    year: "2025",
    stack: ["Flask", "PostgreSQL", "REST APIs"],
    desc: "Web-based academic management system with role-based access, grade tracking, attendance management and performance analytics.",
    highlights: ["Role-based access", "Grade management", "Performance analytics", "Data validation"],
    github: "https://github.com/VEMURU-VENISHA",
    color: "#10b981",
  },
  {
    title: "College Chatbot",
    year: "2024",
    stack: ["Dialogflow", "NLP", "Conversational AI"],
    desc: "AI chatbot for KL University helping students find info on admissions, cutoffs and rankings. Handles varied phrasings and edge cases.",
    highlights: ["NLP intent design", "Edge case handling", "Conversational flows", "User testing"],
    github: "https://github.com/VEMURU-VENISHA",
    color: "#f59e0b",
  },
  {
    title: "Sales Data Analysis",
    year: "2025",
    stack: ["Python", "Pandas", "EDA"],
    desc: "B2B retail beverage sales analysis — data cleaning, validation and exploratory analysis to identify regional underperformance and pricing insights.",
    highlights: ["Data cleaning", "Regional analysis", "Pricing insights", "EDA"],
    github: "https://github.com/VEMURU-VENISHA",
    color: "#ec4899",
  },
];

const skills = {
  "Backend & APIs": ["Python", "FastAPI", "Flask", "Node.js", "Spring Boot", "REST APIs", "JWT Auth"],
  "AI & Cloud": ["Azure AI", "Azure ML", "Dialogflow", "Oracle Cloud", "Firebase", "Google Cloud"],
  "Databases": ["PostgreSQL", "SQLite", "SQL", "Redis", "Celery"],
  "Frontend": ["React.js", "Vue.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
  "Tools": ["Git", "GitHub", "Postman", "Vercel", "Render", "Railway"],
};

const certs = [
  "Oracle Cloud Infrastructure 2025 Architect Associate",
  "Microsoft Azure Fundamentals (AZ-900)",
  "ServiceNow Certified System Administrator (CSA)",
  "Automation Anywhere RPA Professional 2023",
  "IIT Madras – Foundation in Programming & Data Science",
  "Scrum Fundamentals Certified (SFC)",
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Backend Developer & AI Enthusiast";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["home", "about", "skills", "projects", "certifications", "contact"];

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-logo" onClick={() => scrollTo("home")}>VV</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((n) => (
            <button key={n} className={`nav-link ${activeSection === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="dot" style={{
              left: `${5 + (i * 13) % 90}%`,
              top: `${10 + (i * 17) % 80}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
            }} />
          ))}
        </div>
        <div className="hero-content">
          <div className="badge">Available for Internships 🚀</div>
          <h1 className="hero-name">Vemuru<br /><span className="accent">Venisha</span></h1>
          <p className="hero-role"><span>{typedText}</span><span className="blink">|</span></p>
          <p className="hero-sub">CS Undergrad @ KL University · CGPA 9.4 · IIT Madras DS Diploma</p>
          <div className="cta-row">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
            <a href="mailto:venishavemuru@gmail.com" className="btn-outline">Get in Touch</a>
          </div>
          <div className="stats-row">
            {[["9.4","CGPA"],["5+","Projects"],["3","Internships"],["6","Certifications"]].map(([n,l]) => (
              <div key={l} className="stat"><span className="stat-n">{n}</span><span className="stat-l">{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="s-title">About <span className="accent">Me</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a Computer Science undergraduate at <strong>KL University</strong> (AI Specialization) with a <strong>Diploma in Programming & Data Science from IIT Madras</strong>. I love building things that work — from REST APIs to AI chatbots.</p>
              <p>My experience spans full-stack development with Flask, Spring Boot, and React, along with hands-on work in <strong>async task processing</strong> (Celery + Redis), <strong>cloud platforms</strong> (Azure, Oracle Cloud), and <strong>AI services</strong>.</p>
              <p>Looking for internship opportunities to build real products, work with LLM tools, and grow fast in a startup environment.</p>
              <div className="link-row">
                <a href="https://github.com/VEMURU-VENISHA" target="_blank" rel="noreferrer" className="pill-link">GitHub ↗</a>
                <a href="mailto:venishavemuru@gmail.com" className="pill-link">Email ↗</a>
              </div>
            </div>
            <div className="edu-cards">
              {[
                {icon:"🎓",deg:"B.Tech CSE (AI Specialization)",school:"KL University, Guntur",yr:"2023–2027 · CGPA 9.4"},
                {icon:"📊",deg:"Diploma in Programming & Data Science",school:"IIT Madras",yr:"2023–2027"},
                {icon:"💼",deg:"Internships",school:"Microsoft Azure AI · Cisco · Juniper Networks",yr:"2024–2025"},
              ].map((e) => (
                <div key={e.deg} className="edu-card">
                  <span className="edu-icon">{e.icon}</span>
                  <div><div className="edu-deg">{e.deg}</div><div className="edu-school">{e.school}</div><div className="edu-yr">{e.yr}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <h2 className="s-title">Technical <span className="accent">Skills</span></h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="skill-card">
                <h3 className="skill-cat">{cat}</h3>
                <div className="tags">{items.map(s => <span key={s} className="tag">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="s-title">Featured <span className="accent">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="proj-card" style={{"--c": p.color}}>
                <div className="proj-top">
                  <div><span className="proj-year">{p.year}</span><h3 className="proj-title">{p.title}</h3></div>
                  <a href={p.github} target="_blank" rel="noreferrer" className="gh-btn">GitHub ↗</a>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="tags">{p.highlights.map(h => <span key={h} className="hl-tag">{h}</span>)}</div>
                <div className="tags mt">{p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section alt">
        <div className="container">
          <h2 className="s-title">Certifi<span className="accent">cations</span></h2>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <div key={i} className="cert-card"><span>🏅</span><p>{c}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="s-title">Get in <span className="accent">Touch</span></h2>
          <p className="contact-sub">I'm actively looking for internships. Let's build something together!</p>
          <div className="contact-grid">
            {[
              {icon:"📧",label:"Email",val:"venishavemuru@gmail.com",href:"mailto:venishavemuru@gmail.com"},
              {icon:"📱",label:"Phone",val:"+91 92472 52101",href:"tel:+919247252101"},
              {icon:"💻",label:"GitHub",val:"VEMURU-VENISHA",href:"https://github.com/VEMURU-VENISHA"},
              {icon:"📍",label:"Location",val:"Vijayawada, India",href:null},
            ].map((c) => (
              c.href
                ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-card">
                    <div className="ci">{c.icon}</div><div className="cl">{c.label}</div><div className="cv">{c.val}</div>
                  </a>
                : <div key={c.label} className="contact-card">
                    <div className="ci">{c.icon}</div><div className="cl">{c.label}</div><div className="cv">{c.val}</div>
                  </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React · Deployed on Vercel · © 2025 Vemuru Venisha</p>
      </footer>
    </div>
  );
}
