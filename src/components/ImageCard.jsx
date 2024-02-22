

const ImageCard = ({image, openImageModal}) => {

const handleClick = () => {
    openImageModal(image)
}

  return (
    <li onClick={handleClick}>
      <div>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  )
}

export default ImageCard
