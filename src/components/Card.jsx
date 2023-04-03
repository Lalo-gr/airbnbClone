function Card(props) {
  return (
    <div className="card">
      <img src="/src/assets/katie.png" className="card--image" />
      <div className="card--stats">
        <img src="/src/assets/star.png" className="" />
        <span>5.0</span>
        <span className="grey">(6) - </span>
        <span className="grey">USA</span>
      </div>
      <p>Life Lessons with Katie</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}

export default Card;
