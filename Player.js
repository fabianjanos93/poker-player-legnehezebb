let Game;
let player;
let cards;
let card1;
let card2;


///////////////////////////////////////////////////////////////////////
class Player {
  static get VERSION() {
    return '0.4.3';
  }

  static betRequest(gameState, bet) {
    Game = gameState;
    player = getPlayer(Game);
    cards = getCards(player);
    card1 = cards[0];
    let card2 = cards[1];

    if (checkBothCards(card1, card2)) {
      bet(player.stack);
    }
    bet(0);
  }

  static showdown(gameState) {
  }
}


///////////////////////////////////////////////////////////////////////
////////////////////////OUR FUNCTIONS//////////////////////////////////
///////////////////////////////////////////////////////////////////////

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

function teamBetsAndCards(Game){
  let players = [];
  for (let player of Game.players){
    let playerName, playerBet, playerCards;
    let playerData = {playerName: player.name, playerBet:player.bet, playerCards: player.hole_cards };
    players.push(playerData)
  }
}

function getPlayer(game) {
  for (let p in game.players) {
    if (p.name === "Legnehezebb") {
      player = p;
    }
  }
}


function getCards(player) {
  cards = player.hole_cards;
  card1 = cards[0];
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

  if (checkFirstCard(card1) || checkSecondCard(card2)) {
    return true;
  }
  return false;
}




