import characters_json from "../data/characters.json";

export function createCharacters(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}
