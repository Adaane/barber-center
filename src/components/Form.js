import React from 'react'

export default function Form() {
    return (
        <div className="row">
            <form className="col s12" id="addBarber">
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="name" type="text" className="validate" />
                        <label htmlFor="name">Nom du Salon</label>
                    </div>
                 </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="adress" type="text" className="validate" />
                        <label htmlFor="adress">Adresse</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="city" type="text" className="validate" />
                        <label htmlFor="city">Ville</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="zipCode" type="text" className="validate" />
                        <label htmlFor="zipCode">Code Postal</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input  id="number" type="number" className="validate" />
                        <label htmlFor="number">Numéro de téléphone</label>
                    </div>
                    <div className="input-field col s4">
                       <button className="btn waves-effect waves-light" type="submit" name="action">Ajouter</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
