import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onModal,
}) => {
  const onClick = () => {
    const currentItem = largeImageURL;
    onModal(currentItem);
  };
  return (
    <GalleryItem className="gallery-item" onClick={onClick}>
      <Image src={webformatURL} alt={tags} width="200" height="150" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
};
