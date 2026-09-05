// Copia de respaldo de contenido.json, usada solo si fetch() falla
// (por ejemplo al abrir index.html con doble clic en vez de un servidor local).
window.__CONTENIDO_RESPALDO__ = {
  "taller": {
    "titulo": "Mi Primera Página Web",
    "subtitulo": "Taller de creación web para usuarios de la Biblioteca Pública del Maule",
    "dirigidoA": "Personas de la comunidad de 14 años en adelante, sin experiencia previa en programación. Ideal para emprendedores locales, estudiantes, agrupaciones vecinales y adultos mayores curiosos.",
    "duracionTotal": "4 sesiones de 2 horas (8 horas totales)",
    "modalidad": "Presencial, en la sala de computación de la biblioteca",
    "cupos": "12 personas por versión (1 computador por persona)",
    "objetivoGeneral": "Que cada participante construya y deje funcionando, en su propio computador o pendrive, una página web sencilla de una sola hoja (por ejemplo, para su emprendimiento, su junta de vecinos o un proyecto personal), usando HTML, CSS y JavaScript básicos.",
    "requisitos": [
      "No se necesita experiencia previa",
      "Saber usar mouse y teclado a nivel básico",
      "Traer, si se puede, un pendrive para llevarse los archivos"
    ]
  },
  "sesiones": [
    {
      "numero": 1,
      "titulo": "El esqueleto de una página",
      "duracion": "2 horas",
      "objetivo": "Entender qué es un archivo HTML y escribir la primera página propia.",
      "temas": [
        "Qué es internet, un sitio web y un archivo HTML",
        "Estructura básica: html, head, body",
        "Etiquetas de texto: títulos, párrafos, listas",
        "Imágenes y enlaces",
        "Guardar y abrir el archivo en el navegador"
      ],
      "actividad": "Cada participante crea 'index.html' con su nombre, una foto o dibujo, y un párrafo de presentación.",
      "materiales": [
        "Computador con navegador",
        "Editor de texto simple (VS Code o Bloc de notas)"
      ]
    },
    {
      "numero": 2,
      "titulo": "Color, orden y estilo",
      "duracion": "2 horas",
      "objetivo": "Aplicar estilos visuales a la página usando CSS.",
      "temas": [
        "Qué es una hoja de estilos y cómo se conecta al HTML",
        "Colores, tipografía y tamaños",
        "Márgenes, espaciado y cajas",
        "Ordenar contenido en columnas simples",
        "Hacer que la página se vea bien en el celular"
      ],
      "actividad": "Los participantes crean 'estilos.css' y transforman la página de la sesión 1 dándole colores y orden propio.",
      "materiales": [
        "Archivo index.html de la sesión anterior",
        "Guía impresa de colores y fuentes"
      ]
    },
    {
      "numero": 3,
      "titulo": "Una página que responde",
      "duracion": "2 horas",
      "objetivo": "Agregar interactividad simple con JavaScript.",
      "temas": [
        "Qué hace JavaScript y en qué se diferencia de HTML y CSS",
        "Reaccionar a un clic de botón",
        "Mostrar y ocultar contenido",
        "Un formulario simple de contacto (sin enviar datos reales)",
        "Guardar datos simples mientras la página está abierta"
      ],
      "actividad": "Cada participante agrega un botón interactivo a su página, por ejemplo para mostrar un mensaje, cambiar el color de fondo o desplegar más información.",
      "materiales": [
        "Archivos de sesiones anteriores",
        "Ejemplos de código para copiar y adaptar"
      ]
    },
    {
      "numero": 4,
      "titulo": "Compartir mi página con el mundo",
      "duracion": "2 horas",
      "objetivo": "Revisar, ordenar y publicar la página para que otros puedan verla.",
      "temas": [
        "Revisión de errores comunes",
        "Organizar los archivos en una carpeta",
        "Opciones para publicar gratis (por ejemplo Neocities o GitHub Pages)",
        "Compartir el enlace o el archivo por WhatsApp o correo",
        "Muestra final: cada participante presenta su página"
      ],
      "actividad": "Publicación de la página y ronda de presentación de 3 minutos por participante frente al grupo.",
      "materiales": [
        "Conexión a internet",
        "Proyector para las presentaciones"
      ]
    }
  ],
  "checklistPreparacion": [
    {
      "id": "c1",
      "texto": "Reservar la sala de computación y confirmar que los equipos enciendan"
    },
    {
      "id": "c2",
      "texto": "Instalar un editor de texto simple en todos los computadores"
    },
    {
      "id": "c3",
      "texto": "Verificar que cada equipo tenga un navegador actualizado"
    },
    {
      "id": "c4",
      "texto": "Imprimir la guía de colores y las hojas de ejercicios"
    },
    {
      "id": "c5",
      "texto": "Difundir la inscripción en redes de la biblioteca y afiches físicos"
    },
    {
      "id": "c6",
      "texto": "Preparar pendrives de respaldo para quienes no traigan uno"
    },
    {
      "id": "c7",
      "texto": "Probar la conexión a internet para la sesión de publicación"
    },
    {
      "id": "c8",
      "texto": "Preparar diplomas o certificados de participación"
    }
  ],
  "recursos": [
    {
      "titulo": "MDN Web Docs en español",
      "descripcion": "Referencia gratuita y confiable de HTML, CSS y JavaScript.",
      "url": "https://developer.mozilla.org/es/"
    },
    {
      "titulo": "Neocities",
      "descripcion": "Servicio gratuito para publicar páginas web sencillas sin conocimientos técnicos avanzados.",
      "url": "https://neocities.org/"
    },
    {
      "titulo": "Visual Studio Code",
      "descripcion": "Editor de texto gratuito recomendado para escribir HTML, CSS y JavaScript.",
      "url": "https://code.visualstudio.com/"
    },
    {
      "titulo": "GitHub Pages",
      "descripcion": "Alternativa gratuita para publicar sitios web estáticos usando una cuenta de GitHub.",
      "url": "https://pages.github.com/"
    }
  ]
};
