import { useState, useEffect } from "react";

export function useCatFact() {
    const [fact, setFact] = useState()
  
    const refreshRandomFact = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    useEffect(refreshRandomFact, [])
  
    return { fact, refreshRandomFact }
}