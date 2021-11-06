import React, { useState } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import PrivateInicio from "layouts/PrivateInicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "context/userContext";
import Inicio from "pages/Inicio";
import Espanol from "pages/Espanol";
import Ingles from "pages/Ingles";
import Numerico from "pages/Numerico";
import Perfil from "pages/Perfil";
import Sociales from "pages/Sociales";
import "styles/globals.css";
import "styles/styles.css";

// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain="misiontic-concesionario.us.auth0.com"
      clientId="WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g"
      redirectUri="http://localhost:3000/admin"
      audience="api-autenticacion-concesionario-mintic"
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/Inicio" element={<PrivateInicio />}>
              <Route path="Inicio" element={<Inicio />} />
            </Route>
            <Route path="/" element={<PrivateLayout />}>
              <Route path="Espanol" element={<Espanol />} />
              <Route path="Ingles" element={<Ingles />} />
              <Route path="Numerico" element={<Numerico />} />
              <Route path="Perfil" element={<Perfil />} />
              <Route path="Sociales" element={<Sociales />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
