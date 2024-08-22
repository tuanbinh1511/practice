import classNames from 'classnames'
import { useState } from 'react'

/* eslint-disable jsx-a11y/label-has-associated-control */
function DarkLight() {
  const [mode, setMode] = useState<boolean>(false)
  const handleMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.checked)
    console.log(mode)
  }
  return (
    <div className={classNames('duration-300', mode ? 'bg-gray-200' : 'bg-black')}>
      <header className='mx-12 pt-8'>
        <div className='flex justify-between'>
          <div className='text-3xl font-semibold text-blue-500'>Dark Mode</div>
          <form
            className={classNames(
              'relative h-8 w-[80px] rounded-l-[16px] rounded-r-[16px] ',
              mode ? 'bg-white' : 'bg-green-600'
            )}
          >
            <input id='toggleMode' type='checkbox' className='' checked={mode} onChange={handleMode} hidden />
            <label
              htmlFor='toggleMode'
              className={classNames(
                'absolute h-8 w-8 rounded-[100%] bg-slate-400 duration-300 ',
                mode ? 'left-0 ' : 'left-[48px] bg-green-600'
              )}
            ></label>
          </form>
        </div>
      </header>
      <div className='mx-auto mt-16 w-[1000px] pb-8'>
        <div className='text-center text-4xl font-semibold text-blue-600'>Dark/Light Mode</div>
        <div
          className={classNames(
            'mt-8 w-full rounded-lg  px-6 py-4 shadow-lg duration-300',
            mode ? 'bg-gray-300' : 'bg-gray-700'
          )}
        >
          <p className={classNames('mt-6 text-left text-base font-normal ', mode ? 'text-black' : 'text-white')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quis quos minima ullam aliquam veritatis ad
            animi quisquam ipsum voluptatem voluptatibus incidunt delectus fuga explicabo, soluta illum est ab.
            Perferendis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo obcaecati quae iusto optio nam
            eum error, voluptatibus molestiae nihil quo rem dolorem explicabo temporibus veritatis assumenda porro,
            atque suscipit. Amet!
          </p>
          <div className='my-6 flex items-center justify-around text-base '>
            <button className='h-10 w-[100px] rounded-lg bg-blue-500 px-4 py-2 text-white'>Github</button>
            <button className='h-10 w-[100px] rounded-lg bg-blue-500 px-4 py-2 text-white'>Youtube</button>
            <button className='h-10 w-[100px] rounded-lg bg-blue-500 px-4 py-2 text-white'>Facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DarkLight
