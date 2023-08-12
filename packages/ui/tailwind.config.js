// const sharedConfig = require("tailwind-config/tailwind.config.js");
import sharedConfig from "tailwind-config";

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [sharedConfig],
};
