import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import SearchButton from './components/SearchButton'
// import CounterApp from './components/CounterApp'
import LandingPage from './components/LandingPage'
import Book from 'src/components/Book/Book'

const queryClient = new QueryClient()

function App() {
  return (
    <div className=''>
      <QueryClientProvider client={queryClient}>
        <Book />
        {/* <SearchButton /> */}
        {/* <Tooltip /> */}
      </QueryClientProvider>
      {/* <DarkLight /> */}
      {/* <CustomRangeSlider /> */}
    </div>
  )
}
export default App
