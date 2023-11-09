import Button from "@components/UI/Button/Button";
import { useState } from "react";
import classes from "./Modal.module.scss";
import ModalPortal from "../ModalWrap/ModalPortal";

const Modal = ({
  onSubmitHandler,
  onCloseModal,
  modalTitle,
  submitButtonLabel = "Submit",
  cancelButtonLabel = "Cancel",
  initialValue = "",
}) => {
  //   In questo comp guarda come usi funzione che viene da App.jsx
  // e gli passi valori contenuti in questo comp "enteredListItem"

  const [enteredListItem, setEnteredListItem] = useState(initialValue);

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const listItemChangeHandler = (event) => {
    event.preventDefault();
    setEnteredListItem(capitalize(event.target.value));
  };
  // PER SOPRA: ad onChange={listItemChangeHandler} dell'input
  // applico il capitalize all'event che onChange cattura

  const submitToDoItemHandler = (event) => {
    event.preventDefault();
    if (enteredListItem.trim().length === 0) {
      return;
    }
    onSubmitHandler(enteredListItem);
    onCloseModal();
  };

  const closeModal = (event) => {
    event.preventDefault(); //previene il comportamento di default - in qst caso fare il submit
    onCloseModal();
  };

  return (
    <ModalPortal onClick={closeModal}>
      <form onSubmit={submitToDoItemHandler}>
        <label htmlFor="list_item" className={classes["modal_title"]}>
          {modalTitle}
        </label>
        <input
          placeholder="Enter text..."
          className={classes.input}
          id="list_item"
          type="text"
          onChange={listItemChangeHandler}
          value={enteredListItem}
        />
        <div className={classes.buttons}>
          <Button onClick={closeModal} variant={"danger"}>
            {cancelButtonLabel}
          </Button>
          <Button>{submitButtonLabel}</Button>
        </div>
      </form>
    </ModalPortal>
  );
};

export default Modal;
