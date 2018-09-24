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
    if (checkBothCards(card1, card2)) {
      bet(player.stack);
    }
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
  card2 = cards[0];
  card2= cards[1];
}

function checkFirstCard(card1) {
  switch (card1.rank) {
    case card2.rank: return true;
    case "A": return true;
    case "Q": return true;
    case "K": return true;
  }
  return false;
}

function checkSecondCard(card2) {
  switch (card2.rank) {
    case card1.rank: return true;
    case "A": return true;
    case "Q": return true;
    case "K": return true;
  }
  return false;
}

//returns true if one of the two cards are good, or we have a pair
function checkBothCards(card1, card2) {
  getPlayer();
  getCards();
  if (checkFirstCard(card1) || checkSecondCard(card2)) {
    return true;
  }
  return false;
}




