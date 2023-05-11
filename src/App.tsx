/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from 'classnames'
import React, { useRef, useState } from 'react'

function App() {
  const [openTab, setOpenTab] = useState<number>(1)
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <div
      className={classNames(' relative mx-auto mt-10 flex w-[800px] flex-wrap', isShow ? 'bg-slate-300' : 'bg-white')}
    >
      <div className=' w-full justify-between'>
        <ul className='mt-4 grid grid-cols-3' role='tablist'>
          <li className='col-span-1 mx-2 text-center shadow-md '>
            <button
              className={
                openTab === 1
                  ? 'w-full rounded-md bg-pink-600 px-5 py-2 text-white'
                  : 'text-pink w-full rounded-md bg-white px-5 py-2'
              }
              onClick={(e) => {
                e.preventDefault
                setOpenTab(1)
              }}
            >
              Profile
            </button>
          </li>
          <li className='col-span-1 mx-2  text-center shadow-md'>
            <button
              className={
                openTab === 2
                  ? 'w-full rounded-md bg-pink-600 px-5 py-2 text-white'
                  : 'text-pink w-full rounded-md bg-white px-5 py-2'
              }
              onClick={(e) => {
                e.preventDefault
                setOpenTab(2)
              }}
            >
              Setting
            </button>
          </li>
          <li className='col-span-1 mx-2  text-center shadow-md'>
            <button
              className={
                openTab === 3
                  ? 'w-full rounded-md bg-pink-600 px-5 py-2 text-white'
                  : 'text-pink w-full rounded-md bg-white px-5 py-2'
              }
              onClick={(e) => {
                e.preventDefault
                setOpenTab(3)
              }}
            >
              Option
            </button>
          </li>
        </ul>
        <div className='mt-6 w-full px-3 py-4 shadow-lg'>
          <div className={openTab === 1 ? 'block' : 'hidden'}>
            <p className='text-base '>
              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
              users after installed base benefits.
              <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
            </p>
          </div>
          <div className={openTab === 2 ? 'block' : 'hidden'}>
            <p className='text-base '>
              Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
              one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for
              state of the art customer service.
            </p>
          </div>
          <div className={openTab === 3 ? 'block' : 'hidden'}>
            <p className='text-base '>
              Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
              deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className='  mx-auto mt-8 items-center justify-center'>
        <button
          className='rounded-lg bg-pink-600 px-5 py-3 text-white '
          onClick={(e) => {
            e.preventDefault
            setIsShow(!isShow)
          }}
        >
          Open Modal
        </button>
        <div
          className={classNames(
            'absolute left-[50%] top-6 ml-2 mt-8 w-[400px]  translate-x-[-50%] rounded-md bg-white shadow-md duration-200',
            isShow ? 'block' : 'hidden'
          )}
        >
          <div className='mx-3 border-b-[1px] border-slate-200  py-4 text-base font-semibold text-slate-600'>
            Modal title
          </div>
          <div className='mx-3 border-b-[1px] py-6 text-base text-black '>
            I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their
            perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t
            do anything, you won’t do anything. I was taught I could do everything.
          </div>
          <div className='mx-4 mb-6 mt-6 flex flex-wrap justify-end font-medium'>
            <button
              className=' px-4 py-3 text-black text-red-600 '
              onClick={(e) => {
                e.preventDefault
                setIsShow(false)
              }}
            >
              Close
            </button>
            <button
              className='rounded-md bg-green-500 px-4 py-3 text-white shadow-lg'
              onClick={(e) => setIsShow(!isShow)}
            >
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
