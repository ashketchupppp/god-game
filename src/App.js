import React from "react";

import "./styles.css";
import Map from "./Map";
import tile from "./data/tile";
import { Stage } from "react-pixi-fiber/react-pixi-alias";

const stageopts = {
  backgroundColor: 0xffffff,
  height: 600,
  width: 600
};
const mapXOffset = stageopts.width / 4;
const mapYOffset = stageopts.height / 4;
const nx = 10;
const ny = 10;

const tiles = [...Array(nx).keys()].map((item) =>
  [...Array(ny).keys()].map((item) => {
    return tile();
  })
);

export default function App() {
  return (
    <div className="App">
      <Stage options={stageopts}>
        <Map
          nx={nx}
          ny={ny}
          w={stageopts.width / 2}
          h={stageopts.height / 2}
          xOffset={mapXOffset}
          yOffset={mapYOffset}
          tiles={tiles}
        />
      </Stage>
    </div>
  );
}

/*
      <Stage>
        <Map x={10} y={10} w={100} h={100} />
      </Stage>
*/
