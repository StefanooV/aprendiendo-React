import { useState, useEffect } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const {fact} = data
        setFact(fact)

        const ThreeFirstWord = fact.split(' ', 3).join(' ')
        console.log(ThreeFirstWord)

        fetch(`https://cataas.com/cat/says/${ThreeFirstWord}?size=50&color=red&json=true`)
          .then(response => response.json())
          .then(data => {
            const { url } = data
            setImageUrl(url)
          }) 
      })
  }, [])

  return (
    <main>
      <h1>App de Gatitos</h1>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen extraida usando las primeras 3 letras de ${fact}`}/>}
    </main>
  )
}

export default App