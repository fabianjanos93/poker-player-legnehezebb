class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(20);
    let Game = gameState.parse();
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

let player;

function getPlayer(game) {
  for (let p in game) {
    if (player.name === "Legnehezebb") {
      player = p;
    }
  }
}
