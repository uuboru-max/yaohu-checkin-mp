const PHOTOS = require("./photos");

const TASKS = [
  {
    id: "breath",
    photo: PHOTOS.breath,
    zh: { name: "躺着腹式呼吸", dose: "1 分钟", how: ["仰卧屈膝，脚平放。", "鼻子吸气肚子鼓。", "嘴慢慢吐，肩不耺。"], tip: "用来放松，不要愔气。" },
    en: {
      name: "Diaphragmatic breathing",
      dose: "1 minute",
      how: [
        "Lie on your back with your knees bent and feet flat.",
        "Breathe in through your nose so your belly rises.",
        "Breathe out slowly through your mouth. Keep your shoulders relaxed.",
      ],
      tip: "This is for relaxation. Do not hold your breath.",
    },
  },
  {
    id: "pelvis",
    photo: PHOTOS.pelvis,
    zh: { name: "骨盆微动", dose: "8–10 次", how: ["仰卧屈膝。", "后腰轻轻压向垫子停 3 秒。", "放松。不要把屁股抬起来。"], tip: "是点头不是桥式。" },
    en: {
      name: "Gentle pelvic tilt",
      dose: "8–10 reps",
      how: [
        "Lie on your back with your knees bent.",
        "Gently press your lower back into the mat and hold for 3 seconds.",
        "Relax. Do not lift your hips.",
      ],
      tip: "A small pelvic nod \u2014 not a bridge.",
    },
  },
  {
    id: "ankle",
    photo: PHOTOS.ankle,
    zh: { name: "勾脚—绷脚", dose: "每边 10 次", how: ["腿伸或微屈。", "脚尖勾向头，小腿后侧轻拉。", "再绷直。"], tip: "右腿麻就减小幅度。" },
    en: {
      name: "Ankle pumps",
      dose: "10 per side",
      how: [
        "Keep the leg straight or slightly bent.",
        "Pull your toes toward your head until you feel a light stretch in the calf.",
        "Then point your toes away.",
      ],
      tip: "Use a smaller range if your right leg is numb.",
    },
  },
  {
    id: "squeeze",
    photo: PHOTOS.squeeze,
    zh: { name: "勾臀不抬腰", dose: "8 次 × 5 秒", how: ["仰卧屈膝，手可放屁股侧面确认发力。", "夹紧屁股 5 秒，腰和屁股不离开垫子。", "放松再做。"], tip: "力在屁股不在腰。" },
    en: {
      name: "Glute squeeze (no bridge)",
      dose: "8 holds × 5 seconds",
      how: [
        "Lie on your back with your knees bent. You may rest one hand on the side of the glute to feel it working.",
        "Squeeze the glutes for 5 seconds. Keep your hips and lower back on the mat.",
        "Relax, then repeat.",
      ],
      tip: "The effort should be in the glutes, not the lower back.",
    },
  },
  {
    id: "clam",
    photo: PHOTOS.clam,
    zh: { name: "侧躺开蛤壳", dose: "每边 8 次", how: ["侧躺，膝髋微屈，脚并拢。", "上膝张开 10–15 厘米。", "腰不要转。"], tip: "后背可靠墙。" },
    en: {
      name: "Side-lying clamshell",
      dose: "8 per side",
      how: [
        "Lie on your side with hips and knees slightly bent and feet together.",
        "Lift the top knee 10–15 cm.",
        "Do not let your torso roll backward.",
      ],
      tip: "You can rest your back against a wall to stay steady.",
    },
  },
  {
    id: "walk",
    photo: PHOTOS.walk,
    zh: { name: "平路短走", dose: "分几次", how: ["穿鞋走平路。", "麻或痛加重就停。", "分钟数填到今日页。"], tip: "不要跑、爬坡、提重。" },
    en: {
      name: "Short walks on level ground",
      dose: "Several short sessions",
      how: [
        "Walk on level ground in shoes.",
        "Stop if numbness or pain increases.",
        "Enter the minutes on the Today tab.",
      ],
      tip: "No running, hills, or heavy lifting.",
    },
  },
  {
    id: "meds",
    photo: "",
    zh: { name: "按医嘱服药", dose: "按处方", how: ["按门诊医嘱服药。", "不要自行加量。"], tip: "封闭须门诊操作。" },
    en: {
      name: "Take medication as prescribed",
      dose: "As prescribed",
      how: ["Follow your clinic's instructions.", "Do not increase the dose on your own."],
      tip: "Injections and nerve blocks must be done in clinic.",
    },
  },
];

const FORBIDDEN = {
  zh: "保护期不做：仰卧起坐、久平板、俯卧两头起、大力后伸、扭转、跑跳、搬重物。",
  en: "During the protection phase, avoid: sit-ups, long planks, prone back extensions, forceful lumbar extension, twisting, running or jumping, and heavy lifting.",
};

const COPY = {
  zh: {
    tagline: "保护期康复 · 非医疗诊断",
    title: "腰护打卡",
    pain: "躺着腿痛 0–10",
    walk: "一次能走（分钟）",
    guide: "动作指导和注意",
    poseHint: "对照图片做，痛就减小幅度",
    safety: "安全停",
    safetyBody: "力弱、会阴麻、小便变差：停练并联系医生。练完 30 分钟腿痛加重：今天减量。",
    export: "复制记录到剪贴板",
    reset: "重置今天",
    resetConfirm: "清空今天打卡？",
    copied: "已复制，可粘贴到微信或 Excel",
    pain7: "近 7 天躺着痛分",
    noRecord: "无记录",
    notes: "我的情况（可改）",
    notesHint: "数据只存在本机微信。这是打卡工具，不能代替医嘱。",
    about: "腰椎保护期打卡工具。",
  },
  en: {
    tagline: "Protection-phase rehab \u00b7 not a medical diagnosis",
    title: "Lumbar Check-in",
    pain: "Leg pain while lying down (0\u201310)",
    walk: "Minutes walked (one bout)",
    guide: "How to do it & cautions",
    poseHint: "Match the photo. Reduce the range if pain increases.",
    safety: "When to stop",
    safetyBody: "Weakness, saddle numbness, or bladder changes: stop and contact a doctor. If leg pain is worse 30 minutes after exercise, cut today's volume.",
    export: "Copy log to clipboard",
    reset: "Clear today",
    resetConfirm: "Clear today's check-in?",
    copied: "Copied. You can paste it into WeChat or Excel.",
    pain7: "Lying-down pain, last 7 days",
    noRecord: "No record",
    notes: "My notes (editable)",
    notesHint: "Saved only on this phone in WeChat. This is a check-in tool, not a substitute for medical advice.",
    about: "A check-in tool for the lumbar protection phase.",
  },
};

module.exports = { TASKS, FORBIDDEN, COPY };
