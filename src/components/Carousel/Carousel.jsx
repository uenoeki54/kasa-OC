import './carousel.css';
import React, { useState } from 'react';

function Carousel({ pictureList }) {
  const [activePic, setActivePic] = useState(0);
  const [animState, setAnimState] = useState(false);

  return (
    <div className="carousel">
      {pictureList.length > 1 && (
        <i
          onClick={() => {
            activePic === 0
              ? setActivePic(pictureList.length - 1)
              : setActivePic(activePic - 1);
            setAnimState(true);
          }}
          className={
            animState
              ? 'fade fa-solid fa-chevron-left'
              : 'fa-solid fa-chevron-left'
          }
        ></i>
      )}
      {pictureList.length > 1 && (
        <i
          onClick={() => {
            activePic < pictureList.length - 1
              ? setActivePic(activePic + 1)
              : setActivePic(0);
            setAnimState(true);
          }}
          className={
            animState
              ? 'fade fa-solid fa-chevron-right'
              : 'fa-solid fa-chevron-right'
          }
          onAnimationEnd={() => setAnimState(false)}
        ></i>
      )}
      <img
        className="banner-img"
        src={pictureList[activePic]}
        alt="title"
      ></img>

      {pictureList.length > 1 && (
        <p>
          {activePic + 1}/{pictureList.length}
        </p>
      )}
    </div>
  );
}

export default Carousel;
