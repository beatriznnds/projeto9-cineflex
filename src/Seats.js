import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import movieposter from './image 3.png'

export default function Seats () {

    const {idSessao} = useParams
    const [seats, setSeats] = useState([]);
    
    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(res =>
            setSeats(res.data))
    }, []);

    console.log(seats)

    return (
        <>
            <Header />
            <div className="choose">
                Selecione o(s) assento(s)
            </div>
            <div className="seats">
                <div className="individual-seat">

                </div>
            </div>
            <Footer>
                <div className="movieposter">
                        <img src={movieposter} />
                </div>
                <div className="movieinfo">
                    <p>Título do filme</p>
                    <p>Dia da semana - Horáiro</p>
                </div>
            </Footer>
        </>
    )
}