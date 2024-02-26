import styles from './ImageCard.module.css';

const ImageCard = ({ image, openImageModal }) => {
  const handleClick = () => {
    openImageModal(image)
  }

  return (
    <div className={styles.imageCard} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image.urls.small}
          alt={image.alt_description}
          width="300" 
          height="300" 
        />
      </div>
    </div>
  );
}

export default ImageCard;
