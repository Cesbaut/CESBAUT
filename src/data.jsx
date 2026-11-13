import React from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaCss3, FaJs, FaVuejs, FaBootstrap, FaPhp, FaCreditCard } from 'react-icons/fa';
import { SiPython, SiDjango, SiWebassembly, SiReact, SiJavascript, SiC,  SiPostgresql, SiDocker, SiMysql, SiLua, SiTailwindcss, SiSelenium, SiPythonanywhere, SiLaravel, SiNodedotjs } from 'react-icons/si';
import { BsTerminalFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import logoQSP from './img/Logo_Quality_And_Service_in_Pest.webp';
import logoUNAM from './img/UNAM.webp';
import logoHexacode from './img/Logo_con_panel.svg';
import LogoLatager from './components/LogoLatager';
import LogoMultimedia from './img/LOGO-MULTIMEDIA.png';
import LogoSiccaad from './img/logo_negro.svg';
import logoLiverpool from './img/Logo_Liverpool.svg';

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
  profesion: "Software Engineer",
  descripcion: "Full Stack Web Development.",
  correo: "bautistac.cesar.p8@gmail.com",
  telefono: "+52 5510453326",
  github: "https://github.com/Cesbaut",
  linkedin: "https://linkedin.com/in/cesbaut",
  website: "https://cesbaut.latager.com/",
  foto_readme: "./src/img/IMG_6021.jpg"
};

export const DATOS_PORTAFOLIO = [
  {
    id: "liverpool-junior",
    mostrarEnProyectos: false,
    mostrarEnExperiencia: true,
    titulo: "Liverpool",
    subtitulo: "Junior Software Developer - IT Payments",
    periodo: "October 2026 - Present",
    desc: "Junior developer in the IT Payments area at El Puerto de Liverpool.",
    logo: <img src={logoLiverpool} alt="Liverpool" style={{maxWidth: '300px', maxHeight: '130px', objectFit: 'contain'}} />,
    url: "https://www.liverpool.com.mx/",
    logros: [
      "<b>Promoted to Junior Developer</b> in the <b>IT Payments</b> area after completing the internship."
    ]
  },
  {
    id: "liverpool",
    mostrarEnProyectos: false,
    mostrarEnExperiencia: true,
    titulo: "Liverpool",
    subtitulo: "Software Development Intern",
    periodo: "April 2026 - September 2026 (6-Month Internship)",
    desc: "Full Stack Development Internship at El Puerto de Liverpool, one of Mexico's largest department store and e-commerce retail groups.",
    logo: <img src={logoLiverpool} alt="Liverpool" style={{maxWidth: '300px', maxHeight: '130px', objectFit: 'contain'}} />,
    url: "https://www.liverpool.com.mx/",
    logros: [
      "<b>Joined a newly-formed Retail Engineering team</b> at Liverpool, building new in-store <b>Point-of-Sale (POS)</b> systems.",
      "<b>Focused on the payment transaction module</b>, developing and testing the logic that processes in-store payments end-to-end."
    ]
  },
  {
    id: "eplmask",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: false,
    cv_ignore: true,
    label: "Payments Infrastructure",
    titulo: "EPL MASK",
    descripcion: "Middleware that translates payment transaction messages between point-of-sale terminals and Base24, Liverpool's core transaction switch.",
    visual: <img src={logoLiverpool} alt="Liverpool" style={{maxWidth: '240px', maxHeight: '120px', objectFit: 'contain'}} />,
    tags: [
      { name: "Java", icon: <FaJava /> },
      { name: "Point of Sale", icon: <BsTerminalFill /> },
      { name: "Payments", icon: <FaCreditCard /> },
    ]
  },
  {
    id: "latager",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: false,
    label: "Personal Project",
    titulo: "Latager Platform",
    subtitulo: "Founder & Lead Developer",
    periodo: "Active Project",
    descripcion: "Real-time schedule builder for over 4,500 users, powered by web scraping and natural language recognition.",
    visual: <LogoLatager />,
    url: "https://latager.com",
    logros: [
      "<b>Designed and deployed</b> a schedule optimization tool currently serving more than <b>3,500 active users</b> at UNAM.",
      "<b>Implemented real-time synchronization</b> and advanced schedule-comparison features using <b>React</b> and <b>Django REST Framework</b>, improving the efficiency of students' academic planning.",
      "<i>Managed hybrid data architectures</i> with <b>MySQL</b> to ensure data integrity and project scalability."
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
    titulo: "Multimedia and Internet Laboratory",
    subtitulo: "Project Director / Full Stack Developer",
    periodo: "January 2024 - December 2025",
    desc: "Led applications such as SICCAAD and developed the Hexacode application.",
    logo: <img src={LogoMultimedia} alt="Multimedia" style={{maxWidth: '220px', maxHeight: '100px', objectFit: 'contain'}} />,
    url: "https://mmedia1.fi-b.unam.mx/",
    logros: [
      "<b>Directed the full life cycle of SICCAAD</b>, a comprehensive academic management platform for UNAM, coordinating development efforts to ensure an efficient delivery aligned with institutional goals.",
      "<b>Built Hexacode</b>, a web environment specialized in compiling and running assembly code (z80 and 8086), integrating <b>Lua</b> for logic processing and ensuring smooth execution in the browser.",
      "<b>Optimized service availability</b> through preventive and corrective server maintenance, ensuring platform stability under constant demand.",
      "<b>Improved user experience (UX)</b> through iterative updates and technical front-end maintenance, reducing friction in the tools' daily use."
    ]
  },
  {
    id: "qsp",
    mostrarEnProyectos: true,
    mostrarEnExperiencia: true,
    label: "Work",
    titulo: "Quality and Service in Pest",
    subtitulo: "Full Stack Developer",
    periodo: "July 2025 - December 2025",
    descripcion: "Web application for a pest control company.",
    desc: "Pest control company, where we migrated from PHP to the Django framework.",
    visual: <img src={logoQSP} alt="QSP" className="card-visual-img rounded-apple" />,
    logo: <img src={logoQSP} alt="QSP" style={{maxWidth: '200px', maxHeight: '90px', objectFit: 'contain', borderRadius: '12px'}} />,
    url: "https://plagasqsp.com/",
    logros: [
      "<b>Developed the Full Stack architecture</b> of the corporate platform using <b>Django</b>, managing everything from server-side logic and the database to the user interface.",
      "Developed a chemical control module, enabling the administration and technical tracking of field applications.",
      "<b>Systematized automated staff report generation</b>, streamlining the delivery of inspection reports and facilitating the audit of completed services."
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
    label: "Assembler",
    titulo: "Hexacode",
    descripcion: "z80/8086 architecture assembler IDE simulator.",
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
    label: "Institutional",
    titulo: "SICCAAD UNAM",
    descripcion: "Optimization of an institutional academic platform. 25% improvement in performance and large-scale data efficiency.",
    visual: <img src={LogoSiccaad} alt="SICCAAD" style={{maxWidth: '260px', maxHeight: '120px', objectFit: 'contain', filter: 'brightness(0) invert(1)'}} />,
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
    categoria: "Learning",
    color: "#ff9f0a",
    habilidades: [
      { name: "Laravel", icon: <SiLaravel />, brandColor: "#FF2D20" },
      { name: "NodeJS", icon: <SiNodedotjs />, brandColor: "#339933" },
      { name: "Java", icon: <FaJava />, brandColor: "#007396" },
    ]
  },
  {
    categoria: "Tools",
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
    titulo: "Computer Engineering",
    institucion: "National Autonomous University of Mexico (UNAM)",
    ubicacion: "Mexico City",
    periodo: "2022 - 2027",
    subtitulo: "In Progress",
    logo: <img src={logoUNAM} alt="UNAM" style={{maxWidth: '150px', maxHeight: '120px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8}} />,
    url: "https://www.unam.mx/"
  }
];

export const DATOS_CERTIFICADOS = [
  { nombre: "Web Development Certificate 2025", url: certConstanciaF11_2025 },
  { nombre: "Docker Certificate", url: certDocker2024 },
  { nombre: "Intermediate Python Certificate", url: certF11_2023_C06 },
  { nombre: "PostgreSQL Certificate", url: certF11_2023_C07 },
  { nombre: "HTML, CSS and JavaScript Certificate", url: certF11_2023_C09 },
  { nombre: "C Language Certificate", url: certF11_2024_C13 },
  { nombre: "Emerging Technologies", url: certCesarBautista },
  { nombre: "Three.js Certificate", url: certUdemy }
];

export const DATOS_HORARIO = {
  dias: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  horaInicio: 7,
  horaFin: 21,
  eventos: [
    { titulo: "Liverpool — Internship", dias: [0, 1, 2, 3, 4], inicio: 8, fin: 14, color: "#ff375f" },
    { titulo: "Homework / Personal Study", dias: [0, 1, 2, 3], inicio: 15, fin: 17, color: "#ff453a" },
    { titulo: "University Labs (In-Person)", dias: [4], inicio: 15, fin: 17, color: "#64d2ff" },
    { titulo: "Weekend Seminar (Hybrid)", dias: [5], inicio: 8, fin: 11, color: "#ff9f0a" },
    { titulo: "Internet Services (Self-Study)", dias: [0, 2], inicio: 17, fin: 19, color: "#ffd60a" },
    { titulo: "Microcomputers (In-Person)", dias: [1, 3], inicio: 17, fin: 19, color: "#63e6be" },
    { titulo: "Country Resources Seminar", dias: [4], inicio: 17, fin: 21, color: "#bf5af2" },
    { titulo: "Secure Data Networks", dias: [0, 1, 2, 3], inicio: 19, fin: 21, color: "#ffb340" },
  ]
};

export const DATOS_CV = {
  resumen: "<b>Project Director and Full Stack Developer</b> with over 3 years of experience leading high-impact technology solutions. As <b>Project Director at SICCAAD</b>, I coordinated the platform's technical unification, optimizing delivery times by <b>40%</b> and web performance by <b>25%</b>. Founder of <i>Latager</i>, an academic optimization tool that manages more than <b>3,500 students</b>, demonstrating a strong ability to lead teams and projects from conception through large-scale rollout. Currently a <b>Software Development Intern at Liverpool</b>, building payment-transaction logic for new retail Point-of-Sale systems.",
  idiomas: [
    "English - B1 level",
    "Spanish - Native."
  ],
  conocimientos: [
    "Python (intermediate, certified instructor)",
    "Django and Django REST framework (advanced)",
    "HTML, CSS and JavaScript (advanced, certified instructor)",
    "PostgreSQL, SQL Server and MySQL (basic)",
    "C language (basic)",
    "Java (basic)",
    "Git and GitHub",
    "React (intermediate)",
    "Vue (basic)",
    "Docker (intermediate)",
    "Assembler (intermediate)",
    "Lua (basic)",
    "Prompt Engineering and AI productivity tools"
  ],
  habilidades: [
    "Technical problem solving",
    "Self-management and self-taught learning.",
    "Effective communication within technical teams.",
    "Adaptability to new technologies."
  ]
};
