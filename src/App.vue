<template>
  <div class="container">
    <section>
      <div class="alert bg-header text-center mt-3 mb-3">
        <p class="display-4 fw-bold">MONSTER SLAYER</p>
      </div>
    </section>
    <fight-status
      v-if="winner !== 'quit'"
      :mHealth="monsterHealth"
      :pHealth="playerHealth"
    ></fight-status>
    <game-status
      v-if="winner"
      :whoWon="winner"
      @start="startGame"
    ></game-status>
    <game-controls
      v-else
      @attack="attackMonster"
      @special="specialMonster"
      @heal="healPlayer"
      @quit="quitGame"
      :round="currentRound"
    ></game-controls>
    <fight-log v-if="winner !== 'quit'" :fightLog="log"></fight-log>
  </div>
</template>

<script>
import GameControls from "./components/GameControls.vue";
import FightLog from "./components/FightLog.vue";

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  components: { GameControls, FightLog },
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      log: [],
    };
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
  },
  methods: {
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.log = [];
    },
    attackMonster() {
      this.currentRound++;
      let value = getRandomValue(5, 10);
      this.monsterHealth -= value;
      this.addLog("player", "attack", value);
      setTimeout(this.attackPlayer, 500);
    },
    specialMonster() {
      this.currentRound++;
      let value = getRandomValue(10, 20);
      this.monsterHealth -= value;
      this.addLog("player", "attack", value);
      setTimeout(this.attackPlayer, 500);
    },
    healPlayer() {
      this.currentRound++;
      let value = getRandomValue(12, 25);
      if (this.playerHealth + value > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += value;
      }
      this.addLog("player", "heal", value);
      setTimeout(this.attackPlayer, 500);
    },
    attackPlayer() {
      let value = getRandomValue(8, 12);
      this.playerHealth -= value;
      this.addLog("monster", "attack", value);
    },
    quitGame() {
      this.winner = "quit";
    },
    addLog(who, what, value) {
      this.log.unshift({
        who: who,
        what: what,
        value: value,
      });
    },
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
