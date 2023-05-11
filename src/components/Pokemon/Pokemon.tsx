interface Props {
  name: string
  ability: string
  img: string
}

function Pokemon(props: Props) {
  const { img, name, ability } = props

  return (
    <div className=' w-30 min-h-[208px] overflow-hidden rounded-xl bg-yellow-200 p-1'>
      <img src={img} alt='' className='w-full object-center' />
      <h1 className='mt-2 text-center font-medium text-slate-500'>{name}</h1>
      <p className='mt-2 text-center text-sm font-semibold text-red-400 opacity-0 duration-150 hover:opacity-100'>
        Skill:
        <span className='ml-2 py-2'>{ability}</span>
      </p>
    </div>
  )
}

export default Pokemon
