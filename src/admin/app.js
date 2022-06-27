import Favicon from "./extensions/Favicon.ico";
import Truck from "./extensions/Truck.png";
// import Favicon from "./extensions"

export default {
  config: {
    auth: {
      logo: Truck,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: Truck,
    },
    locales: ["fr", "de"],

    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
