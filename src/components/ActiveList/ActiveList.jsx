import classes from "./ActiveList.module.scss";
import AddNewElem from "../AddNewElemModal/AddNewElem";

const ActiveList = ({ activeListIndex, itemsList, onAddItem }) => {
  return (
    <div className={classes.main}>
      {activeListIndex !== undefined && itemsList.length > 0 ? (
        <>
          <h2 className={classes.title}>{itemsList[activeListIndex].name}</h2>
          <AddNewElem onNewItemHandler={onAddItem}>Add New Item</AddNewElem>
        </>
      ) : null}
    </div>
  );
};

export default ActiveList;
