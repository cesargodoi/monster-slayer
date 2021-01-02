<template>
  <div class="alert bg-status text-center mt-3 mb-3">
    <p class="display-3 fw-bold text-warning" v-if="whoWon === 'player'">
      YOU WON!
    </p>
    <p class="display-3 fw-bold text-danger" v-else-if="whoWon === 'monster'">
      YOU LOOSE
    </p>
    <span v-else-if="whoWon === 'quit'"></span>
    <p class="display-3 fw-bold text-info" v-else>
      ITS A DRAW
    </p>
    <button
      type="button"
      class="btn btn-outline-primary btn-lg fw-bold mb-2"
      @click="start"
    >
      START GAME
    </button>
  </div>
</template>

<script>
export default {
  props: ["whoWon"],
  emits: ["start"],
  methods: {
    start() {
      this.$emit("start");
    },
  },
};
</script>

<style scoped></style>
