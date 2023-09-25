import { NavLink } from "react-router-dom";

export interface ICard {
  data:{
  icon?: any;
  title: string;
  description?: string;
  link: string;
  }
}

const CardLayout = (botones:ICard) => {

  return (
    <div className="flex flex-col items-center m-3 border-2 shadow-lg cursor-pointer w-21 rounded-xl " >
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
