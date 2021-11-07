import React from "react";
import Agradecimientos from "media/Agradecimientos.png";
import { Link } from "react-router-dom";
const Gracias = () => {
  return (
    <div className=" bg-gray-900 text-white">
      <Link to="/perfil">
        <i className="text-indigo-500 fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
        Ir a mi Perfil
      </Link>
      <img
        className=" bg-gray-900 grid max-w-6xl grid-cols-1 mx-auto mt-8 lg:grid-cols-7 font-display"
        src={Agradecimientos}
        alt="Foto De Pefil De Tomas Eduardo Bernal Chaparro"
      />
    </div>
  );
};

export default Gracias;
