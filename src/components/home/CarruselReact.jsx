import React, { useState, useEffect, useMemo } from "react";
import TeamCard from "./TeamCard.jsx";
import FlechaIzq from "../../image/FlechaIzq.webp";
import FlechaDrch from "../../image/FlechaDrch.webp";

import ACG from "../../image/equipo/ACG.webp";
import CA from "../../image/equipo/CA.webp";
import GCG from "../../image/equipo/GCG.webp";
import GPC from "../../image/equipo/GPC.webp";
import JCM from "../../image/equipo/JCM.webp";
import MBR from "../../image/equipo/MBR.webp";
import MPR from "../../image/equipo/MPR.webp";
import XLD from "../../image/equipo/XLD.webp";

const team = [
  {
    person: "Juliette C. Mallen",
    position: "Founder & CEO",
    linkImage: JCM.src,
    description:
      "Soy Cathy, arquitecta con especialización en comunicación arquitectónica y experiencia en la dirección creativa de eventos culturales.",
    linkedin: "https://www.linkedin.com/in/juanperez",
    instagram: "https://www.instagram.com/juanperez",
    semblanza1:
      "Soy Cathy, arquitecta con especialización en comunicación arquitectónica y experiencia en la dirección creativa de eventos culturales. He combinado mi práctica arquitectónica con la exploración del impacto social y cultural del espacio urbano. ",
    semblanza2:
      "Actualmente, soy Fundadora de la startup ABITACOLO, donde sigo impulsando proyectos innovadores en la rehabilitación de mobiliario y espacios habitacionales.",
    semblanza3:
      "Recientemente, completé un Máster en Comunicación Arquitectónica en la Universidad Politécnica de Madrid, con la tesis El miedo urbano bajo la luz, y continúo mi investigación en el departamento doctoral.",
    semblanza4:
      "Fui Fundadora y Directora Creativa del Festival Kmikc, liderando tres ediciones centradas en la relación entre arquitectura y cultura urbana; Arquitectura & Diseño, Imagen Urbana & Concepto, y Ciudad Emergente. Mi trabajo ha sido reconocido con becas por diseño escenográfico y por estudios de posgrado, destacando mi versatilidad en proyectos que integran lo arquitectónico con lo creativo.",
    semblanza5:
      "Con un fuerte compromiso social, he participado en proyectos disruptivos relacionados con derivas y psicogeografías. Además, fui miembro honorario del Consejo Consultivo del IMPLAN en México y lideré proyectos significativos en la Dirección General de Obras Públicas Municipales, como la Rehabilitación del Parque Ecológico y la Recuperación del Parque Metropolitano.",
    semblanza6:
      "Mi pasión es transformar ideas en realidades que mejoren nuestras condiciones sociales y humanas, combinando idealismo y pragmatismo en cada proyecto.",
  },
  {
    person: "Guillermo Perales",
    position: "Co-Founder",
    linkImage: GPC.src,
    description:
      "¡Hola! Soy Guille, madrileño y arquitecto habilitado por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM), con estudios...",
    linkedin: "https://www.linkedin.com/in/anarodriguez",
    instagram: "https://www.instagram.com/anarodriguez",
    semblanza1:
      "¡Hola! Soy Guille, madrileño y arquitecto habilitado por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM), con estudios complementarios en el University College de Dublín (Irlanda). También me he formado en diseño gráfico en el Istituto Marangoni de Milán (Italia) y cuento con el Máster en Comunicación Arquitectónica de la Universidad Politécnica de Madrid (UPM). ",
    semblanza2:
      "A lo largo de mi carrera profesional, he participado y ganado premios en diversos proyectos de urbanismo, paisajismo, arquitectura, diseño gráfico, exposiciones…. Pero mi pasión siempre han sido los muebles y el diseño de interiores. Por eso, Abitacolo es un proyecto muy personal en el que pongo en práctica todo lo que sé, siempre a la búsqueda  soluciones más sostenibles y adecuadas para cada hogar. ",
    semblanza3:
      "Si quieres saber más sobre mí, solo pide una reunión: ¡estaré encantado de conocerte!  Y podemos hablar en español, inglés o portugués ;)",
  },
  {
    person: "Manuel Ben",
    position: "UX Product Designer Specialist",
    linkImage: MBR.src,
    description:
      "Diseñador de Productos con más de 3 años de experiencia en investigación de usuarios y desarrollo de soluciones que impulsan el crecimiento empresarial, complementado con 8 años en producción audiovisual y gestión de proyectos.",
    linkedin: "https://www.linkedin.com/in/carlosgomez",
    instagram: "https://www.instagram.com/carlosgomez",
    semblanza1:
      "Soy Diseñador de Productos Designer con más de 3 años de experiencia en el ecosistema digital, especializado en la investigación de usuarios, centrándome en datos cualitativos y cuantitativos para así desarrollar el mejor plan de acción. He demostrado una sólida capacidad para desarrollar soluciones centradas en el usuario que se alinean con los objetivos empresariales y generan ingresos. Mi enfoque está en crear diseños que resuelvan problemas reales y mejoren la experiencia del usuario.",
    semblanza2:
      "Dispongo de experiencia trabajando en proyectos de ecommerce, en el sector healthcare y anuncios clasificados. ",
    semblanza3:
      "Adicionalmente, cuento con más de 8 años de experiencia como Productor Audiovisual. En esta etapa, coordiné equipos de manera efectiva y desempeñé el rol de secretario de producción, lo que me permitió perfeccionar mis habilidades en gestión de proyectos,  comunicación y liderazgo.",
    semblanza4:
      "Creo firmemente que mi combinación de habilidades en diseño digital y producción audiovisual, me convierte en un perfil ideal para una posición donde aporte perspectivas únicas y valiosas, mucho más si me encuentro en un proyecto donde mis aportaciones sean recibidas con el entusiasmo que merecen. Abitacolo es uno de ellos.",
  },
  {
    person: "Alba",
    position: "Marketing",

    linkImage: ACG.src,
    description:
      "Hola, soy Alba. Lo que más me gusta en el mundo es cocinar y escribir, porque ambas son la mejor expresión de mi creatividad.",
    linkedin: "https://www.linkedin.com/in/mariafernandez",
    instagram: "https://www.instagram.com/mariafernandez",
    semblanza1:
      "Hola, soy Alba. Lo que más me gusta en el mundo es cocinar y escribir, porque ambas son la mejor expresión de mi creatividad. Si te preguntas por qué estoy aquí, es porque sé cómo encontrar el equilibrio perfecto, ya sea en la cocina o al elegir las palabras. Nunca me paso de sal, ni en los platos ni en las frases.",
  },

  {
    person: "María",
    position: "Marketing",

    linkImage: MPR.src,
    description:
      "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. ",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
    semblanza1:
      "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. Cada proyecto es una oportunidad para crear algo único, estructurando ideas y entornos. Me encanta transformar el caos en orden y hacer que todo fluya. ",
  },
  {
    person: "María",
    position: "Marketing",

    linkImage: MPR.src,
    description:
      "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. ",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
    semblanza1:
      "¡Hola!! Soy María y me dedico a la gestión de proyectos creativos. Disfruto ordenar y reorganizar espacios, algo que aplico en mi trabajo. Cada proyecto es una oportunidad para crear algo único, estructurando ideas y entornos. Me encanta transformar el caos en orden y hacer que todo fluya. ",
  },
  {
    person: "Xavier Longo",
    position: "Web Developer",
    linkImage: XLD.src,
    description:
      "Soy Xavi, desarrollador Full Stack con exp en proyectos innovadores.Mi habilidad más contundente sin duda es aportar soluciones creativas y eficientes en el desarrollo web.",
    linkedin: "www.linkedin.com/in/xavierlongo",
    instagram: "https://www.instagram.com/xaby1993",
    semblanza1:
      "Soy Xavi, un apasionado desarrollador Full Stack con experiencia en proyectos innovadores y dominio de tecnologías como React, Astro , Python , MySQL  y Flask. Mi habilidad más contundente sin duda es aportar soluciones creativas y eficientes en el desarrollo web.",
    semblanza2:
      "Ahora mismo soy responsable del desarrollo de las plataformas digitales para Abitacolo, desde las páginas web hasta las aplicaciones. Éste trabajo me ha llevado a encontrar soluciones no planteadas en un entorno innovador y en sintonía con otras startup como Uelz, podría decirse que soy un detective del desarrollo web. Mi experiencia incluye la creación de backend, API y bases de datos, lo que me permite manejar el ciclo completo de desarrollo.",
    semblanza3:
      "Además, tengo un trasfondo en gestión empresarial como gerente en Talleres J Longo, donde he implementado sistemas de control administrativo, experiencia que me otorga habilidades en la gestión de entornos laborales y la resolución de problemas en el día a día. Mi formación en 4Geeks Academy y mi ciclo formativo en Desarrollo de Aplicaciones Web han sido clave en mi crecimiento profesional. Estoy motivado para seguir innovando y mejorando la experiencia del usuario en cada proyecto, y con Abitacolo a sostener el entorno vivo de un contenido digital que no detendrá su crecimiento.",
  },
  {
    person: "Guillermo Correa",
    position: "Web Developer",
    linkImage: GCG.src,
    description:
      "Me llamo Guillermo, soy Full Stack Developer con experiencia en liderar proyectos y trabajar en equipos multifuncionales, me encanta aprovechar los retos que van surgiendo en el desarrollo para aprender nuesvas tecnologías...",
    linkedin: "https://www.linkedin.com/in/guillermocg8/",
    instagram: "https://www.instagram.com/guiller.gc/",
    semblanza1:
      "Soy Desarrollador Full Stack con una experiencia liderando y colaborando en equipos multifuncionales. Mi enfoque está en crear soluciones efectivas tanto en el frontend como en el backend, con un dominio en tecnologías como JavaScript, Python, React , Astro, TailwindCSS, SQLAlchemy y Flask. He trabajado en el desarrollo de plataformas Ecommerce, gestionando y coordinando equipos para asegurar la entrega de proyectos y MVPs.",
    semblanza2:
      "Recientemente, participé en el desarrollo de la plataforma Ecommerce Elévate, donde trabajé en la integración completa del frontend con Astro, React y Zustand, y del backend utilizando Python y SQLAlchemy. Además, en mi rol en Abitacolo, fui responsable de la coordinación del equipo de desarrollo y la gestión de proyectos, asegurando que los plazos y objetivos se cumplieran, y resolviendo problemas a lo largo del proceso de desarrollo.",
    semblanza3:
      "Mi formación incluye un título de Desarrollador Web Full Stack en 4Geeks Academy, complementado con estudios técnicos en electrónica y automatización. Con habilidades en Git, Docker y un fuerte enfoque en la optimización de código, estoy constantemente buscando mejorar la eficiencia de los sistemas y proyectos en los que trabajo.",
    semblanza4:
      "Me motiva enfrentar nuevos retos que me hagan seguir aprendiendo, resolver problemas complejos y seguir creciendo como profesional en el mundo del desarrollo web.",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  const prevSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);

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

  return (
    <div className="relative w-full max-w-7xl mx-auto p-8 bg-[#0000000A] rounded-sm">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {visibleCards.map((member, index) => (
            <div
              key={`${member.person}-${index}`}
              className={`flex justify-center ${
                cardsToShow === 3 ? "w-1/3" : "w-full"
              }`}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          aria-label="Ver el miembro anterior del equipo"
        >
          <img
            src={FlechaIzq.src}
            className="w-16"
            alt="Anterior"
            loading="lazy"
            width={16}
            height={16}
          />
        </button>

        <div className="flex space-x-2">
          {team.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-[#919e32]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al miembro ${index + 1} del equipo`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Ver el siguiente miembro del equipo"
        >
          <img
            src={FlechaDrch.src}
            className="w-16"
            alt="Siguiente"
            loading="lazy"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
