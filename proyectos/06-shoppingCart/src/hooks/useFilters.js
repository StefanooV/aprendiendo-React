import { useContext } from "react"
import { FiltersContext } from "../context/filter"

export function useFilters () {
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