import React from 'react'
import '../css/test.css'

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { personas: [] }
        this.addPersona = this.addPersona.bind(this)
    }
    render() {
        return (
            <div className="grid">
                <div className="form">
                    <form onSubmit={this.addPersona}>
                        <input type="text" placeholder="Nombre" id="nombre" />
                        <input type="text" placeholder="Edad" id="edad" />
                        <input type="text" placeholder="Profesion" id="profesion" />
                        <button type="submit" >Agregar</button>
                    </form>
                </div>
                <br />
                <div className="elementos">
                    {
                        this.state.personas.map((p,index) =>(
                        <p key={index}>{index +1}) {p.nombre} {p.edad} Años {p.profesion}</p>
                        ))
                    }
                </div>
            </div>
        )
    }
    addPersona(e) {
        e.preventDefault();

        var a = {
            nombre: e.target.nombre.value,
            edad: e.target.edad.value,
            profesion: e.target.profesion.value
        }
        this.setState((prevState)=>{
            return {personas : prevState.personas.concat(a)}
        })
    }
}
export default Test;