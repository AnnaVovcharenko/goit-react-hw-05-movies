import React, { useState } from "react";
import  Form  from '../../components/Form/Form';
import  {Loader}  from '../../components/Loader/Loader';

import  ListFilm  from '../../components/Listfilm/ListFilm';
import { handleSearch } from 'service/Api';

const Movies = () => {

const [searchFilms, setSearchFilms] = useState([]);
const [loading, setLoading] = useState(false);
const [text, setText] = useState(false);


const searchMovies = query => {
    setLoading(true);
    
handleSearch(query)
.then(results => {
    setSearchFilms(results);
    setText(results.long === 0);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    setLoading(false);
});
};

return (

    <div>
      <Form   searchMovies={searchMovies}/>
      {loading && <Loader />}  
      {text && (
        <p>Nothing found</p>
      )}
      {searchFilms && <ListFilm films={searchFilms}/>}
    </div>
);
};
export default Movies;