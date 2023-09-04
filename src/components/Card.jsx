import { Link } from 'react-router-dom';

function Card({ id, title, picture }) {
  return (
    <Link to={`./Fiche/${id}`}>
      <div className="thumbnail">
        <h2 className="thumb-text">{title}</h2>
        <img src={picture} className="thumb-image" alt={title}></img>
      </div>
    </Link>
  );
}

export default Card;
