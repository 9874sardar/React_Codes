import React from 'react';
import './ImageSlider.css';

function ImageSlider() {
  return ( 
    <div className="container">
  <br/>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div className="carousel-inner" role="listbox">

      <div className="item active">
        <img src="https://placehold.it/900x350/" alt=" 1"/>
        <div className="carousel-caption">
        </div>
      </div>

      <div className="item">
        <img src="https://placehold.it/900x350/" alt=" 2" />
        <div className="carousel-caption">

        </div>
      </div>
    
      <div className="item">
        <img src="https://placehold.it/900x350/" alt=" 3" />
        <div className="carousel-caption">
        </div>
      </div>

  
    </div>


    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

  )
}

export default ImageSlider
