import React, { Fragment, useEffect } from 'react';
import { useSidebar } from './SidebarContext';
import { Link } from 'react-router-dom';
import * as configDev from '@config/config.local';
import * as configProd from '@config/config.prod';
import { useKeycloak } from "@react-keycloak/web";

function Sidebar() {
  const { expanded } = useSidebar();
  const isDevelopment = process.env.NODE_ENV === 'development';
  const config = isDevelopment ? configDev : configProd;
  const { keycloak } = useKeycloak();

  const sidebarWidth = expanded ? 400 : 20;
  const sidebayOpacity = expanded ? 100 : 0;

  const handleLogout = () => {
    keycloak.logout({ redirectUri: config.Constantes.URLHOME });
  };


  const navigation = [
    { name: 'Inicio', to: '/terminal', icon: 'fa-solid fa-house', current: true },
    { name: 'Despachar', to: '/terminal/usuario', icon: 'fa-solid fa-cart-plus', current: false },
    { name: 'Despachos', to: '/terminal/despachos', icon: 'fa-solid fa-dolly', current: false },
    { name: 'Reportes', to: '/terminal/reportes', icon: 'fa-solid fa-file-pdf', current: false },
    { name: 'Salir', to: '#', icon: 'fa-solid fa-right-from-bracket', current: false },
  ]

  return (
    <div id="sidebar" className={`w-${sidebarWidth} bg-gray-200 h-screen fixed rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden`}>

      <div className="p-2 space-y-4 ">

        {navigation.map((item, i) => (
          <Fragment key={i}>
            {item.name !== 'Salir' ? (
              <li className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-800 rounded-lg group gap-3">
                <Link to={item.to}>
                  <i className={item.icon}></i>
                  <span className={`font-normal text-sm px-3 transition-all duration-200 opacity-${sidebayOpacity}`}>{item.name}</span>
                </Link>
              </li>
            ) : (
              <li className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-600 rounded-lg group gap-3">
                <Link to="#" onClick={handleLogout}>
                  <i className={item.icon}></i>
                  <span className={`font-normal text-sm px-3 transition-all duration-200 opacity-${sidebayOpacity}`}>{item.name}</span>
                </Link>
              </li>
            )}
          </Fragment>
        ))}

      </div>
    </div>
  );
}

export default Sidebar;
