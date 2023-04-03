import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

export const LoadMore = ({ page, onClick }) => {
  const onLoadMore = e => {
    const newPage = page + 1;
    onClick(newPage);
  };
  return (
    <LoadMoreButton type="button" onClick={onLoadMore}>
      Load more
    </LoadMoreButton>
  );
};

LoadMore.propTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
