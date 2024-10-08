export default function Book() {
  return (
    <div>
      <div className='imgLoader' />
      <div className='container'>
        <h1 className='title'>Turning pages with css</h1>
        <div className='credit'>* Images loaded randomly from Picsum.photos</div>
        <div className='book'>
          <div className='gap' />
          <div className='pages'>
            <div className='page' />
            <div className='page' />
            <div className='page' />
            <div className='page' />
            <div className='page' />
            <div className='page' />
          </div>
          <div className='flips'>
            <div className='flip flip1'>
              <div className='flip flip2'>
                <div className='flip flip3'>
                  <div className='flip flip4'>
                    <div className='flip flip5'>
                      <div className='flip flip6'>
                        <div className='flip flip7' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='https://twitter.com/amit_sheen' className='twitterLink' target='_top'>
        <img src='https://assets.codepen.io/1948355/twitterLogo2.png' alt='' />
      </a>
    </div>
  )
}
