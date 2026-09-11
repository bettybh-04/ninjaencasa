/* ======================================================
     BASE DE DATOS DE PRODUCTOS — colección "products"
     Cada objeto = un producto. Para añadir uno nuevo,
     copia un bloque completo y cambia los valores.
     Todos los campos bajo "specs", "scores" y "reviews"
     son opcionales salvo los indicados.
  ====================================================== */
  const products = [
    {
      id: "airfryer-max-xl",
      name: "Ninja Air Fryer Max XL",
      description: "Freidora de aire de cesta amplia pensada para cocinar para toda la familia sin turnos.",
      subcategoria: "freidoras",
      marca: "Ninja",
      rango_precio: "medio",
      affiliate_link: "https://www.amazon.com/dp/B07S6529ZZ?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/61YZxFGB1hL._AC_SX425_.jpg",
      gallery: [
        "airfryer1.jpg",
        "airfryer2 B07S6529ZZ.jpg",
        "airfryer3 B07S6529ZZ.jpg"
      ],
      isFeatured: true,
      badge: { text: "Familiar", tone: "herb" },
      specs: {
        capacidad: "5.5 L",
        potencia_w: 1750,
        num_programas: 7,
        material: "Cesta antiadherente",
        apto_lavavajillas: true,
        peso_kg: 4.2,
        garantia_años: 2
      },
      scores: { // 0-10, para el futuro gráfico radar
        facilidad_uso: 9,
        limpieza: 8,
        capacidad: 9,
        calidad_precio: 8,
        potencia: 8,
        durabilidad: 8
      },
      ideal_para: "Cocinas para 3-4 personas y quieres una cesta amplia sin ocupar media encimera.",
      pros: ["Cesta grande", "Fácil de limpiar", "Panel sencillo"],
      contras: ["Ocupa espacio en la encimera"],
      destacado_editorial: "",
      reviews: { valoracion_media: 4.7, cantidad: 20705, resumen: "" }
    },
    {
      id: "foodi-dual-zone",
      name: "Ninja Foodi Dual Zone",
      description: "Freidora de doble cesta que permite cocinar dos alimentos distintos y que terminen a la vez.",
      subcategoria: "freidoras",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B089TQWJKK?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/61xMRA3NY4L._AC_SX425_.jpg",
      gallery: [
        "doble air fryer1 B0CL12QNNK.jpg",
        "doble airfryer2 B0CL12QNNK.jpg",
        "doble air fryer 3 B0CL12QNNK.jpg",
        "doble airfryer4 B0CL12QNNK.jpg"
      ],
      isFeatured: true,
      badge: { text: "Doble cesta", tone: "chili" },
      specs: {
        capacidad: "7.6 L (2x3.8 L)",
        potencia_w: 2470,
        num_programas: 6,
        material: "Cesta antiadherente",
        apto_lavavajillas: true,
        peso_kg: 6.4,
        garantia_años: 2
      },
      scores: {
        facilidad_uso: 8,
        limpieza: 8,
        capacidad: 9,
        calidad_precio: 7,
        potencia: 9,
        durabilidad: 9
      },
      ideal_para: "Quieres cocinar dos platos a distinta temperatura y que terminen exactamente a la vez.",
      pros: ["Dos zonas independientes", "Función Match Cook", "Muy versátil"],
      contras: ["Precio más alto", "Más pesada"],
      destacado_editorial: "",
      reviews: { valoracion_media: 4.8, cantidad: 0, resumen: "" }
    },
    {
      id: "neverdull-knife-set",
      name: "Ninja Foodi NeverDull Pro — Set de Cuchillos 14 piezas",
      description: "Set de cuchillos de acero alemán con bloque afilador automático integrado: cada cuchillo se afila solo al guardarlo.",
      subcategoria: "sartenes",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B09BGSY58L?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/71muuWZZWoL._AC_SX425_.jpg",
      gallery: [
        "cuchillos ninja 4 B09B7WRM8P.jpg",
        "cuchillon ninja1 B09B7WRM8P.jpg",
        "cuchillos ninja2 B09B7WRM8P.jpg"
      ],
      isFeatured: true,
      badge: { text: "Autoafilable", tone: "chili" },
      specs: {
        capacidad: "14 piezas",
        potencia_w: null,
        num_programas: null,
        material: "Acero inoxidable alemán",
        apto_lavavajillas: false,
        peso_kg: 4,
        garantia_años: 2
      },
      scores: {
        facilidad_uso: 9,
        limpieza: 7,
        capacidad: 8,
        calidad_precio: 7,
        potencia: 0,
        durabilidad: 9
      },
      ideal_para: "Quieres cuchillos que se mantengan afilados solos, sin comprar una piedra de afilar aparte.",
      pros: ["Afilador integrado en el bloque", "Acero alemán de alta calidad", "Set completo de 14 piezas"],
      contras: ["Precio elevado", "Mejor lavarlos a mano para conservar el filo"],
      destacado_editorial: "El único set de cuchillos del catálogo: se afila solo cada vez que lo guardas.",
      reviews: { valoracion_media: 4.8, cantidad: 2369, resumen: "" }
    },
    {
      id: "blender-bn800",
      name: "Ninja Blender BN800",
      description: "Batidora de vaso de alta potencia para smoothies, hielo y fruta congelada.",
      subcategoria: "batidoras",
      marca: "Ninja",
      rango_precio: "medio",
      affiliate_link: "https://www.amazon.com/dp/B08559K7CN?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/81t4pPvkT2L._AC_SX425_.jpg",
      gallery: [
        "batidora.jpg"
      ],
      isFeatured: true,
      badge: { text: "Smoothies", tone: "herb" },
      specs: {
        capacidad: "2.1 L",
        potencia_w: 1500,
        num_programas: 3,
        material: "Vaso Tritan",
        apto_lavavajillas: true,
        peso_kg: 3.1,
        garantia_años: 2
      },
      scores: {
        facilidad_uso: 8,
        limpieza: 7,
        capacidad: 7,
        calidad_precio: 8,
        potencia: 9,
        durabilidad: 8
      },
      ideal_para: "Quieres triturar hielo y fruta congelada sin que se atasque a medio vaso.",
      pros: ["Motor potente", "Tecnología anticavitación", "Vaso resistente"],
      contras: ["Algo ruidosa a máxima potencia"],
      destacado_editorial: "",
      reviews: { valoracion_media: 4.8, cantidad: 0, resumen: "" }
    },
    {
      id: "crispi-pro",
      name: "Ninja Crispi Pro AS101CY",
      description: "Freidora de aire con cesta de vidrio templado: ves cómo se cocina tu comida sin abrir la tapa, sin adivinar el punto.",
      subcategoria: "freidoras",
      marca: "Ninja",
      rango_precio: "medio",
      affiliate_link: "https://www.amazon.com/dp/B0FLG6D6Z3?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/81NsZOh58WL._AC_SX425_.jpg",
      gallery: [
        "ninja1 B0FLG6D6Z3.jpg",
        "Ninjacristal 2 B0FLG6D6Z3.jpg",
        "Ninjacristal 4 B0FLG6D6Z3.jpg"
      ],
      isFeatured: true,
      badge: { text: "Novedad", tone: "chili" },
      specs: {
        capacidad: "4.7 L",
        potencia_w: 1550,
        num_programas: 6,
        material: "Cesta de vidrio templado",
        apto_lavavajillas: true,
        peso_kg: 4.5,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 9,
        limpieza: 8,
        capacidad: 7,
        calidad_precio: 8,
        potencia: 8,
        durabilidad: 7
      },
      ideal_para: "Quieres ver la comida cocinándose en tiempo real, sin abrir la tapa cada rato para revisar el punto.",
      pros: ["Cesta de vidrio, ves la cocción", "6 funciones en un aparato", "Diseño moderno"],
      contras: ["Modelo nuevo, garantía más corta"],
      destacado_editorial: "La novedad de la temporada: la primera freidora Ninja con cesta transparente.",
      reviews: { valoracion_media: 4.6, cantidad: 0, resumen: "" }
    },
    {
      id: "neverstick-set3",
      name: "Ninja Foodi NeverStick — Set 3 piezas",
      description: "Set de sartenes antiadherentes de larga duración, resistentes a arañazos.",
      subcategoria: "sartenes",
      marca: "Ninja",
      rango_precio: "medio",
      affiliate_link: "https://www.amazon.com/dp/B0BB68ZLBP?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/71b4EBtyc0L._AC_SX569_.jpg",
      isFeatured: true,
      badge: { text: "Durabilidad", tone: "herb" },
      specs: {
        capacidad: "20 / 24 / 28 cm",
        potencia_w: null,
        num_programas: null,
        material: "Antiadherente NeverStick",
        apto_lavavajillas: true,
        peso_kg: 2.4,
        garantia_años: 2
      },
      scores: {
        facilidad_uso: 9,
        limpieza: 9,
        capacidad: 7,
        calidad_precio: 8,
        potencia: 0,
        durabilidad: 9
      },
      ideal_para: "Quieres dejar de comprar sartenes cada año porque se rayan.",
      pros: ["Muy resistente al rayado", "Apto lavavajillas", "Set completo"],
      contras: ["Precio más alto que sartenes básicas"],
      destacado_editorial: "",
      reviews: { valoracion_media: 4.4, cantidad: 0, resumen: "" }
    },
    {
      id: "foodi-smart-grill",
      name: "Ninja Foodi Smart XL Grill DG551",
      description: "Parrilla de interior 6 en 1 con termómetro inteligente Foodi Smart: fríe al aire, asa, hornea, rostiza y deshidrata sin salir de la cocina.",
      subcategoria: "sartenes",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B0B3S5GWX7?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/71lrHjk-lcL._AC_SX425_.jpg",
      gallery: [
        "horno1 B0B3S5GWX7.jpg",
        "horno2 B0B3S5GWX7.jpg",
        "horno3 B0B3S5GWX7.jpg",
        "horno4 B0B3S5GWX7.jpg"
      ],
      isFeatured: true,
      badge: { text: "6 en 1", tone: "chili" },
      specs: {
        capacidad: "6 raciones",
        potencia_w: 1760,
        num_programas: 6,
        material: "Placas antiadherentes desmontables",
        apto_lavavajillas: true,
        peso_kg: 6.1,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 8,
        limpieza: 8,
        capacidad: 8,
        calidad_precio: 7,
        potencia: 9,
        durabilidad: 8
      },
      ideal_para: "Quieres asar como en exterior, pero desde tu cocina, con un termómetro que te avisa el punto exacto.",
      pros: ["Termómetro inteligente incluido", "6 funciones en un aparato", "Placas desmontables y antiadherentes"],
      contras: ["Ocupa bastante espacio en la encimera"],
      destacado_editorial: "Ideal para quienes quieren sabor de parrilla exterior sin salir de casa.",
      reviews: { valoracion_media: 4.6, cantidad: 0, resumen: "" }
    },
    {
      id: "double-oven-pro",
      name: "Ninja Double Oven Pro Smart XL",
      description: "Horno doble de encimera con freidora de aire integrada y tecnología DualZone: cocina dos comidas distintas a la vez, cada una a su propia temperatura.",
      subcategoria: "sartenes",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B0GT27M1QD?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/81bMWQW5YnL._AC_SX425_.jpg",
      gallery: [
        "hornodoble B0GT27M1QD.jpg",
        "hornodoble2 B0GT27M1QD.jpg",
        "hornodoble3 B0GT27M1QD.jpg"
      ],
      isFeatured: true,
      badge: { text: "12 en 1", tone: "chili" },
      specs: {
        capacidad: "30.2 qt (28.6 L)",
        potencia_w: 1800,
        num_programas: 12,
        material: "Acero inoxidable",
        apto_lavavajillas: true,
        peso_kg: 12,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 7,
        limpieza: 7,
        capacidad: 9,
        calidad_precio: 7,
        potencia: 8,
        durabilidad: 8
      },
      ideal_para: "Quieres hornear y usar el horno para dos preparaciones distintas al mismo tiempo, sin comprar un horno de pared aparte.",
      pros: ["Dos hornos independientes", "Capacidad muy grande (30 qt)", "12 funciones en un solo aparato"],
      contras: ["Ocupa mucho espacio en la encimera", "El más caro de nuestra selección"],
      destacado_editorial: "El más grande y completo del catálogo: sustituye horno de pared + freidora de aire.",
      reviews: { valoracion_media: 4.4, cantidad: 6600, resumen: "" }
    },
    {
      id: "hydrasense-wf1001",
      name: "Ninja HydraSense WF1001 — Sistema de filtración de agua",
      description: "Sistema inteligente de filtración de agua para encimera: filtra más de 80 contaminantes, sin instalación ni conexión a tubería.",
      subcategoria: "sartenes",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B0GXWQ4FRB?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/810I55CeafL._SX425_.jpg",
      isFeatured: false,
      badge: { text: "Recién llegado", tone: "herb" },
      specs: {
        capacidad: "Filtra 80+ contaminantes",
        potencia_w: null,
        num_programas: null,
        material: "Plástico y acero inoxidable",
        apto_lavavajillas: false,
        peso_kg: 3,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 9,
        limpieza: 8,
        capacidad: 7,
        calidad_precio: 6,
        potencia: 0,
        durabilidad: 7
      },
      ideal_para: "Quieres agua filtrada al instante en la encimera, sin instalación ni conexión a la tubería.",
      pros: ["No requiere instalación", "Filtra más de 80 contaminantes", "Seguimiento de vida útil del filtro"],
      contras: ["Producto nuevo, todavía con pocas reseñas", "Precio elevado"],
      destacado_editorial: "El único de la selección que no cocina, pero vive igual de a diario en tu encimera.",
      reviews: { valoracion_media: 4.8, cantidad: 6, resumen: "" }
    },
    {
      id: "luxe-cafe-premier",
      name: "Ninja Luxe Cafe Premier Series",
      description: "Máquina de espresso, café por goteo e infusión fría con molinillo integrado y espumador manos libres: varias formas de preparar café en un solo aparato.",
      subcategoria: "sartenes",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B0F452YBW1?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/71zjE0bSXEL._AC_SX425_.jpg",
      gallery: [
        "https://m.media-amazon.com/images/I/71zjE0bSXEL._AC_SX425_.jpg"
      ],
      isFeatured: false,
      badge: { text: "Espresso", tone: "chili" },
      specs: {
        capacidad: "Depósito 1.4 L",
        potencia_w: 1500,
        num_programas: null,
        material: "Acero inoxidable",
        apto_lavavajillas: false,
        peso_kg: 9,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 7,
        limpieza: 6,
        capacidad: 7,
        calidad_precio: 6,
        potencia: 8,
        durabilidad: 7
      },
      ideal_para: "Quieres espresso, café por goteo y bebidas frías desde una sola máquina, sin comprar cafetera aparte.",
      pros: ["Molinillo integrado", "Espumador manos libres", "Varias formas de preparar café"],
      contras: ["Requiere limpieza regular", "Precio elevado"],
      destacado_editorial: "Para quienes quieren nivel cafetería en casa, sin depender del barista de la esquina.",
      reviews: { valoracion_media: 4.2, cantidad: 2439, resumen: "" }
    },
    {
      id: "slushi-twist-smart",
      name: "Ninja SLUSHi Twist Smart",
      description: "Máquina de bebidas congeladas con doble barril: prepara dos sabores de granizado a la vez, con 14 controles de temperatura.",
      subcategoria: "batidoras",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B0H42H6WS4?tag=ninjaencasa-20",
      image_url: "https://m.media-amazon.com/images/I/81WYmrD2+uL._AC_SX425_.jpg",
      gallery: [
        "frozen1 B0H42H6WS4.jpg",
        "frozen2 B0H42H6WS4.jpg",
        "frozen3 B0H42H6WS4.jpg"
      ],
      isFeatured: false,
      badge: { text: "Novedad", tone: "herb" },
      specs: {
        capacidad: "144 oz (2 x 72 oz)",
        potencia_w: null,
        num_programas: 14,
        material: "Plástico y acero inoxidable",
        apto_lavavajillas: true,
        peso_kg: 8,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 8,
        limpieza: 7,
        capacidad: 8,
        calidad_precio: 7,
        potencia: 6,
        durabilidad: 7
      },
      ideal_para: "Quieres granizados y bebidas congeladas para fiestas o reuniones, con dos sabores a la vez.",
      pros: ["Dos sabores simultáneos", "14 controles de temperatura", "Capacidad grande (144 oz)"],
      contras: ["Ocupa bastante espacio", "Uso más ocasional que diario"],
      destacado_editorial: "La opción divertida del catálogo: ideal para fiestas y reuniones en casa.",
      reviews: { valoracion_media: 4.4, cantidad: 85, resumen: "" }
    },
     {
      id: "creami-scoop-swirl",
      name: "Ninja Creami Scoop & Swirl NC701",
      description: "Máquina 13 en 1 para hacer helado, gelato y servir suave: convierte casi cualquier ingrediente en helado con textura de heladería.",
      subcategoria: "batidoras",
      marca: "Ninja",
      rango_precio: "alto",
      affiliate_link: "https://www.amazon.com/dp/B0DSJW8SFG?tag=ninjaencasa-20",
      image_url: "creami-scoop-swirl.jpg",

       gallery: [
        "Creami2 B0DSJW8SFG.jpg",
        "Creami3 B0DSJW8SFG.jpg"
      ],
      isFeatured: true,
      badge: { text: "13 en 1", tone: "herb" },
      specs: {
        capacidad: "16 oz",
        potencia_w: null,
        num_programas: 13,
        material: "Plástico y acero inoxidable",
        apto_lavavajillas: true,
        peso_kg: 7,
        garantia_años: 1
      },
      scores: {
        facilidad_uso: 8,
        limpieza: 7,
        capacidad: 6,
        calidad_precio: 6,
        potencia: 7,
        durabilidad: 7
      },
      ideal_para: "Quieres hacer helado, gelato o smoothie bowls en casa, con textura suave lista en minutos.",
      pros: ["13 funciones en un aparato", "Sirve helado tipo soft-serve", "Pantalla digital programable"],
      contras: ["Capacidad de solo 16 oz por tanda", "Precio elevado"],
      destacado_editorial: "El favorito para quienes quieren postres caseros sin salir a comprar helado.",
      reviews: { valoracion_media: 4.4, cantidad: 1815, resumen: "" }
    }
  ];

const priceRangeLabel = { bajo: "$", medio: "$$", alto: "$$$" };

// Puntuación general (media de los 6 scores) usada en las tarjetas y en la ficha
function overallScore(p){
  const vals = Object.values(p.scores).filter(v => typeof v === "number" && v > 0);
  if (!vals.length) return 0;
  const avg = vals.reduce((a,b) => a+b, 0) / vals.length;
  return Math.round(avg * 10) / 10;
}

function getProductById(id){
  return products.find(p => p.id === id);
}

/* Ícono de respaldo por categoría, mientras no haya foto real del producto */
const subcategoriaIcons = {
  freidoras: `<svg width="42%" height="42%" viewBox="0 0 24 24" fill="none"><path d="M4 10h16v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7Z" stroke="currentColor" stroke-width="1.4"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.4"/><path d="M9 14.5c.6-1 1.5-1 2 0s1.4 1 2 0 1.5-1 2 0" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  batidoras: `<svg width="38%" height="38%" viewBox="0 0 24 24" fill="none"><path d="M7 3h10l-1.5 9H8.5L7 3Z" stroke="currentColor" stroke-width="1.4"/><path d="M8.5 12l1 8h5l1-8" stroke="currentColor" stroke-width="1.4"/><path d="M10 7h4" stroke="currentColor" stroke-width="1.2"/></svg>`,
  sartenes: `<svg width="42%" height="42%" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="12" r="7" stroke="currentColor" stroke-width="1.4"/><path d="M18 10h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
};

function placeholderThumbHTML(subcategoria){
  const icon = subcategoriaIcons[subcategoria] || subcategoriaIcons.freidoras;
  return `<div class="ph-thumb">${icon}</div>`;
}
