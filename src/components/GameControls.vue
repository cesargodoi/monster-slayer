<template>
  <div class="alert text-center mt-3 mb-3">
    <action-button action="attack" @click="attack"></action-button>
    <action-button
      action="special"
      @click="special"
      v-if="round % 3 === 0"
    ></action-button>
    <action-button
      action="heal"
      @click="heal"
      v-if="round % 3 === 0"
    ></action-button>
    <action-button action="quit" @click="quit"></action-button>
  </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

function getRandomValue(min = 8, max = 12) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  components: { ActionButton },
  props: ["round"],
  computed: {
    enableSpecial() {
      return this.round % 3 !== 0;
    },
  },
  methods: {
    emits: ["attack", "special", "heal", "quit"],
    attack() {
      this.$emit("attack", getRandomValue(5, 10), getRandomValue());
    },
    special() {
      this.$emit("special", getRandomValue(10, 20), getRandomValue());
    },
    heal() {
      this.$emit("heal", getRandomValue(12, 25), getRandomValue());
    },
    quit() {
      this.$emit("quit");
    },
  },
};
</script>

<style scoped></style>
