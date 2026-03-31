import React from 'react';
import './App.css';

import imgPerfil from './img/IMG_6021.jpg';
import { FaArrowRight, FaGraduationCap, FaBriefcase, FaRocket, FaGithub, FaEnvelope, FaDownload, FaFilePdf } from 'react-icons/fa';
import cvFile from './pdf/CV_BAUTISTA_CASTILLA_CESAR.pdf';

import { 
  DATOS_PERSONALES,
  DATOS_PROYECTOS, 
  DATOS_SKILLS, 
  DATOS_EXP_PROFESIONAL, 
  DATOS_FORMACION_ACADEMICA, 
  DATOS_CERTIFICADOS 
} from './data.jsx';

function App() {
  return (
    <div className="app-main">
      <header className="hero-jobs">
        <img src={imgPerfil} alt={DATOS_PERSONALES.nombre} className="hero-profile-img" />
        <span className="hero-tag"><FaRocket /> TECNOLOGÍA DE ALTO IMPACTO</span>
        <h1 className="hero-main-title">{DATOS_PERSONALES.nombre}.</h1>
        <p className="hero-desc">
          {DATOS_PERSONALES.profesion} especializado en <br/>
          <strong>{DATOS_PERSONALES.descripcion}</strong>
        </p>

        <div className="hero-actions">
          <a href={DATOS_PERSONALES.github} target="_blank" rel="noreferrer" className="apple-button apple-button-secondary">
            <FaGithub /> GitHub
          </a>
          <a href={cvFile} download={`CV_${DATOS_PERSONALES.nombre.replace(' ', '_')}.pdf`} className="apple-button apple-button-primary">
            <FaDownload /> Descargar CV
          </a>
          <a href={`mailto:${DATOS_PERSONALES.correo}`} className="apple-button apple-button-secondary">
            <FaEnvelope /> Contacto
          </a>
        </div>
      </header>

      <div className="container">
        <section id="experiencia" style={{marginTop: '80px'}}>
          <h2 className="section-title-big">Experiencia.</h2>
          <div className="timeline">
            {DATOS_EXP_PROFESIONAL.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '250px'}}>
                      <div className="timeline-header">
                        <span className="timeline-title">{exp.subtitulo}</span>
                        <span className="timeline-separator"> - </span>
                        <span className="timeline-company">{exp.titulo}</span>
                      </div>
                      <span className="timeline-period">{exp.periodo}</span>
                      <p className="timeline-desc">{exp.desc}</p>
                    </div>
                    <div className="timeline-logo-container">
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          {exp.logo}
                        </a>
                      ) : (
                        exp.logo
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="formacion" style={{marginTop: '120px'}}>
          <h2 className="section-title-big">Formación.</h2>
          <div className="timeline">
            {DATOS_FORMACION_ACADEMICA.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px'}}>
                    <div style={{flex: 1, minWidth: '250px'}}>
                      <div className="timeline-header">
                        <span className="timeline-title">{edu.titulo}</span>
                        <span className="timeline-separator"> - </span>
                        <span className="timeline-company">{edu.institucion}</span>
                      </div>
                      <span className="timeline-period">{edu.periodo}</span>
                      <p className="timeline-desc">{edu.subtitulo}</p>
                    </div>
                    <div className="timeline-logo-container">
                      {edu.url ? (
                        <a href={edu.url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                          {edu.logo}
                        </a>
                      ) : (
                        edu.logo
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" style={{marginTop: '120px'}}>
          <h2 className="section-title-big">Proyectos.</h2>
          <div className="bento-grid">
            {DATOS_PROYECTOS.map((proy) => (
              <div key={proy.id} className="bento-card">
                <div className="card-content-layout">
                  <div className="card-info-side">
                    <span className="card-label">{proy.label}</span>
                    <h2 className="card-title">{proy.titulo}</h2>
                    <p className="card-text">{proy.descripcion}</p>
                    <div style={{marginTop: '16px'}}>
                      <a href={proy.url} target="_blank" rel="noreferrer" className="apple-button-link">
                        Ver Preview <FaArrowRight style={{marginLeft: '10px'}} />
                      </a>
                    </div>
                    <div className="tags-row" style={{marginTop: '20px'}}>
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

        <section id="habilidades" style={{marginTop: '120px', marginBottom: '120px'}}>
          <h2 className="section-title-big">Habilidades.</h2>
          <div className="skills-grid-container">
            {DATOS_SKILLS.map((cat, idx) => (
              <div key={idx} className="skill-category-card">
                <h3 className="skill-category-title-new" style={{color: cat.color}}>{cat.categoria}</h3>
                <div className="skill-items-grid">
                  {cat.habilidades.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-vertical-item">
                      <div className="skill-icon-large" style={{color: skill.brandColor}}>{skill.icon}</div>
                      <span className="skill-name-small">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certificados" style={{marginTop: '120px', marginBottom: '120px'}}>
          <h2 className="section-title-big">Certificados.</h2>
          <div className="certificates-grid">
            {DATOS_CERTIFICADOS.map((cert, idx) => (
              <a key={idx} href={cert.url} target="_blank" rel="noreferrer" className="certificate-card certificate-card-preview">
                <div className="certificate-preview">
                  <iframe src={`${cert.url}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} title={cert.nombre} className="certificate-iframe" tabIndex="-1" />
                  <div className="certificate-overlay"></div>
                </div>
                <div className="certificate-info">
                  <FaFilePdf className="certificate-icon-small" />
                  <span className="certificate-name">{cert.nombre}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer id="contacto" className="apple-footer">
        <h2 className="hero-main-title" style={{fontSize: 'clamp(42px, 8vw, 82px)', marginBottom: '60px'}}>Hablemos.</h2>
        <div className="contact-links" style={{flexDirection: 'column', gap: '24px', alignItems: 'center'}}>
          <a href={`mailto:${DATOS_PERSONALES.correo}`} className="contact-item" style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '600', color: '#fff'}}>
            {DATOS_PERSONALES.correo}
          </a>
          <a href={`tel:${DATOS_PERSONALES.telefono.replace(/\s+/g, '')}`} className="contact-item" style={{fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '600', color: 'var(--apple-green)'}}>
            {DATOS_PERSONALES.telefono}
          </a>
          <div style={{marginTop: '32px'}}>
            <a href={DATOS_PERSONALES.linkedin} target="_blank" rel="noreferrer" className="contact-item" style={{fontSize: '18px'}}>LinkedIn</a>
          </div>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} {DATOS_PERSONALES.nombreCompleto.toUpperCase()}.</p>
      </footer>
    </div>
  );
}

export default App;
