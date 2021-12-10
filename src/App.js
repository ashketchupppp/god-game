import React from "react";
import "./styles.css";
import GameMap from "./GameMap";
import { getTile, tileTypes } from "./Tile.jsx";
import { getCharacter } from './Character'
import { Stage, AppContext } from "react-pixi-fiber";
import Viewport from "./Viewport";

const stageopts = {
  backgroundColor: 0x000000,
  height: 600,
  width: 600
};
const mapXOffset = stageopts.width / 4;
const mapYOffset = stageopts.height / 4;
const tileWidth = 25
const tileHeight = 25

const fakeGameState = {
  tiles: [
    [getTile(tileTypes.GRASS), getTile(tileTypes.SAND)],
    [getTile(tileTypes.GRASS), getTile(tileTypes.SAND)],
    [getTile(tileTypes.GRASS), getTile(tileTypes.ROCK), getTile(tileTypes.WATER)]
  ],
  characters: [
    getCharacter(1, 1)
  ]
}

export default function App() {
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
                gameState={fakeGameState}
              />
            </Viewport>
          )}
        </AppContext.Consumer>
      </Stage>
    </div>
  );
}