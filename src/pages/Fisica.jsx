import React from 'react'
import { Link } from "react-router-dom";
import fisica from "media/Fisica.jpg";

const Fisica = () => {
    return (
      <div className="bg-green-300 h-full">
        <div className="bg-green-300 h-20  ">
          <Link to="/perfil">
            <i className="fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Materia Númerico
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
