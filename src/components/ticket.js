import React from 'react'
import '../css/ticket.css'

class Ticket extends React.Component {
    render() {
        return (
            <div className="grid-ticket">
                <div className="precio-cantidad">
                    <div className="precio">
                        <div>
                            Cantidad:
                        </div>
                        <div className="inputCamp">
                            <input type="number" min="0" value="0" />
                            <div className="grupo-btn">
                                <button className="btn-cant">+</button>
                                <button className="btn-cant">-</button>
                            </div>
                        </div>
                    </div>
                    <div className="precioTotal">
                        <div>
                            Precio Total:
                        </div>
                        <div className="total">
                            <div>
                                <h1><span>$</span>5.222</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardNum">
                    <div>
                        Numero de tarjeta
                    </div>
                    <input type="text" placeholder="xxxx-xxxx-xxxx" />
                </div>
                <div className="fecha-ccv">
                    <div className="fecha">
                        <div>
                            Fecha:
                        </div>
                        <input type="text" placeholder="01/01" />
                    </div>
                    <div className="ccv">
                        <div>
                            CCV:
                        </div>
                        <input type="text" placeholder="0000" />
                    </div>
                </div>
                <div className="mail">
                    <div className="eMail">
                        <div>
                            Email:
                        </div>
                        <input type="text" placeholder="lorem@ipsum.com" />
                    </div>
                </div>
                <div className="getTicket">
                    <button className="btn-get-ticket">Comprar</button>
                </div>
            </div>
        )
    }
}

export default Ticket;