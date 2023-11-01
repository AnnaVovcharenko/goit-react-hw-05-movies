import { fetchMovieReviews } from '../../service/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from "./Reviews.styled";


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && (
        <div>Information is absent</div>
      )}
    </>
  );
};

export default Reviews;