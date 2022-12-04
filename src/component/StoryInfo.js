import React from 'react'

function StoryInfo(args){
        console.log("Story infos : ",args);
        const types=args.types;
    if (types=="Book"){
        return(
            <div className='storyinfo'>
                <h2>Information sur l'histoire</h2>
                <form action="/Inscription_Connexion" method="post">
                    <p>
                            <label htmlFor="name">Nom : </label>
                            <input type="text" id="name" name="name"/>
                    </p>
                    <p>
                            <label htmlFor="firstname">Prénom : </label>
                            <input type="text" id="fname" name="fname"/>
                    </p>
                    <p>
                            <label htmlFor="username">Nom d'utilisateur : </label>
                            <input type="text" id="username" name="username" />
                    </p>
                    <p>
                            <label htmlFor="DDN">Date de naissance : </label>
                            <input type="date" id="DDN" name="DDN" />
                    </p>
                    <p>
                            <label htmlFor="mail">Adresse mail : </label>
                            <input type="email" id="mail" name="user_mail"/>
                    </p>
                    <p>
                            <label htmlFor="mdp">Mot de passe : </label>
                            <input type="text" id="mdp" name="mdp"/>
                    </p>
                    <p>
                            <label htmlFor="cmdp">Confirmation : </label>
                            <input type="text" id="cmdp" name="cmdp"/>
                    </p>
                </form>
                <div className="button">
                    <button type="submit">Inscription</button>
                </div>
            </div>);
        }
        else if (types=="Webtoon"){
            return(
                <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label htmlFor="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label htmlFor="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label htmlFor="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label htmlFor="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label htmlFor="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label htmlFor="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label htmlFor="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div className="button">
                <button type="submit">Inscription</button>
            </div>
        </div>
        );
    }
    else if (types=="Wattpad"){
        return(
            <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label htmlFor="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label htmlFor="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label htmlFor="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label htmlFor="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label htmlFor="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label htmlFor="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label htmlFor="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div className="button">
                <button type="submit">Inscription</button>
            </div>
        </div>
        );
    }
    else if (types=="scenario"){
        return(
            <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label htmlFor="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label htmlFor="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label htmlFor="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label htmlFor="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label htmlFor="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label htmlFor="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label htmlFor="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div className="button">
                <button type="submit">Inscription</button>
            </div>
        </div>);
    }
    else if (types=="Webtoon"){
        return(
            <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label htmlFor="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label htmlFor="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label htmlFor="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label htmlFor="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label htmlFor="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label htmlFor="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div className="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
}
else if (types=="Wattpad"){
    return(
        <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label htmlFor="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label htmlFor="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label htmlFor="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label htmlFor="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label htmlFor="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label htmlFor="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div className="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
    }
    else if (types=="synopsy"){
        return(
            <div className='storyinfo'>
            <h2>Information sur l'histoire</h2>
            <form action="/Inscription_Connexion" method="post">
                <p>
                        <label htmlFor="name">Nom : </label>
                        <input type="text" id="name" name="name"/>
                </p>
                <p>
                        <label htmlFor="firstname">Prénom : </label>
                        <input type="text" id="fname" name="fname"/>
                </p>
                <p>
                        <label htmlFor="username">Nom d'utilisateur : </label>
                        <input type="text" id="username" name="username" />
                </p>
                <p>
                        <label htmlFor="DDN">Date de naissance : </label>
                        <input type="date" id="DDN" name="DDN" />
                </p>
                <p>
                        <label htmlFor="mail">Adresse mail : </label>
                        <input type="email" id="mail" name="user_mail"/>
                </p>
                <p>
                        <label htmlFor="mdp">Mot de passe : </label>
                        <input type="text" id="mdp" name="mdp"/>
                </p>
                <p>
                        <label htmlFor="cmdp">Confirmation : </label>
                        <input type="text" id="cmdp" name="cmdp"/>
                </p>
            </form>
            <div className="button">
                <button type="submit">Inscription</button>
            </div>
        </div>);
    }
    else if (types=="Webtoon"){
        return(
            <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label htmlFor="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label htmlFor="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label htmlFor="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label htmlFor="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label htmlFor="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label htmlFor="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div className="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
}
else if (types=="Wattpad"){
    return(
        <div className='storyinfo'>
        <h2>Information sur l'histoire</h2>
        <form action="/Inscription_Connexion" method="post">
            <p>
                    <label htmlFor="name">Nom : </label>
                    <input type="text" id="name" name="name"/>
            </p>
            <p>
                    <label htmlFor="firstname">Prénom : </label>
                    <input type="text" id="fname" name="fname"/>
            </p>
            <p>
                    <label htmlFor="username">Nom d'utilisateur : </label>
                    <input type="text" id="username" name="username" />
            </p>
            <p>
                    <label htmlFor="DDN">Date de naissance : </label>
                    <input type="date" id="DDN" name="DDN" />
            </p>
            <p>
                    <label htmlFor="mail">Adresse mail : </label>
                    <input type="email" id="mail" name="user_mail"/>
            </p>
            <p>
                    <label htmlFor="mdp">Mot de passe : </label>
                    <input type="text" id="mdp" name="mdp"/>
            </p>
            <p>
                    <label htmlFor="cmdp">Confirmation : </label>
                    <input type="text" id="cmdp" name="cmdp"/>
            </p>
        </form>
        <div className="button">
            <button type="submit">Inscription</button>
        </div>
    </div>
    );
    }
    else{
        return(
            <div className='storyinfo'>
                <h2>Information sur l'histoire</h2>
                types
            </div>
        )
    }
}
export default StoryInfo