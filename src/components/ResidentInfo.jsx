import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const loadResidentInfo = async () => {
    try {
      const resp = await axios.get(urlResident);
      setResidentInfo(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);
  return (
    <>
      {residentInfo && (
        <article className="card">
          <div>
            <img
              src={residentInfo.image}
              alt={residentInfo.name}
              className="avatar"
            />
          </div>
          <h3>{residentInfo.name}</h3>
          <hr />
          <ul>
            <li>
              <span>Specie: </span>
              {residentInfo.species}
            </li>
            <span>Status: </span>
            {residentInfo.status}
            <li>
              <span>Origen: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span>Apariciones en episodios: </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
