import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      <>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ¡¡¡Contacto!!!
        </h2>
        <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
          Puedes Contactarme ó Dejarme Tus Datos.
        </h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm grid grid-cols-2 gap-2">
            <label htmlFor="nombre">
              Nombre
              <input
                name="nombre"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="e.j. Tomas Eduardo"
              />
            </label>
            <label htmlFor="apellido">
              Apellido
              <input
                name="apellido"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="e.j. Bernal Chaparro"
              />
            </label>
            <label htmlFor="telefono">
              Teléfono
              <input
                name="telefono"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="e.j. 322 7921233"
              />
            </label>
            <label htmlFor="correo">
              Correo electrónico
              <input
                name="correo"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="e.j. toato345b@gmail.com>"
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              <Link to="/Gracias">Enviar Datos</Link>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>Estos son mis datos</span>
            <Link to="/perfil">
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                Ir a mi Perfil
              </span>
            </Link>
          </div>
        </form>
      </>
    </div>
  );
};

export default Contacto;
