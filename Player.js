class Player {
  static get VERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {
    bet(1000);
    let Game = gameState.parse();
    let holeCards;
    for (let player of Game.players){
      if (player.name === "Legnehezebb"){
        holeCards = player.hole_cards;
      }
    }
    bet(player.stack);
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
