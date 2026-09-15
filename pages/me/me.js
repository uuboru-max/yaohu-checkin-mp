const { COPY, VOCAB } = require("../../utils/data");
const { load, save } = require("../../utils/store");

Page({
  data: { copy: COPY.zh, profile: "", locale: "zh", vocab: VOCAB },
  onShow() {
    const state = load();
    const loc = state.locale === "en" ? "en" : "zh";
    this.setData({ copy: COPY[loc], profile: state.profile, locale: loc, vocab: VOCAB });
  },
  setLang(e) {
    const state = load();
    state.locale = e.currentTarget.dataset.lang;
    save(state);
    this.onShow();
  },
  onProfile(e) {
    const state = load();
    state.profile = e.detail.value;
    save(state);
    this.setData({ profile: state.profile });
  },
});
