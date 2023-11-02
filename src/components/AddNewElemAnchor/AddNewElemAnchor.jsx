import React, { useState } from "react";
import AddButton from "@components/UI/Button/AddButton";
import Modal from "../UI/Modal/Modal";
import classes from "@components/UI/Button/Button.module.scss";

const AddNewElemAnchor = ({ onNewItemHandler, buttonTitle }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      {openModal && (
        <Modal
          onSubmitHandler={onNewItemHandler}
          onCloseModal={closeModalHandler}
          modalTitle="New Element"
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

export default AddNewElemAnchor;
