import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*import "react-responsive-carousel/lib/styles/carousel.min.css"; */// requires a loader
/*import { Carousel } from 'react-responsive-carousel';*/ 
import img1 from '../assets/AIB.jpg';
import "../styles/Carousel.css";
import img2 from '../assets/GL.jpg'

/*class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div class="Carous">
                    <img  src={img1}/>
                </div>
                <div class="Carous">
                    <img src={img2}/>
                </div>
                <div class="Carous">
                    <img src="assets/3.jpeg" />
                </div>
            </Carousel>
        );
    }
};*/
function DemoCarousel(){
    return(
    <section id="slideshow">
		
	<div class="container">
		<div class="c_slider"></div>
		<div class="slider">
			<figure>
				<img src={img1} alt="" width="640" height="310" />
				<figcaption>The mirror of soul</figcaption>

			</figure>
            <figure>
				<img src={img2} alt="" width="640" height="310" />
				<figcaption>Let's cross that bridge when we come to it</figcaption>
			</figure>
		</div>
	</div>
		
	<span id="timeline"></span>
</section>
    )
}

export default DemoCarousel;