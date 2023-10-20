import React, { FC, ReactNode } from "react";
import { useKeycloak } from "@react-keycloak/web";
import Loader from "@widgets/loader";

interface IlayoutProps {
  children: ReactNode;
}

const RequireAuth = ({ children }: IlayoutProps) => {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  return isLoggedIn ? <div className="bg-white">{children}</div> : <><NoAcceso /></>;

};


function NoAcceso() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader />
      Esperar ...
      <div className="text-3xl font-semibold m-4 text-red-500">Existe un problema al Ingresar</div>
      <p className="text-lg text-gray-600">
        Lo sentimos, hay un problema al ingresar al sistema. Por favor, revisa tu conexión a Internet o asegúrate de estar registrado como usuario autorizado.
      </p>
    </div>
  );
}
export default RequireAuth; 