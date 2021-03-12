import React from "react";
import PropTypes from "prop-types";

const dateNameToPrettyName = (date) => {
  console.log(date.substring(5, 6));
  const month = date.toString().substring(5, 7);
  console.log(month);
  const day = date.toString().substring(8, 10);
  console.log(day);
  console.log(day.substring(0, 0));
  switch (month.toString()) {
    case "01":
      return `${day}.Janúar`;
    case "02":
      return `${day}.Febrúar`;
    case "03":
      return `${day}.Mars`;
    case "04":
      return `${day}.Apríl`;
    case "05":
      return `${day}.Maí`;
    case "06":
      return `${day}.Júní`;
    case "07":
      return `${day}.Júlí`;
    case "08":
      return `${day}.Ágúst`;
    case "09":
      return `${day}.September`;
    case "10":
      return `${day}.Október`;
    case "11":
      return `${day}.Nóvember`;
    case "12":
      return `${day}.Desember`;
    default:
      return date;
  }
};

const DropDown = ({ disabled, allDates, currentDate, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      value={currentDate}
      disabled={disabled}
    >
      {allDates.map((date) => (
        <option key={date.toString()} value={date}>
          {dateNameToPrettyName(date.toString())}
        </option>
      ))}
    </select>
  );
};

DropDown.propTypes = {
  disabled: PropTypes.bool,
  allDates: PropTypes.arrayOf(PropTypes.string),
  currentDate: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
  disabled: false,
  channels: [],
  currentChannel: "",
};
// skoða select vantar á moti held ég labele eða eh tjekk
export default DropDown;
