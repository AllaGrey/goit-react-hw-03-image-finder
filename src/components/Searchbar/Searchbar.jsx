import {
  Header,
  SearchForm,
  SearchInput,
  SubmitButton,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onSearch = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);

    if (searchQuery === '') toast.warning('Please enter some text');
  };

  onChange = e => {
    const normalizedValue = e.target.value.toLowerCase().trim();
    this.setState({ searchQuery: normalizedValue });
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.onSearch}>
          <SubmitButton type="submit">
            <span>Search</span>
          </SubmitButton>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.onChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
