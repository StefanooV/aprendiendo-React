import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Cart.css"

export function Cart () {
    const cartCheckboxId = useId()

    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId} >
            <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="Mackbook Pro" />
                        <div>
                            <strong>iPhone</strong> - $1749
                        </div>

                        <footer>
                            <small>
                                Qty:
                            </small>
                            <button>+</button>
                        </footer>

                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}