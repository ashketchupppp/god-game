import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import man from './assets/man.png'

export const characterTypes = {
  MAN: 'man'
}

export const characterProperties = {
  [characterTypes.MAN]: {
    texture: PIXI.Texture.from(man),
    w: 15,
    h: 19,
    scale: { x: 1, y: 1 }
  }
}

export const getCharacter = (x, y, type = characterTypes.MAN, props = {}) => {
  const typeProperties = characterProperties[type] || characterProperties[characterTypes.MAN]
  return {
    x: x,
    y: y,
    ...typeProperties,
    ...props
  }
}

export default function Character (props) {
  const {
    x,
    y,
    type
  } = props

  const typeProperties = characterProperties[type] || characterProperties[characterTypes.MAN]
  return (
    <Sprite
      x={x}
      y={y}
      {...typeProperties}
    />
  )
}