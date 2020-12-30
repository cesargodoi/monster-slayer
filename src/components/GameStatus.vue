<template>
  <div class="alert bg-status text-center mt-3 mb-3">
    <p class="display-3 fw-bold text-warning" v-if="whoWon === 'player'">
      YOU WON!
    </p>
    <p class="display-3 fw-bold text-danger" v-else-if="whoWon === 'monster'">
      YOU LOST
    </p>
    <p class="display-3 fw-bold text-info" v-else>
      ITS A DRAW
    </p>
    <button type="button" class="btn btn-outline-danger fw-bold">
      PLAY AGAIN?
    </button>
  </div>
</template>

<script>
export default {
  props: ["whoWon"],
};
</script>

<style scoped></style>
