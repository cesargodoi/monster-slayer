<template>
  <button type="button" :class="['btn', 'fw-bold', getColor]">
    {{ action }}
  </button>
</template>

<script>
export default {
  props: {
    action: String,
  },
  computed: {
    getColor() {
      if (this.action === "quit") {
        return "btn-outline-danger";
      }
      if (this.action === "special") {
        return "btn-outline-warning";
      }
      if (this.action === "heal") {
        return "btn-outline-success";
      }
      return "btn-outline-primary";
    },
  },
};
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>
