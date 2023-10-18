import React, { useEffect } from 'react';
import { useSidebar } from './SidebarContext';

function Sidebar() {
    const { expanded } = useSidebar();
    // Aquí puedes usar la variable `expanded` para aplicar las clases de CSS
   
  const sidebarWidth = expanded ? 400 : 20;
  const sidebayOpacity = expanded ? 100 : 0;
  
  // Definir la función highlightSidebarItem
  const select = (button: HTMLButtonElement) => {
    // Lógica para resaltar el elemento del menú aquí
  };

 

  return (
    <div id="sidebar" className={`w-${sidebarWidth} bg-gray-100 h-screen fixed rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden`}>
   
      <div className="p-2 space-y-4">
       
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={(event) => select(event.currentTarget)}
        >
          <i className="fas fa-home text-lg"></i>
          <span className={`font-normal text-sm transition-all duration-200 opacity-${sidebayOpacity}`}>Inicio</span>
        </button>

      
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={(event) => select(event.currentTarget)}
        >
          <i className="fas fa-check-circle"></i>
          <span className={`font-normal text-sm transition-all duration-200 opacity-${sidebayOpacity}`}>Opción 1</span>
        </button>

        
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={(event) => select(event.currentTarget)}
        >
          <i className="fas fa-users"></i>
          <span className={`font-normal text-sm transition-all duration-200 opacity-${sidebayOpacity}`}>Opción 2</span>
        </button>

       
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={(event) => select(event.currentTarget)}
        >
          <i className="fas fa-store"></i>
          <span className={`font-normal text-sm transition-all duration-200 opacity-${sidebayOpacity}`}>Opción 3</span>
        </button>

       
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={(event) => select(event.currentTarget)}
        >
          <i className="fas fa-exchange-alt"></i>
          <span className={`font-normal text-sm transition-all duration-200 opacity-${sidebayOpacity}`}>Opción 4</span>
        </button>

       
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={(event) => select(event.currentTarget)}
        >
          <i className="fas fa-sign-out-alt"></i>
          <span className={`font-normal text-sm transition-all duration-200 opacity-${sidebayOpacity}`}>Salir</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
