mod utils; // TODO: figure out how to put everything in a ./rust directory

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, friend!");
}

#[wasm_bindgen]
pub enum TileType {
  ROCK = 0,
  GRASS = 1,
  SAND = 2,
  WATER = 3
}

#[wasm_bindgen]
pub enum CharacterTypes {
  MAN = 0
}

#[wasm_bindgen]
pub struct Tile {
  Type: TileType
}

#[wasm_bindgen]
pub struct Character {
  Type: CharacterTypes
}

#[wasm_bindgen]
pub struct GameState {
  tiles: Vec<Vec<Tile>>,
  characters: Vec<Character>
}

#[wasm_bindgen]
impl GameState {
  #[wasm_bindgen(constructor)]
  pub fn new() -> GameState {
    let mut characters: Vec<Character> = Vec::new();
    characters.push(Character {Type: CharacterTypes::MAN});
    let mut tiles: Vec<Vec<Tile>> = Vec::new();
    tiles.push(Vec::new());
    tiles[0].push(Tile { Type: TileType::GRASS });
  
    return GameState { 
      tiles: tiles,
      characters: characters
     };
  }

  pub fn tiles(&self) -> Vec<Vec<Tile>> {
    return self.tiles;
  }

  pub fn characters(&self) -> Vec<Character> {
    return self.characters;
  }
}
