import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseMovie from './ChooseMovie';
import Schedule from './Schedule';
import Seats from './Seats';
import BuyTickets from './BuyTickets';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ChooseMovie />} />
                <Route path='/sessoes/:idFilme' element={<Schedule />} />
                <Route path='/assentos/:idSessao' element={<Seats />} />
                <Route path='sucesso' element={<BuyTickets />} />
            </Routes>
        </BrowserRouter>
    )

}