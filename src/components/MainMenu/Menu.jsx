import classes from "./Menu.module.scss";
// import AddNewElemModal from "../AddNewElemModal/AddNewElemModal";
import AddNewElem from "../AddNewElemModal/AddNewElem";
import CloseMenu from "./CloseMenu";
import Backdrop from "../UI/BackDrop/Backdrop";

const Menu = ({
  onAddItem,
  items,
  onItemClick,
  activeListIndex,
  visibleOnMobile,
  toggleMenu,
}) => {
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
            className={`${classes.elem} ${
              activeListIndex === key ? classes.selected : "" //classes.elem rimane sempre applicato.
              // Solo classes.selected é applicata condizionalmente. Quindi lo style base dell'elemento
              // é sempre applicato. Mentre .selected lo vuoi sovrapporre solo se l'elemento é selezionato.
            }`}
            onClick={() => onItemClick(key)} //IMPO!!! VOGLIO PASSARE UNA
            // FUNZIONE A onClick. Io voglio eseguire funzione al Click non
            // all'esecuzione del primo render. per ottenere questo risultato devo assegnare
            // l'esecuzione della funzione non il risultato
          >
            {`${item.title} (${
              item.items.filter((item) => {
                return !item.complete;
              }).length
            } elements)`}
          </li>
        )
      )}
    </ul>
  );

  return (
    <>
      <div
        className={`${classes.column} ${visibleOnMobile ? classes.open : ""}`}
      >
        <div className={classes.main}>
          <CloseMenu clickHandler={toggleMenu} />
          <h1 className={classes.title}>To do App</h1>
          {listedItems}
          <AddNewElem onNewItemHandler={onAddItem} />
        </div>
      </div>
      {visibleOnMobile && <Backdrop onClose={toggleMenu} type="menu" />}
    </>
  );
};

export default Menu;
