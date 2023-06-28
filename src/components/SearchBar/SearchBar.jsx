import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

export default function SearchBar({ onSubmit }) {
  // const [searchInput, setSearchInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const handleInputChange = event => {
    const movieNameValue = event.target.value;

    if (movieNameValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieNameValue });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (movieName.trim() === '') {
      Notiflix.Notify.warning('Search querry should not be empty!');
      return;
    }
    onSubmit(movieName);
    const form = event.currentTarget;
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
          onChange={handleInputChange}
        />
        <SearchFormButton type="submit">
          <FaSearch />
        </SearchFormButton>
      </SearchForm>
    </>
  );
}
