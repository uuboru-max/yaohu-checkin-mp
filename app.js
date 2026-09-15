const { load, applyTabBar } = require("./utils/store");

App({
  onLaunch() {
    applyTabBar(load().locale);
  },
  onShow() {
    applyTabBar(load().locale);
  },
});
