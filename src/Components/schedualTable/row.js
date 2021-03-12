import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap/";

import "./row.css";
import api from "../../api";

const SchedualRow = ({ data, title, subTitle }) => {
  const [show, setShow] = React.useState(false);
  const [imdbData, setImdbData] = React.useState();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    api.getImdbData(title).then((dat) => {
      if (dat.Response === "True") {
        setImdbData(dat);
      }
    });
    setShow(true);
  };

  return (
    <div className="SchedualRow" key={data.upphaf}>
      <div>{data.upphaf.substring(11, 16)}</div>
      <div>
        <strong>{title}</strong>
        {subTitle !== "" && <p>{subTitle}</p>}
      </div>
      <div>{data.lysing.substring(0, 60) + "..."}</div>
      <div>
        <Button onClick={handleShow} size="sm">
          +
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {subTitle !== "" && <p>{subTitle}</p>}
          <p>{data.lysing}</p>
          <div className="posterAndRatings">
            <div className="poster">
              {imdbData && imdbData.Poster ? (
                <img src={imdbData.Poster} alt="Poster" />
              ) : (
                ""
              )}
            </div>
            {imdbData && imdbData.imdbRating ? (
              <div className="Irating">
                <img
                  src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                  alt="Poster"
                />{" "}
                {imdbData.Ratings[0].Value}
              </div>
            ) : (
              ""
            )}
            <div>
              {imdbData && imdbData.Ratings[1] ? (
                <div className="Trating">
                  <img
                    src="https://www.clipartkey.com/mpngs/m/48-489657_mini-tomato-icons-png-tomato-clipart-png-icon.png"
                    alt="Poster"
                  />{" "}
                  {imdbData.Ratings[1].Value}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

SchedualRow.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default SchedualRow;
