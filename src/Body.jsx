import React, { useState } from "react";
import Heart from "react-heart";
import Reasons from "./Reasons";
import data from "./data";

export default function Body() {
  const [active, setActive] = useState(false);
  function bestGirl() {
    setActive(!active);
    alert('Получена ачивка "любимая девочка Коина"!');
  }
  const reasonsArr = data.map((reason) => {
    return (
      <Reasons
        key={reason.id}
        reasonOne={reason.reason}
        reasonTwo={reason.reasonExt}
      />
    );
  });

  return (
    <div className="container">
      {reasonsArr}
      <div id="heart" style={{ width: "4rem" }}>
        <Heart isActive={active} onClick={bestGirl} />
      </div>
    </div>
  );
}
