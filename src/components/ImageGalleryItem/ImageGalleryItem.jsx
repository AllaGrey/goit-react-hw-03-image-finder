import { GalleryItem, Image } from './ImageGalleryItem.styled';

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
