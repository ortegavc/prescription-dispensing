import "./global.css";
import React, { Fragment, StrictMode } from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { AuthClientTokens } from '@react-keycloak/core/lib/types';
import { Main, onEvent, onTokens, RequireAuth } from "layout";
import Keycloak from "keycloak-js";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { ApolloProvider } from '@apollo/client';
import { client } from '@codegen/client'
import * as configDev from '@config/config.local';
import * as configProd from '@config/config.prod';
import * as graphql from "@graphql/__generated__/graphql-types";

interface IlayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: IlayoutProps) => {

  const isDevelopment = process.env.NODE_ENV === 'development';
  const config = isDevelopment ? configDev : configProd;


  //Configuramos keycloak
  const keycloak = new Keycloak({
    url: config.Constantes.URLKEYCLOACK,
    realm: config.Constantes.REALMKEYCLOACK,
    clientId: config.Constantes.CLIENTCLOACK,
  });


  return (
    <Fragment>
      <StrictMode>
        <ReactKeycloakProvider
          initOptions={{ onLoad: 'login-required', checkLoginIframe: false, silentCheckSsoRedirectUri: `${window.location.origin}/silent` }} authClient={keycloak}
          onTokens={(token: AuthClientTokens) => { onTokens(token, keycloak); }} onEvent={(event: any) => onEvent(event)}
        >
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Routes>
                <Route element={<Main />}>
                  <Route
                    path="/*"
                    element={
                      <RequireAuth>
                        {children}
                      </RequireAuth>
                    }
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </ApolloProvider>
        </ReactKeycloakProvider>
      </StrictMode>
    </Fragment>
  )

};


export default Layout;
export { graphql }
export * as sharedService from '@services/sharedServices';
export { useEventDispatcher } from "@eventDispatcher/EventDispatcherContext";