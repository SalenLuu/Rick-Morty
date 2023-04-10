import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import randomNumber from "./utils/randomNumber.js";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocation, setIdLocation] = useState();

  const getIdLocation = () => randomNumber(1, 126);
  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const resp = await axios.get(url);
      setLocationInfo(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setIdLocation(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idLocation) loadLocationInfo(idLocation);
    else loadLocationInfo(getIdLocation());
  };

  useEffect(() => {
    loadLocationInfo(getIdLocation());
  }, []);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="id-location"
          value={idLocation}
          onChange={idLocationHandleChange}
        />
        <input type="submit" value="Search" />
      </form>
      {locationInfo && <Location {...locationInfo} />}
      {locationInfo && <ResidentList residents={locationInfo.residents} />}
    </div>
  );
}

export default App;
