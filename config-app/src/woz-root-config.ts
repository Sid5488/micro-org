import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@woz/react-single",
  app: () => System.import("@woz/react-single"),
  activeWhen: (location) => location.pathname === '/'
});

registerApplication({
  name: "@woz/react-multiples",
  app: () => System.import("@woz/react-multiples"),
  activeWhen: ['/react-multiples']
});

start({
  urlRerouteOnly: true,
});
