import { Pokemon as PokemonTye } from 'src/types/Pokemon.type'
import Pokemon from '../Pokemon'

interface Props {
  pokemons: PokemonTye[]
}

function PokemonColection(props: Props) {
  const { pokemons } = props

  return (
    <div className=' mx-4 mt-6 grid grid-cols-6'>
      {pokemons.map((pokemon: PokemonTye) => (
        <div key={pokemon.id} className='mx-6 my-4  gap-8'>
          <Pokemon
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            ability={pokemon.abilities[0].ability.name}
          />
        </div>
      ))}
    </div>
  )
}

export default PokemonColection
