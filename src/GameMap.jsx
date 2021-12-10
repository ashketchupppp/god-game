import TileMap from './TileMap'
import CharacterMap from './CharacterMap'
import { Container } from 'react-pixi-fiber'

export default function GameMap (props = defaults) {
  const {
    x,
    y,
    gameState,
    tileWidth,
    tileHeight
  } = props

  return (
    <>
      <Container position={[x, y]}>
        <TileMap
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