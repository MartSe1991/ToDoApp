import classes from "./Menu.module.scss";
// import AddNewElemModal from "../AddNewElemModal/AddNewElemModal";
import AddNewElem from "../AddNewElemModal/AddNewElem";

const Menu = ({ onAddItem, items }) => {
  //GUARDA BENE LA STRUTTURA QUI SOTTO!!!!!!!!!!
  const listedItems = (
    <ul className={classes.list}>
      {items.map((item) => (
        <li key={item.id} className={classes.elem}>
          {item.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>To do App</h1>
      {listedItems}
      {/* <AddNewElemModal onNewItemHandler={onAddItem} /> */}
      <AddNewElem onNewItemHandler={onAddItem} />
    </div>
  );
};

export default Menu;
