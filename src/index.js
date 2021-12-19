import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from './js/App.jsx'
import { JsGameState } from "god-game";

// TODO: Implement an update function in Rust and periodically call it in JS
// TODO: Create a system that passes inputs/actions into game updates

// Maybe we could do both of these by moving the character point and click style
// This isn't really how we want the game to work but it would force us to implement
// a game state that can update itself and take the users actions into account, which
// is something that we DO want

const rustGameState = new JsGameState().get_state()

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App gameState={JSON.parse(rustGameState)}/>
  </StrictMode>,
  rootElement
);