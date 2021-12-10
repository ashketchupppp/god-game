import Tile from "./Tile";

export default function Map(props) {
  const { w, h, xOffset, yOffset, nx, ny, tiles } = props;
  const tileWidth = Math.round(w / nx);
  const tileHeight = Math.round(h / ny);

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
        x: xOffset + tileWidth * i,
        y: yOffset + tileHeight * j
      };
    })
  }).flat();

  return (
    <>
      {tileFlatmap.map((tile) => (
        <Tile {...tile} key={`${tile.x},${tile.y}`} />
      ))}
    </>
  );
}
