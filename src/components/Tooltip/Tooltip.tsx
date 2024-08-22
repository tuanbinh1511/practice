function Tooltip() {
  return (
    <div className='mx-auto w-[800px]  py-20 '>
      <div className='top-20 flex justify-evenly'>
        <div className=' group/icon relative flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full bg-white shadow-lg   '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className=' h-6 w-6   '
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819'
            />
          </svg>
          <span className='group/icon absolute rounded-[25px] bg-blue-500 px-[18px] py-[10px] text-xl font-medium leading-5 text-white opacity-0 shadow-lg duration-300 group-hover/icon:translate-y-[-60px] group-hover/icon:bg-blue-700 group-hover/icon:opacity-100 '>
            Homie
          </span>
        </div>
        <div className=' group/icon relative flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full bg-white shadow-lg   '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z'
            />
          </svg>

          <span className='group/icon absolute rounded-[25px] bg-red-500 px-[18px] py-[10px] text-xl font-medium leading-5 text-white opacity-0 shadow-lg duration-300 group-hover/icon:translate-y-[-60px] group-hover/icon:bg-red-700 group-hover/icon:opacity-100 '>
            Music
          </span>
        </div>
        <div className=' group/icon relative flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full bg-white shadow-lg   '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
            />
          </svg>

          <span className='group/icon absolute rounded-[25px] bg-gray-500 px-[18px] py-[10px] text-xl font-medium leading-5 text-white opacity-0 shadow-lg duration-300 group-hover/icon:translate-y-[-60px] group-hover/icon:bg-gray-800 group-hover/icon:opacity-100 '>
            Phone
          </span>
        </div>
        <div className=' group/icon relative flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full bg-white shadow-lg   '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>

          <span className='group/icon absolute rounded-[25px] bg-purple-500 px-[18px] py-[10px] text-xl font-medium leading-5 text-white opacity-0 shadow-lg duration-300 group-hover/icon:translate-y-[-60px] group-hover/icon:bg-purple-700 group-hover/icon:opacity-100 '>
            Wifi
          </span>
        </div>
        <div className=' group/icon relative flex h-[80px] w-[80px] flex-col items-center justify-center rounded-full bg-white shadow-lg   '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
            />
          </svg>

          <span className='group/icon absolute rounded-[25px] bg-orange-500 px-[18px] py-[10px] text-xl font-medium leading-5 text-white opacity-0 shadow-lg duration-300 group-hover/icon:translate-y-[-60px] group-hover/icon:bg-orange-700 group-hover/icon:opacity-100 '>
            Wallet
          </span>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
