import React, { useState } from "react";
import "./styles.css";
import GameMap from "./GameMap.jsx";
import { Stage, AppContext } from "react-pixi-fiber";
import Viewport from "./Viewport.jsx";
import { JsGameState } from "god-game";

export default function App(props) {
  const [game_state, _] = useState(new JsGameState())

  const stageopts = {
    backgroundColor: 0x000000,
    height: window.innerHeight,
    width: window.innerWidth
  };
  const mapXOffset = stageopts.width / 4;
  const mapYOffset = stageopts.height / 4;
  const tileWidth = 25
  const tileHeight = 25

  return (
    <div className="App">
      <Stage options={stageopts}>
        <AppContext.Consumer>
          {app => (
            <Viewport app={app} width={stageopts.width} height={stageopts.height}>
              <GameMap
                x={mapXOffset}
                y={mapYOffset}
                tileWidth={tileWidth}
                tileHeight={tileHeight}
                gameState={game_state}
              />
            </Viewport>
          )}
        </AppContext.Consumer>
      </Stage>
    </div>
  );
}