import { Keycloak_Client, KEYCLOAK_AUTH_URL } from "./constants";
import Keycloak from "keycloak-js";

//TODO get from api
export const tenantDetail = {
  realm: "",
  url: KEYCLOAK_AUTH_URL,
  clientId: Keycloak_Client,
};

export const _kc = new Keycloak(tenantDetail);
