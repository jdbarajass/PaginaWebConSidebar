import React from 'react'
import { Link } from "react-router-dom";

const Bioetico = () => {
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
            src="https://docs.google.com/viewer?srcid=1xh3FpIhspQuPMSLrn2WjONn3M2sWO7rq&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
            width="100%"
            height="680px"
          ></iframe>
        </div>
        <div className="p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iC39HPGZLnI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
}
export default Bioetico
