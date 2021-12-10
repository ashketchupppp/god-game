import Tile from "./Tile";

export default function Map(props) {
  const { w, h, xOffset, yOffset, nx, ny, tiles } = props;
  const tileWidth = Math.round(w / nx);
  const tileHeight = Math.round(h / ny);
  let i = -1;
  let j = 0;
  const tileFlatmap = tiles.flat().map((tile) => {
    if (i < nx - 1) {
      i++;
    } else {
      i = 0;
      j++;
    }
    return {
      ...tile,
      w: tileWidth - 1,
      h: tileHeight - 1,
      x: xOffset + tileWidth * i,
      y: yOffset + tileHeight * j
    };
  });

  return (
    <>
      {tileFlatmap.map((tile) => (
        <Tile {...tile} key={tile.toString()} />
      ))}
    </>
  );
}
