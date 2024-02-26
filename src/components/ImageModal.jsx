import Modal from 'react-modal'

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!isOpen || !image || !image.urls || !image.urls.regular || !image.alt_description) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        onError={(e) => { e.target.src = 'placeholder.jpg'; }}
      />
    </Modal>
  );
};

export default ImageModal
