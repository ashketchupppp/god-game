import Map from './Map'
import CharacterMap from './CharacterMap'
import { Container } from 'react-pixi-fiber'

export default function GameMap (props = defaults) {
  const {
    x,
    y,
    w,
    h,
    gameState
  } = props

  const nx = gameState.tiles.length
  const ny = Math.max(...gameState.tiles.map(row => row.length))
  const tileWidth = Math.round(w / nx);
  const tileHeight = Math.round(h / ny);

  return (
    <>
      <Container position={[x, y]}>
        <Map
          tileWidth={tileWidth}
          tileHeight={tileHeight}
          tiles={gameState.tiles}
        />
        <CharacterMap
          tileWidth={tileWidth}
          tileHeight={tileHeight}
          characters={gameState.characters}
        />
      </Container>
    </>
  )
}