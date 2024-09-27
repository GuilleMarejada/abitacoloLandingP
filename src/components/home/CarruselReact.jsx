import React, { useState, useEffect } from "react";
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
  },
  {
    person: "Guillermo Perales",
    position: "Co-Founder",
    linkImage: GPC.src,
    description:
      "¡Hola! Soy Guille, madrileño y arquitecto habilitado por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM), con estudios...",
    linkedin: "https://www.linkedin.com/in/anarodriguez",
    instagram: "https://www.instagram.com/anarodriguez",
  },
  {
    person: "Manuel Ben",
    position: "UX Product Designer Specialist",
    linkImage: MBR.src,
    description:
      "Soy Diseñador de Productos Digitales con más de 2 años de experiencia en el ecosistema digital, donde he demostrado una sólida capacidad...",
    linkedin: "https://www.linkedin.com/in/carlosgomez",
    instagram: "https://www.instagram.com/carlosgomez",
  },
  {
    person: "Alba",
    position: "COO",
    linkImage: ACG.src,
    description:
      "María coordina las operaciones internas para garantizar la eficiencia en todos los procesos.",
    linkedin: "https://www.linkedin.com/in/mariafernandez",
    instagram: "https://www.instagram.com/mariafernandez",
  },
  {
    person: "Pedro Sánchez",
    position: "CMO",
    linkImage: CA.src,
    description:
      "Pedro lidera las estrategias de marketing, ayudando a la empresa a llegar a nuevos mercados.",
    linkedin: "https://www.linkedin.com/in/pedrosanchez",
    instagram: "https://www.instagram.com/pedrosanchez",
  },
  {
    person: "Maria",
    position: "HR Manager",
    linkImage: MPR.src,
    description:
      "Laura gestiona el talento humano y se encarga de los procesos de contratación y bienestar.",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
  },
  {
    person: "Xavier Longo",
    position: "Web Developer",
    linkImage: XLD.src,
    description:
      "Laura gestiona el talento humano y se encarga de los procesos de contratación y bienestar.",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
  },
  {
    person: "Guillermo Correa",
    position: "Web Developer",
    linkImage: GCG.src,
    description:
      "Laura gestiona el talento humano y se encarga de los procesos de contratación y bienestar.",
    linkedin: "https://www.linkedin.com/in/guillermocg8/",
    instagram: "https://www.instagram.com/guiller.gc/",
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

  const getVisibleCards = () => {
    const visible = team.slice(currentIndex, currentIndex + cardsToShow);
    const extra = team.slice(
      0,
      Math.max(0, currentIndex + cardsToShow - team.length)
    );
    return visible.concat(extra);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-8 bg-[#0000000A] rounded-sm">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {getVisibleCards().map((member, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                cardsToShow === 3 ? "w-1/3" : "w-full"
              }`}
            >
              <TeamCard {...member} client:load />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          className=""
          onClick={prevSlide}
          aria-label="Ver el miembro anterior del equipo"
        >
          <img
            src={FlechaIzq.src}
            className="w-16"
            alt="Anterior"
            loading="lazy"
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
          className=""
          onClick={nextSlide}
          aria-label="Ver el siguiente miembro del equipo"
        >
          <img
            src={FlechaDrch.src}
            className="w-16"
            alt="Siguiente"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
