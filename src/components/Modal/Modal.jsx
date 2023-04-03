import { ModalContainer, LargeImage, ImageWrap } from './Modal.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDownModal);
  }

  onKeyDownModal = e => {
    if (e.code === 'Escape') this.props.onModal();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onClickModal = e => {
    if (e.target === e.currentTarget) this.props.onModal();
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <ModalContainer onClick={this.onClickModal}>
        <ImageWrap>
          <LargeImage src={largeImageURL} alt="" />
        </ImageWrap>
      </ModalContainer>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onModal: PropTypes.func.isRequired,
};
