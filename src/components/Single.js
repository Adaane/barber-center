import React from 'react';

import React from 'react'

const Single = (props) => {
    return (
        <li className="col s12 m7">
        <div className="card">
            <div className="card-image">
                <img src="./barber.jpg" alt={props.item.title} />
                <span className="card-title">{props.item.title}</span>
            </div>
            <div className="card-content">

            </div>
            <span className="card-title">{props.item.Adress}</span>
            <div className="row">
                <div className="col 16 center">
                    <blockquote><h5>{props.item.number}</h5></blockquote>
                </div>
            </div>
        </div>
        </li>
    )
}

export default Single