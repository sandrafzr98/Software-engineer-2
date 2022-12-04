/*import '../styles/StoryType.css'*/
import StoryInfo from "./StoryInfo";
function StoryType(){
    return(
        <div className='Type'>
            <h2>Partager votre histoire</h2>

            <form action="./InfoStory.js" method="post">
                <p>
                    <input type="radio" id="Book" name="story" value="Book" onclick={StoryInfo('Book')}/>
                    <label for="Book">Un livre existant</label>
                </p>
                <p>
                    <input type="radio" id="Webtoon" name="story" value="Webtoon" onclick={StoryInfo('Webtoon')}/>
                    <label for="Webtoon">Un Webtoon</label>
                </p>
                <p>
                    <input type="radio" id="Wattpad" name="story" value="Wattpad" onclick={StoryInfo('Wattpad')}/>
                    <label for="Webtoon">Un Wattpad</label>
                </p>
                <p>
                    <input type="radio" id="scenario" name="story" value="scenario" onclick={StoryInfo('scenario')}/>
                    <label for="scenario">Un scénario original</label>
                </p>
                <p>
                    <input type="radio" id="synopsy" name="story" value="synopsy" onclick={StoryInfo('synospy')}/>
                    <label for="synopsy">Un synopsy original</label>
                </p>
            </form>
        </div>
    )
    
}
export default StoryType