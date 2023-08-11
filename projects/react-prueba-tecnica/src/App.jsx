import { useEffect, useState } from 'react'
import './app.css'

const CAT_ENDPOINT_IMAGE_URL_BASE = 'https://cataas.com'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const JSON_URL = '?json=true'

export const App = () => {
  const [fact, setFact] = useState()
  const [urlImage, setUrlImage] = useState()

  useEffect(() => {
    getRandomFact()
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(CAT_ENDPOINT_IMAGE_URL + firstWord + JSON_URL)
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setUrlImage(url)
      })
  }, [fact])
  const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await response.json()
    const { fact } = data
    setFact(fact)
  }
  const handleClick = () => {
    getRandomFact()
  }
  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>reset</button>
      {
        fact && <p>{fact}</p>
      }
      {
        urlImage && <img src={CAT_ENDPOINT_IMAGE_URL_BASE + urlImage} alt='cat' />
      }
    </main>
  )
}
