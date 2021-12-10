import * as PIXI from 'pixi.js'
import { CustomPIXIComponent } from 'react-pixi-fiber'
import { Viewport } from 'pixi-viewport'

const TYPE = 'Viewport'
const behavior = {
  customDisplayObject: (props) => {
    const viewport = new Viewport({
      screenWidth: props.width,
      screenHeight: props.height,
      worldWidth: props.width * 2,
      worldHeight: props.height * 2,
      ticker: props.app.ticker,
      interaction: props.app.renderer.plugins.interaction,
    })
    viewport.drag().pinch().wheel().clampZoom()

    return viewport
  }
}
export default CustomPIXIComponent(behavior, TYPE);