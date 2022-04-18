const getFromEnv = (key, defaultValue = "") => {
  if (!key) return "";

  return window._env_?.[key] || process.env[key] || defaultValue;
};

//keycloak
export const Keycloak_Client = getFromEnv(
  REACT_APP_KEYCLOAK_CLIENT,
  "forms-flow-web"
);

export const KEYCLOAK_URL = getFromEnv(REACT_APP_KEYCLOAK_URL);

export const KEYCLOAK_AUTH_URL = `${KEYCLOAK_URL}/auth`;
