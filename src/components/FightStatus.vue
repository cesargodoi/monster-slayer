<template>
  <div class="alert alert-fight-status">
    <life-bar title="monster" :life="mHealth"></life-bar>
    <life-bar title="player" :life="pHealth"></life-bar>
  </div>
</template>

<script>
import LifeBar from "./LifeBar";

export default {
  components: { LifeBar },
  props: ["mHealth", "pHealth"],
};
</script>

<style scoped>
.alert-fight-status {
  background-color: rgb(14, 13, 13);
  text-align: center;
}
</style>
