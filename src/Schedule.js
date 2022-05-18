import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function Schedule () {

    const [session, setSession] = useState([]);
    const {idFilme} = useParams();

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(res =>
            setSession(res.data))
    }, []);

    console.log(session)

    return (
        <>
            <Header />
            <div className="schedule">
                <div className="choose">
                    Selecione o horário
                </div>
                            
                { session.map(value => (
                    <>   
                    <div className="day">
                        {value.weekday} - {value.date}
                    </div>
                    <div className="time">
                        {value.showtimes.name}
                    </div>
                    </> 
                ))}
                     
            </div>
            <Footer>
                <div className="movieposter">
                    <img src={session.posterURL} />
                </div>
                <p>{session.title}</p>
            </Footer>
        </>
    )
}