import classes from "./Menu.module.scss";
import AddNewToDoItem from "./AddNewToDoItem";

const Menu = ({ onAddItem }) => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>To Do App</h1>
      <AddNewToDoItem onNewItemHandler={onAddItem} />
    </div>
  );
};

export default Menu;
