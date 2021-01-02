<template>
  <div>
    <p class="display-5 fw-bold text-uppercase">{{ title }}</p>
    <div class="progress mb-3">
      <div
        :class="['progress-bar', colorBar]"
        role="progressbar"
        :style="healthBar"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    life: Number,
  },
  computed: {
    colorBar() {
      if (this.life < 66 && this.life > 33) {
        return "bg-warning";
      }
      if (this.life < 33) {
        return "bg-danger";
      }
      return "bg-success";
    },
    healthBar() {
      return this.life < 0 ? { width: "0%" } : { width: `${this.life}%` };
    },
  },
};
</script>
