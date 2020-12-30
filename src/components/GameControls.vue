<template>
  <div class="alert bg-status text-center mt-3 mb-3">
    <button
      type="button"
      class="btn btn-outline-primary fw-bold"
      @click="attack"
    >
      ATTACK
    </button>
    <button
      type="button"
      class="btn btn-outline-info fw-bold"
      @click="special"
      :disabled="enableSpecial"
    >
      SPECIAL
    </button>
    <button
      type="button"
      class="btn btn-outline-success fw-bold"
      @click="heal"
      :disabled="enableSpecial"
    >
      HEAL
    </button>
    <button type="button" class="btn btn-outline-danger fw-bold" @click="quit">
      QUIT
    </button>
  </div>
</template>

<script>
export default {
  props: ["round"],
  computed: {
    enableSpecial() {
      return this.round % 3 !== 0;
    },
  },
  methods: {
    emits: ["attack", "special", "heal", "quit"],
    attack() {
      this.$emit("attack");
    },
    special() {
      this.$emit("special");
    },
    heal() {
      this.$emit("heal");
    },
    quit() {
      this.$emit("quit");
    },
  },
};
</script>

<style scoped></style>
