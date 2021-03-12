import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import DropDown from "./Components/dropDown/index";
import SchedualTable from "./Components/schedualTable";
import ChannelSelector from "./Components/channelSelector";
import Utils from "./utils";
import api from "./api";

function App() {
  const [allChannels, setAllChannels] = React.useState();
  const [currentChannel, setCurrentChannel] = React.useState();

  const [allDates] = React.useState(Utils.getNext7Days());
  const [currentDate, setCurrentDate] = React.useState(allDates[0]);

  const [allDataForChannel, setAllDataForChannel] = React.useState();
  const [visibleData, setVisibleData] = React.useState();

  useEffect(() => {
    /** This hook is responsible for fetching all channels and setting the inital channel */
    api.getAvailableChannels().then((data) => {
      console.log(data);
      const stod2Channels = data.filter((channel) => channel !== "beint");
      stod2Channels.push("ruv");
      setAllChannels(stod2Channels);
      if (data.includes("stod2")) {
        setCurrentChannel("stod2");
      } else {
        setCurrentChannel(data[0]);
      }
    });
  }, []);

  useEffect(() => {
    /** This hook is responsible for fetching data for the currentChannel */
    if (currentChannel) {
      setAllDataForChannel(null);
      if (currentChannel === "ruv") {
        api.getRuvData().then((data) => {
          setAllDataForChannel(data);
        });
      } else {
        api.getDataForChannel(currentChannel).then((data) => {
          setAllDataForChannel(data);
        });
      }
    }
  }, [currentChannel]);

  /** This hook is responsible for filtering alldata for specific date*/
  useEffect(() => {
    if (allDataForChannel) {
      setVisibleData(Utils.filterTvDataForDate(allDataForChannel, currentDate));
    }
  }, [allDataForChannel, currentDate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dagská</h1>
      </header>
      <div className="Controlers">
        <ChannelSelector
          channels={allChannels}
          currentChannel={currentChannel}
          onChange={(channel) => setCurrentChannel(channel)}
        />
        <DropDown
          allDates={allDates}
          currentDate={currentDate}
          onChange={(currentDate) => setCurrentDate(currentDate)}
          disabled={currentChannel === "ruv"}
        />
      </div>
      <SchedualTable data={visibleData} />
    </div>
  );
}

export default App;
