export class Constantes {
  /**
     * Url para la conexión con api-gateway
     */
  static URLCONEXIONGRAPQL: string = "http://10.64.103.116:3002/graphql";

  /**
   * Url para la conexión con key-cloack
   */
  static URLKEYCLOACK:string = "https://dev-sso.msp.gob.ec/";

  /** 
   * realm key-cloack
   */
  static REALMKEYCLOACK: string = "msp-nacional";

  static CLIENTCLOACK: string = "local-app-inventarios-terminal";

  static URLHOME: string = "http://localhost:9000/dashboard";

  static CLIENTINVENTARIO: string = "api-inventarios";
}
