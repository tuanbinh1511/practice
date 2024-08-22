import classNames from 'classnames'
import { useRef, useState } from 'react'

function CustomRangeSlider() {
  const [percent, setPercent] = useState<number>()
  const [width, setWidth] = useState<number>(500)
  const [text, setText] = useState<string>('')
  const rangeX = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleRange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const progress = e.pageX - rangeX.current.offsetLeft
    let percent = (progress / rangeX.current.offsetWidth) * 100

    percent = Math.ceil(percent)
    setPercent(percent)
    setWidth(progress)
    setText(`w-[${width}px]`)
    console.log(text)
    console.log(percent)
    console.log(width)
  }

  return (
    <div className=' mx-auto mt-40 h-[400px] w-[1200px] items-center justify-center'>
      <div className='mt-8 text-center text-3xl font-semibold text-purple-600'>Custom Range Slider</div>
      <div
        className='relative mx-auto mt-4 h-[40px] w-[500px]  overflow-hidden rounded-2xl bg-white shadow-lg '
        onMouseMove={handleRange}
        ref={rangeX}
      >
        <div className={classNames(`min-w-[${width}px] absolute left-0 top-0 h-[100%]   bg-slate-500 `)}>
          <span className='text-center text-white'>{percent} %</span>
        </div>
      </div>
    </div>
  )
}

export default CustomRangeSlider
