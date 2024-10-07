import React from "react";
import PropTypes from "prop-types";
import LinkedInNegro from "../../image/logos/LinkedInNegro.webp";

const TeamCard = ({ person, position, linkImage, description, linkedin }) => (
  <div className="max-w-[427px] h-[538px]  bg-white flex flex-col">
    <a href={`/team/${person}`}>
      <img
        className="w-full h-fit object-scale-down"
        src={linkImage.src}
        alt={`${person} - Team member`}
        loading="lazy"
      />
    </a>
    <div className="grid gap-1 p-3">
      <h2 className="text-black/90 text-2xl font-semibold  leading-7">
        {person}
      </h2>
      <div className="grid gap-4 flex-grow">
        <p className="text-black/90 text-xs uppercase leading-tight mt-2">
          {position}
        </p>
        <p className="text-[#666666] text-sm leading-tight mt-2">
          {description}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4 mt-auto p-3">
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <img
          src={LinkedInNegro.src}
          alt="LinkedIn"
          className="h-6 w-6"
          loading="lazy"
        />
      </a>
      <a href={`/team/${person}`} className="ml-auto">
        <button className=" rounded-full px-2 py-1.5 text-sm font-semibold leading-tight tracking-tight border-2 border-black hover:bg-black hover:text-white">
          Leer más
        </button>
      </a>
    </div>
  </div>
);

TeamCard.propTypes = {
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkImage: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
};

export default TeamCard;
