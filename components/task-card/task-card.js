Component({
  properties: {
    item: { type: Object, value: {} },
    guide: { type: String, value: "动作指导和注意" },
    hint: { type: String, value: "" }
  },
  data: { open: true },
  methods: {
    onToggle() { this.triggerEvent("toggle", { id: this.data.item.id }); },
    onGuide() { this.setData({ open: !this.data.open }); }
  }
});
