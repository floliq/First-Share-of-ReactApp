import React from "react";
import team2 from "../images/team2.jpg";
import team1 from "../images/team1.jpg";
import team3 from "../images/team3.jpg";

function Designers() {
  return (
    <>
      <div id="designers">
        <h2>Designers.</h2>
        <hr />
        <p>The best team in the world.</p>
        <div className="member">
          <img src={team2} alt="John" />
          <div className="description">
            <h3>John Doe</h3>
            <p className="position">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
        <div className="member">
          <img src={team1} alt="Jane" />
          <div className="description">
            <h3>Jane Doe</h3>
            <p className="position">Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
        <div className="member">
          <img src={team3} alt="Mike" />
          <div className="description">
            <h3>Mike Ross</h3>
            <p className="position">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Designers;
