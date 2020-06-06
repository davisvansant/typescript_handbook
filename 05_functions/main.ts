// intro
function add(x: number, y: number) {
  return x + y;
}

let myAdd: (x: number, y: number) => number = function(x: number, y: number): number { return x + y };

console.log(add(10, 15));
console.log(myAdd(30, 45));

let z = 100;
function add_to_z(x, y) {
  return x + y + z;
}

console.log(add_to_z(50, 60));

function build_name(firstname: string, lastname?: string) {
  if (lastname) {
    return firstname + " " + lastname;
  } else {
    return firstname;
  }
}

let result1 = build_name("bob");
// let result2 = build_name("Bob", "Adams", "Sr.");
let result3 = build_name("Bob", "Adams");

function build_another_name(firstname:string, lastname = "Smith") {
  return firstname + " " + lastname;
}

let another_result1 = build_another_name("Bob");
let another_result2 = build_another_name("Bob", undefined);
// let another_resuilt3 = build_another_name("Bob", "Adams", "Sr.");
let another_result4 = build_another_name("Bob", "Adams");

// rest parameters

function rest_build_name(firstname: string, ...restofname: string[]) {
  return firstname + " " + restofname.join(" ");
}

let rest_name = rest_build_name("Joseph", "Sam", "luca", "Mac");

// this
let deck = {
  suits: [ "hearts", "spades", "clubs", "diamonds" ],
  cards: Array(52),
  create_card_picker: function() {
    return () => {
      let picked_card = Math.floor(Math.random() * 52);
      let picked_suit = Math.floor(picked_card / 13);

      return { suit: this.suits[picked_suit], card: picked_card % 13 };
    }
  }
}

let card_picker = deck.create_card_picker();
let picked_card_from_deck = card_picker();

console.log("card: " + picked_card_from_deck + " of " + picked_card_from_deck.suit);

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  select_card(this: Deck): () => Card;
}

let interface_deck: Deck = {
  suits: [ "hearts", "spades", "clubs", "diamonds" ],
  cards: Array(52),
  select_card: function(this: Deck) {
    return () => {
      let selected_card = Math.floor(Math.random() * 52);
      let selected_suit = Math.floor(selected_card / 13);

      return { suit: this.suits[selected_suit], card: selected_card % 13 };
    }
  }
}

let another_card_picker = interface_deck.select_card();
let another_selected_card = another_card_picker();

console.log("card: " + another_selected_card.card + " of " + another_selected_card.suit);

interface UIElement {
  add_click_listener(on_click: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  on_good_click(this: void, e: Event) {
    console.log('clicked!');
  }
}

let h = new Handler();
// uiElement.add_click_listener(h.on_good_click);
