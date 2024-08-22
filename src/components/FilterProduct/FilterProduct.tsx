import { useQuery } from '@tanstack/react-query'
import { on } from 'events'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import FilterApi, { Product } from 'src/apis/filterProduct'

interface Input {
  input: string
}

function FilterProduct() {
  const { register, handleSubmit } = useForm<Input>({
    defaultValues: {
      input: ''
    }
  })

  const { data } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      return await FilterApi.getProduct()
    },
    staleTime: 3 * 60 * 1000
  })
  const [api, setApi] = useState<Product[]>(data?.data as Product[])

  const onSubmit = handleSubmit((dataForm) => {
    const search = dataForm.input

    const listItem = data?.data?.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase())
    })
    setApi(listItem as Product[])
  })
  console.log(api)

  // const onSubmit: SubmitHandler<Input> = (dataF) => {
  //   const search = dataF.input
  //   console.log(data)
  //   if (data?.data) {
  //     productData = data?.data.filter((product) => {
  //       product.title.toLowerCase().includes(search.toLowerCase())
  //     })
  //   }
  //   console.log(productData)
  // }
  return (
    <div className=' bg-gray-200 pt-10 '>
      <div className='mx-auto max-h-[500px] w-[400px]  overflow-scroll  rounded-md bg-white px-4 py-6 shadow-lg'>
        <header className=''>
          <h2 className='mb-5 text-xl font-semibold leading-6 text-black'>Product Filter</h2>
          <form
            action='submit '
            className='mb-5 mr-1 flex items-center justify-center rounded-l-lg border-[1px] border-gray-800'
            onSubmit={onSubmit}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='ml-2 h-5  w-5 text-center leading-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <input
              type='text'
              placeholder='Tìm sản phẩm mong muốn'
              className='flex-grow  px-2 py-2 text-gray-600 outline-none'
              {...register('input')}
            />
          </form>
        </header>
        <div className='mt-2'>
          {api &&
            api.map((product) => (
              <div className='flex items-center px-2 py-5' key={product.id}>
                <div className='w-[50px] overflow-hidden'>
                  <img src={product.image} alt={product.title} className='h-full w-full overflow-hidden object-cover' />
                </div>
                <div className='mx-5 flex-grow text-base text-black '>
                  <h4 className='font-semibold line-clamp-2'>{product.title}</h4>
                  <p className='mt-3'>${product.rating.count}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FilterProduct
