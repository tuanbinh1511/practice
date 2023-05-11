export interface Pokemons {
  name: string
  url: string
}
export interface Pokemon {
  id: number
  name: string
  abilities: [
    {
      ability: {
        name: string
      }
    }
  ]
  sprites: {
    front_default: string
  }
}
