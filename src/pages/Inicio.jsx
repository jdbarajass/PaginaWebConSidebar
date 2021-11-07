import React from "react";
import Ingles from "media/Delitos1.jpg";
import Espanol from "media/Sociales1.jpg";
import Bioetico from "media/calculo1.png";
import Sociales from "media/Sociales2.jpg";
import Calculo from "media/Sociales3.jpg";
import Fisica from "media/Fisica.jpg";
import Tecnologia from "media/Tecnologia.jpeg";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <div className="grid max-w-6xl grid-cols-1 mx-auto mt-4 lg:grid-cols-7 font-display">
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <h1 className="text-7xl font-bold tracking-tight">
            Tecnología y Estilos De Vida
          </h1>
          <h3 className="mt-3 text-2x1 text-gray-700 leading-relaxed">
            En esta página Web veremos algunos temas muy importantes. El primer
            tema que se tratará es la tecnología en el estilo de vida de las
            personas, este es el tema central del proyecto. Veremos temas de
            bioquímica en la vida de las personas y también veremos temas como
            análisis combinatorio y la Ley de Lorentz entre otros.
          </h3>
          <div className="flex mt-8 space-x-4">
            <a
              href="/perfil"
              className="px-4 py-3 font-semibold text-white transition duraction-200 transform rounded-sm shadow-sm bg-gray-700 hover:bg-gray-600"
            >
              Información Personal
            </a>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:max-w-full">
          <img
            src={Tecnologia}
            className="flex-shrink-0  w-full h-full"
            alt=""
          ></img>
        </div>
      </div>

      <div className="text-3xl font-extrabold p-8">
        <h3 className="mx-auto text-gray-600 uppercase text-md text-center">
          Video Explicativo Sobre Delitos informáticos
        </h3>
      </div>

      <div
        className="grid max-w-6xl grid-cols-3 mx-auto mt-16 font-display"
        id="Servicios"
      >
        <div className="col-span-1 lg:pr-8">
          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Delitos Informáticos
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            Desde hace algunos años el internet y el avance tecnológico ha
            logrado cambiar el mundo, impactar en el modo de vida de todas las
            personas y lograr cosas increíbles y maravillosas. Pero al mismo
            tiempo se ha convertido en una de las herramienta más usada por lo
            criminales.
          </p>

          <a
            href="https://adabogados.net/cuales-son-los-principales-delitos-informaticos/"
            className="mt-8 inline-block px-5 py-3 font-semibold text-white transition duraction-200 transform rounded-sm shadow-sm bg-gray-700 hover:bg-gray-600"
          >
            Learn more
          </a>
        </div>

        <div className="col-span-2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fgxm-cNqYIw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="text-center text-3xl font-extrabold p-6">
        <h4 className="font-semibold tracking-tight text-gray-500 uppercasetext-md">
          IMAGENES
        </h4>
      </div>

      <div
        className="grid max-w-6xl grid-cols-1 mx-auto mt-1 lg:grid-cols-7 font-display"
        id="Imagenes"
      >
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-8">
            <Link to="/ingles">
              <img
                src={Ingles}
                className="flex-shrink-0 w-full h-full"
                alt=""
              ></img>
            </Link>
          </div>
        </div>
        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-3">
          <Link to="/espanol">
            <img
              src={Espanol}
              className="flex-shrink-0 w-full h-full"
              alt=""
            ></img>
          </Link>
        </div>
      </div>

      <div
        className="grid max-w-6xl grid-cols-1 mx-auto mt-8 lg:grid-cols-7 font-display"
        id="Imagenes"
      >
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-8">
            <Link to="/bioetico">
              <img
                src={Bioetico}
                className="flex-shrink-0 w-full h-full"
                alt=""
              ></img>
            </Link>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-3">
          <Link to="/sociales">
            <img
              src={Sociales}
              className="flex-shrink-0 w-full h-full"
              alt=""
            ></img>
          </Link>
        </div>
      </div>

      <div
        className="grid max-w-6xl grid-cols-1 mx-auto mt-8 lg:grid-cols-7 font-display"
        id="Imagenes"
      >
        <div className="w-full h-full col-span-full lg:col-span-4 lg:pr-8">
          <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-8">
            <Link to="/calculo">
              <img
                src={Calculo}
                className="flex-shrink-0 w-full h-full"
                alt=""
              ></img>
            </Link>
          </div>
        </div>

        <div className="max-w-lg mx-auto col-span-full lg:col-span-3 lg:pr-3">
          <Link to="/fisica">
          <img
            src={Fisica}
            className="flex-shrink-0 w-full h-full"
            alt=""
          ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
// 1w1R21fHw1Guzq-cY7DutvwPcU_XizOQ8 || 1vzqyAUqXQggWKaGPLKlIwNJg1s6oxM0P
