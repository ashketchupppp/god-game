import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from './js/App.jsx'
import { getTile, tileTypes } from "./js/Tile.jsx";
import { getCharacter } from './js/Character.jsx'

// import { GameState } from 'god-game'
// const fakeGameState = new GameState()
// TODO: figure out how to return Vec<Struct> in Rust Wasm ...
// https://github.com/rustwasm/wasm-bindgen/issues/111
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