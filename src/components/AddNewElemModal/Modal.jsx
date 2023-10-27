import Button from "../UI/Button/Button";
import { useState } from "react";
import classes from "./Modal.module.scss";
import ModalPortal from "./ModalWrap/ModalPortal";

const Modal = ({ onNewItemHandler, onCloseModal }) => {
  //   In questo comp guarda come usi funzione che viene da App.jsx
  // e gli passi valori contenuti in questo comp "enteredListItem"

  const [enteredListItem, setEnteredListItem] = useState("");

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const listItemChangeHandler = (event) => {
    event.preventDefault();
    setEnteredListItem(capitalize(event.target.value));
  };
  // PER SOPRA: ad onChange={listItemChangeHandler} dell'input
  // applico il capitalize all'event che onChange cattura

  const addNewToDoItemHandler = (event) => {
    event.preventDefault();
    if (enteredListItem.trim().length === 0) {
      return;
    }
    onNewItemHandler(enteredListItem);
    onCloseModal();
    // setEnteredListItem("");
  };

  const closeModal = (event) => {
    event.preventDefault(); //previene il comportamento di default - in qst caso fare il submit
    onCloseModal();
  };

  return (
    <ModalPortal onClick={closeModal}>
      <form onSubmit={addNewToDoItemHandler}>
        <label htmlFor="list_item" className={classes["modal_title"]}>
          New Element
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
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </form>
    </ModalPortal>
  );
};

export default Modal;
