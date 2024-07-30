import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'


function App () {
  
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p> {fact} </p>}
      {imageUrl && <img src= { imageUrl } alt={`Imagen extraida usando las primeras 3 letras de ${fact}`}/>}
    </main>
  )
}

export default App