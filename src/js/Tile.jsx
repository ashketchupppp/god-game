import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import { id } from "./util.js";
import { TileType } from "god-game";

// Using TileType["x"] is necessary if we want to use enums in Rust
export const tileProperties = {
  [TileType["0"]]: { // ROCK
    colour: 0x1e1b1e
  },
  [TileType["1"]]: { // GRASS
    colour: 0x2b7529
  },
  [TileType["2"]]: { // SAND
    colour: 0xe0ad41
  },
  [TileType["3"]]: { // WATER
    colour: 0x4193e0
  }
}

export const tile = (props = {}) => {
  let typeProperties
  if (props.Type) {
    typeProperties = tileProperties[props.Type]
  }
  return {
    key: id(),
    colour: 0x000000,
    x: 0,
    y: 0,
    w: 20,
    h: 20,
    ...typeProperties,
    ...props,
  };
}

export const getTile = (type) => {
  return tile({ Type: type })
}

const TYPE = "Rectangle";
export const behavior = {
  customDisplayObject: (props) => new PIXI.Graphics(),
  customApplyProps: function (instance, oldProps, newProps) {
    const { x, y, w, h, colour } = newProps;
    instance.clear();
    instance.beginFill(colour);
    instance.drawRect(x, y, w, h);
    instance.endFill();
  }
};
export default CustomPIXIComponent(behavior, TYPE)
