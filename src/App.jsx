import React from 'react';
import './App.css';

import imgPerfil from './img/IMG_6021.jpg';
import logoQSP from './img/Logo_Quality_And_Service_in_Pest.webp';
import logoUNAM from './img/UNAM.webp';
import logoHexacode from './img/Logo_con_panel.svg'; 
import LogoLatager from './components/LogoLatager';
import LogoMultimedia from './img/LOGO-MULTIMEDIA.png';
import LogoSiccaad from './img/logo_negro.svg';

import { FaJava, FaHtml5, FaCss3Alt, FaArrowRight, FaGraduationCap, FaBriefcase, FaRocket, FaChartLine } from 'react-icons/fa';
import { SiPython, SiDjango, SiReact, SiJavascript, SiPostgresql, SiDocker, SiMysql, SiLua } from 'react-icons/si';
import { BsTerminalFill } from 'react-icons/bs';

const DATOS_PROYECTOS = [
  {
    id: "latager",
    label: "Producto Principal",
    titulo: "Latager.",
    descripcion: "Solución de planeación académica para +3,500 estudiantes UNAM. Sincronización real-time y alta disponibilidad.",
    visual: <LogoLatager />,
    url: "https://latager.com", 
    tags: [
      { name: "React", icon: <SiReact /> },
      { name: "Django REST", icon: <SiDjango /> }
    ]
  },
  {
    id: "hexacode",
    label: "Ingeniería",
    titulo: "Hexacode.",
    descripcion: "IDE para enseñanza de arquitectura z80/8086 con motor lógico en Lua sobre entorno web fluido.",
    visual: <img src={logoHexacode} alt="Hexacode" className="card-visual-img" />,
    url: "https://mmedia1.fi-b.unam.mx/hexacode/", 
    tags: [
      { name: "Low-Level", icon: <BsTerminalFill /> },
      { name: "Lua Engine", icon: <SiLua /> }
    ]
  },
  {
    id: "qsp",
    label: "Corporativo",
    titulo: "Módulo QSP.",
    descripcion: "Digitalización de procesos industriales. Automatiza auditorías técnicas y seguimiento en campo.",
    visual: <img src={logoQSP} alt="QSP" className="card-visual-img rounded-apple" />,
    url: "https://plagasqsp.com/",
    tags: [
      { name: "Python / Django", icon: <SiPython /> },
      { name: "Postgres", icon: <SiPostgresql /> }
    ]
  },
  {
    id: "siccaad",
    label: "Institucional",
    titulo: "SICCAAD UNAM.",
    descripcion: "Optimización de plataforma académica institucional. Mejora del 25% en rendimiento y eficiencia de datos masivos.",
    visual: <img src={LogoSiccaad} alt="SICCAAD" style={{maxWidth: '220px', maxHeight: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />,
    url: "https://www.siccaad.unam.mx/accounts/login/",
    tags: [
      { name: "Optimization", icon: <FaChartLine /> }
    ]
  }
];

const DATOS_SKILLS = [
  { name: "Python", icon: <SiPython /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Lua", icon: <SiLua /> },
  { name: "Assembler", icon: <BsTerminalFill /> },
  { name: "Web Stack", icon: <><FaHtml5 /> <FaCss3Alt /></> }
];

const DATOS_EXP_PROFESIONAL = [
  {
    titulo: "Lab Multimedia @ UNAM",
    subtitulo: "Director & Lead Full Stack",
    periodo: "2024 - Hoy",
    desc: "Liderazgo técnico de plataformas educativas masivas con alcance institucional.",
    logo: <img src={LogoMultimedia} alt="Multimedia" style={{maxWidth: '180px', maxHeight: '80px', objectFit: 'contain'}} />
  },
  {
    titulo: "Quality & Pest Control",
    subtitulo: "Full Stack Engineer",
    periodo: "2025",
    desc: "Digitalización de procesos operativos y optimización de auditorías industriales.",
    logo: <img src={logoQSP} alt="QSP" style={{maxWidth: '160px', maxHeight: '70px', objectFit: 'contain', borderRadius: '12px'}} />
  }
];

const DATOS_FORMACION_ACADEMICA = [
  {
    titulo: "Ingeniería en Computación",
    institucion: "Facultad de Ingeniería, UNAM",
    periodo: "2022 - 2027",
    subtitulo: "8vo Semestre",
    logo: <img src={logoUNAM} alt="UNAM" style={{maxWidth: '120px', maxHeight: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8}} />
  }
];

function App() {
  return (
    <div className="app-main">
      <header className="hero-jobs">
        <img src={imgPerfil} alt="Cesar Bautista" className="hero-profile-img" />
        <span className="hero-tag"><FaRocket /> TECNOLOGÍA DE ALTO IMPACTO</span>
        <h1 className="hero-main-title">Cesar Bautista.</h1>
        <p className="hero-desc">
          Ingeniero de Software especializado en <br/>
          <strong>arquitecturas escalables y alto rendimiento.</strong>
        </p>
      </header>

      <div className="container">
        <section id="proyectos">
          <h2 className="section-title-big">Proyectos.</h2>
          <div className="bento-grid">
            {DATOS_PROYECTOS.map((proy) => (
              <div key={proy.id} className="bento-card">
                <div className="card-content-layout">
                  <div className="card-info-side">
                    <span className="card-label">{proy.label}</span>
                    <h2 className="card-title">{proy.titulo}</h2>
                    <p className="card-text">{proy.descripcion}</p>
                    <div style={{marginTop: '24px'}}>
                      <a href={proy.url} target="_blank" rel="noreferrer" className="apple-button-link">
                        Ver Detalles <FaArrowRight style={{marginLeft: '10px'}} />
                      </a>
                    </div>
                    <div className="tags-row" style={{marginTop: '40px'}}>
                      {proy.tags.map((tag, idx) => (
                        <span key={idx} className="apple-tag">
                          {tag.icon} {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-visual-side">
                    {proy.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencia" style={{marginTop: '100px'}}>
          <h2 className="section-title-big">
            <FaBriefcase style={{display:'block', margin:'0 auto 20px', color:'var(--apple-green)'}} /> Experiencia
          </h2>
          <div className="bento-grid" style={{gap: '24px'}}>
            {DATOS_EXP_PROFESIONAL.map((exp, idx) => (
              <div key={idx} className="bento-card" style={{padding: '60px 20px', textAlign: 'center', alignItems: 'center'}}>
                <div style={{marginBottom: '32px', display: 'flex', justifyContent: 'center', width: '100%'}}>
                  <div style={{height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {exp.logo}
                  </div>
                </div>
                <span className="card-label">{exp.periodo}</span>
                <h3 className="card-title" style={{fontSize: '32px'}}>{exp.titulo}</h3>
                <p className="card-text" style={{fontSize: '18px', color: 'var(--apple-green)', fontWeight: '600', marginBottom: '8px'}}>{exp.subtitulo}</p>
                <p className="card-text" style={{maxWidth: '500px', fontSize: '16px', margin: '0 auto'}}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="formacion" style={{marginTop: '100px'}}>
          <h2 className="section-title-big">
            <FaGraduationCap style={{display:'block', margin:'0 auto 20px', color:'var(--apple-green)'}} /> Formación
          </h2>
          <div className="bento-grid">
            {DATOS_FORMACION_ACADEMICA.map((edu, idx) => (
              <div key={idx} className="bento-card" style={{padding: '60px 20px', textAlign: 'center', alignItems: 'center'}}>
                <div style={{marginBottom: '32px', display: 'flex', justifyContent: 'center', width: '100%'}}>
                  <div style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {edu.logo}
                  </div>
                </div>
                <span className="card-label">{edu.periodo}</span>
                <h3 className="card-title" style={{fontSize: '42px'}}>{edu.titulo}</h3>
                <p className="card-text" style={{fontSize: '22px', fontWeight: '500', margin: '0 auto'}}>{edu.institucion}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="habilidades" style={{marginTop: '120px', marginBottom: '120px'}}>
          <div className="bento-card" style={{padding: '100px 20px', textAlign: 'center', alignItems: 'center'}}>
            <h2 className="card-title" style={{fontSize: '52px', marginBottom: '60px'}}>Habilidades.</h2>
            <div className="skills-list">
              {DATOS_SKILLS.map(skill => (
                <span key={skill.name} className="skill-pill-dynamic">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer id="contacto" className="apple-footer">
        <h2 className="hero-main-title" style={{fontSize: 'clamp(42px, 8vw, 82px)', marginBottom: '60px'}}>Hablemos.</h2>
        <div className="contact-links" style={{flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
          <a href="mailto:bautistac.cesar.p8@gmail.com" className="contact-item" style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '600', color: '#fff'}}>
            bautistac.cesar.p8@gmail.com
          </a>
          <a href="tel:+525530164627" className="contact-item" style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '600', color: 'var(--apple-green)'}}>
            +52 55 3016 4627
          </a>
          <div style={{marginTop: '32px'}}>
            <a href="https://linkedin.com/in/cesbaut" target="_blank" rel="noreferrer" className="contact-item" style={{fontSize: '18px'}}>LinkedIn</a>
          </div>
        </div>
        <p className="footer-copyright">© 2026 CESAR BAUTISTA CASTILLA.</p>
      </footer>
    </div>
  );
}

export default App;
