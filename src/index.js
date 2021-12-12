import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { getTile, tileTypes } from "./Tile.jsx";
import { getCharacter } from './Character'

const fakeGameState = {
  tiles: [
    [getTile(tileTypes.GRASS)]
  ],
  characters: [
    getCharacter(0, 0)
  ]
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App gameState={fakeGameState}/>
  </StrictMode>,
  rootElement
);
