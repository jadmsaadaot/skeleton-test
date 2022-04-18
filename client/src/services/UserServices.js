import { _kc } from "../constants/tenantConstants";
import { Keycloak_Client } from "../constants/constants";

const KeycloakData = _kc;
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (dispatch) => {
  _kc
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
      checkLoginIframe: false,
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.warn("not authenticated!");
        doLogin();
        return;
      }

      if (!KeycloakData.resourceAccess[Keycloak_Client]) {
        doLogout();
      }

      const UserRoles = KeycloakData.resourceAccess[Keycloak_Client].roles;
      dispatch(setUserRoles(UserRoles));
      dispatch(setUserToken(KeycloakData.token));
      //Set Cammunda/Formio Base URL
      setApiBaseUrlToLocalStorage();

      KeycloakData.loadUserInfo().then((res) => dispatch(setUserDetails(res)));
      dispatch(setUserAuth(res.authenticated));
      refreshToken(store);
    })
    .catch(console.error);
};

let refreshInterval;
const refreshToken = (store) => {
  refreshInterval = setInterval(() => {
    KeycloakData &&
      KeycloakData.updateToken(5)
        .then((refreshed) => {
          if (refreshed) {
            store.dispatch(setUserToken(KeycloakData.token));
          }
        })
        .catch((error) => {
          console.log(error);
          userLogout();
        });
  }, 6000);
};

/**
 * Logout function
 */
const userLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  clearInterval(refreshInterval);
  doLogout();
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const getFormioToken = () => localStorage.getItem("formioToken");

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getUsername,
  hasRole,
  getFormioToken,
};

export default UserService;