import React, { Component } from "react";

export default class Viedos extends Component {
  render() {
    return (
      <div className='videos'>
        <iframe
          src='https://www.youtube.com/embed/a5CT8B6eI0A'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />{" "}
        <iframe
          src='https://www.youtube.com//embed/LR09KDHoFeI'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />{" "}
        <iframe
          src='https://www.youtube.com//embed/gXjkSUnCVNw'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />{" "}
        <iframe
          src='https://www.youtube.com//embed/0kJMcxm8PNM'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />{" "}
        <iframe
          src='https://www.youtube.com//embed/f4hBDmFcqb0'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />{" "}
      </div>
    );
  }
}
