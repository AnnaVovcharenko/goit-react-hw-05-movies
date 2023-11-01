import React, { useEffect, useState } from 'react';
import { fetchTrending } from 'service/Api';
import  ListFilm  from 'components/Listfilm/ListFilm';
import  {Loader}  from '../../components/Loader/Loader';

const Home = () => {
  const [trendingToDay, setTrendingToDay] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const movies = await fetchTrending();
        setTrendingToDay(movies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading ?(
        <Loader />
      ): error ?(
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <ListFilm films={trendingToDay} />
      )}

    </div>
  );
};

export default Home;
