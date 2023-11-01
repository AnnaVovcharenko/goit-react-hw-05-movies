import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieDetals } from '../../service/Api';
import { Container, List, ListInfo, LinkInfo, Button } from "./MovieDetails.styled";


const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';





const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      const fetchDetailsFilms = () => {
        setLoading(true);
  
        fetchMovieDetals(movieId)
          .then(detailMovie => {
            setMovieInfo(detailMovie);
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      };
  
      fetchDetailsFilms();
    }, [movieId]);
  
    if (!movieInfo) {
      return;
    }
  
    const {
      title,
      release_date,
      popularity,
      overview,
      genres,
      poster_path,
      original_title,
    } = movieInfo || {};
  
    return (
      <>
        <Link to={location.state?.from ?? '/'}>
          <Button type="button">Go back</Button>
        </Link>
        {loading && <Loader />}
  
        {movieInfo && (
          <Container>
            <img
              width="300px"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={original_title}
            />
            <div>
              <h1>
                {title} ({release_date.slice(0, 4)})
              </h1>
              <p>User score: {popularity}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <List>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </List>
            </div>
          </Container>
        )}
        <hr />
        <div>
          <h3>Additional information</h3>
          <ListInfo>
            <li>
              <LinkInfo to="cast">Cast</LinkInfo>
            </li>
            <li>
              <LinkInfo to="reviews">Reviews</LinkInfo>
            </li>
          </ListInfo>
          <hr />
          <Outlet />
        </div>
      </>
    );
  };
  
  export default MovieDetails;