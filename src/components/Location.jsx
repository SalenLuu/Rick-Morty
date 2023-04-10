const Location = ({ name, type, dimension, residents }) => {
  return (
    <div className="locationbox">
      <section className="section">
        <h2>{name}</h2>
        <ul>
          <li>
            <span>Type: </span>
            {type}
          </li>
          <li>
            <span>Dimension: </span>
            {dimension}
          </li>
          <li>
            <span>Poblation: </span>
            {residents.length}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Location;
