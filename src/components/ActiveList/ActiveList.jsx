import classes from "./ActiveList.module.scss";
import Button from "../UI/Button";

const ActiveList = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.title}>List of items</h2>
      <Button>Add New Item</Button>
    </div>
  );
};

export default ActiveList;
