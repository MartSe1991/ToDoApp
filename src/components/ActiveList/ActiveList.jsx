import classes from "./ActiveList.module.scss";
import AddNewElem from "../AddNewElemModal/AddNewElem";

const ActiveList = ({ activeListIndex, itemsList, onAddItem }) => {
  const subListedItems = itemsList[activeListIndex] !== undefined && (
    <ul className={classes.ul}>
      {itemsList[activeListIndex].items.map((item, key) => {
        return (
          <li key={`sub_list-${key}`} className={classes.list}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={classes.main}>
      {activeListIndex !== undefined && itemsList.length > 0 ? (
        <>
          <h2 className={classes.title}>{itemsList[activeListIndex].title}</h2>
          <AddNewElem onNewItemHandler={onAddItem} buttonTitle="New Element...">
            Add New Item
          </AddNewElem>
          {subListedItems}
        </>
      ) : null}
    </div>
  );
};

export default ActiveList;

//avere struttura simile a quella di menu per mappare e mostrare i subelements della lista
