import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@lc/app-react-main",
  app: () => System.import("@lc/app-react-main"),
  // activeWhen: (location) => location.pathname === "/react-main",
  activeWhen: ["/react-main"],
});

start({
  urlRerouteOnly: true,
});
