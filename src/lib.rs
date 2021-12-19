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

#[derive(Copy, Clone)]
#[derive(Serialize, Deserialize)]
#[wasm_bindgen]
pub enum CharacterTypes {
  MAN = 0
}

#[derive(Serialize, Deserialize)]
pub struct Tile {
  Type: TileType
}

#[derive(Copy, Clone)]
#[derive(Serialize, Deserialize)]
pub struct Character {
  Type: CharacterTypes,
  x: i32,
  y: i32
}

impl Character {
  pub fn translate(&mut self, dx : i32, dy : i32) {
    self.x += dx;
    self.y += dy;
  }
}

#[derive(Serialize, Deserialize)]
pub struct GameState {
  tiles: Vec<Vec<Tile>>,
  characters: Vec<Character>
}

impl GameState {
  pub fn new(characters : Vec<Character>, tiles : Vec<Vec<Tile>>) -> Self {
    return GameState { 
      tiles: tiles,
      characters: characters
     };
  }

  pub fn tick(&mut self) {
    if self.characters[0].x == 0 && self.characters[0].y == 0 {
      self.characters[0].translate(1, 0)
    } else if self.characters[0].x == 1 && self.characters[0].y == 0 {
      self.characters[0].translate(0, 1)
    } else if self.characters[0].x == 1 && self.characters[0].y == 1 {
      self.characters[0].translate(-1, 0)
    } else if self.characters[0].x == 0 && self.characters[0].y == 1 {
      self.characters[0].translate(0, -1)
    }
  }
}

#[wasm_bindgen]
pub struct JsGameState {
  game_state: GameState,
  running: bool
}

#[wasm_bindgen]
impl JsGameState {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Self {
    let characters = vec![
      Character { Type: CharacterTypes::MAN, x: 0, y: 0 }
    ];
    let tiles = vec![
      vec![Tile { Type: TileType::GRASS }, Tile { Type: TileType::GRASS }],
      vec![Tile { Type: TileType::GRASS }, Tile { Type: TileType::GRASS }]
    ];

    return JsGameState {
      game_state: GameState {
        characters: characters,
        tiles: tiles
      },
      running: false
    }
  }

  pub fn get_state(self) -> std::string::String {
    return serde_json::to_string(&self.game_state).unwrap();
  }

  pub fn tick(&mut self) {
    self.game_state.tick()
  }

  pub async fn main(&mut self) {
    let mut time = std::time::SystemTime::now();
    self.game_state.tick();

    while self.running {
      if time + std::time::Duration::from_millis(50) > std::time::SystemTime::now() {
        self.game_state.tick();
        time = std::time::SystemTime::now();
      }
    }

    // TODO: Figure out how to make this into a future and resolve it at the end
  }
}