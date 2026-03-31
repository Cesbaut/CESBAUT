import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaCss3, FaJs, FaVuejs, FaBootstrap, FaPhp } from 'react-icons/fa';
import { SiPython, SiDjango, SiWebassembly, SiReact, SiJavascript, SiC,  SiPostgresql, SiDocker, SiMysql, SiLua, SiTailwindcss, SiSelenium, SiPythonanywhere, SiLaravel, SiNodedotjs } from 'react-icons/si';
import { BsTerminalFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import logoQSP from './img/Logo_Quality_And_Service_in_Pest.webp';
import logoUNAM from './img/UNAM.webp';
import logoHexacode from './img/Logo_con_panel.svg'; 
import LogoLatager from './components/LogoLatager';
import LogoMultimedia from './img/LOGO-MULTIMEDIA.png';
import LogoSiccaad from './img/logo_negro.svg';

import certCesarBautista from './pdf/CERTIFICADOS/Cesar Bautista Castilla - 2024-08-11.pdf';
import certConstanciaF11_2025 from './pdf/CERTIFICADOS/Constancia_Cesar_F11-2025-CP-01-C10-C06.pdf';
import certDocker2024 from './pdf/CERTIFICADOS/Constancias-Docker-junio-2024.pdf';
import certF11_2023_C06 from './pdf/CERTIFICADOS/F11-2023-CP-01-C06-C03.pdf';
import certF11_2023_C07 from './pdf/CERTIFICADOS/F11-2023-CP-01-C07-C03.pdf';
import certF11_2023_C09 from './pdf/CERTIFICADOS/F11-2023-CP-01-C09-C07.pdf';
import certF11_2024_C13 from './pdf/CERTIFICADOS/F11-2024-CP-01-C13-C04.pdf';
import certUdemy from './pdf/CERTIFICADOS/UC-155c355d-10c9-4bc8-abe6-ee28b2dde2a0.pdf';

export const DATOS_PERSONALES = {
  nombre: "Cesar Bautista",
  nombreCompleto: "Bautista Castilla Cesar",
  profesion: "Ingeniero de Software",
  descripcion: "Desarrollo Web Full Stack.",
  correo: "bautistac.cesar.p8@gmail.com",
  telefono: "+52 5510453326",
  github: "https://github.com/Cesbaut",
  linkedin: "https://linkedin.com/in/cesbaut",
  website: "https://cesbaut.latager.com/",
  foto_readme: "./src/img/IMG_6021.jpg"
};

export const DATOS_PORTAFOLIO = [
  {
    id: "latager",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: false,
    label: "Proyecto Personal",
    titulo: "Plataforma Latager",
    subtitulo: "Creador y Desarrollador Principal",
    periodo: "Proyecto Activo",
    descripcion: "Generador de horarios en tiempo real para mas de 3500 usuarios, usando web scraping y reconocimiento de lenguaje natural.",
    visual: <LogoLatager />,
    url: "https://latager.com", 
    logros: [
      "<b>Diseñé y desplegué</b> una herramienta de optimización de horarios que actualmente brinda servicio a más de <b>3,500 usuarios activos</b> de la UNAM.",
      "<b>Implementé sincronización en tiempo real</b> y funciones avanzadas de comparación de horarios utilizando <b>React</b> y <b>Django REST Framework</b>, mejorando la eficiencia en la planeación académica de los estudiantes.",
      "<i>Gestioné arquitecturas de datos híbridas</i> con <b>MySQL</b> para asegurar la integridad de la información y la escalabilidad del proyecto."
    ],
    tags: [
      { name: "React", icon: <SiReact /> },
      { name: "Django REST Framework", icon: <SiDjango /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Tailwindcss", icon: <SiTailwindcss /> },
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Pythonanywhere", icon: <SiPythonanywhere /> },
    ]
  },
  {
    id: "multimedia",
    mostrarEnExperiencia: true,
    mostrarEnProyectos: false,
    titulo: "Laboratorio de Multimedia e Internet",
    subtitulo: "Director de Proyecto / Desarrollador Full Stack",
    periodo: "Enero 2024 - Diciembre 2025",
    desc: "Lidere aplicaciones como SICCAAD y desarrollador en la aplicacion Hexacode.",
    logo: <img src={LogoMultimedia} alt="Multimedia" style={{maxWidth: '180px', maxHeight: '80px', objectFit: 'contain'}} />,
    url: "https://mmedia1.fi-b.unam.mx/",
    logros: [
      "<b>Dirigí el ciclo de vida completo de SICCAAD</b>, una plataforma integral de gestión académica para la UNAM, coordinando los esfuerzos de desarrollo para asegurar una entrega eficiente y alineada con los objetivos institucionales.",
      "<b>Construí Hexacode</b>, un entorno web especializado en la compilación y ejecución de código ensamblador (z80 y 8086), integrando <b>Lua</b> para el procesamiento lógico y garantizando una ejecución fluida en el navegador.",
      "<b>Optimicé la disponibilidad del servicio</b> mediante el mantenimiento preventivo y correctivo de servidores, asegurando la estabilidad de las plataformas bajo demanda constante.",
      "<b>Mejoré la experiencia de usuario (UX)</b> a través de actualizaciones iterativas y mantenimiento técnico del front-end, reduciendo fricciones en el uso diario de las herramientas."
    ]
  },
  {
    id: "qsp",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: true,
    label: "Trabajo",
    titulo: "Quality and Service in Pest",
    subtitulo: "Desarrollador Full Stack",
    periodo: "Julio 2025 - Diciembre 2025",
    descripcion: "Aplicacion web para empresa de control de insecticidas.",
    desc: "Empresa de Control de plagas, en donde migramos de php al framework django.",
    visual: <img src={logoQSP} alt="QSP" className="card-visual-img rounded-apple" />,
    logo: <img src={logoQSP} alt="QSP" style={{maxWidth: '160px', maxHeight: '70px', objectFit: 'contain', borderRadius: '12px'}} />,
    url: "https://plagasqsp.com/",
    logros: [
      "<b>Desarrollé la arquitectura Full Stack</b> de la plataforma corporativa utilizando <b>Django</b>, gestionando íntegramente desde la lógica del servidor y base de datos hasta la interfaz de usuario.",
      "Desarrollo de un módulo de control de químicos, permitiendo la administración y el seguimiento técnico de aplicaciones en campo.",
      "<b>Sistematicé la generación automatizada de reportes de personal</b>, optimizando la entrega de informes de inspección y facilitando la auditoría de servicios realizados."
    ],
    tags: [
      { name: "Python / Django", icon: <SiDjango /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JS", icon: <FaJs /> },
      { name: "Php", icon: <FaPhp /> },
    ]
  },
  {
    id: "hexacode",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: false,
    cv_ignore: true,
    label: "Ensamblador",
    titulo: "Hexacode",
    descripcion: "IDE simulador de ensamblador de arquitectura z80/8086.",
    visual: <img src={logoHexacode} alt="Hexacode" className="card-visual-img" />,
    url: "https://mmedia1.fi-b.unam.mx/hexacode/", 
    tags: [
      { name: "Low-Level", icon: <BsTerminalFill /> },
      { name: "Lua Engine", icon: <SiLua /> },
      { name: "Webassembly", icon: <SiWebassembly /> },
      { name: "C", icon: <SiC /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JS", icon: <FaJs /> },
    ]
  },
  {
    id: "siccaad",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: false,
    cv_ignore: true,
    label: "Institucional",
    titulo: "SICCAAD UNAM",
    descripcion: "Optimización de plataforma académica institucional. Mejora del 25% en rendimiento y eficiencia de datos masivos.",
    visual: <img src={LogoSiccaad} alt="SICCAAD" style={{maxWidth: '220px', maxHeight: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />,
    url: "https://www.siccaad.unam.mx/accounts/login/",
    tags: [
      { name: "Python / Django", icon: <SiDjango /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JS", icon: <FaJs /> },
      { name: "Vue", icon: <FaVuejs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Postgresql", icon: <SiPostgresql /> },
      { name: "Selenium", icon: <SiSelenium /> },
    ]
  }
];

export const DATOS_PROYECTOS = DATOS_PORTAFOLIO.filter(d => d.mostrarEnProyectos);
export const DATOS_EXP_PROFESIONAL = DATOS_PORTAFOLIO.filter(d => d.mostrarEnExperiencia);

export const DATOS_SKILLS = [
  {
    categoria: "Frontend",
    color: "#5ac8fa",
    habilidades: [
      { name: "React", icon: <SiReact />, brandColor: "#61DAFB" },
      { name: "JS", icon: <SiJavascript />, brandColor: "#F7DF1E" },
      { name: "Vue", icon: <FaVuejs />, brandColor: "#4FC08D" },
      { name: "Tailwind", icon: <SiTailwindcss />, brandColor: "#06B6D4" },
      { name: "Bootstrap", icon: <FaBootstrap />, brandColor: "#7952B3" },
    ]
  },
  {
    categoria: "Backend",
    color: "#ffffff",
    habilidades: [
      { name: "Python", icon: <SiPython />, brandColor: "#3776AB" },
      { name: "Django", icon: <SiDjango />, brandColor: "#092E20" },
      { name: "Postres", icon: <SiPostgresql />, brandColor: "#336791" },
      { name: "MySQL", icon: <SiMysql />, brandColor: "#4479A1" },
      { name: "Php", icon: <FaPhp />, brandColor: "#777BB4" },
      { name: "Docker", icon: <SiDocker />, brandColor: "#2496ED" },
    ]
  },
  {
    categoria: "Aprendiendo",
    color: "#ff9f0a",
    habilidades: [
      { name: "Laravel", icon: <SiLaravel />, brandColor: "#FF2D20" },
      { name: "NodeJS", icon: <SiNodedotjs />, brandColor: "#339933" },
      { name: "Java", icon: <FaJava />, brandColor: "#007396" },
    ]
  },
  {
    categoria: "Herramientas",
    color: "#64d2ff",
    habilidades: [
      { name: "Git", icon: <FaGithub />, brandColor: "#F05032" },
      { name: "Selenium", icon: <SiSelenium />, brandColor: "#43B02A" },
      { name: "C", icon: <SiC />, brandColor: "#A8B9CC" },
      { name: "Assembler", icon: <BsTerminalFill />, brandColor: "#ffffff" },
      { name: "Wasm", icon: <SiWebassembly />, brandColor: "#654FF0" },
      { name: "Lua", icon: <SiLua />, brandColor: "#000080" },
    ]
  }
];

export const DATOS_FORMACION_ACADEMICA = [
  {
    titulo: "Ingeniería en Computación",
    institucion: "Universidad Nacional Autónoma de México (UNAM)",
    ubicacion: "Ciudad de México",
    periodo: "2022 - 2027",
    subtitulo: "En curso",
    logo: <img src={logoUNAM} alt="UNAM" style={{maxWidth: '120px', maxHeight: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8}} />,
    url: "https://www.unam.mx/"
  }
];

export const DATOS_CERTIFICADOS = [
  { nombre: "Constancia Desarrollo Web 2025", url: certConstanciaF11_2025 },
  { nombre: "Constancia Docker", url: certDocker2024 },
  { nombre: "Constancia Python Intermedio", url: certF11_2023_C06 },
  { nombre: "Constancia PostgreSQL", url: certF11_2023_C07 },
  { nombre: "Constancia HTML, CSS y JavaScript", url: certF11_2023_C09 },
  { nombre: "Constancia Lenguaje C", url: certF11_2024_C13 },
  { nombre: "Tecnologías Emergentes", url: certCesarBautista },
  { nombre: "Constancia Three.js", url: certUdemy }
];

export const DATOS_CV = {
  resumen: "<b>Director de Proyecto y Desarrollador Full Stack</b> con más de 3 años de trayectoria liderando soluciones tecnológicas de alto impacto. Como <b>Director de Proyecto en SICCAAD</b>, coordiné la unificación técnica de la plataforma, logrando optimizar los tiempos de entrega en un <b>40%</b> y el rendimiento web en un <b>25%</b>. Fundador de <i>Latager</i>, herramienta de optimización académica que gestiona a más de <b>3,500 estudiantes</b>, demostrando una sólida capacidad para dirigir equipos y proyectos desde la concepción hasta el escalado masivo.",
  idiomas: [
    "Inglés nivel B1",
    "Nativo en Español."
  ],
  conocimientos: [
    "Python (intermedio, certificado profesor)",
    "Django y Django REST framework (avanzado)",
    "HTML, CSS y JavaScript (avanzado, certificado como profesor)",
    "PostgreSQL, SQL Server y MySQL (básico)",
    "Lenguaje C (básico)",
    "Java (básico)",
    "Git y GitHub",
    "React (Intermedio)",
    "Vue (básico)",
    "Docker (intermedio)",
    "Ensamblador (intermedio)",
    "Lua (básico)",
    "Prompt Engineering y herramientas de productividad con IA"
  ],
  habilidades: [
    "Resolución de problemas técnicos",
    "Autogestión y aprendizaje autodidacta.",
    "Comunicación efectiva en equipos técnicos.",
    "Adaptabilidad a nuevas tecnologías."
  ]
};
