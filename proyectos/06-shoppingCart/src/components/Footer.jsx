import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    const {filter} = useFilters()

    return (
        <footer className='footer'>
           {
            JSON.stringify(filter, null, 2)
           }
           {
               /*
               <h4>Prueba técnica de React ⚛ 🚬 <span>@TofiV</span></h4>
                <h5>Shopping Cart with useContext & useReducer</h5>
               */
           } 
            
        </footer>
    )
}