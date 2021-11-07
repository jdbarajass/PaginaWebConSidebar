import React from 'react'

const Footer = () => {
    return (
      <div className="text-gray-100 bg-gray-800 mt-10" id="footer">
        <div className="max-w-3xl mx-auto py-6">
          <h1 className="text-center text-lg lg:text-2xl">
            !!!Hola¡¡¡ Soy Estudiante Apasionado Por la Tecnología Del
          </h1>

          <div className="flex justify-center mt-6">
            <div className="bg-white rounded-md">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                  placeholder="Colegio Virtual Unicab"
                  arial-label="Enter your email"
                ></input>
                <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                  De Grado 11
                </button>
              </div>
            </div>
          </div>

          <hr className="h-px mt-6 bg-gray-700 border-none"></hr>

          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a
                href="/Perfil"
                className="text-xl font-bold text-gray-100 hover:text-gray-400"
              >
                Sitio Web Realizado Por: Tomas Bernal Chaparro
              </a>
            </div>

            <div className="flex mt-4 md:m-0">
              <div className="flex mt-4 md:m-0">
                <a
                  href="/inicio"
                  className="px-4 text-sm text-gray-100 font-medium hover_text-gray-400"
                >
                  Home
                </a>
                <a
                  href="/perfil"
                  className="px-4 text-sm text-gray-100 font-medium hover_text-gray-400"
                >
                  Mira Mi Perfil
                </a>
                <a
                  href="/Contacto"
                  className="px-4 text-sm text-gray-100 font-medium hover_text-gray-400"
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;