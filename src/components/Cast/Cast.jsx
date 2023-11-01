import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../service/Api';
import { List, Text } from "./Cast.styled";


// import placeholder from '../../img/images.png';
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);


useEffect(() => {
    const movieCast = async () => {
        try {
            const response = await fetchMovieCast(movieId);
            setCast(response);
        } catch (error) {
            console.error(error);
        }
    };
    movieCast();
}, [movieId]);



return (
<>
{cast.length !== 0 && (
    <div>
        <h2>Movie Cast</h2>
        <List>
            {cast.map(actor => (
                <li key={actor.id}>
                    <img
                    width="200px"
                    height="300px"
                     src={
                        actor.profile_path
                        ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                        : defaultImg
                     } 
                     alt={actor.original_name} />
                     <Text>{actor.name}</Text>
                </li>
            ))}
        </List>
    </div>
)}
{cast.length === 0 && <div>Information is absent</div>}
</>
);
};

export default Cast;