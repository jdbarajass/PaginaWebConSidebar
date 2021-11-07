import React from 'react'
import { Link } from "react-router-dom";
import fisica from "media/Fisica.jpg";

const Fisica = () => {
    return (
      <div className="bg-green-300 h-full text-center">
        <div className="text-xl font-extrabold">
          <Link to="/perfil">
            <i className="text-indigo-500 fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Pensamiento Númerico
        </div>
        <div className="">
          <div className="p-2">
            <img src={fisica} alt="Foto De Física" />
          </div>
        </div>
      </div>
    );
}

export default Fisica
