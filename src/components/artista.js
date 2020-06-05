import React from 'react';
import '../css/artista.css';

class Artista extends React.Component {
    render() {
        return (
            <div className="grid-artista">
                <div className="elem-artista">
                    <div className="img-art">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/91VAjJ6YxrL._AC_SL1500_.jpg" />
                    </div>
                    <div className="desc-ticket">
                        <div className="nombre-art">
                            post malone
                        </div>
                        <div className="dia-con">
                            <span>Dia</span>
                            <span>20/05</span>
                        </div>
                        <div className="hora-con">
                            <span>Horario</span>
                            <span>23:00</span>
                        </div>
                        <div className="lugar-con">
                            <span>Lugar</span>
                            <span>Estadio River plate</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artista