/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from 'react'
import { Pokemon, Pokemons } from './types/Pokemon.type'
import axios from 'axios'
import PokemonColection from './components/PokemonColection'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [nextUrl, setNextUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`)
      console.log(res)
      setNextUrl(res.data.next)
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemons((p) => [...p, poke.data])
      })
    }
    getPokemon()
  }, [])
  const handleLoadmore = async () => {
    const res = await axios.get(nextUrl)
    setLoading(true)
    setNextUrl(res.data.next)
    res.data.results.forEach(async (pokemon: Pokemon) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      setPokemons((p) => [...p, poke.data])
      setLoading(false)
    })
  }
  return (
    <div className='w-full bg-slate-600'>
      <div className='mx-auto   flex w-[1000px] flex-wrap items-center justify-center '>
        <div className='py-4 text-2xl font-bold text-white '>Pokemon</div>
        <div className='mt-4 '>
          <PokemonColection pokemons={pokemons} />
        </div>
        <div className='mx-auto my-8'>
          <button
            className='rounded-lg bg-white px-5 py-3 font-semibold text-red-600 shadow-lg'
            onClick={handleLoadmore}
          >
            {loading ? 'Loading' : 'Load more'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
