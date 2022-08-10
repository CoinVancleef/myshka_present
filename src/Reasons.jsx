import React, { useState } from "react";
import Heart from "react-heart";

export default function Reasons(props) {
  const [active, setActive] = useState(false);

  return (
    <div className="reason-container" key={props.key}>
      <div id="heart" style={{ width: "2rem" }}>
        <Heart isActive={active} onClick={() => setActive(!active)} />
      </div>
      {active && <h3>{props.reasonOne}</h3>}
      {active && <p>{props.reasonTwo}</p>}
      <hr />
    </div>
  );
}
