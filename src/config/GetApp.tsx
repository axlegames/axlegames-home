import { APPS } from "./constants";

export const getApp = () => {
  const domain = window.location.hostname;
  if (domain === APPS[0].subdomain) return APPS[0].app;
  return APPS[1].app;
};
