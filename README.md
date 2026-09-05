# Mi Primera Página Web — Taller Biblioteca Pública del Maule

Sitio interactivo con el programa de un taller de creación web (HTML, CSS y
JavaScript básicos) pensado para usuarios de la Biblioteca Pública del Maule
sin experiencia previa en programación.

Incluye el programa de 4 sesiones, una lista de preparación para quien
facilita el taller, un pequeño editor de código en vivo para usar durante las
clases, y enlaces de recursos para después del taller.

## Estructura del proyecto

```
.
├── index.html          Página principal
├── styles.css          Estilos
├── script.js           Lógica: pestañas, checklist y editor en vivo
├── contenido.json       Todo el contenido editable del taller (textos,
│                        sesiones, checklist, recursos)
└── datos-respaldo.js    Copia de contenido.json en formato JS, usada solo
                         si el navegador bloquea fetch() al abrir el sitio
                         con doble clic en vez de un servidor local
```

## Editar el contenido

Todos los textos del taller (título, sesiones, checklist, recursos) están en
`contenido.json`. Para modificarlos no hace falta tocar el HTML, CSS o JS:
basta con editar ese archivo.

Si cambias `contenido.json`, recuerda regenerar `datos-respaldo.js` para que
el respaldo quede sincronizado (o simplemente bórralo si no te importa que el
sitio dependa siempre de un servidor local).

## Ver el sitio localmente

Como el sitio carga `contenido.json` con `fetch()`, necesita servirse desde
un servidor local (abrirlo con doble clic puede no cargar el contenido en
algunos navegadores). Alternativas simples:

```bash
# Con Python instalado
python3 -m http.server 8000
# luego abrir http://localhost:8000 en el navegador
```

O usar la extensión **Live Server** de VS Code y hacer clic en "Go Live".

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube estos archivos (ver más abajo).
2. En el repositorio, ve a **Settings → Pages**.
3. En "Source", elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. GitHub entregará una URL pública en un par de minutos.

## Subir este proyecto a GitHub desde cero

```bash
git init
git add .
git commit -m "Primera versión del taller"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

## Licencia

Este proyecto se publica bajo la licencia MIT (ver `LICENSE`). Puedes
adaptarlo libremente para otras bibliotecas o talleres.
