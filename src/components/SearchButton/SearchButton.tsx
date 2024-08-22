import classNames from 'classnames'
import { useState } from 'react'

function SearchButton() {
  const [search, setSearch] = useState<boolean>(false)

  const handleSearch = () => {
    setTimeout(() => {
      setSearch(!search)
    })
  }
  return (
    <div className='h-full w-full bg-lime-400 py-20 '>
      <div
        className={classNames(
          `my-5 ml-10 flex    items-center  justify-center rounded-2xl bg-slate-100  text-center font-medium leading-8 shadow-lg duration-300 `,
          search ? 'max-w-[500px]' : 'max-w-[80px]'
        )}
      >
        <button
          className='flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center outline-none '
          onClick={handleSearch}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-7 w-7   '
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>

        <input
          type='text'
          className={classNames(
            'flex-grow rounded-r-lg bg-gray-500 py-4 pl-[35px] pr-[100px] text-lg leading-10 text-white outline-none duration-300  ',
            search ? '' : 'hidden'
          )}
        />
      </div>
    </div>
  )
}

export default SearchButton
