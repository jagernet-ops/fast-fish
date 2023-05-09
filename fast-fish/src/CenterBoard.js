import "./App.css";

const CenterBoard = () => {
  return (
    <div className="CenterBoard">
      <div className="turn">
        <img id="turnIcon" src="./images/bot_turn.png" alt="bot icon" />
      </div>
      <button type="button" id="DrawCard">
        <img id="deckIcon" src="./images/back.png" alt="Deck Icon" />
      </button>
      <input
        id="PlayerName"
        className="PlayerText"
        type="text"
        placeholder="Enter Player Name: "
      />
      <input
        id="BotName"
        className="PlayerText"
        type="text"
        placeholder="Enter Bot Name: "
      />
      <input
        id="CardSelection"
        className="PlayerText"
        type="text"
        placeholder="Enter Card Name: "
      />
    </div>
  );
};

export default CenterBoard;
