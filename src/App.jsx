import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageGallery from "./components/ImageGallery"
import LoadMoreBtn from "./components/LoadMoreBtn"
import ImageModal from "./components/ImageModal"



function App() {

  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)

  const API_KEY = 'yLOaWsZUATSoOYxqkZmtxyXosDpArJf7gfhGvID5pMU'

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${API_KEY}`)
        setImages((prevImage) => [...prevImage, ...response.data.results])
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
   
    }
    if (query !== '') {
      fetchImage()
    }
  }, [query, page])

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery)
    setPage(1)
    setImages([])
  }

  const loadMoreImage = (e) => {
    e.preventDefault()
    setPage((prevPage) => prevPage + 1)
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch}/>
      <ImageGallery images={images} isLoading={isLoading} error={error} openImageModal={openImageModal}/>
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImage}/>}
      {selectedImage && (
        <ImageModal isOpen={Boolean(selectedImage)} onRequestClose={closeImageModal} image={selectedImage}/>
      )}
    </>
  )
}

export default App
