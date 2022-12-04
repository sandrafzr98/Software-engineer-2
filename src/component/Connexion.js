import '../styles/Connexion.css'
import React from 'react'

function Connexion(){
    return(
        <div className='Connexion'>
            <h2>Connexion</h2>
            <form action="/Inscription_Connexion" method="post">
                <div>
                    <label for="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label for="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
                </div>
                <div>
                    <label for="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
                </div>
            </form>
            <div className="button">
                <button type="submit">Connexion</button>
            </div>
        </div>
    )
}
export default Connexion