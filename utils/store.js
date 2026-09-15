const { TASKS, COPY } = require("./data");
const KEY = "yaohu-mp-v1";

function todayStr() {
  const p = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" }).split(/[/-]/);
  if (p.length === 3) return p[0] + "-" + p[1].padStart(2, "0") + "-" + p[2].padStart(2, "0");
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

function load() {
  const raw = wx.getStorageSync(KEY);
  if (raw && typeof raw === "object") return raw;
  return { locale: "zh", profile: "双侧 L4 峡部裂，暂无滑脱；去年 PELD；右腿休息痛/麻。", hist: {} };
}

function save(state) { wx.setStorageSync(KEY, state); }

function ensureDay(state, date) {
  if (!state.hist[date]) state.hist[date] = { pain: "", walk: "", tasks: {} };
  const rec = state.hist[date];
  rec.n = TASKS.filter((t) => rec.tasks[t.id]).length;
  return rec;
}

function lastN(n) {
  const parts = todayStr().split("-").map(Number);
  const y = parts[0], m = parts[1], d = parts[2];
  const out = [];
  for (let i = n - 1; i >= 0; i--) {
    const dt = new Date(Date.UTC(y, m - 1, d - i));
    out.push(dt.toISOString().slice(0, 10));
  }
  return out;
}

function csvText(state) {
  const loc = state.locale === "en" ? "en" : "zh";
  const c = COPY[loc];
  const names = ["日期", c.pain, c.walk, "完成"].concat(TASKS.map((t) => t.zh.name + "/" + t.en.name)).concat(["备注"]);
  const dates = Object.keys(state.hist).sort();
  const td = todayStr();
  if (dates.indexOf(td) < 0) dates.push(td);
  const lines = [names.join(",")];
  dates.forEach((d) => {
    const h = state.hist[d] || { pain: "", walk: "", tasks: {} };
    const n = TASKS.filter((t) => h.tasks && h.tasks[t.id]).length;
    const row = [d, h.pain || "", h.walk || "", n];
    TASKS.forEach((t) => row.push(h.tasks && h.tasks[t.id] ? "是" : "否"));
    row.push(d === td ? state.profile : "");
    lines.push(row.map((v) => '"' + String(v).replace(/"/g, '""') + '"').join(","));
  });
  return lines.join("\n");
}

function viewTasks(state) {
  const loc = state.locale === "en" ? "en" : "zh";
  const other = loc === "zh" ? "en" : "zh";
  const rec = ensureDay(state, todayStr());
  return TASKS.map((task) => ({
    id: task.id,
    photo: task.photo,
    name: task[loc].name,
    other: task[other].name,
    dose: task[loc].dose,
    how: task[loc].how,
    tip: task[loc].tip,
    checked: Boolean(rec.tasks[task.id])
  }));
}

module.exports = { todayStr, load, save, ensureDay, lastN, csvText, viewTasks };
