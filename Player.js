class Player {
  static get VERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {
    bet(100);
    let Game = gameState.parse();

  }

  static showdown(gameState) {
  }
}

module.exports = Player;

let player;
let cards;
let card1;
let card2;

function getPlayer(game) {
  for (let p in game) {
    if (player.name === "Legnehezebb") {
      player = p;
    }
  }
  getCards(player);
}

function getCards(player) {
  cards = player.hole_cards;
  card1 = cards[0];
  card2= cards[1];
}

function shouldIBet(cards) {
  switch (card1.rank) {
    case card2.rank: return true;
    case "A": return true;
    case "Q": return true;
    case "K": return true;
  }
  return false;
}



