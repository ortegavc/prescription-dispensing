export const onTokens = (token: any, keycloak: any) => {

  if (keycloak.authenticated) {

    if (keycloak?.tokenParsed.sub !== "undefined") {
      sessionStorage.setItem("keycloakTokenInv_terminal", token.token);
      sessionStorage.setItem("usuarioId_terminal", keycloak?.tokenParsed.sub);
      sessionStorage.setItem("usuarioNombre_terminal", keycloak?.tokenParsed.name);

    }
  } else {
    sessionStorage.clear();
    keycloak.login();
  }

};

export const onEvent = (event: any) => {
  console.log("Implementar alguna funcionalidad...", event)
};


