import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
  
    useEffect(() => {
      if(!fact) return
  
      const threeFirstWord = fact.split(' ', 3).join(' ')
  
      fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
        .then(response=> response.json())
        .then(data => {
          const { url } = data
          setImageUrl(url)
        }) 
    }, [fact])
  
    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
  }