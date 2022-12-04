
import StoryInfo from './StoryInfo'
import '../styles/IdeaProposal.css'
import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

function IdeaProposal(){
    // selecting radio button
    const buttons = document.querySelectorAll("input[type='radio']");

    // adding event to all radio buttons
    buttons.forEach(button => {
    button.onclick = () => {
        if (button.checked) {
           return(<div><StoryInfo types={button.value}/></div>)
        }
    }
    })
    return(
        <div className='Type'>
            <h2>Partager votre histoire</h2>

            <form action="./InfoStory.js" method="post">
                <p>
                    <input type="radio" id="Book" name="story" value="Book" />
                    <label htmlFor="Book">Un livre existant</label>
                </p>
                <p>
                    <input type="radio" id="Webtoon" name="story" value="Webtoon" onClick="StoryInfo types='Webtoon')"/>
                    <label htmlFor="Webtoon">Un Webtoon</label>
                </p>
                <p>
                    <input type="radio" id="Wattpad" name="story" value="Wattpad" onClick="StoryInfo types='Wattpad'"/>
                    <label htmlFor="Webtoon">Un Wattpad</label>
                </p>
                <p>
                    <input type="radio" id="scenario" name="story" value="scenario" onClick="StoryInfo types='scenario'"/>
                    <label htmlFor="scenario">Un scénario original</label>
                </p>
                <p>
                    <input type="radio" id="synopsy" name="story" value="synopsy" onClick="StoryInfo types='synospy'"/>
                    <label htmlFor="synopsy">Un synopsy original</label>
                </p>
            </form>
        </div>
    )
}
export default IdeaProposal