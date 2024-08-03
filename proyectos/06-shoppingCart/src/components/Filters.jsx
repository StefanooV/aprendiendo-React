import { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const { filter, setFilter } = useFilters()
   
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    const handleChangeMinPrice = (evt) => {
       
        setFilter(prevState => ({
            ...prevState,
            minPrice: evt.target.value
        }))
    }

    const handleChangeCategory = (evt) => {
        setFilter(prevState => ({
            ...prevState,
            category: evt.target.value
        }))
    }

    return (
        <section className='filters'>

            <div>
                <label htmlFor={minPriceFilterId}>Price from: </label>
                <input 
                    type='range' 
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filter.minPrice}
                />
                <span> ${filter.minPrice} </span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>

        </section>
    )
}