import React, { useState } from "react";

const favGame = ["cricket", "FootBall", "Hockey", "chesss"];

const ArrayWithDelete = () => {
  const [myGame, setMyGame] = useState(favGame);
  const [check, setCheck] = useState(false)
  const handleDelte = (selectedGame) => {
    const updatedGames = myGame.filter((data) => data !== selectedGame);
    setMyGame(updatedGames);
  };

  const handleCheckBox = () => {
    setCheck(true)
  }
  const renderFavGame = () => {
    return myGame.map((data, index) => (
      <div style={{ display: "flex", margin: 10 }}>
        <input type="checkbox" onClick={handleCheckBox}/>
        <li key={index}>{data}</li>
       {check &&  <button
          style={{ margin: 5 }}
          onClick={() => {
            handleDelte(data);
          }}
        >
          Delete
        </button>}
      </div>
    ));
  };
  return (
    <>
      <div>ArrayWithDelete</div>
      {renderFavGame()}
    </>
  );
};

export default ArrayWithDelete;
