import React from 'react'
import {Link} from "react-router-dom"
import Delitos1 from "media/Delitos1.jpg";
import Delitos2 from "media/Delitos2.jpg";
import Delitos3 from "media/Delitos3.jpg";
import Delitos4 from "media/Delitos4.jpg";
import Delitos5 from "media/Delitos5.jpg";
import Delitos6 from "media/Delitos6.jpg";
import Delitos7 from "media/Delitos7.jpg";
import Delitos8 from "media/Delitos8.jpg";
import Delitos9 from "media/Delitos9.jpg";
import Delitos10 from "media/Delitos10.jpg";
import Delitos11 from "media/Delitos11.jpg";
import Delitos12 from "media/Delitos12.jpg";
import Delitos13 from "media/Delitos13.jpg";

const Espanol = () => {
    return (
      <div className="bg-green-300 h-full text-center ">
        <div className="text-xl font-extrabold">
          <Link to="/perfil">
            <i className="text-yellow-200 fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Pensamiento Humanistico
        </div>
        <div className="p-2">
          <div className="p-2">
            <img src={Delitos1} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos2} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos3} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos4} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos5} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos6} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos7} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos8} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos9} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos10} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos11} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos12} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Delitos13} alt="Foto De Delitos informaticos" />
          </div>
        </div>
      </div>
    );
}

export default Espanol
