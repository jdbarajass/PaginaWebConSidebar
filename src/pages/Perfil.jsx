import React from "react";
import Google from "media/LogoGoogle.png";
import { Link } from "react-router-dom";
import Logo from "media/12.png";

const Perfil = () => {
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Perfil De Tomas Eduardo Bernal Chaparro
      </h2>
        <img className="" src={Logo} alt="Foto De Pefil De Tomas" />
      <div className="mt-6 text-center text-xl font-extrabold text-blue-900 ">
        <h3>
          Nombre: <spam className="text-green-300 ">Tomas Eduardo</spam>
        </h3>
        <h3>Apellido: <spam className="text-green-300 ">Bernal Chaparro</spam> </h3>
        <h3>Edad: <spam className="text-green-300 ">17</spam></h3>
        <h3>Lugar De Nacimiento: <spam className="text-green-300 ">Colombia - Bogotá</spam> </h3>
        <h3>Colegio: <spam className="text-green-300 ">Nombnre del colegio</spam></h3>
        <h3>Grado: <spam className="text-green-300 ">11</spam></h3>
      </div>
      <p className="p-6">
        Hobbie: Hobby es una palabra del inglés que se emplea para referirse a
        los pasatiempos o actividades que se practican por gusto y de forma
        recreativa en el tiempo libre. Como tal, hobby [jobi] es un anglicismo
        que en español podemos traducir como ‘pasatiempo’ o ‘distracción
        predilecta’. Su plural se escribe hobbies [jobis]. Un hobby no es una
        obligación que demande dedicación a tiempo completo, sino que se
        practica por placer, con el objetivo de aliviar el estrés de la rutina
        cotidiana, sea escolar o laboral y, por ello, no reporta ninguna clase
        de beneficio de tipo económico. En este sentido, un hobby no es una
        actividad laboral, sino una vía de escape para relajarnos y esparcirnos.
        En todo caso, puede contener cierto nivel de afinidad con nuestra
        ocupación profesional, lo que, a su modo, puede reportar conocimientos o
        ayudar a desarrollar determinadas aptitudes.{" "}
      </p>
    </div>
  );
};

export default Perfil;
/*
return (
    <>
      <div className="max-w-md w-full space-y-8">
        <img className="mx-auto h-30 w-auto" src={Logo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Correo Electrónico"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recuérdame
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" button group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md "
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
              <Link to="/admin">Inicia sesión</Link>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>¿No tienes cuenta?</span>
            <Link to="/registro">
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                Regístrate
              </span>
            </Link>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <span className="mx-4">------------------------</span>
        <h2 className="my-4 text-center text-sm font-extrabold text-gray-900">
          O
        </h2>
        <span className="mx-4">------------------------</span>
      </div>
      <div className="max-w-md w-full">
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <div className="flex items-center justify-start">
              <img src={Google} alt="Logo Google" className="h-6 w-6" />
              <span className="mx-4">Continúa con Google</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
*/
