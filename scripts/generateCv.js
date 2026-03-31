import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../src/data.jsx');
const pdfPath = path.resolve(__dirname, '../src/pdf/CV_BAUTISTA_CASTILLA_CESAR.pdf');

async function generarCV() {
  try {
    if (!fs.existsSync(dataPath)) return;
    const content = fs.readFileSync(dataPath, 'utf-8');

    const cvMatch = content.match(/export const DATOS_CV = \{([\s\S]*?)\};/);
    const cvText = cvMatch ? cvMatch[1] : '';

    const extractArrayFromCV = (key) => {
      const regex = new RegExp(`${key}:\\s*\\[([\\s\\S]*?)\\]`);
      const block = cvText.match(regex);
      if (!block) return [];
      const items = [];
      const itemRegex = /"([^"]+)"/g;
      let m;
      while ((m = itemRegex.exec(block[1])) !== null) items.push(m[1]);
      return items;
    };
    
    const resumenMatch = cvText.match(/resumen:\s*"([^"]+)"/);
    const resumen = resumenMatch ? resumenMatch[1] : '';

    const idiomas = extractArrayFromCV('idiomas');
    const conocimientos = extractArrayFromCV('conocimientos');
    const habilidades = extractArrayFromCV('habilidades');

    const getBulletItems = (textBlock) => {
       const items = [];
       const regex = /titulo:\s*"([^"]+)",\s*subtitulo:\s*"([^"]+)",\s*periodo:\s*"([^"]+)",[\s\S]*?logros:\s*\[([\s\S]*?)\]/g;
       
       let m;
       while ((m = regex.exec(textBlock)) !== null) {
          if (m[0].includes("cv_ignore")) continue;

          const titulo = m[1];
          const puesto = m[2];
          const periodo = m[3];
          const logrosBlock = m[4];

          const bullets = [];
          const bulletRegex = /"([^"]+)"/g;
          let bMatch;
          while ((bMatch = bulletRegex.exec(logrosBlock)) !== null) {
              bullets.push(bMatch[1]);
          }
          items.push({ titulo, puesto, periodo, bullets });
       }
       return items;
    };

    const portText = (content.match(/export const DATOS_PORTAFOLIO = \[\s*([\s\S]*?)\s*\];/) || [])[1] || '';
    const experienciaItems = getBulletItems(portText);

    const formText = (content.match(/export const DATOS_FORMACION_ACADEMICA = \[\s*([\s\S]*?)\s*\];/) || [])[1] || '';
    const formacion = [];
    const fRegex = /titulo:\s*"([^"]+)",[\s\S]*?institucion:\s*"([^"]+)",[\s\S]*?ubicacion:\s*"([^"]+)",[\s\S]*?periodo:\s*"([^"]+)",[\s\S]*?subtitulo:\s*"([^"]+)",/g;
    
    let fm;
    while ((fm = fRegex.exec(formText)) !== null) {
       formacion.push({
          titulo: fm[1],
          inst: fm[2],
          loc: fm[3],
          periodo: fm[4],
          status: fm[5]
       });
    }

    // HTML Template (Harvard Style Match exactly as screenshot)
    // Extraer datos personales globales
    const personalMatch = content.match(/export const DATOS_PERSONALES = \{([\s\S]*?)\};/);
    let pObj = {};
    if (personalMatch) {
       pObj.nombreCompleto = (personalMatch[1].match(/nombreCompleto:\s*"([^"]+)"/) || [])[1] || 'Usuario';
       pObj.correo = (personalMatch[1].match(/correo:\s*"([^"]+)"/) || [])[1] || '';
       pObj.linkedin = (personalMatch[1].match(/linkedin:\s*"([^"]+)"/) || [])[1] || '';
       pObj.telefono = (personalMatch[1].match(/telefono:\s*"([^"]+)"/) || [])[1] || '';
    }

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        * { box-sizing: border-box; }
        @page { size: letter; }
        body {
          font-family: 'Times New Roman', Times, serif;
          margin: 0;
          color: #000;
          line-height: 1.35;
          font-size: 13.5px;
        }
        h1 {
          text-align: center;
          font-size: 26px;
          margin: 0 0 4px 0;
          font-weight: 700;
        }
        .contact {
          text-align: center;
          font-size: 12.5px;
          margin-bottom: 4px;
        }
        .contact a {
          color: #1a0dab;
          text-decoration: none;
        }
        .line-thick {
          border-top: 1.5px solid #000;
          margin: 4px 0 12px 0;
        }
        .resumen {
          text-align: justify;
          font-style: italic;
          font-size: 13.5px;
          line-height: 1.4;
          margin-bottom: 16px;
        }
        h2 {
          font-size: 14.5px;
          text-transform: uppercase;
          border-bottom: 1.5px solid #000;
          padding-bottom: 3px;
          margin-top: 16px;
          margin-bottom: 8px;
          font-weight: 700;
          page-break-after: avoid;
        }
        .item { margin-bottom: 12px; page-break-inside: avoid; }
        
        .item-header {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 0px;
        }
        .item-sub {
          display: flex;
          justify-content: space-between;
          font-size: 13.5px;
          margin-bottom: 4px;
        }
        .item-sub .right { font-style: italic; }
        
        ul { margin: 0 0 0 25px; padding: 0; }
        li { margin-bottom: 4px; text-align: justify; line-height: 1.35; }
        
        .desc-list { page-break-inside: avoid; }
        .desc-list ul { margin: 4px 0 0 25px; }

      </style>
    </head>
    <body>
      <h1>${pObj.nombreCompleto.toUpperCase()}</h1>
      <div class="contact">
        <a href="${pObj.linkedin}">${pObj.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</a> • ${pObj.telefono} • <a href="mailto:${pObj.correo}">${pObj.correo}</a>
      </div>
      
      <div class="line-thick"></div>

      <div class="resumen">
        ${resumen}
      </div>

      <h2>EXPERIENCIA PROFESIONAL</h2>
      ${experienciaItems.map(e => `
        <div class="item">
          <div class="item-header"><span>${e.titulo}</span></div>
          <div class="item-sub"><span>${e.puesto}</span><span class="right">${e.periodo}</span></div>
          <ul>
            ${e.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      `).join('')}

      <h2>EDUCACIÓN</h2>
      ${formacion.map(f => `
        <div class="item" style="margin-bottom:8px;">
          <div class="item-header"><span>${f.inst}</span><span class="right">${f.loc}</span></div>
          <div class="item-sub" style="margin-bottom:0px;"><span>${f.titulo}</span><span class="right">${f.periodo}</span></div>
        </div>
      `).join('')}

      <h2>IDIOMAS</h2>
      <div class="desc-list">
        <ul>
          ${idiomas.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>

      <h2>CONOCIMIENTOS TÉCNICOS</h2>
      <div class="desc-list">
        <ul>
          ${conocimientos.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <h2>HABILIDADES PERSONALES</h2>
      <div class="desc-list">
        <ul>
          ${habilidades.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </body>
    </html>
    `;

    console.log("Generando PDF de tu CV (Estilo Harvard Fiel a la Original)...");
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    await page.pdf({
      path: pdfPath,
      format: 'Letter',
      printBackground: false,
      margin: { top: '1.2cm', right: '1.2cm', bottom: '1.2cm', left: '1.2cm' }
    });

    await browser.close();
    console.log("✅ Tu 'CV_BAUTISTA_CASTILLA_CESAR.pdf' ha sido actualizado y es idéntico a tu CV de referencia.");
  } catch (err) {
    console.error("❌ Error generando el PDF:", err);
  }
}

generarCV();
