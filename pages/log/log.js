const { COPY, TASKS } = require("../../utils/data");
const { load, lastN, csvText } = require("../../utils/store");
Page({
  data: { copy: COPY.zh, bars: [], rows: [], datesLabel: "" },
  onShow() {
    const state = load();
    const loc = state.locale === "en" ? "en" : "zh";
    const days = lastN(7);
    const bars = days.map((d) => {
      const p = Number((state.hist[d] && state.hist[d].pain) || 0);
      return { date: d, h: Math.max(12, (Math.min(10, p) / 10) * 160) };
    });
    const rows = [...days].reverse().map((d) => {
      const h = state.hist[d];
      if (!h) return { date: d, line: COPY[loc].noRecord };
      const n = TASKS.filter((t) => h.tasks && h.tasks[t.id]).length;
      const line = loc === "zh" ? `痛 ${h.pain || "-"} · 走 ${h.walk || "-"} 分钟 · 完成 ${n}/7` : `Pain ${h.pain || "-"} · Walk ${h.walk || "-"} min · Done ${n}/7`;
      return { date: d, line };
    });
    this.setData({ copy: COPY[loc], bars, rows, datesLabel: days.map((d) => d.slice(5)).join("  ") });
  },
  onExport() {
    const state = load();
    wx.setClipboardData({ data: csvText(state), success: () => wx.showToast({ title: COPY[state.locale === "en" ? "en" : "zh"].copied, icon: "none" }) });
  }
});
