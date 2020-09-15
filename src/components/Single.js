import React from 'react';

const Single = (props) => {
    return (
        <li className="col s12 m7">
        <div className="card">
            <div className="card-image">
                <img src="./barber.jpg" alt={props.item.title} />
                <span className="card-title">{props.item.name}</span>
            </div>
            <div className="card-content">
            </div>
            <span className="card-title">{props.item.adress} - {props.item.city}</span>
            <div className="row">
                <div className="col 16 center">
                    <blockquote><h5>{props.item.number}</h5></blockquote>
                </div>
            </div>
            <div className="card-action">
                <button className="btn waves-light waves-effect red darken-4">Supprimer</button>
            </div>
        </div>
        </li>
    )
}

export default Single
