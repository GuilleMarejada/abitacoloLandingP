/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, a as addAttribute, h as renderScript, e as createAstro } from '../chunks/astro/server_Rc0uAE6r.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/Image_BAMIo975.mjs';
import { $ as $$Layout } from '../chunks/Layout_BseQoCDC.mjs';
import { J as JCM, G as GPC, M as MBR, A as ACG, a as MPR, X as XLD, b as GCG, $ as $$Nav, c as $$Footer } from '../chunks/XLD_C42kq2G8.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
export { renderers } from '../renderers.mjs';

const imgBanner = new Proxy({"src":"/_astro/bannerHome1.CrHVhNWg.webp","width":3024,"height":4032,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/home/bannerHome1.webp";
							}
							
							return target[name];
						}
					});

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-[800px] bg-black/70 grid justify-center"> <div class="max-w-[1440px] w-screen relative overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": imgBanner, "alt": "Banner de fondo", "width": 1440, "height": 800, "class": "absolute object-cover w-full h-full", "loading": "eager" })} <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div> <div class="relative z-10 px-8 max-sm:px-4 py-24 grid gap-2.5 content-end h-full"> <div class="md:flex h-fit max-md:grid items-end gap-4"> <h1 class="text-white max-w-[1008px] text-[56px] max-sm:text-[32px] font-bold uppercase leading-[64px]">
Transforma tu HOGAR con muebles únicos
</h1> </div> </div> </div> </div>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/Banner.astro", void 0);

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="AboutUs" class="w-full bg-white"> <div class="max-w-[1440px] mx-auto max-md:px-4 px-8 py-32 xl:flex gap-4"> <h1 class="text-black md:text-5xl max-md:text-4xl font-semibold leading-tight max-w-[680px] pb-4 w-full">
¿Qué es Abitacolo?
</h1> <div class="flex flex-col gap-12 grow"> <div class="text-black/60 text-3xl font-light leading-normal max-w-[980px] space-y-4"> <p>
En Abitacolo, creemos que cada mueble tiene una historia fascinante
          que merece ser contada.
</p> <p> <strong class="font-semibold">
Rescatamos piezas olvidadas, las restauramos con pasión y las
            presentamos en nuestra plataforma.
</strong> </p> <p>
Somos cazadores de tesoros, artesanos y narradores de historias.
<br> <strong class="font-semibold">
¿Quieres ser parte de la próxima historia de un mueble
            extraordinario?
</strong> </p> </div> <a href="#contacto" class="inline-flex px-6 py-4 bg-[#919e32] rounded-[10px] justify-center items-center text-white text-2xl hover:bg-[#a1b036] transition-colors duration-300">
¡Quiero saber más!
</a> </div> </div> </section>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/AboutUs.astro", void 0);

const rescatamos = new Proxy({"src":"/_astro/rescatamos.D4WXLFCf.webp","width":946,"height":1259,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/ourJob/rescatamos.webp";
							}
							
							return target[name];
						}
					});

const restauramos = new Proxy({"src":"/_astro/restauramos.D0Gxqoll.webp","width":900,"height":1600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/ourJob/restauramos.webp";
							}
							
							return target[name];
						}
					});

const entregamos = new Proxy({"src":"/_astro/entregamos.Cnh74VwG.webp","width":2160,"height":3840,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/ourJob/entregamos.webp";
							}
							
							return target[name];
						}
					});

const $$AboutOurJob = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      title: "Rescatamos",
      description: "Nos ocupamos de recoger muebles desechados. Buscamos esos tesoros olvidados y los ponemos en un sistema de alquiler por el tiempo que lo necesites.",
      image: rescatamos
    },
    {
      title: "Restauramos",
      description: "Nuestro equipo restaura y reinventa cada pieza con pasi\xF3n. Le damos una segunda vida personalizada para que contin\xFAe su tiempo de vida y uso.",
      image: restauramos
    },
    {
      title: "Entregamos",
      description: "Mostramos nuestras creaciones en un cat\xE1logo digital, para que encuentres tu pieza favorita, Te las entregamos directamente en tu hogar y nos encargamos de su recogida cuando ya hayan cumplido su funci\xF3n.",
      image: entregamos
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full grid justify-center bg-[#d9d9d9]"> <div class="min-h-[748px] max-sm:px-2 px-8 max-md:py-8 py-24 flex-col justify-start items-center max-md:gap-8 gap-24 inline-flex max-w-[1376px]"> <h1 class="max-w-[796px] text-center text-black/90 md:text-[56px] font-semibold max-md:text-[32px] leading-[64px]">
¿Cómo trabajamos?
</h1> <div class="justify-start items-start gap-4 min-[1440px]:inline-flex max-[1440px]:grid"> ${articles.map((article) => renderTemplate`<article class="relative max-w-[448px] h-[600px] rounded shadow overflow-hidden max-md:max-w-[448px]"> ${renderComponent($$result, "Image", $$Image, { "src": article.image, "alt": `Imagen de ${article.title}`, "width": 448, "height": 600, "class": "absolute inset-0 w-full h-full object-cover" })} <div class="absolute inset-0 bg-black bg-opacity-50"></div> <div class="relative z-10 h-full px-8  pb-12 grid gap-4 content-end"> <header class="self-stretch flex-col  flex"> <h2 class="self-stretch text-white text-[28px] leading-loose font-bold"> ${article.title} </h2> </header> <p class="self-stretch text-white text-lg leading-tight font-semibold"> ${article.description} </p> </div> </article>`)} </div> </div> </section>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/AboutOurJob.astro", void 0);

const LinkedInNegro = new Proxy({"src":"/_astro/LinkedInNegro.LYT9grdo.webp","width":59,"height":56,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/logos/LinkedInNegro.webp";
							}
							
							return target[name];
						}
					});

const TeamCard = ({ person, position, linkImage, description, linkedin }) => /* @__PURE__ */ jsxs("div", { className: "w-full h-[540px] max-w-sm bg-white flex flex-col p-4", children: [
  /* @__PURE__ */ jsx("a", { href: `/team/${person}`, children: /* @__PURE__ */ jsx(
    "img",
    {
      className: "w-full h-[292px] object-scale-down",
      src: linkImage,
      alt: `${person} - Team member`,
      loading: "lazy"
    }
  ) }),
  /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-black/90 text-2xl font-semibold uppercase leading-7", children: person }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 flex-grow", children: [
      /* @__PURE__ */ jsx("p", { className: "text-black/90 text-xs uppercase leading-tight mt-2", children: position }),
      /* @__PURE__ */ jsx("p", { className: "text-[#666666] text-sm leading-tight mt-2", children: description })
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-auto", children: [
    linkedin && /* @__PURE__ */ jsx("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: LinkedInNegro.src,
        alt: "LinkedIn",
        className: "h-6 w-6",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsx("a", { href: `/team/${person}`, className: "ml-auto", children: /* @__PURE__ */ jsx("button", { className: "bg-[#919e32] rounded-lg text-white px-2 py-1.5 text-sm font-semibold leading-tight hover:bg-[#a1b036]", children: "Leer más" }) })
  ] })
] });
TeamCard.propTypes = {
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string
};

const FlechaIzq = new Proxy({"src":"/_astro/FlechaIzq.BdRyi0Gw.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/FlechaIzq.webp";
							}
							
							return target[name];
						}
					});

const FlechaDrch = new Proxy({"src":"/_astro/FlechaDrch.DlHfDb2Z.webp","width":150,"height":150,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/FlechaDrch.webp";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/CA.Cpi7cNr4.webp","width":430,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/equipo/CA.webp";
							}
							
							return target[name];
						}
					});

const team = [
  {
    person: "Juliette C. Mallen",
    position: "Founder & CEO",
    linkImage: JCM.src,
    description: "Soy Cathy, arquitecta con especialización en comunicación arquitectónica y experiencia en la dirección creativa de eventos culturales.",
    linkedin: "https://www.linkedin.com/in/juanperez",
    instagram: "https://www.instagram.com/juanperez",
    semblanza1: "Soy Cathy, arquitecta con especialización en comunicación arquitectónica y experiencia en la dirección creativa de eventos culturales. He combinado mi práctica arquitectónica con la exploración del impacto social y cultural del espacio urbano. ",
    semblanza2: "Actualmente, soy Fundadora de la startup ABITACOLO, donde sigo impulsando proyectos innovadores en la rehabilitación de mobiliario y espacios habitacionales.",
    semblanza3: "Recientemente, completé un Máster en Comunicación Arquitectónica en la Universidad Politécnica de Madrid, con la tesis El miedo urbano bajo la luz, y continúo mi investigación en el departamento doctoral.",
    semblanza4: "Fui Fundadora y Directora Creativa del Festival Kmikc, liderando tres ediciones centradas en la relación entre arquitectura y cultura urbana; Arquitectura & Diseño, Imagen Urbana & Concepto, y Ciudad Emergente. Mi trabajo ha sido reconocido con becas por diseño escenográfico y por estudios de posgrado, destacando mi versatilidad en proyectos que integran lo arquitectónico con lo creativo.",
    semblanza5: "Con un fuerte compromiso social, he participado en proyectos disruptivos relacionados con derivas y psicogeografías. Además, fui miembro honorario del Consejo Consultivo del IMPLAN en México y lideré proyectos significativos en la Dirección General de Obras Públicas Municipales, como la Rehabilitación del Parque Ecológico y la Recuperación del Parque Metropolitano.",
    semblanza6: "Mi pasión es transformar ideas en realidades que mejoren nuestras condiciones sociales y humanas, combinando idealismo y pragmatismo en cada proyecto."
  },
  {
    person: "Guillermo Perales",
    position: "Co-Founder",
    linkImage: GPC.src,
    description: "¡Hola! Soy Guille, madrileño y arquitecto habilitado por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM), con estudios...",
    linkedin: "https://www.linkedin.com/in/anarodriguez",
    instagram: "https://www.instagram.com/anarodriguez",
    semblanza1: "¡Hola! Soy Guille, madrileño y arquitecto habilitado por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM), con estudios complementarios en el University College de Dublín (Irlanda). También me he formado en diseño gráfico en el Istituto Marangoni de Milán (Italia) y cuento con el Máster en Comunicación Arquitectónica de la Universidad Politécnica de Madrid (UPM). ",
    semblanza2: "A lo largo de mi carrera profesional, he participado y ganado premios en diversos proyectos de urbanismo, paisajismo, arquitectura, diseño gráfico, exposiciones…. Pero mi pasión siempre han sido los muebles y el diseño de interiores. Por eso, Abitacolo es un proyecto muy personal en el que pongo en práctica todo lo que sé, siempre a la búsqueda  soluciones más sostenibles y adecuadas para cada hogar. ",
    semblanza3: "Si quieres saber más sobre mí, solo pide una reunión: ¡estaré encantado de conocerte!  Y podemos hablar en español, inglés o portugués ;)"
  },
  {
    person: "Manuel Ben",
    position: "UX Product Designer Specialist",
    linkImage: MBR.src,
    description: "Diseñador de Productos con más de 3 años de experiencia en investigación de usuarios y desarrollo de soluciones que impulsan el crecimiento empresarial, complementado con 8 años en producción audiovisual y gestión de proyectos.",
    linkedin: "https://www.linkedin.com/in/carlosgomez",
    instagram: "https://www.instagram.com/carlosgomez",
    semblanza1: "Soy Diseñador de Productos Designer con más de 3 años de experiencia en el ecosistema digital, especializado en la investigación de usuarios, centrándome en datos cualitativos y cuantitativos para así desarrollar el mejor plan de acción. He demostrado una sólida capacidad para desarrollar soluciones centradas en el usuario que se alinean con los objetivos empresariales y generan ingresos. Mi enfoque está en crear diseños que resuelvan problemas reales y mejoren la experiencia del usuario.",
    semblanza2: "Dispongo de experiencia trabajando en proyectos de ecommerce, en el sector healthcare y anuncios clasificados. ",
    semblanza3: "Adicionalmente, cuento con más de 8 años de experiencia como Productor Audiovisual. En esta etapa, coordiné equipos de manera efectiva y desempeñé el rol de secretario de producción, lo que me permitió perfeccionar mis habilidades en gestión de proyectos,  comunicación y liderazgo.",
    semblanza4: "Creo firmemente que mi combinación de habilidades en diseño digital y producción audiovisual, me convierte en un perfil ideal para una posición donde aporte perspectivas únicas y valiosas, mucho más si me encuentro en un proyecto donde mis aportaciones sean recibidas con el entusiasmo que merecen. Abitacolo es uno de ellos."
  },
  {
    person: "Alba",
    position: "Marketing",
    linkImage: ACG.src,
    description: "Hola, soy Alba. Lo que más me gusta en el mundo es cocinar y escribir, porque ambas son la mejor expresión de mi creatividad.",
    linkedin: "https://www.linkedin.com/in/mariafernandez",
    instagram: "https://www.instagram.com/mariafernandez",
    semblanza1: "Hola, soy Alba. Lo que más me gusta en el mundo es cocinar y escribir, porque ambas son la mejor expresión de mi creatividad. Si te preguntas por qué estoy aquí, es porque sé cómo encontrar el equilibrio perfecto, ya sea en la cocina o al elegir las palabras. Nunca me paso de sal, ni en los platos ni en las frases."
  },
  {
    person: "María",
    position: "Marketing",
    linkImage: MPR.src,
    description: "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. ",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
    semblanza1: "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. Cada proyecto es una oportunidad para crear algo único, estructurando ideas y entornos. Me encanta transformar el caos en orden y hacer que todo fluya. "
  },
  {
    person: "María",
    position: "Marketing",
    linkImage: MPR.src,
    description: "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. ",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
    semblanza1: "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. Cada proyecto es una oportunidad para crear algo único, estructurando ideas y entornos. Me encanta transformar el caos en orden y hacer que todo fluya. "
  },
  {
    person: "Xavier Longo",
    position: "Web Developer",
    linkImage: XLD.src,
    description: "Soy Xavi, desarrollador Full Stack con exp en proyectos innovadores.Mi habilidad más contundente sin duda es aportar soluciones creativas y eficientes en el desarrollo web.",
    linkedin: "www.linkedin.com/in/xavierlongo",
    instagram: "https://www.instagram.com/xaby1993",
    semblanza1: "Soy Xavi, un apasionado desarrollador Full Stack con experiencia en proyectos innovadores y dominio de tecnologías como React, Astro , Python , MySQL  y Flask. Mi habilidad más contundente sin duda es aportar soluciones creativas y eficientes en el desarrollo web.",
    semblanza2: "Ahora mismo soy responsable del desarrollo de las plataformas digitales para Abitacolo, desde las páginas web hasta las aplicaciones. Éste trabajo me ha llevado a encontrar soluciones no planteadas en un entorno innovador y en sintonía con otras startup como Uelz, podría decirse que soy un detective del desarrollo web. Mi experiencia incluye la creación de backend, API y bases de datos, lo que me permite manejar el ciclo completo de desarrollo.",
    semblanza3: "Además, tengo un trasfondo en gestión empresarial como gerente en Talleres J Longo, donde he implementado sistemas de control administrativo, experiencia que me otorga habilidades en la gestión de entornos laborales y la resolución de problemas en el día a día. Mi formación en 4Geeks Academy y mi ciclo formativo en Desarrollo de Aplicaciones Web han sido clave en mi crecimiento profesional. Estoy motivado para seguir innovando y mejorando la experiencia del usuario en cada proyecto, y con Abitacolo a sostener el entorno vivo de un contenido digital que no detendrá su crecimiento."
  },
  {
    person: "Guillermo Correa",
    position: "Web Developer",
    linkImage: GCG.src,
    description: "Me llamo Guillermo, soy Full Stack Developer con experiencia en liderar proyectos y trabajar en equipos multifuncionales, me encanta aprovechar los retos que van surgiendo en el desarrollo para aprender nuesvas tecnologías...",
    linkedin: "https://www.linkedin.com/in/guillermocg8/",
    instagram: "https://www.instagram.com/guiller.gc/",
    semblanza1: "Soy Desarrollador Full Stack con una experiencia liderando y colaborando en equipos multifuncionales. Mi enfoque está en crear soluciones efectivas tanto en el frontend como en el backend, con un dominio en tecnologías como JavaScript, Python, React , Astro, TailwindCSS, SQLAlchemy y Flask. He trabajado en el desarrollo de plataformas Ecommerce, gestionando y coordinando equipos para asegurar la entrega de proyectos y MVPs.",
    semblanza2: "Recientemente, participé en el desarrollo de la plataforma Ecommerce Elévate, donde trabajé en la integración completa del frontend con Astro, React y Zustand, y del backend utilizando Python y SQLAlchemy. Además, en mi rol en Abitacolo, fui responsable de la coordinación del equipo de desarrollo y la gestión de proyectos, asegurando que los plazos y objetivos se cumplieran, y resolviendo problemas a lo largo del proceso de desarrollo.",
    semblanza3: "Mi formación incluye un título de Desarrollador Web Full Stack en 4Geeks Academy, complementado con estudios técnicos en electrónica y automatización. Con habilidades en Git, Docker y un fuerte enfoque en la optimización de código, estoy constantemente buscando mejorar la eficiencia de los sistemas y proyectos en los que trabajo.",
    semblanza4: "Me motiva enfrentar nuevos retos que me hagan seguir aprendiendo, resolver problemas complejos y seguir creciendo como profesional en el mundo del desarrollo web."
  }
];
const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCardsToShow(width >= 1100 ? 3 : width >= 900 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const visibleCards = useMemo(() => {
    const visible = team.slice(currentIndex, currentIndex + cardsToShow);
    const extra = team.slice(
      0,
      Math.max(0, currentIndex + cardsToShow - team.length)
    );
    return visible.concat(extra);
  }, [currentIndex, cardsToShow]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-7xl mx-auto p-8 bg-[#0000000A] rounded-sm", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex transition-transform duration-300 ease-in-out", children: visibleCards.map((member, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `flex justify-center ${cardsToShow === 3 ? "w-1/3" : "w-full"}`,
        children: /* @__PURE__ */ jsx(TeamCard, { ...member })
      },
      `${member.person}-${index}`
    )) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center mt-6 space-x-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevSlide,
          "aria-label": "Ver el miembro anterior del equipo",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: FlechaIzq.src,
              className: "w-16",
              alt: "Anterior",
              loading: "lazy",
              width: 16,
              height: 16
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: team.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `w-4 h-4 rounded-full ${index === currentIndex ? "bg-[#919e32]" : "bg-gray-300"}`,
          onClick: () => setCurrentIndex(index),
          "aria-label": `Ir al miembro ${index + 1} del equipo`
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextSlide,
          "aria-label": "Ver el siguiente miembro del equipo",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: FlechaDrch.src,
              className: "w-16",
              alt: "Siguiente",
              loading: "lazy",
              width: 16,
              height: 16
            }
          )
        }
      )
    ] })
  ] });
};

const $$AboutOurTeam = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="team" class="w-full bg-[#0000000A] grid justify-center pb-8 px-4"> <article class="max-w-[1376px] w-fit bg-white rounded-sm"> <header class="md:h-64 max-md:h-[132px] px-8 py-24 max-md:py-12 bg-white flex justify-center items-center rounded-sm w-full"> <h1 class="md:text-[56px] w-fit max-md:text-[32px] font-semibold text-black/90 leading-[64px]">
Nuestro equipo
</h1> </header> ${renderComponent($$result, "CarruselReact", TeamCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/CarruselReact.jsx", "client:component-export": "default" })} <section class="min-h-[408px] bg-white px-8 py-24 max-md:py-12 flex items-center gap-4 rounded-e-sm max-lg:flex-col-reverse"> <div class="flex-1 pr-32 max-md:pr-0"> <p class="text-[#666666] text-[28px] leading-9">
Abitacolo cuenta con un equipo de profesionales dedicados a hacer de
          tu experiencia algo extraordinario. Cada miembro del equipo está
          comprometido con tu satisfacción. ¿Listo para comenzar tu viaje con
          Abitacolo? Contáctanos hoy mismo.
</p> </div> <div class="flex-1 flex flex-col gap-7 max-lg:mb-4"> <h2 class="text-black text-[40px]">Expertos a tu servicio</h2> <a href="#contacto" class="h-14 px-6 py-4 bg-[#919e32] rounded-[10px] w-full text-xl font-semibold text-white uppercase grid justify-center hover:bg-[#a1b036]">
Contáctanos
</a> </div> </section> </article> </section>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/AboutOurTeam.astro", void 0);

const $$AboutOurProducts = createComponent(($$result, $$props, $$slots) => {
  const productInfo = [
    {
      title: "Titulo-1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208"
    },
    {
      title: "Titulo-2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208"
    },
    {
      title: "Titulo-3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208"
    },
    {
      title: "Titulo-4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="products" class="w-full bg-[#1c1c1e] grid justify-center min-h-[700px] pb-6"> <div class="max-w-[1440px] w-full px-8 pt-12 flex flex-col gap-8"> <header class="py-4 border-b border-white/10 grid justify-center"> <h2 class="text-white text-4xl font-semibold">Nuestros trabajos</h2> </header> <div class="grid xl:grid-cols-2 gap-8 place-content-center"> ${productInfo.map((product) => renderTemplate`<article class="bg-white/5 md:flex items-center max-w-[680px] max-md:max-w-[398px] max-md:rounded-lg overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "width": 320, "height": 208, "class": "w-full h-auto max-md:rounded-t-lg", "src": product.image, "alt": product.title, "loading": "lazy" })} <div class="flex flex-col p-4 gap-8"> <h3 class="text-white text-xl font-semibold capitalize"> ${product.title} </h3> <p class="text-white/40 text-base">${product.description}</p> </div> </article>`)} </div> </div> </section>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/AboutOurProducts.astro", void 0);

const placeHolder1 = new Proxy({"src":"/_astro/placeholder1.BAjJdcZ_.png","width":1440,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/home/placeholder1.png";
							}
							
							return target[name];
						}
					});

const placeHolder2 = new Proxy({"src":"/_astro/placeholder2.50d9lmDb.png","width":1440,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/home/placeholder2.png";
							}
							
							return target[name];
						}
					});

const placeHolder3 = new Proxy({"src":"/_astro/placeholder3.J_sO3XbW.png","width":1440,"height":400,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/home/placeholder3.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Hitos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hitos;
  const { articulos } = Astro2.params;
  const articulosHitos = [
    {
      titulo: "Abitacolo revoluciona la industria del mueble con soluciones innovadoras.",
      texto: "Es el a\xF1o 2023 en Madrid, mientras una mesilla de noche era dejada a su suerte sobre la acera de una calle, otras manos cargaban cuesta abajo del piso reformado una l\xE1mpara de pie, unas macetas, unas repisas de madera...",
      image: placeHolder1,
      clases: ""
    },
    {
      titulo: "\xBFQu\xE9 hace \xFAnico a Abitacolo?",
      texto: "Innovaci\xF3n: Redefinimos el concepto de mobiliario olvidado, transform\xE1ndolo en un cat\xE1logo de soluciones est\xE9ticas y funcionales. Nuestro taller permite la renovaci\xF3n continua de muebles, asegurando que cumplan su prop\xF3sito...",
      image: placeHolder2,
      clases: "max-md:hidden"
    },
    {
      titulo: "\xBFDe d\xF3nde? \xBFQu\xE9 es? \xBFpor qu\xE9 Abitacolo? ",
      texto: "Abitacolo, lanzada en 1971 por el dise\xF1ador y artista italiano Bruno Munari, es una obra fascinante que trasciende los l\xEDmites del dise\xF1o convencional y la arquitectura, ofrece una reflexi\xF3n profunda sobre la relaci\xF3n entre el espacio...",
      image: placeHolder3,
      clases: "max-lg:hidden"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full py-16 grid justify-center bg-[#333333] px-4" role="main"> <div id="hitos" class="bg-[#d6ff85] grid justify-center max-w-[1376px] rounded-lg"> <header class="min-h-[350px] px-8 py-12 max-md:py-12 flex justify-center items-center"> <div class=""> <h1 class="justify-self-center text-black text-8xl font-semibold">
Hitos Abitacolo
</h1> <p class="max-w-[956px] text-black leading-[42px] pt-8 text-2xl font-semibold">
Únete al emprendimiento en esta emocionante etapa de crecimiento y
          forma parte de nuestra historia.
</p> </div> </header> ${renderComponent($$result, "Image", $$Image, { "id": "articleImage", "class": "w-full max-w-[1376px] h-[400px] object-cover", "src": articulosHitos[0].image, "alt": "Imagen destacada de Hitos Abitacolo" })} <section class="relative flex justify-center"> <div class="px-8 pb-24 max-md:pb-12 bg-black/5 flex gap-4"> ${articulosHitos.map((articulo, index) => renderTemplate`<article${addAttribute(`min-h-72 w-full p-12 relative grow bg-white text-[#666666] hover:text-black  hover:bg-gray-300 flex-col justify-start items-start gap-6 inline-flex top-[-20px] ${articulo.clases}`, "class")}${addAttribute(index, "data-index")}${addAttribute(articulo.image.src, "data-image-src")}${addAttribute(articulo.image.src, "data-image-srcset")}> <h2 class="self-stretch text-2xl font-bold  leading-7 text-center"> ${articulo.titulo} </h2> <p class="self-stretch text-sm leading-tight text-center"> ${articulo.texto} </p> <a${addAttribute(`/hitos/${articulos}`, "href")} class="ml-auto mt-auto"> <button class="bg-[#919e32] rounded-lg text-white px-2 py-1.5 text-sm font-semibold leading-tight hover:bg-[#a1b036]">
Leer articulo
</button> </a> </article>`)} </div> </section> <footer class="min-h-[408px] px-8 max-md:py-8 py-24 border-t border-black/10 flex max-lg:flex-col-reverse items-center gap-7"> <div class="flex-1 pr-32 max-md:pr-0"> <p class="text-black/90 text-[32px] leading-9">
En Abitacolo cada día damos pasos firmes hacia el éxito. Buscamos
          inversores visionarios, colaboradores capaces y personas curiosas por
          los servicios, que deseen ser parte de nuestro original ADN. Únete al
          emprendimiento sostenible y sé parte de una historia de innovación y
          crecimiento imparable.
</p> </div> <div class="flex-1 flex flex-col gap-7"> <h2 class="text-black/90 text-[40px] text-center">
¡Empieza tu historia con nosotros!
</h2> <a href="#contacto" class="h-14 px-6 py-4 rounded-[10px] text-white text-xl font-semibold grid justify-center bg-black hover:bg-[#a1b036]" aria-label="Contáctanos">
Contáctanos
</a> </div> </footer> </div> </div> ${renderScript($$result, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/Hitos.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/Hitos.astro", void 0);

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("username");
      const email = data.get("email");
      const password = data.get("password");
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  }
  return renderTemplate`${maybeRenderHead()}<div id="contacto" class="grid justify-items-center pt-12 bg-white pb-6 px-3"> <div class="grid gap-10 mb-10 text-center"> <p class="text-[42px] font-semibold leading-[52px]">
Ponte en Contacto con Nosotros
</p> <div class="max-w-[714px] text-[#151438]/40 text-[22px] font-medium leading-loose">
¿Quieres más información sobre este proyecto? Puedes escribirnos o
      llamarnos, nos encantará informarte.
</div> <div class="max-w-[308px] text-black text-base leading-relaxed">
+34 xxx xxx xxx
</div> </div> <form action="https://formsubmit.co/8ef3a12491cf88e883476dae52fd2893" method="POST" class="grid justify-center gap-[35px] min-h-[516px] w-full px-3"> <div class="max-w-[783.71px] md:flex grid md:gap-2 gap-[35px]"> <div class="flex flex-col"> <label for="nombre" class="sr-only">Nombre</label> <input id="nombre" type="text" name="nombre" placeholder="Nombre" autocomplete="name" class="w-full max-w-[476px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium placeholder-[#151438]/40"> </div> <div class="flex flex-col"> <label for="telefono" class="sr-only">Teléfono (Opcional)</label> <input id="telefono" type="tel" name="telefono" placeholder="Teléfono (Opcional)" autocomplete="tel" class="h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium placeholder-[#151438]/40"> </div> </div> <div class="flex flex-col"> <label for="email" class="sr-only">Email</label> <input id="email" type="email" name="email" placeholder="Email" autocomplete="email" class="max-w-[792px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium placeholder-[#151438]/40"> </div> <!-- <div class="flex flex-col">
      <label for="motivo" class="sr-only">Motivo del contacto</label>
      <select
        id="motivo"
        name="motivo"
        class="max-w-[792px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium text-[#151438]/40"
      >
        <option value="">Indícanos el motivo del contacto</option>
        <option value="consulta">Consulta</option>
        <option value="soporte">Soporte</option>
        <option value="otros">Otros</option>
      </select>
    </div> --> <div class="flex flex-col"> <label for="mensaje" class="sr-only">Tu mensaje</label> <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje" class="max-w-[792px] h-[170px] rounded-sm border border-[#666666] p-4 text-lg font-medium placeholder-[#151438]/40 resize-none"></textarea> </div> <button type="submit" class="w-60 h-14 bg-[#919e32]/60 rounded-sm text-white text-base hover:bg-[#919e32]/80 transition-colors">
Enviar
</button> </form> </div>`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/home/Contacto.astro", void 0);

const ajustes = new Proxy({"src":"/_astro/iconoAjustes.CvGCydB-.webp","width":50,"height":53,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/iconoAjustes.webp";
							}
							
							return target[name];
						}
					});

const logoA = new Proxy({"src":"/_astro/ANegra.BVy9ZUr_.webp","width":851,"height":852,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/image/logos/ANegra.webp";
							}
							
							return target[name];
						}
					});

const $$ModalPrivacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookieModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center w-full h-full p-10"> <div class="max-w-[1207px] min-h-[89px] px-8 pt-4 pb-3.5 bg-white rounded-2xl border-2 border-[#919e32] grid items-center gap-5 min-[1205px]:flex"> <div class="flex justify-around"> ${renderComponent($$result, "Image", $$Image, { "src": logoA, "alt": "Icono de informaci\xF3n", "width": "89", "height": "89", "loading": "eager" })} <div class="h-[49px]"> <div class="leading-7 tracking-wide">Nos preocupa</div> <div class="w-[150px] text-[#222222] text-xl font-bold leading-7">
tu privacidad
</div> </div> </div> <div class="max-w-[342px] min-h-[29px] flex-col justify-start items-start inline-flex"> <div class="self-stretch h-[43px] text-[#37474f] text-xs font-normal leading-none tracking-tight">
Utilizamos cookies para mejorar tu experiencia en nuestra web. Estas
        almacenan información sobre tus preferencias.
</div> </div> <div class="bg-[#919e32] rounded-[10px] justify-center items-center gap-1.5 flex"> <button id="acceptAll" class="text-white text-sm font-semibold leading-[16.80px] grid justify-center px-7 py-2.5 w-full">
Aceptar todas
</button> </div> <button id="customize" class="px-7 py-2.5 rounded-[10px] border-2 border-[#666666] justify-center items-center gap-1.5 flex"> <div class="text-[#666666] text-sm font-semibold leading-[16.80px]">
Personalizar
</div> <div class="w-4 h-4 relative"> ${renderComponent($$result, "Image", $$Image, { "src": ajustes, "alt": "Icono de ajustes", "width": "24", "height": "26", "loading": "eager" })} </div> </button> <div class="h-10 justify-start items-start gap-4 flex"> <button id="rejectAll" class="py-[9px] rounded-lg border justify-center items-center gap-2.5 flex"> <div class="text-center text-[#37474f] text-sm font-medium uppercase tracking-wider">
RECHAZAR TODAS
</div> </button> </div> </div> </div> ${renderScript($$result, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalPrivacidad.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/components/ModalPrivacidad.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Abitacolo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "AboutUs", $$AboutUs, {})} ${renderComponent($$result2, "AboutOurJob", $$AboutOurJob, {})} ${renderComponent($$result2, "AboutOurTeam", $$AboutOurTeam, {})} ${renderComponent($$result2, "Hitos", $$Hitos, {})} ${renderComponent($$result2, "AboutOurProducts", $$AboutOurProducts, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "ModalPrivacidad", $$ModalPrivacidad, {})} ` })}`;
}, "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/index.astro", void 0);

const $$file = "/Users/xavierlongo/Desktop/Curro/AbitacoloLandingP/abitacoloLandingP/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
