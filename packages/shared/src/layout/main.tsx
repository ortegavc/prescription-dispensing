import React, { FC, ReactNode, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

import Header from "./header";
import Subnavbar from "./Subnavbar";

export interface IlayoutProps {
    children: ReactNode;
}

export const Main = () => {
    const keycloak = useKeycloak();
    const navigate = useNavigate();
    // Verifica si el usuario está autenticado
    if (!keycloak.keycloak.authenticated) {
        // Redirige al usuario a la página de inicio de sesión u otra página de autenticación
        // keycloak.keycloak.login();
        return null;
    }

    return (
        <Fragment>
            <div className="w-full max-w-screen-xl mx-auto px-4 bg-gray-100">
                <header className="mx-2">{<Header />}</header>

                <div className="container md:flex bg-blue-100">
                    <aside className="px-4 md:flex-none md:w-64 bg-yellow-200">
                        <div className="px-4 py-2 mb-2 bg-red-300">Titulo de aside</div>
                        <Subnavbar />
                    </aside>
                    <main className="px-4 mb-6 bg-red-300" flex-grow>
                        <Outlet />
                    </main>
                </div>
            </div>
        </Fragment>
    );
};
