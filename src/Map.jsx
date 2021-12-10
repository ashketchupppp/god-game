import Tile from "./Tile";
import { Container } from "react-pixi-fiber";

export default function Map(props) {
  const { tileWidth, tileHeight, tiles } = props;

  // j is how far up the tile is, i is how far along the tile is
  let i
  let j = -1;
  const tileFlatmap = tiles.map(row => {
    i = -1;
    j++
    return row.map(tile => {
      i++;
      return {
        ...tile,
        w: tileWidth - 1,
        h: tileHeight - 1,
        x: tileWidth * i,
        y: tileHeight * j
      };
    })
  }).flat();

  return (
    <>
      <Container position={[0, 0]}>
        {tileFlatmap.map((tile) => (<Tile {...tile} /> ))}
      </Container>
    </>
  );
}
