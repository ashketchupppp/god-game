import Character, { characterTypes } from "./Character";
import { Container } from "react-pixi-fiber";

export default function CharacterMap(props) {
  const { characters, tileWidth, tileHeight } = props;

  for (let i = 0; i < characters.length; i++) {
    characters[i].x = characters[i].x * tileWidth + (tileWidth / 2) - (characters[i].w / 2)
    characters[i].y = characters[i].y * tileHeight + (tileWidth / 2) - (characters[i].h / 2)
  }

  return (
    <>
      <Container position={[0, 0]}>
        {characters.map(characterProps => <Character {...characterProps} />)}
      </Container>
    </>
  )
}