const { COPY, FORBIDDEN } = require("../../utils/data");
const { load, save, viewTasks, todayStr, ensureDay } = require("../../utils/store");
Page({
  data: { copy: COPY.zh, avoid: FORBIDDEN.zh, tasks: [] },
  onShow() { this.refresh(); },
  refresh() {
    const state = load();
    const loc = state.locale === "en" ? "en" : "zh";
    this.setData({ copy: COPY[loc], avoid: FORBIDDEN[loc], tasks: viewTasks(state) });
  },
  onToggle(e) {
    const state = load();
    const rec = ensureDay(state, todayStr());
    rec.tasks[e.detail.id] = !rec.tasks[e.detail.id];
    save(state); this.refresh();
  }
});
