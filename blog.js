/* ============================================================
   BASE DE DATOS DE ARTÍCULOS — colección "posts"
   Cada objeto es un artículo. Para añadir uno nuevo, copia un
   bloque completo y cambia los valores. El campo "body" es una
   lista de bloques: { type: "p" | "h2" | "ul" }, en orden.
   ============================================================ */
const posts = [
  {
    id: "errores-freidora-aire",
    title: "5 errores comunes al usar tu freidora de aire Ninja",
    kicker: "GUÍA RÁPIDA · FREIDORAS",
    excerpt: "Sobrecargar la cesta, no precalentar y otros descuidos que le restan crocante a tus platos. Aquí cómo evitarlos.",
    date: "2026",
    readTime: "4 min de lectura",
    image: "",
    body: [
      { type: "p", text: "Una freidora de aire Ninja bien usada puede darte resultados casi idénticos a freír con aceite, pero varios hábitos comunes le restan resultado sin que te des cuenta. Aquí los más frecuentes." },
      { type: "h2", text: "1. Sobrecargar la cesta" },
      { type: "p", text: "Amontonar la comida impide que el aire caliente circule bien alrededor de cada pieza. El resultado: partes crocantes y partes blandas en la misma tanda. Es mejor cocinar en 2 tandas más pequeñas que una sola apretada." },
      { type: "h2", text: "2. Saltarse el precalentado" },
      { type: "p", text: "Igual que un horno, la freidora de aire rinde mejor cuando arranca ya caliente. Uno o dos minutos de precalentado marcan la diferencia entre un exterior crocante y uno que queda un poco húmedo." },
      { type: "h2", text: "3. No sacudir ni voltear a mitad de cocción" },
      { type: "p", text: "El aire circula desde arriba y los lados, así que la parte que toca la cesta cocina distinto al resto. Sacudir la cesta o voltear las piezas a la mitad del tiempo ayuda a que quede parejo por todos lados." },
      { type: "h2", text: "4. Usar demasiado aceite (o nada)" },
      { type: "p", text: "El objetivo de estas freidoras es usar poco o ningún aceite. Un rocío ligero suele ser suficiente para dorar bien; el exceso solo genera humo y salpica el interior del aparato." },
      { type: "h2", text: "5. No limpiar la cesta después de cada uso" },
      { type: "p", text: "Los restos de grasa que se acumulan afectan el sabor de la próxima cocción y, con el tiempo, pueden generar humo. La mayoría de las cestas Ninja son aptas para lavavajillas — revisa la ficha de tu modelo para confirmarlo." },
      { type: "p", text: "Si estás por elegir tu primera freidora, en nuestro comparador puedes ver capacidad, número de cestas y puntuación de facilidad de limpieza de cada modelo Ninja disponible." }
    ]
  },
  {
    id: "cuidar-batidora-ninja",
    title: "Cómo cuidar tu batidora Ninja y que dure más",
    kicker: "GUÍA RÁPIDA · BATIDORAS",
    excerpt: "Cuchillas, motor y sellos de goma: tres puntos que, bien cuidados, alargan la vida útil de cualquier batidora.",
    date: "2026",
    readTime: "3 min de lectura",
    image: "",
    body: [
      { type: "p", text: "Una batidora Ninja bien cuidada puede acompañarte muchos años. Estos son los cuidados básicos que más impacto tienen." },
      { type: "h2", text: "Lava el vaso justo después de usarlo" },
      { type: "p", text: "Dejar restos de batido secándose dentro del vaso hace que después cueste mucho más limpiarlo, y algunos ingredientes (como los lácteos) pueden generar olores si se quedan horas sin enjuagar." },
      { type: "h2", text: "No fuerces el motor con hielo en exceso" },
      { type: "p", text: "El hielo es de los ingredientes más duros para cualquier motor. Si tu modelo lo permite, agrega el hielo de a poco en lugar de llenar el vaso de golpe — el motor trabaja menos y las cuchillas duran más." },
      { type: "h2", text: "Revisa el sello de goma con regularidad" },
      { type: "p", text: "La mayoría de las bases de cuchillas tienen un anillo de goma que evita fugas. Con el tiempo se puede desgastar o perder flexibilidad — si notas que gotea por la base, ese suele ser el motivo, y en general se puede reemplazar por separado sin comprar toda la batidora de nuevo." },
      { type: "h2", text: "Deja descansar el motor entre usos largos" },
      { type: "p", text: "Para batidos muy espesos o hielo en grandes cantidades, es buena práctica hacer pausas cortas en vez de mantener el motor encendido sin parar por mucho tiempo." },
      { type: "p", text: "¿Buscas cuál modelo te conviene según cuánto cocinas en casa? Nuestra guía de batidoras compara capacidad, potencia y facilidad de limpieza de cada opción." }
    ]
  },
  {
    id: "ninja-y-shark-la-misma-empresa",
    title: "Ninja y Shark: ¿son la misma empresa?",
    kicker: "SABÍAS QUE",
    excerpt: "Dos marcas, un mismo fabricante. Te contamos qué las conecta y qué las diferencia.",
    date: "2026",
    readTime: "3 min de lectura",
    image: "",
    body: [
      { type: "p", text: "Es una pregunta que surge seguido: si compro un producto Shark, ¿es de la misma calidad que uno Ninja? La respuesta corta es sí — ambas marcas pertenecen a la misma compañía." },
      { type: "h2", text: "Un mismo fabricante, dos marcas distintas" },
      { type: "p", text: "Ninja y Shark son marcas de SharkNinja, una empresa dedicada a electrodomésticos para el hogar. Comparten estándares de fabricación y filosofía de diseño, aunque cada marca se enfoca en categorías distintas." },
      { type: "h2", text: "¿En qué se diferencian?" },
      { type: "p", text: "Ninja se concentra principalmente en electrodomésticos de cocina: freidoras de aire, batidoras, sistemas de cocción y máquinas de café, entre otros. Shark, en cambio, está más orientada a limpieza del hogar: aspiradoras, robots aspiradores y purificadores de aire." },
      { type: "h2", text: "¿Por qué importa saber esto?" },
      { type: "p", text: "Si ya confías en la calidad de tus electrodomésticos Ninja en la cocina, es una buena referencia para saber qué esperar de un producto Shark en otras áreas del hogar — comparten la misma exigencia de fabricación, aunque resuelvan necesidades distintas." },
      { type: "p", text: "Por ahora, en Ninja en Casa nos enfocamos en electrodomésticos de cocina Ninja — pero es información que vale la pena tener presente si estás pensando en equipar el resto de tu hogar." }
    ]
  }
];
