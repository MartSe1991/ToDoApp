import classes from "./ActiveList.module.scss";
import AddButton from "../UI/Button/AddButton";

const ActiveList = ({ activeListIndex, itemsList }) => {
  return (
    <div className={classes.main}>
      {activeListIndex !== undefined && itemsList.length > 0 ? (
        <>
          <h2 className={classes.title}>{itemsList[activeListIndex].name}</h2>
          <AddButton>Add New Item</AddButton>
        </>
      ) : null}
    </div>
  );
};

export default ActiveList;
