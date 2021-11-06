import React from 'react'
import { Link } from "react-router-dom";
import calculo1 from "media/calculo1.png";
import calculo2 from "media/calculo2.png";
const Numerico = () => {
    return (
      <div>
        <div className="bg-green-300 h-20  ">
          <Link to="/perfil">
            <i className="fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Numerico page
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

export default Numerico
