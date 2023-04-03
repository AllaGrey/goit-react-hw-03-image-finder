import { Gallery, Section } from './ImageGallery.styled';
import { Component } from 'react';
import { getImages } from 'components/API/API';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { LoadMore } from 'components/Button/Button';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    page: 1,
    totalPages: 1,
    gallery: [],
    isLoading: false,
    error: '',
    isModalOpen: false,
    currentItemURL: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevProps !== this.props || prevState.page !== this.state.page) {
        this.setState(({ isLoading }) => ({
          isLoading: !isLoading,
        }));
        if (prevProps !== this.props) this.setState({ page: 1, gallery: [] });
        const searchQuery = this.props.searchQuery;
        const resp = await getImages(searchQuery, this.state.page);
        const data = resp.data.hits;
        const total = Math.ceil(resp.data.totalHits / 12);
        this.setState(({ gallery, isLoading, totalPages }) => ({
          gallery: [...gallery, ...data],
          totalPages: total,
          isLoading: !isLoading,
        }));

        if (data.length === 0) {
          this.setState({ error: 'No results' });
          toast.error('No results', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          throw new Error('No results');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  onModal = currentItem => {
    this.setState(({ isModalOpen, currentItemURL }) => ({
      isModalOpen: !isModalOpen,
      currentItemURL: currentItem,
    }));
  };

  onLoadMore = newPage => {
    this.setState({ page: newPage });
  };

  render() {
    const {
      gallery,
      isModalOpen,
      currentItemURL,
      isLoading,
      page,
      totalPages,
    } = this.state;

    if (gallery.length > 0) {
      return (
        <Section>
          {isLoading && <Loader />}
          <Gallery>
            {gallery.map(item => {
              const { id, webformatURL, largeImageURL, tags } = item;
              return (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                  onModal={this.onModal}
                />
              );
            })}
          </Gallery>
          {isModalOpen && (
            <Modal largeImageURL={currentItemURL} onModal={this.onModal} />
          )}

          {totalPages > 1 && page < totalPages && (
            <LoadMore page={page} onClick={this.onLoadMore} />
          )}
        </Section>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
