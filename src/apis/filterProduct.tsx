import axios from 'axios'
export interface Product {
  id: number
  category: string
  description: string
  image: string
  rating: {
    rage: number
    count: number
  }
  title: string
}
const FilterApi = {
  getProduct() {
    return axios.get<Product[]>('https://fakestoreapi.com/products')
  },
  searchProduct(body: string) {
    return axios.post('https://fakestoreapi.com/products')
  }
}
export default FilterApi
