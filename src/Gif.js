import { div } from 'prelude-ls'
import { useEffect, useState } from 'react'
import GifItem from './GifItem'

const SearchBox = ({ onSearch }) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => {
          onSearch(value)
        }}
      >
        Buscar
      </button>
    </div>
  )
}

const Gif = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    if (searchTerm) {
      const logic = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
          searchTerm
        )}&limit=10&api_key=oAilDgJZfgzg38LMTGIGtmpDf8sH7FEX`

        const data = await fetch(url).then(res => res.json())
        const gif = data.data[1]
        setTitle(gif.title)
        setImgUrl(gif.images.original.url)
      }

      logic()
    }
  }, [searchTerm])

  return (
    <div>
      <div>
        <SearchBox onSearch={setSearchTerm} />
        <GifItem title={title} imgUrl={imgUrl} />
      </div>
    </div>
  )
}

export default Gif
