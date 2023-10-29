import classes from "./ModalPortal.module.scss";
import ReactDOM from "react-dom";
import React from "react";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  return (
    <div className={classes.spacer}>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const ModalPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClick} type="modal" />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default ModalPortal;
