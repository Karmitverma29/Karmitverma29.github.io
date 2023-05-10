import React, { useState, useEffect } from "react";

function Loader() {
  const [rotateAngle, setRotateAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateAngle((angle) => angle + 90);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh", backgroundColor: "#ffb301" }}>
      <video style={{ height: "200px", width: "200px", transform: `rotate(${rotateAngle}deg)` }} autoPlay loop muted>
        <source src="/Loaderkv.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Loader;
