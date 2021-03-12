import React from "react";
import PropTypes from "prop-types";

const channelNameToPrettyName = (name) => {
  switch (name) {
    case "stod2":
      return "Stöð 2";
    case "bio":
      return "Stöð2 Bío";
    case "esport":
      return "Stöð 2 Esports";
    case "golfstodin":
      return "Stöð 2 Golf";
    case "sport":
      return "Stöð 2 Sport";
    case "sport2":
      return "Stöð 2 sport 2";
    case "sport3":
      return "Stöð 2 Sport 3";
    case "sport4":
      return "Stöð 2 Sport 4";
    case "sport5":
      return "Stöð 2 Sport 5";
    case "stod3":
      return "Stöð 2 fjölskylda";
    case "ruv":
      return "Rúv";
    default:
      return name;
  }
};

const ChannelSelector = ({ channels, currentChannel, onChange }) => {
  return (
    <select
      id="dropdown-basic-button"
      title={channelNameToPrettyName(currentChannel)}
      size="sm"
      onChange={(e) => onChange(e.target.value)}
      value={currentChannel}
    >
      {channels.map((channel) => (
        <option key={channel} value={channel}>
          {channelNameToPrettyName(channel)}
        </option>
      ))}
    </select>
  );
};

ChannelSelector.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.string),
  currentChannel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ChannelSelector.defaultProps = {
  channels: [],
  currentChannel: "",
};

export default ChannelSelector;
