import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG;

const genresUrl = import.meta.env.VITE_GENRE;
const apiKey = import.meta.env.VITE_API_KEY;


const MovieCard = ({movie, showLink = true}) => {
  const date = new Date(movie.release_date);
  const year = date.getFullYear();

  const [genres, setGenres] = useState([]);

    const getGenres = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setGenres(data.results);

        console.log(data);
    }

    //const genreNames = movie.genres_ids.map(id => {
     // const genre = genres.find(g => g.id === id);
     // return genre ? genre.name : null; // Retorna o nome do gênero ou null se não encontrado
    //}).filter(name => name !== null);

    //toda vez que a pagina for carregada roda a função
    useEffect(() => {
      //esses nomes são da api, estão na documentação
      const urlGenres = `${genresUrl}?${apiKey}`;

      getGenres(urlGenres);
  }, []);



  return (
    <div className='movie-card'>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2 className='title'>{movie.title}</h2>
        <p className='anoLancamento'>
            Ano de Lançamento: {year}
        </p>
        <p className='genero'>
            Gênero: {}
        </p>
        <p className='sinopse'> 
            Sinopse: {movie.overview}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}> Detalhes </Link>}
    </div>
  )
}

export default MovieCard