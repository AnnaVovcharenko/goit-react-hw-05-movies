import { useState } from 'react';
import { SearchForm, Input, Button } from "./Form.styled";

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};
 export default Form;