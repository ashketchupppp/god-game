import React from "react";
import { Sprite } from "react-pixi-fiber";
import { id } from './util.js'
import * as PIXI from "pixi.js";
import man from './assets/man.png'
import { CharacterTypes } from 'god-game'

export const characterProperties = {
  [CharacterTypes.MAN]: {
    texture: PIXI.Texture.from(man),
    w: 15,
    h: 19,
    scale: { x: 1, y: 1 }
  }
}

export const getCharacter = (x, y, type = CharacterTypes.MAN, props = {}) => {
  const typeProperties = characterProperties[type] || characterProperties[characterTypes.MAN]
  return {
    key: id(),
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

  const typeProperties = characterProperties[type] || characterProperties[CharacterTypes.MAN]
  return (
    <Sprite
      x={x}
      y={y}
      {...typeProperties}
    />
  )
}