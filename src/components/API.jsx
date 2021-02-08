import React, { useEffect, useState } from "react";
import Header from "./Header";
import Carte from "./Carte";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import Helmet from "./Helmet";

function API() {
  const [Temp, setTemp] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Dieppe&units=metric&lang=fr&appid=51fc8505d55fe845e4c757ea6b9ff0cf"
      )
      .then((res) => res.json())
      .then((resp) => <>{(setTemp(resp.main.temp), setCity(resp.name))}</>)
  }, []);

  return (
    <div>
      <Helmet
        title={"API bases React"}
        link={"https://www.guillaumequeste.fr"}
      />
      <Header />
      <div className="infos">
        <div className="divInfos">
          <p>La température à {city} est : {Temp}°C.</p>
        </div>
      </div>
    </div>
  );
}

export default API;
