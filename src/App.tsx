import axios from 'axios'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

interface TypeSearch {
  input: string
}
interface WeatherType {
  name: string
  wind?: {
    speed?: number
  }
  main: {
    humidity?: number
    temp: number
  }
  sys: {
    country: string
  }
  timezone: number
  visibility?: number
  weather: {
    main: string
  }[]
}
function App() {
  const { register, handleSubmit, reset } = useForm<TypeSearch>()
  const [input, setInput] = useState<string>('HaNoi')
  const [bg, setBg] = useState<boolean>(true)
  const [weather, setWeather] = useState<WeatherType>({
    name: 'Hanoi',
    main: {
      humidity: 90,
      temp: 15.8
    },
    timezone: 25200,
    wind: {
      speed: 200
    },
    visibility: 1000,
    weather: [
      {
        main: 'Clouds'
      }
    ],
    sys: {
      country: 'VN'
    }
  })
  const refInput = useRef()

  const date = () => {
    const newdate = new Date()
    return newdate.toDateString()
  }
  const onSubmit = handleSubmit((data) => {
    setInput(data.input)
    reset({
      input: ''
    })
  })

  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
      )
      console.log(res)
      setWeather(res.data)
      setBg(res.data.main.temp >= 18)
    }

    getWeather()
  }, [input])

  return (
    <div className={classNames('h-full w-full ', bg === true ? 'bg-yellow-700' : 'bg-blue-700')}>
      <div
        className={classNames(
          'mx-auto   w-[500px] rounded-md   text-white shadow-md',
          bg === true ? 'bg-yellow-500' : 'bg-blue-500'
        )}
      >
        <div className=' mx-6'>
          <form className='' onSubmit={onSubmit}>
            <input
              type='text'
              placeholder='Seach...'
              className='mt-6 w-full rounded-bl-[16px] rounded-tr-[16px] bg-input px-4 py-3 outline-none'
              {...register('input')}
            />
          </form>
          <div className='mt-8 text-center font-bold text-white'>
            <h1 className=' text-2xl '>
              {weather.name} ,<span className='text-2xl'>{weather.sys.country}</span>
            </h1>
            <h2 className='mt-4 font-semibold'>{date()}</h2>
          </div>
          <div className='mx-auto mt-6 flex min-h-[200px] w-[400px] items-center justify-center rounded-lg bg-input'>
            <h1 className='flex  text-center text-4xl font-bold text-white'>
              {Math.round(weather?.main?.temp)}
              <span>
                <sup>o</sup>C
              </span>
            </h1>
          </div>
          <div className='mt-6 text-center text-2xl font-bold text-white'>{weather.weather[0].main} </div>
          <div className='mt-6 flex items-center justify-between pb-14 text-center'>
            <div className='block text-center '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='ml-3 h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819'
                />
              </svg>
              <div className='text-base'>{weather?.main?.humidity}(%)</div>
            </div>
            <div className='block text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='ml-3 h-6 w-6 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                />
              </svg>

              <div className='text-base'>{weather?.wind?.speed}(m/s)</div>
            </div>
            <div className='block text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='ml-3 h-6 w-6 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09'
                />
              </svg>

              <div className='text-base'>{weather.visibility}(m)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
