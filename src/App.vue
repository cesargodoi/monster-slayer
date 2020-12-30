<template>
  <div class="container">
    <section>
      <div class="alert bg-header text-center mt-3 mb-3">
        <p class="display-4 fw-bold">MONSTER SLAYER</p>
      </div>
    </section>
    <fight-status
      :mHealth="monsterHealth"
      :pHealth="playerHealth"
    ></fight-status>
    <game-status v-if="winner" :whoWon="winner"></game-status>
    <game-controls v-else></game-controls>
  </div>
</template>

<script>
import GameControls from "./components/GameControls.vue";

export default {
  components: { GameControls },
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      winner: null,
    };
  },
};
</script>

<style>
body {
  background-color: black;
}

.bg-header {
  padding-top: 25pt;
  color: white;
  background-color: crimson;
}

.bg-status {
  padding-top: 16pt;
  color: white;
  background-color: #333;
}
</style>
