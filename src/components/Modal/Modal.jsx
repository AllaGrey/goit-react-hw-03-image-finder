import { ModalContainer, LargeImage, ImageWrap } from './Modal.styled';

export const Modal = ({ largeImageURL, onModal }) => {
  const onClick = e => {
    if (e.target === e.currentTarget) onModal();
  };

  const onKeyDown = e => {
    if (e.code === 'Escape') onModal();
  };
  return (
    <ModalContainer onClick={onClick} onKeyDown={onKeyDown} tabIndex="0">
      <ImageWrap>
        <LargeImage src={largeImageURL} alt="" />
      </ImageWrap>
    </ModalContainer>
  );
};
