import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)

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
                <label htmlFor='price'>Price from: </label>
                <input 
                    type='range' 
                    id='price'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span> ${minPrice} </span>
            </div>

            <div>
                <label htmlFor='category'>Category</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>

        </section>
    )
}