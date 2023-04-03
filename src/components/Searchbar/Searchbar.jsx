import {
  Header,
  SearchForm,
  SearchInput,
  SubmitButton,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const onSearch = e => {
    e.preventDefault();
    const target = e.target.elements[1].value;
    if (target) onSubmit(target);
    if (target === '') toast.warning('Please enter some text');
  };

  return (
    <Header>
      <SearchForm onSubmit={onSearch}>
        <SubmitButton type="submit">
          <span>Search</span>
        </SubmitButton>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
