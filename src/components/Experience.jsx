import "./Experience.css";

const toolboxCategories = [
  {
    id: "backend",
    icon: "⚙️",
    label: "Backend & Dev",
    skills: ["Node.js", "Docker", "MongoDB", "REST APIs", "Microservices", "GoCD"],
  },
  {
    id: "frontend",
    icon: "🎨",
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "CSS3", "HTML"],
  },
  {
    id: "tools",
    icon: "🛠️",
    label: "Tools & Core",
    skills: ["Git", "Figma", "Web Security", "Accessibility", "Vite", "Redux"],
  },
];

const experiences = [
  {
    role: "Developer",
    company: "IDFC FIRST Bank",
    period: "2022 – Present",
    desc: "Led frontend development of scalable React SPAs, cutting onboarding time by 40% and boosting performance by 35% for 10K+ daily users.",
  },
  {
    role: "Tech Intern",
    company: "Unisys",
    period: "2021",
    desc: "Migrated the legacy C++ MCP System Log Analyzer to a modern architecture, achieving platform independence and seamless cross-functional integration.",
  },
  {
    role: "Machine Learning Research Intern",
    company: "Samsung SRIB",
    period: "2020",
    desc: "Enhanced Bixby's recommendation models with collaborative filtering and location-based logic, boosting user engagement and retention by 15%.",
  },
];

function DevIllustration() {
  return (
    <div className="experience__dev-wrap">
      <svg viewBox="0 0 240 300" width="90%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="dev-skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde8d0"/>
            <stop offset="100%" stopColor="#f5d0b0"/>
          </linearGradient>
          <linearGradient id="dev-shirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e2235"/>
            <stop offset="100%" stopColor="#141727"/>
          </linearGradient>
          <linearGradient id="dev-pants" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22252f"/>
            <stop offset="100%" stopColor="#16181f"/>
          </linearGradient>
          <linearGradient id="dev-laptop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a36"/>
            <stop offset="100%" stopColor="#1a1a24"/>
          </linearGradient>
          <linearGradient id="dev-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1117"/>
            <stop offset="100%" stopColor="#060a0f"/>
          </linearGradient>
          <clipPath id="dev-sc">
            <rect x="88" y="96" width="64" height="55" rx="2"/>
          </clipPath>
        </defs>

        {/* Ground shadow */}
        <ellipse className="dev__shadow" cx="120" cy="292" rx="52" ry="6" fill="rgba(138,180,255,0.18)"/>

        <g className="dev__body">

          {/* Laptop base */}
          <rect x="76" y="190" width="88" height="7" rx="3" fill="url(#dev-laptop)"/>
          <rect x="78" y="191" width="84" height="4" rx="2" fill="#111118"/>
          <rect x="106" y="192" width="28" height="2.5" rx="1.2" fill="#1e1e2a" opacity="0.8"/>
          <rect x="82" y="191.5" width="4" height="1.5" rx="0.7" fill="#2a2a38" opacity="0.9"/>
          <rect x="88" y="191.5" width="4" height="1.5" rx="0.7" fill="#2a2a38" opacity="0.9"/>
          <rect x="94" y="191.5" width="4" height="1.5" rx="0.7" fill="#2a2a38" opacity="0.9"/>
          <rect x="100" y="191.5" width="4" height="1.5" rx="0.7" fill="#2a2a38" opacity="0.9"/>
          <rect x="78" y="189" width="84" height="3" rx="1.5" fill="#111118"/>

          {/* Screen lid */}
          <rect x="82" y="90" width="76" height="100" rx="5" fill="url(#dev-laptop)"/>
          <rect x="86" y="94" width="68" height="59" rx="3" fill="#0a0a12"/>
          <rect className="dev__screen" x="88" y="96" width="64" height="55" rx="2" fill="url(#dev-screen)"/>

          {/* Code on screen */}
          <g clipPath="url(#dev-sc)">
            <g className="dev__code-lines">
              <rect x="92" y="101" width="28" height="2.5" rx="1.2" fill="#8ab4ff" opacity="0.9"/>
              <rect x="123" y="101" width="18" height="2.5" rx="1.2" fill="#7ec8a4" opacity="0.8"/>
              <rect x="95" y="107" width="36" height="2.5" rx="1.2" fill="#c9a0f0" opacity="0.85"/>
              <rect x="134" y="107" width="14" height="2.5" rx="1.2" fill="#fde8a0" opacity="0.75"/>
              <rect x="95" y="113" width="22" height="2.5" rx="1.2" fill="#7ec8a4" opacity="0.8"/>
              <rect x="120" y="113" width="30" height="2.5" rx="1.2" fill="#8ab4ff" opacity="0.7"/>
              <rect x="92" y="119" width="32" height="2.5" rx="1.2" fill="#fde8a0" opacity="0.8"/>
              <rect x="95" y="125" width="18" height="2.5" rx="1.2" fill="#c9a0f0" opacity="0.8"/>
              <rect className="dev__cursor" x="116" y="125" width="5" height="2.5" rx="1" fill="#8ab4ff"/>
              <rect x="92" y="131" width="38" height="2.5" rx="1.2" fill="#8ab4ff" opacity="0.75"/>
              <rect x="95" y="137" width="26" height="2.5" rx="1.2" fill="#7ec8a4" opacity="0.75"/>
              <rect x="95" y="143" width="20" height="2.5" rx="1.2" fill="#fde8a0" opacity="0.7"/>
            </g>
          </g>

          {/* Laptop logo */}
          <circle cx="120" cy="142" r="5" fill="rgba(138,180,255,0.08)" stroke="rgba(138,180,255,0.2)" strokeWidth="0.8"/>

          {/* Legs */}
          <path d="M103 230 L100 272 L108 272 L113 248 L127 248 L132 272 L140 272 L137 230 Z" fill="url(#dev-pants)"/>
          <ellipse cx="104" cy="274" rx="8" ry="4" fill="#111118"/>
          <ellipse cx="136" cy="274" rx="8" ry="4" fill="#111118"/>

          {/* Torso */}
          <path d="M103 195 C103 210 105 228 103 230 L137 230 C135 228 137 210 137 195 Z" fill="url(#dev-shirt)"/>
          <path d="M114 195 L120 202 L126 195" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>

          {/* Left arm */}
          <path d="M103 198 C96 204 90 210 88 218" stroke="url(#dev-skin)" strokeWidth="8" strokeLinecap="round" fill="none"/>
          <ellipse cx="86" cy="220" rx="6" ry="4" fill="url(#dev-skin)" transform="rotate(-20 86 220)"/>

          {/* Right arm typing */}
          <g className="dev__arm-r">
            <path d="M137 198 C144 204 150 210 152 218" stroke="url(#dev-skin)" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <ellipse cx="154" cy="220" rx="6" ry="4" fill="url(#dev-skin)" transform="rotate(20 154 220)"/>
          </g>

          {/* Neck */}
          <rect x="115" y="180" width="10" height="16" rx="4" fill="url(#dev-skin)"/>

          {/* Head */}
          <ellipse cx="120" cy="162" rx="19" ry="22" fill="url(#dev-skin)"/>

          {/* Ears */}
          <ellipse cx="101" cy="163" rx="4" ry="5.5" fill="url(#dev-skin)"/>
          <ellipse cx="139" cy="163" rx="4" ry="5.5" fill="url(#dev-skin)"/>
          <ellipse cx="101" cy="163" rx="2" ry="3" fill="#f0c4a0" opacity="0.5"/>
          <ellipse cx="139" cy="163" rx="2" ry="3" fill="#f0c4a0" opacity="0.5"/>

          {/* Hair */}
          <path d="M101 152 C101 138 108 130 120 130 C132 130 139 138 139 152 C137 142 130 136 120 136 C110 136 103 142 101 152 Z" fill="#111118"/>
          <path d="M101 150 C100 144 101 137 106 133" stroke="#111118" strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M139 150 C140 145 139 138 135 134" stroke="#111118" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
          <path d="M108 132 C114 128 126 128 132 132" stroke="#111118" strokeWidth="5" strokeLinecap="round" fill="none"/>

          {/* Eyebrows */}
          <path d="M111 153 Q116 151 120 153" stroke="#1a1008" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          <path d="M120 153 Q124 151 129 153" stroke="#1a1008" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

          {/* Eyes */}
          <g className="dev__eye-l">
            <ellipse cx="114" cy="160" rx="4.5" ry="4.8" fill="white"/>
            <ellipse cx="114" cy="160.5" rx="2.8" ry="3" fill="#1a1008"/>
            <ellipse cx="115" cy="159.2" rx="0.9" ry="0.9" fill="white"/>
          </g>
          <g className="dev__eye-r">
            <ellipse cx="126" cy="160" rx="4.5" ry="4.8" fill="white"/>
            <ellipse cx="126" cy="160.5" rx="2.8" ry="3" fill="#1a1008"/>
            <ellipse cx="127" cy="159.2" rx="0.9" ry="0.9" fill="white"/>
          </g>

          {/* Nose */}
          <path d="M119 167 Q117 171 120 172 Q123 171 121 167" stroke="#e0a888" strokeWidth="1.1" fill="none" strokeLinecap="round"/>

          {/* Mouth */}
          <path d="M115 177 Q120 180 125 177" stroke="#d4906a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

          {/* Glasses */}
          <rect x="108" y="157" width="10" height="7" rx="3.5" fill="none" stroke="#8ab4ff" strokeWidth="1.2" opacity="0.75"/>
          <rect x="122" y="157" width="10" height="7" rx="3.5" fill="none" stroke="#8ab4ff" strokeWidth="1.2" opacity="0.75"/>
          <line x1="118" y1="160" x2="122" y2="160" stroke="#8ab4ff" strokeWidth="1.2" opacity="0.75"/>
          <line x1="108" y1="160" x2="105" y2="161" stroke="#8ab4ff" strokeWidth="1.2" opacity="0.75"/>
          <line x1="132" y1="160" x2="135" y2="161" stroke="#8ab4ff" strokeWidth="1.2" opacity="0.75"/>

          {/* Coffee mug */}
          <g transform="translate(158, 195)">
            <rect x="0" y="0" width="18" height="20" rx="3" fill="#1e1e2a" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
            <path d="M18 5 Q24 5 24 10 Q24 15 18 15" stroke="#2a2a38" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <rect x="2" y="2" width="14" height="7" rx="2" fill="rgba(138,180,255,0.15)"/>
            <path className="dev__steam-1" d="M5 -1 Q7 -5 5 -9" stroke="rgba(245,245,247,0.3)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path className="dev__steam-2" d="M9 -1 Q11 -6 9 -10" stroke="rgba(245,245,247,0.3)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path className="dev__steam-3" d="M13 -1 Q15 -5 13 -9" stroke="rgba(245,245,247,0.3)" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          </g>

          {/* Floating code tag */}
          <g transform="translate(28, 108)" opacity="0.65">
            <rect x="0" y="0" width="52" height="18" rx="6" fill="rgba(138,180,255,0.1)" stroke="rgba(138,180,255,0.3)" strokeWidth="0.8"/>
            <text fontFamily="monospace" fontSize="7" fill="#8ab4ff" x="6" y="12">const dev = 🚀</text>
          </g>

          {/* Floating bracket tag */}
          <g transform="translate(168, 148)" opacity="0.55">
            <rect x="0" y="0" width="36" height="18" rx="6" fill="rgba(124,200,164,0.1)" stroke="rgba(124,200,164,0.3)" strokeWidth="0.8"/>
            <text fontFamily="monospace" fontSize="8" fill="#7ec8a4" x="7" y="12">{"{ } ;"}</text>
          </g>

        </g>
      </svg>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">

        {/* Top row: timeline + dev illustration */}
        <div className="experience__top-row">
          <div className="experience__glass experience__timeline-container">
            <span className="experience__eyebrow">Experience</span>
            <div className="experience__timeline">
              {experiences.map((exp) => (
                <div className="experience__entry" key={exp.role + exp.company}>
                  <div className="experience__entry-header">
                    <h3 className="experience__role">{exp.role}</h3>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <p className="experience__company">{exp.company}</p>
                  <p className="experience__desc">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <DevIllustration />
        </div>

        {/* Bento toolbox — full width below */}
        <div className="experience__bento-container">
          <span className="experience__eyebrow experience__bento-eyebrow">Toolbox</span>
          <div className="experience__bento-grid">
            {toolboxCategories.map((cat, catIdx) => (
              <div
                className={`experience__bento-card experience__bento-card--${cat.id}`}
                key={cat.id}
              >
                <div className="experience__bento-icon" aria-hidden="true">{cat.icon}</div>
                <div className="experience__bento-cat">{cat.label}</div>
                <div className="experience__bento-pills">
                  {cat.skills.map((skill, i) => (
                    <span
                      className="experience__bento-pill"
                      key={skill}
                      style={{ animationDelay: `${catIdx * 0.1 + i * 0.06}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}