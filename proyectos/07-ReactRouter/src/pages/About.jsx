import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1820697485876314112/b6WqJ_lV_400x400.jpg" alt="Imagen copada" />
          <p>Hi! I'am Stefano, Estoy creando un clon de React Router</p>
        </div>
        <Link to='/'>Go Home</Link>
      </>
    )
}