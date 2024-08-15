import { Link } from "../Link"

export default function Page404() {
    return (
        <>
            <div>
                <h1>This is NOT fine</h1>
                <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Perro diciendo esto esta bien quemandose vivo" />
            </div>

            <Link to='/'>Go to the Home</Link>
        </>
    )
}