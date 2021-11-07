import React from 'react'
import { Link } from "react-router-dom";
import Sociales1 from "media/Sociales1.jpg";
import Sociales2 from "media/Sociales2.jpg";
import Sociales3 from "media/Sociales4.jpg";
import Sociales4 from "media/Sociales3.jpg";
import Sociales5 from "media/Sociales5.jpg";
import Sociales6 from "media/Sociales6.jpg";
import Sociales7 from "media/Sociales7.jpg";
import Sociales8 from "media/Sociales8.jpg";
import Sociales9 from "media/Sociales9.jpg";
import Sociales10 from "media/Sociales10.jpg";
import Sociales11 from "media/Sociales11.jpg";
import Sociales12 from "media/Sociales12.jpg";
import Sociales13 from "media/Sociales13.jpg";
import Sociales14 from "media/Sociales14.jpg";
import Sociales15 from "media/Sociales15.jpg";
import Sociales16 from "media/Sociales16.jpg";
import Sociales17 from "media/Sociales17.jpg";
import Sociales18 from "media/Sociales18.jpg";

const Sociales = () => {
    return (
      <div className="bg-green-300 h-full  ">
        <div className="bg-green-300 h-20  ">
          <Link to="/perfil">
            <i className="fas fa-home cursor-pointer hover:text-indigo-500 p-2" />
            Ir a mi Perfil
          </Link>
          <br />
          Pensamiento Social
        </div>
        <div className="bg-green-300 h-full p-2">
          <div className="p-2">
            <img src={Sociales1} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales2} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales3} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales4} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales5} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales6} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales7} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales8} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales9} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales10} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales11} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales12} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales13} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales14} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales15} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales16} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales17} alt="Foto De Delitos informaticos" />
          </div>
          <div className="p-2">
            <img src={Sociales18} alt="Foto De Delitos informaticos" />
          </div>
        </div>
      </div>
    );
}

export default Sociales
