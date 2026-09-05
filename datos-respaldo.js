// Copia de respaldo de contenido.json, usada solo si fetch() falla
// (por ejemplo al abrir index.html con doble clic en vez de un servidor local).
window.__CONTENIDO_RESPALDO__ = {
  "taller": {
    "titulo": "Mi Primera Página Web",
    "subtitulo": "Taller de creación web para usuarios de la Biblioteca Pública del Maule",
    "dirigidoA": "Personas de la comunidad de 14 años en adelante, sin experiencia previa en programación. Ideal para emprendedores locales, estudiantes, agrupaciones vecinales y adultos mayores curiosos.",
    "duracionTotal": "4 semanas · 8 sesiones de 2 horas",
    "modalidad": "Presencial, en la sala de computación de la biblioteca",
    "cupos": "12 personas por versión (1 computador por persona)",
    "objetivoGeneral": "Que cada participante construya y deje funcionando, en su propio computador o pendrive, una página web sencilla de una sola hoja (por ejemplo, para su emprendimiento, su junta de vecinos o un proyecto personal), usando HTML y CSS básicos, y que al terminar pueda publicarla en internet con un enlace funcional para compartir con familiares, clientes o amigos.",
    "requisitos": [
      "No se necesita experiencia previa",
      "Saber usar mouse y teclado a nivel básico",
      "Traer, si se puede, un pendrive para llevarse los archivos"
    ]
  },
  "semanas": [
    { "numero": 1, "titulo": "Anatomía de la Web y tu primer proyecto" },
    { "numero": 2, "titulo": "Construyendo el esqueleto (HTML5)" },
    { "numero": 3, "titulo": "Estilo, color y adaptabilidad (CSS3)" },
    { "numero": 4, "titulo": "El toque final y lanzamiento a internet" }
  ],
  "sesiones": [
    {
      "numero": 1,
      "semana": 1,
      "titulo": "¿Cómo funciona internet?",
      "duracion": "2 horas",
      "objetivo": "Entender, en palabras simples, cómo viaja una página desde un servidor hasta tu pantalla.",
      "temas": [
        "Qué son los servidores y qué hace cada uno",
        "Qué es un dominio y qué es un hosting",
        "Cómo el navegador lee el código (HTML, CSS y JavaScript)",
        "Analogía simple: la casa, la decoración y la electricidad"
      ],
      "actividad": "Ronda guiada: cada participante abre 3 sitios conocidos y describe qué servidor, dominio y navegador están en juego.",
      "materiales": ["Computador con navegador", "Proyector para mostrar ejemplos"]
    },
    {
      "numero": 2,
      "semana": 1,
      "titulo": "Estrategia y contenido",
      "duracion": "2 horas",
      "objetivo": "Definir el objetivo de cada página propia y su estructura de navegación básica.",
      "temas": [
        "Ideas para el Maule: artesanías de la región, portafolio personal o turismo",
        "Qué contenido necesita cada tipo de sitio",
        "Estructura de navegación básica: Inicio, Acerca de, Productos/Servicios, Contacto",
        "Planificación del texto y las fotos antes de escribir código"
      ],
      "actividad": "Cada participante define el objetivo de su web, le pone nombre y dibuja en papel las 4 secciones del menú con su contenido.",
      "materiales": ["Papel y lápiz", "Ejemplos impresos de páginas locales"]
    },
    {
      "numero": 3,
      "semana": 2,
      "titulo": "Introducción a HTML5",
      "duracion": "2 horas",
      "objetivo": "Aprender las etiquetas esenciales de HTML y escribir la primera versión de la página.",
      "temas": [
        "Estructura básica de un documento: html, head y body",
        "Encabezados (h1 a h6) y párrafos",
        "Listas ordenadas y desordenadas",
        "Inserción de imágenes",
        "Editores de código gratuitos en línea"
      ],
      "actividad": "En un editor en línea (CodePen o similar), cada participante crea index.html con títulos, párrafos, una lista y una imagen de su proyecto.",
      "materiales": ["Computador con navegador", "Lista de editores en línea gratuitos"]
    },
    {
      "numero": 4,
      "semana": 2,
      "titulo": "Estructura del proyecto final",
      "duracion": "2 horas",
      "objetivo": "Construir la estructura definitiva del sitio: menú de navegación, secciones y contacto.",
      "temas": [
        "Configuración del menú de navegación con enlaces internos",
        "Secciones: Inicio, Acerca de, Productos/Servicios",
        "Sección de contacto (formulario y datos de contacto)",
        "Guardar y organizar los archivos del proyecto en una carpeta"
      ],
      "actividad": "Cada participante arma su proyecto final con menú funcional y sus 4 secciones con contenido real.",
      "materiales": ["Carpeta de trabajo en el computador", "Plantilla impresa de estructura HTML"]
    },
    {
      "numero": 5,
      "semana": 3,
      "titulo": "Introducción a CSS",
      "duracion": "2 horas",
      "objetivo": "Darle color, tipografía y orden visual a la página usando CSS.",
      "temas": [
        "Qué es una hoja de estilos y cómo se conecta al HTML",
        "Aplicar colores de fondo y de texto",
        "Cambiar tipografías y tamaños de letra",
        "Ordenar elementos visuales: márgenes, espaciado y cajas",
        "Organizar contenido en columnas simples"
      ],
      "actividad": "Los participantes crean estilos.css y transforman la página de la sesión anterior con colores, fuente y orden propios.",
      "materiales": ["Archivo index.html de la sesión anterior", "Guía impresa de colores y fuentes"]
    },
    {
      "numero": 6,
      "semana": 3,
      "titulo": "Diseño adaptable (responsive)",
      "duracion": "2 horas",
      "objetivo": "Lograr que la página diseñada en el computador de la biblioteca se lea perfectamente en el celular.",
      "temas": [
        "Qué es el diseño adaptativo o responsive",
        "El viewport y cómo funciona en pantallas pequeñas",
        "Media queries: cambios según el ancho de pantalla",
        "Unidades flexibles: %, rem y máximo de ancho",
        "Probar la página en el celular"
      ],
      "actividad": "Cada participante agrega al menos una media query para que sus productos o secciones se apilen en el celular, y prueba su página en el teléfono.",
      "materiales": ["Proyecto de la sesión 5", "Celular de cada participante"]
    },
    {
      "numero": 7,
      "semana": 4,
      "titulo": "Optimización y accesibilidad",
      "duracion": "2 horas",
      "objetivo": "Pulir la página: imágenes livianas, textos alternativos y diseño visual intuitivo.",
      "temas": [
        "Optimización de imágenes para web (peso y formato)",
        "Buenas prácticas de accesibilidad: textos alt, contraste y legibilidad",
        "Diseño visual intuitivo: botones claros y jerarquía de información",
        "Revisión de errores comunes antes de publicar"
      ],
      "actividad": "Revisión en duplas: cada participante audita la página de un compañero con una lista de verificación e imágenes optimizadas.",
      "materiales": ["Lista de verificación impresa", "Herramientas en línea de compresión de imágenes"]
    },
    {
      "numero": 8,
      "semana": 4,
      "titulo": "¡Página en línea!",
      "duracion": "2 horas",
      "objetivo": "Publicar la página en un servidor real y llevarse un enlace funcional y público.",
      "temas": [
        "Qué es el despliegue (deploy) y cómo funciona",
        "Plataformas gratuitas: Netlify Drop, GitHub Pages y Vercel",
        "Subir los archivos del código a un servidor real",
        "Compartir el enlace por WhatsApp, correo o afiche",
        "Muestra final: presentación de cada página"
      ],
      "actividad": "Cada participante sube su página, verifica el enlace en su celular y presenta su web en 3 minutos frente al grupo.",
      "materiales": ["Conexión a internet", "Proyector para las presentaciones"]
    }
  ],
  "checklistPreparacion": [
    { "id": "c1", "texto": "Reservar la sala de computación y confirmar que los equipos enciendan" },
    { "id": "c2", "texto": "Instalar un editor de texto simple en todos los computadores" },
    { "id": "c3", "texto": "Verificar que cada equipo tenga un navegador actualizado" },
    { "id": "c4", "texto": "Imprimir la guía de colores y las hojas de ejercicios" },
    { "id": "c5", "texto": "Difundir la inscripción en redes de la biblioteca y afiches físicos" },
    { "id": "c6", "texto": "Preparar pendrives de respaldo para quienes no traigan uno" },
    { "id": "c7", "texto": "Probar la conexión a internet para la sesión de publicación" },
    { "id": "c8", "texto": "Preparar diplomas o certificados de participación" }
  ],
  "conceptosClave": [
    {
      "termino": "Servidor",
      "explicacion": "Un computador siempre encendido que guarda los archivos de un sitio web y los entrega a quien los pide.",
      "ejemplo": "Cuando abres una página, tu navegador le pide el código a un servidor ubicado en algún lugar del mundo."
    },
    {
      "termino": "Dominio",
      "explicacion": "El nombre legible de un sitio, como mibiblioteca.cl. Es la 'dirección' que la gente escribe para encontrarte.",
      "ejemplo": "bibliosplay.github.io/tallerweb es el dominio y dirección de este mismo taller."
    },
    {
      "termino": "Hosting (alojamiento web)",
      "explicacion": "El 'terreno' donde vive una página para que cualquier persona con internet pueda verla, y no solo quien la tiene guardada en su propio computador.",
      "ejemplo": "Neocities, GitHub Pages y Vercel son formas gratuitas de conseguir hosting."
    },
    {
      "termino": "HTML",
      "explicacion": "El lenguaje que define la estructura de una página: textos, imágenes, listas y botones. Es el esqueleto.",
      "ejemplo": "La etiqueta <h1> define el título principal y <p> un párrafo."
    },
    {
      "termino": "CSS",
      "explicacion": "El lenguaje que define la apariencia: colores, tipografías, tamaños y ubicación de los elementos. Es la decoración.",
      "ejemplo": "Cambiar el color de fondo de una página o hacer que el menú quede centrado."
    },
    {
      "termino": "Diseño responsive (adaptable)",
      "explicacion": "Que una misma página se vea bien tanto en un computador como en un celular o una tablet, ajustando tamaños y ubicación de los elementos según la pantalla.",
      "ejemplo": "Un menú que aparece como fila de botones en el computador y como lista apilada en el celular."
    },
    {
      "termino": "Deploy (despliegue)",
      "explicacion": "El acto de subir los archivos de tu página a un servidor para que quede disponible públicamente en internet.",
      "ejemplo": "Arrastrar tu carpeta a Netlify Drop y obtener un enlace tipo tuproyecto.netlify.app."
    },
    {
      "termino": "HTTPS y el candado del navegador",
      "explicacion": "El símbolo de candado que aparece junto a la dirección del sitio indica que la conexión entre quien visita la página y el sitio está protegida.",
      "ejemplo": "Las plataformas gratuitas vistas en el taller entregan este candado automáticamente, sin configuración extra."
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
      "titulo": "Netlify Drop",
      "descripcion": "Arrastra tu carpeta y obtén un enlace público al instante. La vía más simple para publicar en el taller.",
      "url": "https://app.netlify.com/drop"
    },
    {
      "titulo": "GitHub Pages",
      "descripcion": "Alternativa gratuita para publicar sitios web estáticos usando una cuenta de GitHub.",
      "url": "https://pages.github.com/"
    },
    {
      "titulo": "Vercel",
      "descripcion": "Publica sitios conectados a un repositorio de GitHub; el sitio se actualiza solo con cada cambio subido.",
      "url": "https://vercel.com/"
    },
    {
      "titulo": "Guía de diseño responsive (web.dev)",
      "descripcion": "Explicación práctica, con ejemplos, de cómo hacer que una página se vea bien en cualquier tamaño de pantalla.",
      "url": "https://web.dev/learn/design/"
    },
    {
      "titulo": "Squoosh",
      "descripcion": "Herramienta gratuita en línea para reducir el peso de las imágenes sin perder calidad visible.",
      "url": "https://squoosh.app/"
    }
  ]
};