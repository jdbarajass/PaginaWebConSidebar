import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
const SidebarLinks = () => {
  return (
    <div>
      <ul className="mt-12">
        <SidebarRoute to="/Perfil"title="Perfil De Tomas Bernal"icon="fas fa-smile-wink"/>
        <SidebarRoute to="/Ingles" title="Inglés" icon="fas fa-language" />
        <SidebarRoute to="/Espanol" title="Español" icon="fas fa-book" />
        <SidebarRoute to="/Numerico" title="Númerico" icon="fas fa-list-ol" />
        <SidebarRoute to="/Sociales" title="Sociales" icon="fas fa-landmark" />
      </ul>
      <div className="mt-20 ">
        <Link to="/Inicio"  >
        <button className="button">Otra forma de ver la página</button>
        </Link>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="py-3 w-full flex flex-col items-center justify-center">
      <img src="logo.png" alt="Logo" className="h-16" />
      <span className="my-2 text-xl font-bold text-center">
        Actividades Finales 4to Periodo
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex'>
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route text-white bg-indigo-700'
            : 'sidebar-route text-gray-900 hover:text-white hover:bg-indigo-400'
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
