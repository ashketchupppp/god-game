import React from "react";
import { Sprite } from "react-pixi-fiber";
import { id } from './util.js'
import * as PIXI from "pixi.js";
import man from './assets/man.png'
import { CharacterTypes } from 'god-game'

export const characterProperties = {
  [CharacterTypes["0"]]: { // MAN
    texture: PIXI.Texture.from(man),
    w: 15,
    h: 19,
    scale: { x: 1, y: 1 }
  }
}

export const character = (props) => {
  const {
    Type
  } = props

  return {
    key: id(),
    x: 0,
    y: 0,
    ...characterProperties[Type],
    ...props
  }
}

export default function Character (props) {
  const {
    x,
    y,
    Type
  } = props

  const typeProperties = characterProperties[Type] || characterProperties[CharacterTypes["0"]]
  return (
    <Sprite
      x={x}
      y={y}
      {...typeProperties}
    />
  )
}