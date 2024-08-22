import { useEffect, useRef, useState } from 'react'

function CounterApp() {
  const [face, setFace] = useState<number>(0)
  const [git, setGit] = useState<number>(0)
  const [you, setYou] = useState<number>(0)

  const checkSocial = (soc: string, value: number) => {
    if (soc === 'face') {
      setFace(value)
    } else if (soc === 'you') {
      setYou(value)
    } else {
      setGit(value)
    }
  }
  useEffect(() => {
    const counterUp = (soc: string, to: number) => {
      const speed = 200
      let from = 0
      const step = to / speed

      const counter = setInterval(function () {
        from = from + step

        if (from >= to) {
          checkSocial(soc, to)
          clearInterval(counter)
        } else {
          checkSocial(soc, Math.ceil(from))
        }
      }, 1)
      return true
    }
    counterUp('face', 3000)
    counterUp('you', 2000)
    counterUp('git', 1500)
  }, [])
  return (
    <div className='mx-auto flex max-w-[800px] items-center justify-evenly bg-yellow-200 pt-10'>
      <div className='m-[30px] rounded-xl bg-purple-500 px-10 py-5 text-center leading-10 text-white shadow-lg'>
        <p className='mb-[15px]  text-lg '>Facebook</p>
        <h2 className=' text-[50px]  font-bold '>{face}</h2>
      </div>
      <div className='m-[30px] rounded-xl bg-purple-500 px-10 py-5 text-center leading-10 text-white shadow-lg'>
        <p className='mb-[15px]  text-lg '>Youtube</p>
        <h2 className=' text-[50px]  font-bold '>{you}</h2>
      </div>
      <div className='m-[30px] rounded-xl bg-purple-500 px-10 py-5 text-center leading-10 text-white shadow-lg'>
        <p className='mb-[15px]  text-lg '>Github</p>
        <h2 className=' text-[50px]  font-bold '>{git}</h2>
      </div>
    </div>
  )
}

export default CounterApp
