class Cards {
    constructor() {
        this.initCard();
        this.shuffleCard();
    }

    initCard() {
        console.log('*** initialing Cards');
        this.deck = [];

        // 'Clubs', Diamonds', 'Hearts', 'Spades'
        let suits = ['\u2663', '\u2666', '\u2665', '\u2660'];
        // 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'
        let faces = [' A', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', '10', ' J', ' Q', ' K'];

        for (const x in suits) {
            for (const y in faces) {
                this.deck.push(faces[y]+suits[x]);
            }
        }
    }

    shuffleCard() {
        // https://bost.ocks.org/mike/shuffle/
        console.log('*** Shuffling Cards');

        var m = this.deck.length, t, i;
        // While there remain elements to shuffle…
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = this.deck[m];
          this.deck[m] = this.deck[i];
          this.deck[i] = t;
        }
        return this;
    }

    randomCard() {
        console.log('*** Random Deal Card');

        var m = this.deck.length, t, i;
        i = Math.floor(Math.random() * m);
        t = this.deck.splice(i,1);
        return t;
    }

    dealCard() {
        console.log('*** Deal Card');

        var x = this.randomCard(this.deck);
        // console.log(x[0]);
        return x[0];
    }

    showAllCards() {
        console.log('*** Show Cards');

        var str = '';
        for (const x in this.deck) {
            str += this.deck[x];
        }
        console.log(str);
        console.log('Total Cards = '+this.deck.length);
    }
}

class Player {
    constructor(name) {
        if (name == null) {
            console.log('Please give a player a name');
        } else {
            this.name = name;
            this.hand = [];
        }
    }

    takeCard(array) {
        if (array instanceof Cards) {
            this.hand.push(array.dealCard());
            console.log(`${this.name} - ${this.hand}`);
        } else {
            console.log('You don\'t have a deck of cards to play!');
        }
    }

    discardCard(array) {
        if (array instanceof Cards) {
            this.hand.pop(array);
            console.log(`${this.name} - ${this.hand}`);
        } else {
            console.log('You don\'t have a deck of cards to play!');
        }
    }
}

const game = new Cards();
game.showAllCards();
const player1 = new Player('Randy');
const player2 = new Player('Jackson');
player1.takeCard(game);
player2.takeCard(game);
// game.showAllCards();
player1.takeCard(game);
player2.takeCard(game);
// game.showAllCards();
player2.discardCard(game);
// game.showAllCards();
player2.takeCard(game);
// game.showAllCards();

