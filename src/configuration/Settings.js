import { isMobile, isLocal } from "../core/helpers";

const urlParams = new URLSearchParams(window.location.search);
const showPreloader = urlParams.get("preloader");
const isAdaptive = urlParams.get("adaptive");

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

  showPreloader: showPreloader ? showPreloader == "1" : false,
  isAdaptive: isAdaptive ? isAdaptive == "1" : false,
};

export default settings;
