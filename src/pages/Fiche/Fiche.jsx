import { useParams } from 'react-router-dom';
import logements from '../../assets/back.json';
import Carousel from '../../components/Carousel/Carousel';
import './fiche.css';

function Fiche() {
  const { logementId } = useParams();
  let logement = logements.filter((logements) => logements.id === logementId);
  let stars = parseInt(logement[0].rating);
  const range = [1, 2, 3, 4, 5];
  return (
    <div>
      <div>
        <Carousel pictureList={logement[0].pictures} />
      </div>
      <div className="lodging">
        <div className="lodging_left">
          <h1>{logement[0].title}</h1>
          <h2>{logement[0].location}</h2>
          <ul>
            {logement[0].tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className=" lodging_right">
          <div className="lodging_right_host">
            <div className="name">
              <h2>{logement[0].host.name} </h2>
            </div>

            <img className="round" src={logement[0].host.picture}></img>
          </div>
          <div className="lodging_right_stars">
            {range.map((rangeElem) =>
              stars >= rangeElem ? (
                <i
                  className="fa-solid fa-star full-star"
                  key={rangeElem.toString()}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-star empty-star"
                  key={rangeElem.toString()}
                ></i>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fiche;
