import React from "react";
import PropTypes from "prop-types";
import InstagramNegro from "../../image/logos/instagramNegro.webp";
import LinkedInNegro from "../../image/logos/LinkedInNegro.webp";

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className="h-6 w-6" loading="lazy" />
  </a>
);

const TeamCard = ({
  person,
  position,
  linkImage,
  description,
  linkedin,
  instagram,
}) => (
  <div className="w-full h-[540px] max-w-sm bg-white flex flex-col gap-6 p-4">
        <a href={`/team/${person}`}>

    <img
      className="w-fit h-[292px] object-scale-down"
      src={linkImage}
      alt={`${person} - Team member`}
      loading="lazy"
    />
    </a>
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-black/90 text-2xl font-semibold uppercase leading-7">
          {person}
        </h2>
        <p className="text-black/90 text-xs uppercase leading-tight">
          {position}
        </p>
      </div>
      <p className="text-[#666666] text-sm uppercase leading-tight">
        {description}
      </p>
      <div className="flex items-center gap-4">
        {linkedin && (
          <SocialLink href={linkedin} src={LinkedInNegro.src} alt="LinkedIn" />
        )}
        {instagram && (
          <SocialLink
            href={instagram}
            src={InstagramNegro.src}
            alt="Instagram"
          />
        )}
        <div className="flex-grow" />
        <a href={`/team/${person}`}>
          <button className="bg-[#919e32] rounded-lg text-white px-2 py-1.5 text-sm font-semibold leading-tight hover:bg-[#a1b036]">
            Leer más
          </button>
        </a>
      </div>
    </div>
  </div>
);

TeamCard.propTypes = {
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
};

export default TeamCard;
