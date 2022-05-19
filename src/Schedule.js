import Header from './Header'
import Footer from './Footer'
import Time from './Time'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Schedule () {

    const [session, setSession] = useState([]);
    const {idFilme} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(res =>
            setSession(res.data.days))
    }, []);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(res =>
            setMovie(res.data))
    }, []);




    return (
        <>
            <Header />
            <div className="schedule">
                <div className="choose">
                    Selecione o horário
                </div>
                            
                { session.map(session => (
                    <>
                      
                        <div className="day">
                            {session.weekday} - {session.date}
                        </div>
                        <div className="position">
                            <Time showtimes={session.showtimes} />
                        </div>

                    </>
                    
                ))}
                     
            </div>
            <Footer>
                <div className="movieposter">
                    <img src={movie.posterURL} />
                </div>
                <p>{movie.title}</p>
            </Footer>
        </>
    )
}