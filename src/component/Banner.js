import '../styles/Banner.css'
import logo from '../assets/Logo.png'
import React, {Component} from 'react'
import Hoover from './hoover'


function Banner(){
    
    return (
        <div class="lmj-banner">
    <img className="lmj-logo" src={logo} alt='Pnyx' /><Hoover/>
    </div>)
}




export default Banner