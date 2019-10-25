import React, {Component} from 'react';
import './Card.css'

class Card extends Component {

    render(){
        return (
            <div className={this.props.borderColor}>
                <div>
                    <p className="muted">Ruta</p>
                    <p className="strong">{this.props.route}</p> 
                </div>
                <div>
                    <p className="muted">Conductor</p>
                    <p className="strong">Jose luis zepeda</p>
                </div>
                <div>
                    <p className="muted">Creada</p>
                    <p className="strong">1 de Enero del 2019</p>
                </div>
                <div>
                    <p className="muted">Início</p>
                    <p className="strong">13:00</p>
                </div>
                <div>
                    <p className="muted">Término</p>
                    <p className="strong">{this.props.endTravel || '-'}</p>
                </div>
                <div>
                    <p className="muted">Entregas</p>
                    <p className="strong">{this.props.deliveries}</p>
                </div>
                <div className="badge_container">
                    <p className={this.props.nameColor}>{this.props.status}</p>
                </div>
            </div>
        )
    }
}

export default Card;