import { CustomPIXIComponent } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import { id } from "./util";

export const tileTypes = Object.freeze({
  ROCK: 'rock',
  GRASS: 'grass',
  SAND: 'sand',
  WATER: 'water'
})

export const tileProperties = Object.freeze({
  [tileTypes.ROCK]: {
    colour: 0x1e1b1e
  },
  [tileTypes.GRASS]: {
    colour: 0x2b7529
  },
  [tileTypes.SAND]: {
    colour: 0xe0ad41
  },
  [tileTypes.WATER]: {
    colour: 0x4193e0
  }
})

export const tile = (props = {}) => {
  let typeProperties
  if (props.type) {
    typeProperties = tileProperties[props.type]
  }
  return {
    key: id(),
    colour: 0x000000,
    x: 0,
    y: 0,
    w: 10,
    h: 10,
    ...typeProperties,
    ...props,
  };
}

export const getTile = (type) => {
  return tile({ type: type })
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
export default CustomPIXIComponent(behavior, TYPE);
