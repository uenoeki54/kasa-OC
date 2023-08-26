function Banner({ banner, text }) {
  return (
    <div className={'banner ' + banner}>
      <h1>{text}</h1>
    </div>
  );
}
export default Banner;
