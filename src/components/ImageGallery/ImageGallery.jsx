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
    searchQuery: '',
    page: 1,
    totalPages: 1,
    gallery: [],
    isLoading: false,
    error: '',
    isModalOpen: false,
    currentItemURL: '',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchQuery !== this.props.searchQuery) {
  //     this.setState({
  //       searchQuery: this.props.searchQuery,
  //       page: 1,
  //       gallery: [],
  //       isLoading: true,
  //     });
  //   } else if (
  //     prevState.page !== this.state.page &&
  //     this.props.searchQuery === this.state.searchQuery
  //   ) {
  //     this.getLoading();
  //   } else if (
  //     prevProps.searchQuery !== this.props.searchQuery &&
  //     prevState.page === this.state.page
  //   ) {
  //     this.getLoading();
  //   }
  // }

  async componentDidUpdate(prevState, prevProps) {
    const { searchQuery } = this.props;
    if (this.state.searchQuery !== searchQuery) {
      await this.setState(({ isLoading }) => ({
        searchQuery: searchQuery,
        page: 1,
        gallery: [],
        isLoading: !isLoading,
      }));
      this.getLoading();
    }
  }

  getLoading() {
    getImages(this.props.searchQuery, this.state.page)
      .then(({ data, total }) => {
        this.setState(({ gallery, isLoading, totalPages, page }) => ({
          gallery: [...gallery, ...data],
          totalPages: total,
          isLoading: !isLoading,
          page: page + 1,
        }));
        if (data.length === 0) {
          throw new Error('No results');
        }
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
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
      });
  }

  onModal = currentItem => {
    this.setState(({ isModalOpen, currentItemURL }) => ({
      isModalOpen: !isModalOpen,
      currentItemURL: currentItem,
    }));
  };

  onLoadMore = () => {
    this.setState({ isLoading: true });
    this.getLoading();
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
          {isLoading && <Loader />}
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
