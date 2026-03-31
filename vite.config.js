import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'

// Vite Plugin para generar README.md a partir de data.jsx
function generarReadmePlugin() {
  let timer;

  const escribirReadme = () => {
    try {
      const dataPath = path.resolve(process.cwd(), 'src/data.jsx');
      const readmePath = path.resolve(process.cwd(), 'README.md');
      
      if (!fs.existsSync(dataPath)) return;
      const content = fs.readFileSync(dataPath, 'utf-8');

      const portMatch = content.match(/export const DATOS_PORTAFOLIO = \[([\s\S]*?)\];/);
      let proyList = [];
      let expList = [];
      if (portMatch) {
         const blocks = portMatch[1].split('id:');
         for (const b of blocks) {
             const esProy = b.includes('mostrarEnProyectos: true');
             const esExp = b.includes('mostrarEnExperiencia: true');
             
             const tMatch = b.match(/titulo:\s*"([^"]+)"/);
             const subMatch = b.match(/subtitulo:\s*"([^"]+)"/);
             const perMatch = b.match(/periodo:\s*"([^"]+)"/);
             const descrMatch = b.match(/descripcion:\s*"([^"]+)"/);
             const descMatch = b.match(/desc:\s*"([^"]+)"/);
             const uMatch = b.match(/url:\s*"([^"]+)"/);
             
             const titulo = tMatch ? tMatch[1] : '';
             const sub = subMatch ? subMatch[1] : '';
             const per = perMatch ? perMatch[1] : '';
             const descripcion = descrMatch ? descrMatch[1] : '';
             const desc = descMatch ? descMatch[1] : '';
             const url = uMatch ? uMatch[1] : '';

             if (esProy && titulo && url && descripcion) {
                 proyList.push(`- [**${titulo}**](${url}): ${descripcion}`);
             }
             if (esExp && titulo && sub && per && desc) {
                 expList.push(`- **${sub}** en **${titulo}** (${per})\n  *${desc}*`);
             }
         }
      }

      const formMatch = content.match(/export const DATOS_FORMACION_ACADEMICA = \[([\s\S]*?)\];/);
      let formList = [];
      if (formMatch) {
        const regex = /titulo:\s*"([^"]+)",[\s\S]*?institucion:\s*"([^"]+)",[\s\S]*?periodo:\s*"([^"]+)",/g;
        let m;
        while ((m = regex.exec(formMatch[1])) !== null) {
          formList.push(`- **${m[1]}** en **${m[2]}** (${m[3]})`);
        }
      }

      // Extraer matriz de variables de datos personales globales
      const personalMatch = content.match(/export const DATOS_PERSONALES = \{([\s\S]*?)\};/);
      let pObj = {};
      if (personalMatch) {
         pObj.nombre = (personalMatch[1].match(/nombre:\s*"([^"]+)"/) || [])[1] || 'Usuario';
         pObj.profesion = (personalMatch[1].match(/profesion:\s*"([^"]+)"/) || [])[1] || 'Ingeniero';
         pObj.desc = (personalMatch[1].match(/descripcion:\s*"([^"]+)"/) || [])[1] || '';
         pObj.web = (personalMatch[1].match(/website:\s*"([^"]+)"/) || [])[1] || '';
         pObj.foto = (personalMatch[1].match(/foto_readme:\s*"([^"]+)"/) || [])[1] || '';
      }

      const md = `# 🚀 Portafolio | ${pObj.nombre}
<p align="center">
  <a href="${pObj.web}"><img src="${pObj.foto}" alt="${pObj.nombre}" width="220" style="border-radius: 50%;" /></a>
</p>
<p align="center">
  <strong>🌐 Sitio Web:</strong> <a href="${pObj.web}">${pObj.web.replace(/^https?:\/\//, '')}</a>
</p>

${pObj.profesion} especializado en **${pObj.desc}** Aquí puedes ver un resumen de mi trayectoria y logros clave.

## 💼 Experiencia Profesional
${expList.join('\n\n')}

## 💻 Proyectos Destacados
${proyList.join('\n')}

## 🎓 Formación Académica
${formList.join('\n')}

---
> 💡 Este código (repositorio) puede usarse como plantilla para automatizar generativamente la creación de un Portafolio Web, este mismo README.md, y un CV Profesional estilo Harvard desde una sola fuente ([\`data.jsx\`](./src/data.jsx)) y se actualiza automaticamente.

`;
      fs.writeFileSync(readmePath, md);
      console.log("✅ [Plugin] README.md se ha actualizado exitosamente con la información de data.jsx");

      // Llamada automatizada para generar el PDF estilo Harvard
      exec('node scripts/generateCv.js', (err, stdout, stderr) => {
        if (err) {
          console.error("❌ Error al generar el PDF del CV:", err);
        } else if (stdout) {
          console.log(stdout.trim());
        }
      });

    } catch (err) {
      console.error("❌ Error al generar README.md:", err);
    }
  };

  return {
    name: 'generar-readme-auto',
    buildStart() {
      escribirReadme();
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('data.jsx')) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          escribirReadme();
        }, 500); // 500ms debounce
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), generarReadmePlugin()],
})
