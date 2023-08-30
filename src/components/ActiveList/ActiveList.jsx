import classes from "./ActiveList.module.scss";
import AddNewElem from "../AddNewElemModal/AddNewElem";
import TickBox from "./TickBox";
import { useState } from "react";

const ActiveList = ({ activeListIndex, itemsList, onAddItem }) => {
  const [tickBox, setTickBox] = useState(false);

  const tickBoxHandler = () => {
    setTickBox(!tickBox);
  };

  const subListedItems = itemsList[activeListIndex] !== undefined && (
    <ul className={classes.ul}>
      {itemsList[activeListIndex].items.map((item, key) => {
        return (
          <div key={`sub_list-${key}`} className={classes.sublist_items}>
            <TickBox onClick={tickBoxHandler} tickBox={tickBox} />
            <li className={`${classes.list} ${tickBox && classes.ticketed}`}>
              {item.name}
            </li>
          </div>
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
