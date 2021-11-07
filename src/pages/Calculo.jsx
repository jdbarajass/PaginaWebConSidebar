import React from 'react'
import { Link } from "react-router-dom";
import calculo1 from "media/calculo1.png";
import calculo2 from "media/calculo2.png";
const Calculo = () => {
    return (
      <div className="bg-green-300 h-full text-center">
        <div className="text-xl font-extrabold ">
          <Link to="/perfil">
            <i className="text-pink-400 fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Pensamiento Númerico
        </div>
        <div className="">
          <div className="p-2">
            <img src={calculo1} alt="Foto De Cálculo" />
          </div>
          <div className="p-2">
            <img src={calculo2} alt="Foto De Cálculo" />
          </div>
        </div>
      </div>
    );
}

export default Calculo
