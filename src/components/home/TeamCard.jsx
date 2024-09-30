import React from "react";
import PropTypes from "prop-types";
import LinkedInNegro from "../../image/logos/LinkedInNegro.webp";

const TeamCard = ({ person, position, linkImage, description, linkedin }) => (
  <div className="w-full h-[540px] max-w-sm bg-white flex flex-col p-4">
    <a href={`/team/${person}`}>
      <img
        className="w-full h-[292px] object-scale-down"
        src={linkImage}
        alt={`${person} - Team member`}
        loading="lazy"
      />
    </a>
    <div className="grid gap-1">
      <h2 className="text-black/90 text-2xl font-semibold uppercase leading-7">
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
    <div className="flex items-center gap-4 mt-auto">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src={LinkedInNegro.src}
            alt="LinkedIn"
            className="h-6 w-6"
            loading="lazy"
          />
        </a>
      )}
      <a href={`/team/${person}`} className="ml-auto">
        <button className="bg-[#919e32] rounded-lg text-white px-2 py-1.5 text-sm font-semibold leading-tight hover:bg-[#a1b036]">
          Leer más
        </button>
      </a>
    </div>
  </div>
);

TeamCard.propTypes = {
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
};

export default TeamCard;
