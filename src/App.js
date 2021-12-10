import React from "react";

import "./styles.css";
import GameMap from "./GameMap";
import { getTile, tileTypes } from "./tile.js";
import { getCharacter } from './Character'
import { Stage } from "react-pixi-fiber/react-pixi-alias";

const stageopts = {
  backgroundColor: 0xffffff,
  height: 600,
  width: 600
};
const mapXOffset = stageopts.width / 4;
const mapYOffset = stageopts.height / 4;

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
        <GameMap
          x={mapXOffset}
          y={mapYOffset}
          w={stageopts.width / 2}
          h={stageopts.height / 2}
          gameState={fakeGameState}
        />
      </Stage>
    </div>
  );
}