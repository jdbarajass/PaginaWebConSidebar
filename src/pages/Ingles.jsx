import React from 'react';
import { Link } from "react-router-dom";

const ingles = () => {
    return (
      <div className="bg-green-300 h-full text-center">
        <div className="text-xl font-extrabold ">
          <Link to="/perfil">
            <i className="text-pink-400 fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Pensamiento Bioético
        </div>
        <div className="">
          <iframe
            src="https://docs.google.com/viewer?srcid=1yFGO2cRt19c-qtCVCBBj9ECAx09-LtOJ&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
            width="100%"
            height="680px"
          ></iframe>
        </div>
        <div className="p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/30jUlyOTlUw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
};

export default ingles;
