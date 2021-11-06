import React from 'react'
import Inicio from "pages/Inicio";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const PrivateInicio = () => {
    return (
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Inicio />
        <Footer />
      </div>
    );
}

export default PrivateInicio
