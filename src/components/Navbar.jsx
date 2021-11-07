import React from "react";

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
              <a href="/Bioetico" className="p-3 hover:text-white">
                Bioético
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Sociales" className="p-3 hover:text-white">
                Sociales
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Calculo" className="p-3 hover:text-white">
                Cálculo
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="/Fisica" className="p-3 hover:text-white">
                Física
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
