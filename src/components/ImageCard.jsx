import styles from './ImageCard.module.css';

const ImageCard = ({image, openImageModal}) => {

const handleClick = () => {
    openImageModal(image)
}

  return (
    <li className={styles.imageCard} onClick={handleClick}>
      <div>
      <img className={styles.image} src={image.urls.small} alt={image.alt_description} /> 
      </div>
    </li>
  )
}

export default ImageCard
