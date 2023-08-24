import React, { useState } from "react";
import Button from "../UI/Button";
import Modal from "./Modal";
import classes from "../UI/Button.module.scss";

const AddNewElem = ({ onNewItemHandler }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      {openModal && <Modal onNewItemHandler={onNewItemHandler} />}
      <Button
        type="submit"
        onClick={openModalHandler}
        className={classes.elems}
      >
        New List
      </Button>
    </React.Fragment>
  );
};

export default AddNewElem;
