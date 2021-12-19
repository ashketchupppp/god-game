mod utils; // TODO: figure out how to put everything in a ./rust directory

use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};
// use serde_json::Result;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Serialize, Deserialize)]
pub enum TileType {
  ROCK = 0,
  GRASS = 1,
  SAND = 2,
  WATER = 3
}

#[derive(Serialize, Deserialize)]
#[wasm_bindgen]
pub enum CharacterTypes {
  MAN = 0
}

#[derive(Serialize, Deserialize)]
pub struct Tile {
  Type: TileType
}

#[derive(Serialize, Deserialize)]
pub struct Character {
  Type: CharacterTypes,
  x: u32,
  y: u32
}

#[derive(Serialize, Deserialize)]
pub struct GameState {
  tiles: Vec<Vec<Tile>>,
  characters: Vec<Character>
}

impl GameState {
  pub fn new() -> GameState {
    let mut characters: Vec<Character> = Vec::new();
    characters.push(Character { Type: CharacterTypes::MAN, x: 0, y: 0 });
    let mut tiles: Vec<Vec<Tile>> = Vec::new();
    tiles.push(Vec::new());
    tiles[0].push(Tile { Type: TileType::GRASS });
  
    return GameState { 
      tiles: tiles,
      characters: characters
     };
  }

  pub fn tiles(self) -> Vec<Vec<Tile>> {
    return self.tiles;
  }

  pub fn characters(self) -> Vec<Character> {
    return self.characters;
  }
}

#[wasm_bindgen]
pub struct JsGameState {
  game_state: GameState
}

#[wasm_bindgen]
impl JsGameState {
  #[wasm_bindgen(constructor)]
  pub fn new() -> JsGameState {
    return JsGameState {
      game_state: GameState::new()
    }
  }

  pub fn get_state(self) -> std::string::String {
    return serde_json::to_string(&self.game_state).unwrap();
  }
}
