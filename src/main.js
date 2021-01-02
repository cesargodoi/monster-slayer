import { createApp } from "vue";
import App from "./App.vue";

import FightStatus from "./components/FightStatus";
import GameStatus from "./components/GameStatus";

const app = createApp(App);

app.component("fight-status", FightStatus);
app.component("game-status", GameStatus);

app.mount("#app");
