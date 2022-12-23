import { HomeRouter, PresaleRouter } from "./routers";

export const APPS = [
  {
    subdomain: "localhost",
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: "sale",
    app: PresaleRouter,
    main: false,
  },
];
