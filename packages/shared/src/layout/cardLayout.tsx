import   { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

export interface ICard {
  data:{
  icon?: any;
  title: string;
  description?: string;
  link: string;
  }
}


<div className="max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
<h2 className="text-lg font-semibold text-center text-blue-500 sm:text-xl">Me adapto a todo</h2>
<p className="mt-3 text-gray-600">Esta caja es adaptable. Diseño primero para las dimensiones pequeñas y voy aumentando para las grandes.</p>
</div>


const CardLayout = (botones:ICard) => {

  return (
    <div className="max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100" >
      <div className="flex items-center justify-center mt-3 bg-blue-700 h-9 w-9 rounded-xl">
        {/* icono */}
        <h1 className="absolute mx-auto text-2xl text-center text-white right">
        { botones.data.icon}
        </h1>
      </div>

      {/* Descripción */}
      <div className="p-7 border-b-1 h-28">
        <small >{botones.data.description}</small>
      </div>
      {/* Links */}
      <div className="flex flex-wrap items-center w-auto border-t-2 rounded-b-xl ">
       
        <NavLink
              className="w-auto p-1 px-2 m-2 text-blue-700 shadow-sm border-1 rounded-2xl"
              
              to={botones.data.link}
            >
             {botones.data.title}
            </NavLink>

      </div>
    </div>
  );
};

export default CardLayout;
