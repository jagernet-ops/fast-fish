import "./App.css";
import { useState } from "react";
import { deck, humanPlayer, computerPlayer } from "./assets/js/script";
import { Deck, PlayerName, BotName, TurnIndicator } from "./CenterBoard";

const cardPaths = new Map();
const playerHand = humanPlayer.getHand();
const botHand = computerPlayer.getHand();
let nextId = 0;

cardPaths.set("Ace of Spades", "./images/Ace_of_Spades.jpg");
cardPaths.set("Two of Spades", "./images/Two_of_Spades.jpg");
cardPaths.set("Three of Spades", "./images/Three_of_Spades.jpg");
cardPaths.set("Four of Spades", "./images/Four_of_Spades.jpg");
cardPaths.set("Five of Spades", "./images/Five_of_Spades.jpg");
cardPaths.set("Six of Spades", "./images/Six_of_Spades.jpg");
cardPaths.set("Seven of Spades", "./images/Seven_of_Spades.jpg");
cardPaths.set("Eight of Spades", "./images/Eight_of_Spades.jpg");
cardPaths.set("Nine of Spades", "./images/Nine_of_Spades.jpg");
cardPaths.set("Ten of Spades", "./images/Ten_of_Spades.jpg");
cardPaths.set("Jack of Spades", "./images/Jack_of_Spades.jpg");
cardPaths.set("Queen of Spades", "./images/Queen_of_Spades.jpg");
cardPaths.set("King of Spades", "./images/King_of_Spades.jpg");
cardPaths.set("Ace of Clubs", "./images/Ace_of_Clubs.jpg");
cardPaths.set("Two of Clubs", "./images/Two_of_Clubs.jpg");
cardPaths.set("Three of Clubs", "./images/Three_of_Clubs.jpg");
cardPaths.set("Four of Clubs", "./images/Four_of_Clubs.jpg");
cardPaths.set("Five of Clubs", "./images/Five_of_Clubs.jpg");
cardPaths.set("Six of Clubs", "./images/Six_of_Clubs.jpg");
cardPaths.set("Seven of Clubs", "./images/Seven_of_Clubs.jpg");
cardPaths.set("Eight of Clubs", "./images/Eight_of_Clubs.jpg");
cardPaths.set("Nine of Clubs", "./images/Nine_of_Clubs.jpg");
cardPaths.set("Ten of Clubs", "./images/Ten_of_Clubs.jpg");
cardPaths.set("Jack of Clubs", "./images/Jack_of_Clubs.jpg");
cardPaths.set("Queen of Clubs", "./images/Queen_of_Clubs.jpg");
cardPaths.set("King of Clubs", "./images/King_of_Clubs.jpg");
cardPaths.set("Ace of Diamonds", "./images/Ace_of_Diamonds.jpg");
cardPaths.set("Two of Diamonds", "./images/Two_of_Diamonds.jpg");
cardPaths.set("Three of Diamonds", "./images/Three_of_Diamonds.jpg");
cardPaths.set("Four of Diamonds", "./images/Four_of_Diamonds.jpg");
cardPaths.set("Five of Diamonds", "./images/Five_of_Diamonds.jpg");
cardPaths.set("Six of Diamonds", "./images/Six_of_Diamonds.jpg");
cardPaths.set("Seven of Diamonds", "./images/Seven_of_Diamonds.jpg");
cardPaths.set("Eight of Diamonds", "./images/Eight_of_Diamonds.jpg");
cardPaths.set("Nine of Diamonds", "./images/Nine_of_Diamonds.jpg");
cardPaths.set("Ten of Diamonds", "./images/Ten_of_Diamonds.jpg");
cardPaths.set("Jack of Diamonds", "./images/Jack_of_Diamonds.jpg");
cardPaths.set("Queen of Diamonds", "./images/Queen_of_Diamonds.jpg");
cardPaths.set("King of Diamonds", "./images/King_of_Diamonds.jpg");
cardPaths.set("Ace of Hearts", "./images/Ace_of_Hearts.jpg");
cardPaths.set("Two of Hearts", "./images/Two_of_Hearts.jpg");
cardPaths.set("Three of Hearts", "./images/Three_of_Hearts.jpg");
cardPaths.set("Four of Hearts", "./images/Four_of_Hearts.jpg");
cardPaths.set("Five of Hearts", "./images/Five_of_Hearts.jpg");
cardPaths.set("Six of Hearts", "./images/Six_of_Hearts.jpg");
cardPaths.set("Seven of Hearts", "./images/Seven_of_Hearts.jpg");
cardPaths.set("Eight of Hearts", "./images/Eight_of_Hearts.jpg");
cardPaths.set("Nine of Hearts", "./images/Nine_of_Hearts.jpg");
cardPaths.set("Ten of Hearts", "./images/Ten_of_Hearts.jpg");
cardPaths.set("Jack of Hearts", "./images/Jack_of_Hearts.jpg");
cardPaths.set("Queen of Hearts", "./images/Queen_of_Hearts.jpg");
cardPaths.set("King of Hearts", "./images/King_of_Hearts.jpg");
cardPaths.set("Back", "./images/back.png");

const fillHands = (hand, numCards) => {
  for (let i = 0; i < numCards; i++) {
    deck.passCardAtIndex(0, hand);
    console.log(hand);
  }
};

const Card = (props) => {
  return <img src={cardPaths.get(props.path)} alt="Card" />;
};

const getPlayerHand = () => {
  let cards = [];
  const backendHand = playerHand.viewCards();
  for (let i = 0; i < backendHand.length; i++) {
    cards.push(
      <div className="playerCard">
        <Card path={backendHand[i].toString()} />
      </div>
    );
  }
  return cards;
};

const getBotHand = () => {
  let cards = [];
  const backendHand = botHand.viewCards();
  for (let i = 0; i < backendHand.length; i++) {
    cards.push(
      <div className="playerCard">
        <Card path="Back" />
      </div>
    );
  }
  return cards;
};

const drawCard = (turn) => {
  if (turn) {
    deck.passCardAtIndex(0, botHand);
  } else {
    deck.passCardAtIndex(0, playerHand);
  }
};

const botHasCard = (targetValue) => {
  for (let i = 0; i < botHand.getCardCount(); i++) {
    if (botHand.viewCards()[i].getRank() === targetValue) {
      return true;
    }
  }
  return false;
};

const removePairs = () => {};

const scorePoints = () => {
  let points = 0;
  return points;
};

const askForCard = (cardValue) => {
  console.log(`The card's rank is: ${cardValue + 1}`);
  if (botHasCard(cardValue)) {
    let botIndex = botHand
      .viewCards()
      .findIndex((card) => card.getRank() === cardValue);
    botHand.passCardAtIndex(botIndex, playerHand);
  } else {
    //Call Go Fish Function
    console.log("Go Fish!");
  }
};

const Hand = (props) => {
  const [cards, setCards] = useState(getPlayerHand());
  const [prompt, spawnPrompt] = useState(false);
  const [selectedCard, cardSelector] = useState([]);
  const [botcards, setBotCards] = useState(getBotHand());
  const [score, setScore] = useState(0);
  const [turn, endTurn] = useState(true);
  if (props.type === "Bot" || !turn) {
    return (
      <div className="BotHand">
        {botcards.map((card) => (
          <button type="button">{card}</button>
        ))}
      </div>
    );
  }
  if (props.type === "CenterBoard" || turn !== true) {
    return (
      <div className="CenterBoard">
        <Deck
          callBackFunction={() => {
            drawCard(turn);
            endTurn(false);
            setCards(getPlayerHand());
            setBotCards(getBotHand());
          }}
        />
        <PlayerName />
        <TurnIndicator turn={turn} />
        <BotName />
      </div>
    );
  } else {
    if (prompt) {
      return (
        <div className="PlayerHand">
          <div className="buttonPrompt">
            <button
              type="button"
              onClick={() => {
                askForCard(
                  playerHand
                    .viewCards()
                    [cards.findIndex((card) => card === selectedCard)].getRank()
                );
                setCards(getPlayerHand());
                setBotCards(getBotHand());
                spawnPrompt(false);
              }}
            >
              Ask!
            </button>
            <button type="button" onClick={() => spawnPrompt(false)}>
              Continue!
            </button>
          </div>
          {cards.map((card) => (
            <button type="button" id="playerCard" key={nextId++}>
              {card}
            </button>
          ))}
        </div>
      );
    } else {
      return (
        <>
          <div className="PlayerHand">
            {cards.map((card) => (
              <button
                type="button"
                id="playerCard"
                key={nextId++}
                onClick={() => {
                  spawnPrompt(true);
                  cardSelector(card);
                }}
              >
                {card}
              </button>
            ))}
            <div className="assorted">
              <button
                type="button"
                onClick={() => setScore(score + scorePoints())}
              >
                Score!
              </button>
              <div className="score">{score}</div>
              <button
                type="button"
                onClick={() => {
                  playerHand.sortHand();
                  setCards(getPlayerHand());
                }}
              >
                Sort!
              </button>
            </div>
          </div>
        </>
      );
    }
  }
};

export { Hand, playerHand, botHand, fillHands };
