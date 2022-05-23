import Header from './Header';
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';


export default function BuyTickets ({infoBuyer}) {

    console.log(infoBuyer)

     const {name, cpf, seatName, info} = infoBuyer;
     const navigate = useNavigate();

     console.log(seatName)
     let str = "";
     seatName.forEach(element => str += ` ${element} `);


        return ( 
            <>
                <Header />
                <div className="buy-tickets">
                    <div className="success">
                        <h2>Pedido feito</h2>
                        <h2>com sucesso!</h2>
                    </div>
                    <div className="info">
                        <h3>Filme e sessão</h3>
                        <p>{info?.movie.title}</p>
                        <p>{info?.day.weekday} {info?.name}</p>
                    </div>
                    <div className="info">
                        <h3>Ingressos</h3>
                        <p>Assento(s) {str}</p>
                    </div>
                    <div className="info">
                        <h3>Comprador</h3>
                        <p>Nome: {name}</p>
                        <p>CPF: {cpf}</p>
                    </div>
                    <div className="button-buy" onClick={() => navigate(`/`)}>
                        Voltar pra Home
                    </div>
                </div>

            </>             
        

        )
}