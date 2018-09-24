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
