import { v4 as uuidv4 } from 'uuid';

export const id = () => uuidv4()

// color being a Color object from the color library
export const colorToHex = (color) => Number(color.hex().replace('#', '0x'))

