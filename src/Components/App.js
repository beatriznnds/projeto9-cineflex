import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import ChooseMovie from './ChooseMovie';
import Schedule from './Schedule';
import Seats from './Seats';
import BuyTickets from './BuyTickets';


export default function App () {
    const [infoBuyer, setInfoBuyer] = useState(null);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ChooseMovie/>} />
                <Route path='/sessoes/:idFilme' element={<Schedule />} />
                <Route path='/assentos/:idSessao' element={<Seats setInfoBuyer={setInfoBuyer} />} />
                <Route path='/sucesso' element={<BuyTickets infoBuyer={infoBuyer} />} />
            </Routes>
        </BrowserRouter>
    )

}