import Button from "../UI/Button/Button";
import { useState } from "react";
import classes from "./Modal.module.scss";
import ModalPortal from "./ModalWrap/ModalPortal";

const Modal = ({ onNewItemHandler, onCloseModal }) => {
  //   In questo comp guarda come usi funzione che viene da App.jsx
  // e gli passi valori contenuti in questo comp "enteredListItem"

  const [enteredListItem, setEnteredListItem] = useState("");

  const listItemChangeHandler = (event) => {
    event.preventDefault();
    setEnteredListItem(event.target.value);
  };

  const addNewToDoItemHandler = (event) => {
    event.preventDefault();
    if (enteredListItem.trim().length === 0) {
      return;
    }
    onNewItemHandler(enteredListItem);
    setEnteredListItem("");
  };

  const closeModal = (event) => {
    event.preventDefault();
    onCloseModal();
  };

  return (
    <ModalPortal>
      <form onSubmit={addNewToDoItemHandler}>
        <label htmlFor="list_item" className={classes["modal_title"]}>
          New Item
        </label>
        <input
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
