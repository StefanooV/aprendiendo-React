import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a la Home',
    description: '¡Hola! Me llamo Stefano Vaudagna y estoy creando un clon de React Router'
  },
  en: {
    title: 'About Us',
    button: 'Go to the Home',
    description: '¡Hi! My name is Stefano Vaudagna. I am creating a clone of React Router'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1820697485876314112/b6WqJ_lV_400x400.jpg" alt="Imagen copada" />
          <p>{i18n.description}</p>
        </div>
        <Link to='/'>{i18n.button}</Link>
      </>
    )
}