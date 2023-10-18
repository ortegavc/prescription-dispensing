import React from 'react';
import { useSidebar } from './SidebarContext';

function Navbar() {
    const { toggleSidebar } = useSidebar();
    // const expandSidebar =()=>{

    // }

  return (
    <nav className="bg-blue-600 border-b border-gray-300 py-7 ">
      <div className="flex justify-between items-center px-6">
        {/* Ícono de Menú (cyan) */}
        <button id="menu-button" onClick={toggleSidebar}>
          <i className="fas fa-bars text-white text-lg"></i>
        </button>
        {/* Logo (centrado) */}
        <div className="flex mx-auto gap-7 text-white">
        <div >Ministerio de Salud Pública</div>
        <div>
          <img
            src="http://dev-sni.msp.gob.ec/@msp/shared/1.0.0/20231bc1ffac3dcc134d.svg"
            alt="msp"
            className="h-8 w-auto"
          />
        </div>
        <div>República del Ecuador</div>
        </div>
        {/* Ícono de Notificación y Perfil */}
        <div className="space-x-4">
          <button>
            <i className="fas fa-bell text-white text-lg"></i>
          </button>
          {/* Botón de Perfil */}
          <button>
            <i className="fas fa-user text-white text-lg"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
