import { isMobile, isLocal } from "../core/helpers";

const settings = {
  assetsUrl: ".",
  localStoreName: "appState_020825",

  restartCount: 0,

  isMobile: isMobile(),
  isLocal: isLocal(),

  desktopBounds: {
    width: 532,
    height: 430,
  },
  mobileBounds: {
    width: 532,
    height: 430,
  },
  switchToMobileWidth: 720,
  currentPage: "main",
  particlesCount: 30,
};

export default settings;
