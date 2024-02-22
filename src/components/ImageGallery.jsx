
import ErrorMessage from './ErrorMessage'
import ImageCard from './ImageCard'
import Loader from './Loader'

const ImageGallery = ({images, isLoading, error, openImageModal}) => {


    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <ErrorMessage message={error}/>
    }


  return (
    <ul>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openImageModal={openImageModal}/>
      ))}
    </ul>
  )
}

export default ImageGallery
