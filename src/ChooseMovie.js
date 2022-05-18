import Header from './Header'
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function ChooseMovie () {
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies`);
        promise.then(res => {
            setMovies(res.data)
        });
    }, []);

    
    return (
        <>
            <Header />
            <div className="choosemovie">
                <div className="choose">Selecione o filme</div>
                <div className="movies">
                    {movies.map((movie) => (
                        <Link to={`sessoes/${movie.id}`}>
                            <img src={movie.posterURL} />
                        </Link>
                    ))}
                </div>                
            </div>
        </>
    )
}