import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products"
import { useCallback, useContext, useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT} from './config'
import { FiltersContext } from "./context/filter"


function useFilters () {
  //const [filter, setFilter] = useState({
  //  category: 'all',
  //  minPrice: 0
  //})
  const {filter, setFilter} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(products => {
      return (
        products.price >= filter.minPrice &&
        (
          filter.category === 'all' ||
          products.category === filter.category
        )
      )
    })
  }

  return { filter, filterProducts, setFilter}
}


function App() {
  const [products] = useState(initialProducts)
  const { filter, filterProducts, setFilter } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters = {setFilter} />
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer filter={filter}/> }
    </>
  )
}

export default App
