<template>
  <div>
    <section>
      <div class="alert bg-header text-center mt-3 mb-3">
        <p class="display-4 fw-bold">MONSTER SLAYER</p>
      </div>
    </section>

    <section id="fight-status">
      <fight-status
        v-if="winner !== 'quit'"
        :mHealth="monsterHealth"
        :pHealth="playerHealth"
      ></fight-status>
    </section>

    <game-status
      v-if="winner"
      :whoWon="winner"
      @start="startGame"
    ></game-status>

    <game-controls
      v-else
      @attack="attack"
      @special="special"
      @heal="heal"
      @quit="quit"
      :round="currentRound"
    ></game-controls>

    <fight-log v-if="winner !== 'quit'" :fightLog="log"></fight-log>
  </div>
</template>

<script>
import GameControls from "./components/GameControls";
import FightLog from "./components/FightLog";

export default {
  components: { GameControls, FightLog },
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: "quit",
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
    attack(value, mValue) {
      this.currentRound++;
      this.monsterHealth -= value;
      this.addLog("player", "attack", value);
      this.attackPlayer(mValue);
    },
    special(value, mValue) {
      this.currentRound++;
      this.monsterHealth -= value;
      this.addLog("player", "attack", value);
      this.attackPlayer(mValue);
    },
    heal(value, mValue) {
      this.currentRound++;
      if (this.playerHealth + value > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += value;
      }
      this.addLog("player", "heal", value);
      this.attackPlayer(mValue);
    },
    attackPlayer(value) {
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
