import React from "react";
import Row from "./row";

import "./index.css";

const SchedualTable = ({ data }) => {
  if (data) {
    return (
      <div>
        <div className="SchedualContainer">
          <div className="SchedualRow">
            <div> Tími </div>
            <div> Nafn </div>
            <div> Lýsing </div>
          </div>
          <div className="SchedualContent">
            {data.map((dat) => (
              <Row
                key={dat.isltitill + dat.upphaf}
                data={dat}
                title={dat.isltitill}
                subTitle={
                  dat.thattur
                    ? "Þáttur " +
                      dat.thattur +
                      (dat.thattafjoldi ? " af " + dat.thattafjoldi : "")
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default SchedualTable;
