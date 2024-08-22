/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import FalconIcon from '../../assets/falcon.png'
import AvartarIcon from '../../assets/avartar.jpg'
import { useEffect, useRef, useState } from 'react'

const listMenu = [
  {
    label: 'DashBoard',
    name: 'dashboard',
    children: [
      {
        label: 'Input',
        value: 'input',
        children: []
      },
      {
        label: 'Select',
        value: 'select',
        children: []
      },
      {
        label: 'Checkbox',
        value: 'checkbox',
        children: []
      }
    ]
  },
  {
    label: 'Landing',
    name: 'landing',
    children: []
  }
]

function LandingPage() {
  const [activeKey, setActiveKey] = useState<any>(false)
  const wrapperRef = useRef<any>(null)
  const listRef = useRef<any>(null)
  const toggleMenu = () => {
    setActiveKey(!activeKey)

    // wrapperRef.current.style.height = activeKey ? '0' : `${listRef?.current.offsetHeight}px`
  }
  // const renderMenu = (menu: any) => {}
  // useEffect(() => {
  //   if (listRef.current) {
  //     wrapperRef.current.style.height = activeKey ? `${listRef.current.offsetHeight}px` : '0'
  //   }
  // }, [activeKey])

  return (
    <div className='h-full w-full bg-[#EDF2F9]'>
      <div className='mx-auto min-h-[100vh] w-[1440px]'>
        <div className='flex min-h-[72px] justify-between'>
          <div className='flex  items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-7 w-7 text-[#6C6E71]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
            <div className='flex'>
              <img src={FalconIcon} alt='' className='ml-7 h-10 w-10 bg-cover bg-center' />
              <span className='ml-4 text-2xl font-extrabold leading-10 text-[#2C7BE5]'>Falcon</span>
            </div>
            <div className='ml-10 flex h-10 w-[330px] items-center rounded-[800px] bg-white text-[#B6C1D2]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3.5}
                stroke='currentColor'
                className='ml-3 h-[14px] w-[14px]  '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>

              <input
                type='text'
                placeholder='Search...'
                className='border-none px-3 text-base font-medium outline-none'
              />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6 cursor-pointer text-[#6C6E71]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z'
                />
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
              </svg>
            </div>
            <div className='relative mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6 cursor-pointer text-[#6C6E71]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
              <div className='absolute right-[-4px] top-[-4px] h-[14px] w-[14px] rounded-[50%] bg-orange-400 text-center text-[10px] font-bold text-white'>
                1
              </div>
            </div>
            <div className='relative mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6 cursor-pointer text-[#6C6E71]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
                />
              </svg>
              <div className='absolute right-[-1px] top-[-4px] h-[14px] w-[14px] rounded-[50%] bg-blue-500 text-center text-[10px] font-bold text-white'></div>
            </div>
            <div className='mr-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6 cursor-pointer text-[#6C6E71]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
                />
              </svg>
            </div>
            <div className='h-8 w-8 cursor-pointer overflow-hidden rounded-[50%]'>
              <img src={AvartarIcon} alt='' className='h-8 w-8 bg-cover bg-center' />
            </div>
          </div>
        </div>

        <div className=' mt-5 flex w-full'>
          <div className=' relative w-[200px]  overflow-hidden text-base text-[#5E6E82]'>
            <div className='relative z-50 mb-7 overflow-hidden' onClick={toggleMenu}>
              <div className=' mb-1 flex cursor-pointer items-center justify-between  '>
                <div className='flex items-center overflow-hidden'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                    />
                  </svg>

                  <span className='ml-4 font-medium'>Dashboard</span>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='h-4 w-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
                  </svg>
                </div>
              </div>
              <div
                style={{
                  overflow: 'hidden',
                  transition: 'height 200ms ease-out',
                  height: activeKey ? '100%' : '0'
                }}
              >
                <div ref={listRef}>
                  <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Default</div>
                  <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Input</div>
                  <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Select</div>
                  <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Checkbox</div>
                  <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>DatePicker</div>
                </div>
              </div>
            </div>
            <div className='mb-7'>
              <div className='mb-3 flex items-center text-[#99a2af]'>
                App
                <div className='ml-3 h-[1px] w-full bg-[#DAE0E5]'></div>
              </div>
              <div className='mb-4 flex cursor-pointer items-center justify-between'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z'
                    />
                  </svg>

                  <span className='ml-4 font-medium'>Landing</span>
                </div>
              </div>
              <div className='mb-1 flex cursor-pointer items-center justify-between'>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                    />
                  </svg>
                  <span className='ml-4 font-medium'>Pages</span>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='h-4 w-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
                  </svg>
                </div>
              </div>
              <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Default</div>
              <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Input</div>
              <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Select</div>
              <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>Checkbox</div>
              <div className='ml-10 pt-2 text-sm font-medium duration-100 hover:text-black '>DatePicker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
