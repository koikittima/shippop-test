import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";
import "./loader.css";

const loaderOverride = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = ({loading}) => {

  const style = {
    color: "#E6AF2E",
  };

  
  return (
    <Modal
      id="modal_loading"
      show={loading}
      backdropClassName="loading-backdrop" 
      onHide={() => null}
      animation={false}
      centered
    >
      <Modal.Body className="text-center">
        <PulseLoader
          color={style.color}
          loading={loading}
          css={loaderOverride}
          size={15}
          margin={2}
        />
      </Modal.Body>
    </Modal>
  );

}

export default Loader;