import '../styles/Hoover.css'
import React from 'react'
import LoginControl from './LogInControl'
import { handle } from 'express/lib/router'
import IdeaProposal from './IdeaProposal';

    
   function handleClick() {
        

        return (<div><IdeaProposal/></div>)
    }

    
    
    function Hoover(){
        return(
        <nav class="menu">
    <section class="categorie">
    <div class="box">
        <h3>Partagez une histoire</h3>
        
        <ul>
            <li><a onclick={handleClick}>Original</a></li>
            <li><a onclick={handleClick}> Proposez un webtoon</a></li>
            <li><a onclick={handleClick}>Proposez un livre</a></li>
        </ul>
        </div>
    </section>
    <section class="categorie">
    <div class="box">
        <h3>Votez pour une histoire</h3>
        <ul>
            <li><a href="#">Vos livres</a></li>
            <li><a href="#">Vos Webtoons</a></li>
            <li><a href="#">Vos histoires originales</a></li>
        </ul>
        </div>
    </section>
    <section class="categorie">
        <h3>Précédents gagnants</h3>
        <div class="box">
        <ul>
            <li><a href="#">Par catégorie</a></li>
            <li><a href="#">Par année</a></li>
        </ul>
        </div>
    </section>
    <section class="categorie">
        <h3>Votre espace</h3>
        <div class="box">
        <ul>
            <li><a href="#">Vos histoires écrites à ce jour</a></li>
            <li><a href="#">Vos votes</a></li>
            <li><a href="#">Vos documents</a></li>
        </ul>
        </div>
    </section>
    <section class="categorie">
        <h3>Nous</h3>
        <div class="box">
        <ul>
            <li><a href="#">Notre Histoire</a></li>
            <li><a href="#">Notre équipe</a></li>
            <li><a href="#">Nous contacter</a></li>
            
        </ul>
        </div>
    </section>
</nav>)
    }
export default Hoover