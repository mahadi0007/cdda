import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Gmap from "../components/Gmap";

function HomePage() {
  const [center, setCenter] = useState({
    lat: 23.7638,
    lng: 90.4067,
  });

  const [update, setUpdate] = useState(false);

  return (
    <div>
      <Navbar update={update} />
      <div className="row col-12">
        <div className="col-md-8 col-12">
          <Card setCenter={setCenter} update={update} setUpdate={setUpdate} />
        </div>
        <div className="col-md-4 col-12">
          <Gmap center={center} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
