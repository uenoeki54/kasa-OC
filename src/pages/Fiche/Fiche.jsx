import { useParams } from 'react-router-dom';
import logements from '../../assets/back.json';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import './fiche.css';
import { Navigate } from 'react-router-dom';

function Fiche() {
  const { logementId } = useParams();
  let logement = logements.filter((logements) => logements.id === logementId);

  if (logement[0] === undefined) {
    return <Navigate to="/error" replace={true} />;
  }
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

            <img
              className="round"
              src={logement[0].host.picture}
              alt={logement[0].host.name}
            ></img>
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
      <div className="details">
        <Collapse
          title="Description"
          text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à une station de la gare de l'est (7 minutes à pied). "
          size="small"
        />
        <Collapse
          title="Équipements"
          text=<ul>
            {logement[0].equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
          size="small"
        />
      </div>
    </div>
  );
}

export default Fiche;
