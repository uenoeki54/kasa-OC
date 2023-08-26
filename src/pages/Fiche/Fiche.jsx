import { useParams } from 'react-router-dom';
import logements from '../../assets/back.json';

function Fiche() {
  const { logementId } = useParams();
  let logement = logements.filter((logements) => logements.id === logementId);

  console.log(logement);
  console.log(logement[0].title);
  return <div>Voici une fiche du projet {logement[0].title}</div>;
}

export default Fiche;
