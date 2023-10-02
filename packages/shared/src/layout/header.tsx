import React from 'react';
import { useKeycloak } from "@react-keycloak/web";

import {
  RiCalendarTodoLine,
  RiBuilding2Line,
  RiApps2Line,
  RiShutDownLine,
} from "react-icons/ri";
import { useState, useEffect } from "react";


export default function Header() {
  const { keycloak, initialized } = useKeycloak();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const rolActual = sessionStorage.getItem("rolActual");
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div>
 {keycloak.authenticated && (
      <button  color="white" className="boton" onClick={() => {keycloak.logout();}}>
        <RiShutDownLine className="h-5 w-5" />
        Salir
      </button>
    )}
    </div>
   
  );
}
