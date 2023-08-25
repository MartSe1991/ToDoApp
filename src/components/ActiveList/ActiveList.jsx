import classes from "./ActiveList.module.scss";
import AddButton from "../UI/Button/AddButton";

const ActiveList = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.title}>List of items</h2>
      <AddButton>Add New Item</AddButton>
    </div>
  );
};

export default ActiveList;
