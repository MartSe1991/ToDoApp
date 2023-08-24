import { useState } from "react";
import Button from "../UI/Button";
import classes from "./AddNewElemModal.module.scss";

//In questo comp guarda come usi funzione che viene da App.jsx
// e gli passi valori contenuti in questo comp "enteredListItem"
const AddNewElemModal = (props) => {
  const [enteredListItem, setEnteredListItem] = useState("");

  const listItemChangeHandler = (event) => {
    event.preventDefault();
    setEnteredListItem(event.target.value);
  };

  const addNewToDoItemHandler = (event) => {
    event.preventDefault();
    props.onNewItemHandler(enteredListItem);
    setEnteredListItem("");
  };

  return (
    <form onSubmit={addNewToDoItemHandler}>
      {/* <label htmlFor="list_item" className={classes.elems}>
        Insert
      </label> */}
      <input
        className={classes.elems}
        id="list_item"
        type="text"
        onChange={listItemChangeHandler}
        value={enteredListItem}
      />
      <Button type="submit" className={classes.elems}>
        New List
      </Button>
    </form>
  );
};

export default AddNewElemModal;
