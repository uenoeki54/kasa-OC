import './home.css';
import Card from '../../components/Card';
import logements from '../../assets/back.json';
import Banner from '../../components/Banner';
function Home() {
  return (
    <div className="conteneur">
      <Banner banner="banner-home" text="Chez vous, partout et ailleurs" />
      <div className="greybox">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            picture={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
