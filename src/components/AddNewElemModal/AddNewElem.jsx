import React, { useState } from "react";
import AddButton from "../UI/Button/AddButton";
import Modal from "./Modal";
import classes from "../UI/Button/Button.module.scss";

const AddNewElem = ({ onNewItemHandler, buttonTitle }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
    console.log("Ciao");
  };

  return (
    <React.Fragment>
      {openModal && (
        <Modal
          onNewItemHandler={onNewItemHandler}
          onCloseModal={closeModalHandler}
        />
      )}
      <AddButton
        type="submit"
        onClick={openModalHandler}
        className={classes.elems}
      >
        {buttonTitle ? buttonTitle : "New List..."}
      </AddButton>
    </React.Fragment>
  );
};

export default AddNewElem;
