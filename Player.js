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

module.exports = Player;

function teamBetsAndCards(Game){
  let players = [];
  for (let player of Game.players){
    let playerName, playerBet, playerCards;
    let playerData = {playerName: player.name, playerBet:player.bet, playerCards: player.hole_cards };
    players.push(playerData)
  }
}



let player;

function getPlayer(game) {
  for (let p in game) {
    if (player.name === "Legnehezebb") {
      player = p;
    }
  }
}
