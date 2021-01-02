<template>
  <div class="alert bg-log mt-3 mb-3" v-if="fightLog">
    <p class="log-title">FIGHT LOG</p>
    <table class="table table-sm text-white">
      <tr v-for="item in fightLog" :key="item">
        <td
          :class="[
            'text-uppercase',
            item.who === 'player' ? 'log-player' : 'log-monster',
          ]"
        >
          <strong>{{ item.who }}</strong>
        </td>

        <td class="text-uppercase">
          {{ item.what === "attack" ? "attacked and took" : "took the potion" }}
        </td>

        <td
          :class="[
            'text-right',
            item.what === 'attack' ? 'log-damage' : 'log-heal',
          ]"
        >
          <strong>{{ item.value }}</strong>
        </td>
        <td>PTS</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["fightLog"],
};
</script>

<style scoped>
.log-title {
  font-family: monospace;
  font-size: 14pt;
  color: #ccc;
  text-align: center;
  border-bottom: 1px #ccc dashed;
}

.bg-log {
  padding-top: 20pt;
  color: white;
}

ul {
  font-family: monospace;
  font-size: 12pt;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

.log-player {
  color: #a570e2;
}

.log-monster {
  color: #da8d00;
}

.log-damage {
  color: red;
}

.log-heal {
  color: green;
}
</style>
