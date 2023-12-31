export const onTokens = (token: any, keycloak: any) => {
    if (keycloak.authenticated) {
        

        if ("api-inventarios" in keycloak.resourceAccess) {
            const apiInventarios = keycloak.resourceAccess["api-inventarios"];
            const roles = apiInventarios["roles"];
            if(Array.isArray(roles) && roles.length>10){
              console.log("ppp", roles);
            }else{
              sessionStorage.setItem("rol_seleccionado", roles[0].replace(/-/g, " "));
            }
           
        } else {
            console.log(false);
        }

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
    console.log("Implementar alguna funcionalidad...", event);
};
