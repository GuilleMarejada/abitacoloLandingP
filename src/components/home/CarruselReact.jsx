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
    linkImage: JCM,
    description:
      "Construir mundos desde cero es mi pasión. Si los convierto en proyectos tangibles, entiendo que mi papel en el mundo ya lleva un camino y un propósito significativo. ",
    linkedin: "https://www.linkedin.com/in/juliette-mallen-a001a2125/",
  },
  {
    person: "Guillermo Perales",
    position: "Co-Founder & Creative Director",
    linkImage: GPC,
    description:
      "Además de mi carácter, el desempeño profesional y mis capacidades organizativas, me convierten en un arquitecto todo terreno. Ahora soy pilar en la startup de diseño regenerativo de mobiliario. Convertimos la basura en tesoros únicos.",
    linkedin: "https://www.linkedin.com/in/gperalesc/",
  },
  {
    person: "Manuel Ben",
    position: "UX Product Designer Specialist",
    linkImage: MBR,
    description:
      "Diseñador de Productos con más de 3 años de experiencia en investigación de usuarios y desarrollo de soluciones que impulsan el crecimiento empresarial, complementado con 8 años en producción audiovisual y gestión de proyectos.",
    linkedin: "https://www.linkedin.com/in/benmanuel/",
  },
  {
    person: "Alba Caldito G.",
    position: "Content Manager",

    linkImage: ACG,
    description:
      "Hablar es mi pasión y puedo hacerlo desde cualquier canal, lo que se podría definir como “ser una comunicadora 360”. Casi sin querer, le puse voz a Abitacolo.",
    linkedin: "https://www.linkedin.com/in/albacalditogutierrez/",
  },

  {
    person: "Maria Para R.",
    position: "Creative Project Manager",

    linkImage: MPR,
    description:
      "Pienso, organizo y ejecuto ideas de todo tipo. Desde campañas de publicidad a nivel nacional a eventos en locales del barrio. Y eso hago con ABITACOLO, sacar un proyecto con espíritu de barrio a nivel intergaláctico.",
    linkedin: "https://www.linkedin.com/in/mariapararodriguez/",
  },
  {
    person: "Cristina Allen Casal",
    position: "Marketing expert Content & Brand",

    linkImage: CA,
    description:
      "Creo marcas, resuelvo problemas y me especializo en el marketing en entornos innovadores. En resumen, me encargo de que conozcas Abitacolo y te enamores.",
    linkedin: "https://www.linkedin.com/in/cristina-allende-casal/",
  },
  {
    person: "Xavier Longo",
    position: "Full Stack Developer",
    linkImage: XLD,
    description:
      "Soy Xavi, desarrollador Full Stack con exp en proyectos innovadores.Mi habilidad más contundente sin duda es aportar soluciones creativas y eficientes en el desarrollo web.",
    linkedin: "www.linkedin.com/in/xavierlongo",
  },
  {
    person: "Guillermo Correa",
    position: "Desarrollador de Software Full Stack",
    linkImage: GCG,
    description:
      "Soy escalador y programador, mi selección de deporte define parte de lo que se ve en mi trabajo. Llegar a la cima, disfrutar el proceso, y ver el paisaje reservado para quienes nos aventuramos.",
    linkedin: "https://www.linkedin.com/in/guillermocg8/",
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
    <div className="relative w-full mx-auto rounded-sm">
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
