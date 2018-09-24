class Player {
  static get VERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {
    bet(100);
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

function actualHighestBet(game){
  let max = 0;
  for(i = 0; i<6 ; i++){
    let playerInCheck = game.players[i].bet;
    if (playerInCheck>max);
      max = playerInCheck;
  }
  return max
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
