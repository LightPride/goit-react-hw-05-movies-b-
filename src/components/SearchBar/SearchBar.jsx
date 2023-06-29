import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

export default function SearchBar() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.elements.searchInput.value.trim() === '') {
      Notiflix.Notify.warning('Search querry should not be empty!');
      return;
    }

    setSearchParams({ query: form.elements.searchInput.value });
    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
          name="searchInput"
        />
        <SearchFormButton type="submit">
          <FaSearch />
        </SearchFormButton>
      </SearchForm>
    </>
  );
}
