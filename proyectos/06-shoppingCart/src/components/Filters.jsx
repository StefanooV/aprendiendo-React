import { useId, useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    const handleChangeMinPrice = (evt) => {
        setMinPrice(evt.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: evt.target.value
        }))
    }

    const handleChangeCategory = (evt) => {
        onChange(prevState => ({
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
                />
                <span> ${minPrice} </span>
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