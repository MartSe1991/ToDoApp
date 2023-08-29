import classes from "./Menu.module.scss";
// import AddNewElemModal from "../AddNewElemModal/AddNewElemModal";
import AddNewElem from "../AddNewElemModal/AddNewElem";

const Menu = ({ onAddItem, items, onItemClick, activeListIndex }) => {
  //GUARDA BENE LA STRUTTURA QUI SOTTO!!!!!!!!!!

  const listedItems = (
    <ul className={classes.list}>
      {items.map(
        (
          item,
          key // la key/index é un valore che quando mappi viene assegnato automaticamente a
          //ogni singolo elem che viene iterato (come la "i" nel ciclo for)
        ) => (
          <li
            key={`list-${key}`}
            className={
              activeListIndex !== key ? classes.elem : classes.selected
            }
            onClick={() => onItemClick(key)} //IMPO!!! VOGLIO PASSARE UNA
            // FUNZIONE A onClick. Io voglio eseguire funzione al Click non
            // all'esecuzione del primo render. per ottenere questo risultato devo assegnare
            // l'esecuzione della funzione non il risultato
          >
            {item.title}
          </li>
        )
      )}
    </ul>
  );

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>To do App</h1>
      {listedItems}
      <AddNewElem onNewItemHandler={onAddItem} />
    </div>
  );
};

export default Menu;
