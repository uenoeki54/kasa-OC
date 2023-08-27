import { useParams } from 'react-router-dom';
import logements from '../../assets/back.json';
import Carousel from '../../components/Carousel/Carousel';

function Fiche() {
  const { logementId } = useParams();
  let logement = logements.filter((logements) => logements.id === logementId);

  return (
    <div>
      <div>
        <Carousel pictureList={logement[0].pictures} />;
      </div>
      ;Voici une fiche du projet {logement[0].title}
    </div>
  );
}

export default Fiche;
