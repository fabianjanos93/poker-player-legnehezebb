let Game;
let player;
let cards;
let card1;
let card2;

let HandPairBooleanFlag = true

///////////////////////////////////////////////////////////////////////
class Player {
  static get VERSION() {
    return '0.4.4';
  }

  static betRequest(gameState, bet) {
    Game = gameState;
    player = gameState.players[gameState.in_action];
    cards = getCards(player);

    if (card1.rank = card2.rank && HandPairBooleanFlag)
      bet(player.stack)

    if (checkBothCards(card1, card2) /* doWehavePair(Game)*/ ) {
      bet(player.stack);
    }
    bet(12);
  }

  static showdown(gameState) {
  }
}
///////////////////////////////////////////////////////////////////////
////////////////////////OUR FUNCTIONS//////////////////////////////////
///////////////////////////////////////////////////////////////////////

function actualHighestBet(game) {
  let max = 0;
  for (i = 0; i < 6; i++) {
    let playerInCheck = game.players[i].bet;
    if (playerInCheck > max) ;
    max = playerInCheck;
  }
  return max
}

module.exports = Player;

function teamBetsAndCards(Game) {
  let players = [];
  for (let player of Game.players) {
    let playerName, playerBet, playerCards;
    let playerData = {playerName: player.name, playerBet: player.bet, playerCards: player.hole_cards};
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
  card1 = player.hole_cards[0];
  card2 = player.hole_cards[1];
}

function checkFirstCard(card1) {
  switch (card1.rank) {
    case card2.rank:
      return true;
    case "A":
      return true;
    case "Q":
      return true;
    case "K":
      return true;
  }
  return false;
}

function checkSecondCard(card2) {
  switch (card2.rank) {
    case card1.rank:
      return true;
    case "A":
      return true;
    case "Q":
      return true;
    case "K":
      return true;
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


function checkPair(player, communityCards, playerWithPair) {
  let cards = [];
  for (let card of player.hole_cards) {
    if (cards.includes(card.rank)) {
      playerWithPair.push(player);
    } else {
      cards.push(card.rank)
    }
  }
  for (let card of communityCards) {
    if (cards.includes(card.rank)) {
      playerWithPair.push(player);
    } else {
      cards.push(card.rank);
    }
  }
}

function doWehavePair(Game) {
  let playerWithPair = [];
  for (let player of Game.players) {
    checkPair(player, Game.community_cards, playerWithPair)
  }
  if (playerWithPair) {
    for (let elem of playerWithPair) {
      if (elem.name === "Legnehezebb") {
        return true;
      }
    }
  } else {
    return false;
  }
}






