import React, { FC, ReactNode } from "react";
import { useKeycloak } from "@react-keycloak/web";

interface IlayoutProps {
  children: JSX.Element;
}

const RequireAuth = ({ children }: IlayoutProps) => {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  return isLoggedIn ? children : null;
};

export default RequireAuth; 