const PHOTOS = require("./photos");
const TASKS = [
  { id: "breath", photo: PHOTOS.breath, zh: { name: "躺着腹式呼吸", dose: "1 分钟", how: ["仰卧屈膝，脚平放。", "鼻子吸气肚子鼓。", "嘴慢慢吐，肩不耺。"], tip: "用来放松，不要愔气。" }, en: { name: "Diaphragmatic breathing", dose: "1 minute", how: ["Lie on your back, knees bent, feet flat.", "Breathe in through the nose so the belly rises.", "Breathe out slowly. Do not shrug."], tip: "Relaxation only." } },
  { id: "pelvis", photo: PHOTOS.pelvis, zh: { name: "骨盆微动", dose: "8–10 次", how: ["仰卧屈膝。", "后腰轻轻压向垫子停 3 秒。", "放松。不要把屁股抬起来。"], tip: "是点头不是桥式。" }, en: { name: "Gentle pelvic tilt", dose: "8-10 reps", how: ["Knees bent.", "Press low back to the mat 3 seconds.", "Do not lift the hips."], tip: "A small nod, not a bridge." } },
  { id: "ankle", photo: PHOTOS.ankle, zh: { name: "勾脚—绷脚", dose: "每边 10 次", how: ["腿伸或微屈。", "脚尖勾向头。", "再绷直。"], tip: "右腿麻就减小幅度。" }, en: { name: "Ankle pump", dose: "10 each side", how: ["Leg straight or slightly bent.", "Pull toes toward the head.", "Then point the foot."], tip: "Smaller range if numb." } },
  { id: "squeeze", photo: PHOTOS.squeeze, zh: { name: "勾臀不抬腰", dose: "8 次 × 5 秒", how: ["仰卧屈膝。", "夹紧屁股 5 秒，腰不离垫。", "放松再做。"], tip: "力在屁股不在腰。" }, en: { name: "Glute squeeze (no bridge)", dose: "8 x 5 seconds", how: ["Knees bent.", "Squeeze 5 seconds. Hips stay down.", "Relax and repeat."], tip: "Work in the glutes, not the back." } },
  { id: "clam", photo: PHOTOS.clam, zh: { name: "侧躺开蛤壳", dose: "每边 8 次", how: ["侧躺，脚并拢。", "上膝开 10–15 厘米。", "腰不要转。"], tip: "后背可靠墙。" }, en: { name: "Side-lying clamshell", dose: "8 each side", how: ["Lie on your side, feet together.", "Open the top knee 10-15 cm.", "Do not roll the waist."], tip: "Back against a wall if needed." } },
  { id: "walk", photo: PHOTOS.walk, zh: { name: "平路短走", dose: "分几次", how: ["穿鞋走平路。", "麻或痛加重就停。", "分钟数填到今日页。"], tip: "不要跑、爬坡、提重。" }, en: { name: "Short flat walking", dose: "Several short bouts", how: ["Walk on flat ground in shoes.", "Stop if pain increases.", "Log minutes on Today."], tip: "No running, hills, or lifting." } },
  { id: "meds", photo: "", zh: { name: "按医嘱服药", dose: "按处方", how: ["按门诊医嘱服药。", "不要自行加量。"], tip: "封闭须门诊操作。" }, en: { name: "Take prescribed medicine", dose: "As prescribed", how: ["Follow clinic directions.", "Do not increase the dose yourself."], tip: "Injections belong in clinic." } }
];
const FORBIDDEN = {
  zh: "保护期不做：仰卧起坐、久平板、俯卧两头起、大力后伸、扭转、跑跳、搬重物。",
  en: "Do not: sit-ups, long planks, prone extensions, twisting, running, heavy lifting."
};
const COPY = {
  zh: { tagline: "保护期康复 · 非医疗诊断", title: "腰护打卡", pain: "躺着腿痛 0–10", walk: "一次能走（分钟）", guide: "动作指导和注意", poseHint: "对照图片做，痛就减小幅度", safety: "安全停", safetyBody: "力弱、会阴麻、小便变差：停练并联系医生。", export: "复制记录到剪贴板", reset: "重置今天", resetConfirm: "清空今天打卡？", copied: "已复制", pain7: "近 7 天躺着痛分", noRecord: "无记录", notes: "我的情况（可改）", notesHint: "数据只存在本机微信。不能代替医嘱。", about: "微信小程序独立版，无需 Grok 登录。" },
  en: { tagline: "Protection-phase rehab", title: "Spine Check-in", pain: "Leg pain at rest 0-10", walk: "Walk minutes", guide: "How to do it", poseHint: "Match the photo.", safety: "Stop if", safetyBody: "Weakness, saddle numbness, or bladder change: stop and call a doctor.", export: "Copy records", reset: "Reset today", resetConfirm: "Clear today's check-in?", copied: "Copied", pain7: "Resting pain, last 7 days", noRecord: "No record", notes: "My situation", notesHint: "Stored on this phone only.", about: "Standalone WeChat mini program. No Grok login." }
};
module.exports = { TASKS, FORBIDDEN, COPY };
