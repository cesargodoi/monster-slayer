<template>
  <div class="alert bg-status text-center mt-3 mb-3">
    <p class="display-5 fw-bold">MONSTER</p>
    <div class="progress mb-5">
      <div
        :class="['progress-bar', chooseMonsterHealthBar]"
        role="progressbar"
        :style="monsterHealthBar"
        :aria-valuenow="mHealth"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ mHealth }}%
      </div>
    </div>
    <p class="display-5 fw-bold">PLAYER</p>
    <div class="progress mb-4">
      <div
        :class="['progress-bar', choosePlayerHealthBar]"
        role="progressbar"
        :style="playerHealthBar"
        :aria-valuenow="mHealth"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ pHealth }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mHealth", "pHealth"],
  computed: {
    chooseMonsterHealthBar() {
      if (this.mHealth > 66) {
        return { healthbar_full: true };
      } else if (this.mHealth < 66 && this.mHealth > 33) {
        return { healthbar_middle: true };
      } else {
        return { healthbar_low: true };
      }
    },
    choosePlayerHealthBar() {
      if (this.pHealth > 66) {
        return { healthbar_full: true };
      } else if (this.pHealth < 66 && this.pHealth > 33) {
        return { healthbar_middle: true };
      } else {
        return { healthbar_low: true };
      }
    },
    monsterHealthBar() {
      return this.mHealth < 0 ? { width: "0%" } : { width: `${this.mHealth}%` };
    },
    playerHealthBar() {
      return this.pHealth < 0 ? { width: "0%" } : { width: `${this.pHealth}%` };
    },
  },
};
</script>

<style scoped>
.healthbar_full {
  background-color: #3c910b;
  width: 100%;
  height: 100%;
}

.healthbar_middle {
  background-color: #f08c09;
  width: 100%;
  height: 100%;
}

.healthbar_low {
  background-color: #ee1010;
  width: 100%;
  height: 100%;
}
</style>
