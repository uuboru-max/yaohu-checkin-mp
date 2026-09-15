const { COPY } = require("../../utils/data");
const { load, save, todayStr, ensureDay, viewTasks } = require("../../utils/store");
Page({
  data: { copy: COPY.zh, locale: "zh", dateLabel: "", pain: "", walk: "", done: 0, pct: 0, tasks: [] },
  onShow() { this.refresh(); },
  refresh() {
    const state = load();
    const loc = state.locale === "en" ? "en" : "zh";
    const rec = ensureDay(state, todayStr());
    this.setData({ copy: COPY[loc], locale: loc, dateLabel: todayStr(), pain: rec.pain, walk: rec.walk, done: rec.n, pct: Math.round((rec.n / 7) * 100), tasks: viewTasks(state) });
    wx.setNavigationBarTitle({ title: COPY[loc].title });
  },
  setLang(e) { const state = load(); state.locale = e.currentTarget.dataset.lang; save(state); this.refresh(); },
  onPain(e) { const state = load(); ensureDay(state, todayStr()).pain = e.detail.value; save(state); },
  onWalk(e) { const state = load(); ensureDay(state, todayStr()).walk = e.detail.value; save(state); },
  onToggle(e) { const state = load(); const rec = ensureDay(state, todayStr()); rec.tasks[e.detail.id] = !rec.tasks[e.detail.id]; save(state); this.refresh(); },
  onReset() {
    const state = load();
    wx.showModal({
      title: COPY[state.locale === "en" ? "en" : "zh"].reset,
      content: COPY[state.locale === "en" ? "en" : "zh"].resetConfirm,
      success: (res) => { if (!res.confirm) return; delete state.hist[todayStr()]; save(state); this.refresh(); }
    });
  },
  onExport() {
    const { csvText } = require("../../utils/store");
    const state = load();
    wx.setClipboardData({ data: csvText(state), success: () => wx.showToast({ title: COPY[state.locale === "en" ? "en" : "zh"].copied, icon: "none" }) });
  }
});
