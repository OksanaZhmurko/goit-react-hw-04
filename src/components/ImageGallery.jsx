import ErrorMessage from './ErrorMessage';
import ImageCard from './ImageCard';
import Loader from './Loader';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, isLoading, error, openImageModal }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.imageGalleryItem}>
          <ImageCard image={image} openImageModal={openImageModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
