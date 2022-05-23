import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'


export default function Seats( {setInfoBuyer} ) {

    const { idSessao } = useParams();
    const [info, setInfo] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState(() => new Set());
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    const [seatName, setSeatName] = useState(() => new Set());

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(res => {
            setInfo(res.data)
        })

    }, []);


    function selectSeat (seatID, seatNum) {
        selectedSeat.add(seatID)
        seatName.add(seatNum)
        setSelectedSeat(new Set (selectedSeat));
        setSeatName(new Set(seatName));
        
    }

    function unselectSeat (seatID, seatNum) {
        selectedSeat.delete(seatID);
        seatName.delete(seatNum)
        setSelectedSeat(new Set (selectedSeat));
        setSeatName(new Set(seatName));
    }

    function buyTickets(event) {
        event.preventDefault();
        setInfoBuyer({name, cpf, seatName, info});
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: [...selectedSeat],
            name: name,
            cpf: cpf           
        })
        promise.then(res => navigate(`/sucesso`))
    }



    return (
        <>
            <Header />
            <div className="seats-div">
                <div className="choose">
                    Selecione o(s) assento(s)
                </div>
                <div className="seats">
        
                    {info?.seats.map((seat) => {
                        
                           if (selectedSeat.has(seat.id)) {
                               return <div className="chosen" onClick={() => unselectSeat(seat.id, seat.name)}><p>{seat.name}</p></div>
                            } else if (seat.isAvailable === true) {
                                return <div className="available" onClick={() => selectSeat(seat.id, seat.name)}> <p>{seat.name}</p></div>
                            } else {
                                return <div className="unavailable" onClick={() => alert("Esse assento não está disponível.")}><p>{seat.name}</p></div>
                            } 
                    })}

                </div>
                <div className="options">
                    <div>
                        <div className="chosen">

                        </div>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <div className="available">

                        </div>
                        Disponível
                    </div>
                    <div>
                        <div className="unavailable">

                        </div>
                        Indisponível
                    </div>
                </div>
                <form onSubmit={buyTickets}>
                    <div className="buy">
                        <div>
                            <label htmlFor="name">Nome do Comprador:</label>
                            <input
                                type="text"
                                placeholder="Digite seu nome..."
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="cpf">CPF do Comprador:</label>
                            <input
                                type="number"
                                placeholder="Digite seu CPF..."
                                required
                                onChange={(e) => setCpf(e.target.value)}
                                value={cpf}
                            ></input>
                        </div>

                    </div>
                    <button className="button-buy" type="submit">
                        Reservar assento(s)
                    </button>

                </form>
            </div>
            <Footer>
                
                <div className="movieposter">
                    <img src={info?.movie.posterURL} />
                </div>
                <div className="footer-seats">   
                    <div className="movieinfo">
                        <p>{info?.movie.title}</p>
                    </div>
                    <div>
                        <p>{info?.day.weekday} - {info?.name}</p>
                    </div>
                </div>

                

            </Footer>
        </>
    )
}
