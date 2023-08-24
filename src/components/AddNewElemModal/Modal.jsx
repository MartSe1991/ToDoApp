import Button from "../UI/Button";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./Modal.module.scss";

const Modal = (props) => {
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
    <Card>
      <form onSubmit={addNewToDoItemHandler}>
        <label htmlFor="list_item" className={classes["modal_title"]}>
          New Item
        </label>
        <input
          // className={classes.elems}
          id="list_item"
          type="text"
          onChange={listItemChangeHandler}
          value={enteredListItem}
        />
        <div>
          <Button type="submit">Create</Button>
          {/* <Button type="submit">Cancel</Button> */}
        </div>
      </form>
    </Card>
  );
};

export default Modal;
