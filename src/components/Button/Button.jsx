import { LoadMoreButton } from './Button.styled';

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
