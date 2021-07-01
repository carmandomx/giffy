import './App.css'
import { useEffect, useState } from 'react'
import Gif from './Gif'
function App () {
  const [data, setData] = useState(1)
  const [dataTwo, setDataTwo] = useState(2)

  useEffect(() => {
    setDataTwo(prevState => {
      return prevState * data
    })

    // setDataTwo(dataTwo * data)
  }, [data])

  return (
    <div className='App'>
      <header className='App-header'>
        <Gif />
      </header>
    </div>
  )
}

export default App
