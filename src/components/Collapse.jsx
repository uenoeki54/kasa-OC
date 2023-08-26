function Collapse({ title, text }) {
  return (
    <div className="conteneur">
      <div className="collapse">
        <h2>{title}</h2>
        <i class="fa-solid fa-chevron-up"></i>
      </div>
      {text}
    </div>
  );
}

export default Collapse;
