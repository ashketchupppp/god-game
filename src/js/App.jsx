import React from "react";
import "./styles.css";
import GameMap from "./GameMap.jsx";
import { Stage, AppContext } from "react-pixi-fiber";
import Viewport from "./Viewport.jsx";

export default function App(props) {
  const {
    gameState
  } = props

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
                gameState={gameState}
              />
            </Viewport>
          )}
        </AppContext.Consumer>
      </Stage>
    </div>
  );
}