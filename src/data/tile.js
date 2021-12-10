export default function tile(props = {}) {
  return {
    colour: 0x000000,
    x: 0,
    y: 0,
    w: 10,
    h: 10,
    ...props
  };
}
