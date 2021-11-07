import React, { useState } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import PrivateInicio from "layouts/PrivateInicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "context/userContext";
import Inicio from "pages/Inicio";
import Espanol from "pages/Espanol";
import Ingles from "pages/Ingles";
import Calculo from "pages/Calculo";
import Perfil from "pages/Perfil";
import Fisica from "pages/Fisica";
import Bioetico from "pages/Bioetico";
import Sociales from "pages/Sociales";
import Contacto from "pages/Contacto";
import Gracias from "pages/Gracias";
import "styles/globals.css";
import "styles/styles.css";

// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/Contacto" element={<Contacto />}>
              <Route path="Contacto" element={<Contacto />} />
            </Route>

            <Route path="/Inicio" element={<PrivateInicio />}>
              <Route path="Inicio" element={<Inicio />} />
              <Route path="Contacto" element={<Contacto />} />
            </Route>
            <Route path="/" element={<PrivateLayout />}>
              <Route path="Espanol" element={<Espanol />} />
              <Route path="Ingles" element={<Ingles />} />
              <Route path="Calculo" element={<Calculo />} />
              <Route path="Perfil" element={<Perfil />} />
              <Route path="Sociales" element={<Sociales />} />
              <Route path="Bioetico" element={<Bioetico />} />
              <Route path="Fisica" element={<Fisica />} />
            </Route>
              <Route path="Gracias" element={<Gracias />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
