import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Gmap from "../components/Gmap";

function HomePage() {
  const [center, setCenter] = useState({
    lat: 23.7638,
    lng: 90.4067,
  });

  return (
    <div>
      <Navbar />
      <div className="row col-12">
        <div className="col-md-8 col-12">
          <Card setCenter={setCenter} />
        </div>
        <div className="col-md-4 col-12 px-5">
          <Gmap center={center} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
