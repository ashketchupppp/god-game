import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { GameState } from 'god-game'

import App from './js/App.jsx'
import { getTile, tileTypes } from "./js/Tile.jsx";
import { getCharacter } from './js/Character.jsx'


const fakeGameState = new GameState() /* {
  tiles: [
    [getTile(tileTypes.GRASS)]
  ],
  characters: [
    getCharacter(0, 0)
  ]
} */

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App gameState={fakeGameState}/>
  </StrictMode>,
  rootElement
);