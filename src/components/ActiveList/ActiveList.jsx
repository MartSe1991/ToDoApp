import classes from "./ActiveList.module.scss";
import AddNewElemAnchor from "@components/AddNewElemAnchor/AddNewElemAnchor";
import TickBox from "./TickBox/TickBox";
import DeleteButton from "@components/UI/Button/DeleteButton";
import EmptyList from "./EmptyList/EmptyList";
import MobileBar from "./MobileBar/MobileBar";
import EditElemAnchor from "@components/EditElemAnchor/EditElemAnchor";

const ActiveList = ({
  activeListIndex,
  itemsList,
  onAddItem,
  onEditItem,
  onEditItemInList,
  setItemComplete,
  removeListHandler,
  removeListItemHandler,
  toggleMenu,
}) => {
  const subListedItems = itemsList[activeListIndex] !== undefined && (
    <ul className={classes.ul}>
      {itemsList[activeListIndex].items.map((item, key) => {
        return (
          <div key={`sub_list-${key}`}>
            <li
              className={`${classes.list_item} ${
                item.complete && classes.ticketed
              }`}
            >
              <TickBox
                complete={item.complete}
                onSetComplete={() => {
                  setItemComplete(key);
                }}
              />
              <span>{item.name}</span>
              <EditElemAnchor
                size="18"
                className={classes.edit_icon}
                initialValue={item.name}
                onEditItemHandler={(uItem) => onEditItemInList(uItem, key)}
              />
              <DeleteButton
                removeItemHandler={() => {
                  // passo la key di riga 16 alla funzione removeListItemHandler che si sviluppa in App.jsx
                  // questa funzione viene passata a DeleteButton come contenuto di onClick - quindi quando bidone cliccato catturo la key dell'item cliccato no?
                  removeListItemHandler(key);
                }}
                className={classes.delete_button}
                size="20"
              />
            </li>
          </div>
        );
      })}
    </ul>
  );

  return (
    <div className={classes.main}>
      <MobileBar toggleMenu={toggleMenu} />
      {activeListIndex !== undefined && itemsList.length > 0 ? (
        <>
          <div className={classes.sublist_title}>
            <h2 className={classes.title}>
              {itemsList[activeListIndex].title}
            </h2>
            <EditElemAnchor
              size="22"
              className={classes.edit_icon}
              initialValue={itemsList[activeListIndex].title}
              onEditItemHandler={(uItem) => onEditItem(uItem, activeListIndex)}
            />
            <DeleteButton
              className={classes.delete_big_button}
              removeItemHandler={removeListHandler}
              size="24"
            />
          </div>
          <AddNewElemAnchor
            onNewItemHandler={onAddItem}
            buttonTitle="New Element..."
          />

          {subListedItems}
        </>
      ) : (
        <EmptyList toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

export default ActiveList;

//avere struttura simile a quella di menu per mappare e mostrare i subelements della lista
// cancellare elems da lista esistente

// 1- clicco sul bidoncino del subElement
// 2-  al clic del button voglio identificare l'indice della cosa cliccata per poi eliminarla
// 3 - al DeleteButton metto onClick che passera la key dell'elem corrente cliccato all activeSubListItemHandler (ancora da creare)
// che mi permettera di assegnare un activeSubListItemIndex all elem cliccato (uno state che creero in App.jsx)
// 4 - al DeleteButton passero la prop removeItemHandler={removeListItemHandler} - removeListItemHandler lo sviluppero in App.jsx
// 5 - in removeListItemHandler per eliminare elem cliccato mi creo una copia della lista attiva in quel momento che contiene l'elem che voglio eliminare
// 6 - in removeListItemHandler creo una lista filtrata che contenga solo i subElems con la key diversa da activeSubListItemIndex ricavato in punto 3
// 7 - setto itemList a lista filtrata
