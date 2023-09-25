import React from 'react';
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center p-4 justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-white">
        <h1 color="blue-gray" className="font-normal text-sm">
        &copy; 2023 Gobierno de la Republica del Ecuador
        </h1>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
            <Link
            to="#"
            color="blue-gray"
            className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
            Soporte Técnico
            </Link>
        </li>
        <li>
            <Link
            to="#"
            color="blue-gray"
            className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             Politica de privacidad
            </Link>
        </li>
        <li>
            <Link
            to="#"
            color="blue-gray"
            className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
            Licenciamiento
            </Link>
        </li>
        <li>
            <Link
            to="#"
            color="blue-gray"
            className="text-sm font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contacto 
            </Link>
        </li>
        </ul>
    </footer>
  );
}
