import { HomeRouter, PresaleRouter } from "./routers";

export const APPS = [
  {
    subdomain: "axlegames.io",
    app: HomeRouter,
    main: true,
  },
  {
    subdomain: "sale.axlegames.io",
    app: PresaleRouter,
    main: false,
  },
];
