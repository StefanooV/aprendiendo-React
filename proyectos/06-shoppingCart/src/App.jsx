import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"

function App() {
  const [products] = useState(initialProducts)
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })
  
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

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
