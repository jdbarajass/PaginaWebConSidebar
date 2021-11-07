import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 shadow-lg">
      <div className="container mx-auto PX-4">
        <div className="sm:flex justify-around">
          <a href="/Perfil" className="text-white text-3xl font-bold p-3">
            Actividades Finales 4to Periodo
          </a>

          <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
            <li className="sm:inline-block">
              <a href="/Ingles" className="p-3 hover:text-white">
                Inglés
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Espanol" className="p-3 hover:text-white">
                Español
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Calculo" className="p-3 hover:text-white">
                Calculo
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Fisica" className="p-3 hover:text-white">
                Física
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Sociales" className="p-3 hover:text-white">
                Sociales
              </a>
            </li>

            <li className="sm:inline-block">
              <Link to="/Quimica">
                <button classNameName="bg-gray-500 p-2 text-white rounded-lg shadow-md hover:bg-gray-400">
                  Quimica
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
