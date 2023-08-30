function Banner({ banner, text }) {
  return (
    <div className={'banner ' + banner}>
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
}
export default Banner;
