import './carousel.css';
import essaicarous from '../../assets/banner-about.png';
function Carousel() {
  return (
    <div className="carousel">
      <img className="banner-img" src={essaicarous} alt="title"></img>
      <p>4/5</p>
      <i className="fa-solid fa-chevron-left"></i>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}

export default Carousel;
