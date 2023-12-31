import Menu from "./components/MainMenu/Menu";
import ActiveList from "./components/ActiveList/ActiveList";
import classes from "./App.module.scss";
import { useState, useEffect } from "react";

// Step 1: creare state che memorizzi l'indice della lista selezionata
// Step 2: creare un handler che riceva l'indice come parametro e che
// lo usi per settare lo state della lista selezionata nello state come con AddListHandler
// Step 3: modificare comp Menu in modo che accetti nuova prop onItemClick e passargli
// l' handler appena creato
// Step 4: far si che quando un elemento dentro menu viene cliccato chiami l'handler passando
// l'indice dell elem stesso

// Step 5: comp ActiveList riceva activeListIndex come prop
// Step 6: comp ActiveList riceva itemList come prop
// Step 7: cambiare titolo visibile dentro ActiveList in modo che utilizzi itemList[activeListIndex].name

// Step 8: sostituire AddButton con AddNewElem per mostrare Modal in ActiveList
// Step 9: passare addItemToListHandler (ancora vuoto) ad ActiveList come prop (onAddItem come in Menu)
// Step 10: passare onAddItem come prop ad AddNewElem - onNewItemHandler - come in Menu
// tutto questo serve a cliccare su pulsante aggiungi di ActiveList e vedere la modal

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [activeListIndex, setActiveListIndex] = useState(undefined);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  };

  const persistedListKey = "persisted_list";

  useEffect(() => {
    // 2 - una volta svolto punto 1, recupera il contenuto di local storage da "persisted_list"
    // e salva in costante. Se esiste una persistedList allora setItemsList(JSON.parse(persistedList));
    // (mi ritrasformo la versione stringify in js object). Di conseguenza se cancelli "persisted_list" da localStorage perdi lista che hai messo

    const persistedList = localStorage.getItem(persistedListKey);
    if (persistedList) {
      setItemsList(JSON.parse(persistedList));
    }
  }, []);

  useEffect(() => {
    // 1 - se itemList is true e se sua lunghezza>0, in browser local
    // storage crea item persisted_list che contiene la versione stringified di itemList -->
    // versione stringify perche localStorage.setItem accetta solo due stringhe come parametri!!!
    if (itemsList && itemsList.length > 0) {
      localStorage.setItem(persistedListKey, JSON.stringify(itemsList));
    }
  }, [itemsList]);

  const addListHandler = (uItem) => {
    setItemsList((prevItem) => {
      return [...prevItem, { title: uItem, items: [] }];
    });
  };

  // la funzione modifica l elemento che viene cliccato - su l'edit icon -
  // in Menu list e nel titolo h2 della lista attiva in quel momento
  // uItem é il nuovo valore - stringa - da assegnare
  // itemIndex E l'indice dell elemento selezionato nella list
  const editListHandler = (uItem, itemIndex) => {
    console.log("EDITING LIST", uItem, itemIndex);
    const itemsListCopy = [...itemsList];
    const selectedElem = itemsListCopy[itemIndex];
    selectedElem.title = uItem;
    setItemsList(itemsListCopy);
  };

  const activeListHandler = (index) => {
    setActiveListIndex(index);
  };

  // aggiungi stringa inserita alla lista selezionata
  const addItemToListHandler = (uItem) => {
    const itemsListCopy = [...itemsList]; //devo creare copia perche react non permette di modificare il getter, e di sola lettura
    itemsListCopy[activeListIndex].items.push({
      name: uItem,
      complete: false,
    });
    setItemsList(itemsListCopy);
    console.log(itemsListCopy);

    // Step 1: crea copia di itemList all'interno di una costante (copia di un array)
    // Step 2: aggiungi all'array items all'interno della copia di itemsList[activeListIndex] un object con questa struttura:
    // {name: uItem, complete:false}
    // Step 3: prendi questo object modificato e fai setItemsList(con copia che ho modificato senza prevItem) e usa qst object modificato come parametro
    // Step 4: optional (fai console.log della copia dell'object)
  };

  // la funzione modifica lelemento in una sublist che viene cliccato con l'edit icon -
  // uItem é il nuovo valore - stringa - da assegnare
  // itemIndex E l'indice dell elemento selezionato nella sublist
  const editItemInListHandler = (uItem, itemIndex) => {
    console.log("EDITING ITEM IN LIST", uItem, itemIndex);
    const itemsListCopy = [...itemsList];
    const selectedElem = itemsListCopy[activeListIndex].items[itemIndex];
    selectedElem.name = uItem;
    setItemsList(itemsListCopy);
  };

  const setItemComplete = (itemIndex) => {
    //itemIndex in qst caso é la key dei sublist items
    console.log(itemIndex);
    const itemsListCopy = [...itemsList];
    const selectedElem = itemsListCopy[activeListIndex].items[itemIndex];
    selectedElem.complete = !selectedElem.complete;
    setItemsList(itemsListCopy);
    console.log(itemsListCopy);
    // Step 1: crea copia di itemList all'interno di una costante (copia di un array)
    // Step 2: salva in una costante (selectedElem) l'elem della lista selezionato utilizzando itemListIndex come indice di itemListCopy e itemIndex come indice della sua proprieta items
    // Step 3: setta la proprieta complete di questo object selezionato in modo che sia il contrario del suo valore corrente
    // Step 4: prendi questo object modificato e fai setItemsList e usa qst object modificato come parametro
    // Step 5: optional (fai console.log della copia dell'object)
  };

  const removeListHandler = () => {
    const filteredList = itemsList.filter((item, key) => {
      return key !== activeListIndex;
    });
    setActiveListIndex(undefined);
    setItemsList(filteredList);
  };

  const removeListItemHandler = (selectedItemId) => {
    // removeListItemHandler riceve "id" da activeList che corrisponde alla key dei subListElems mappati
    const itemsListCopy = [...itemsList];
    const activeSubList = itemsListCopy[activeListIndex];
    activeSubList.items = activeSubList.items.filter((subItem, key) => {
      //filtro gli items della lista attiva in quel momento
      return key !== selectedItemId; //ritornami gli elems con key diversa da selectedItemId (l'id dell'elem con bidoncino cliccato)
    });
    setItemsList(itemsListCopy);
  };

  return (
    <main className={classes.main}>
      <Menu
        onAddItem={addListHandler}
        onEditItem={editListHandler}
        items={itemsList}
        onItemClick={activeListHandler}
        activeListIndex={activeListIndex}
        visibleOnMobile={openMenu}
        toggleMenu={toggleMenu}
      />

      <div className={classes.secondPart}>
        <ActiveList
          activeListIndex={activeListIndex}
          itemsList={itemsList}
          onAddItem={addItemToListHandler}
          onEditItem={editListHandler}
          onEditItemInList={editItemInListHandler}
          setItemComplete={setItemComplete}
          removeListHandler={removeListHandler}
          removeListItemHandler={removeListItemHandler}
          toggleMenu={toggleMenu}
        />
      </div>
    </main>
  );
}

export default App;

// STORIA DI addListHandler & addItemToListHandler
// addListHandler:
// 1 - Creata in App.jsx
// 2 - Passata a Menu
// 3 - Che la passa ad AddNewElem
// 4 - Che la passa a Modal
// 5 - Che la usa per catturare enteredListItem

// addItemToListHandler
// 1 - Creata in App.jsx
// 2 - Passata ad ActiveList
// 3 - Che la passa ad AddNewElem
// 4 - Che la passa a Modal
// 5 - Che la usa per catturare enteredListItem

// Entrambe le funzioni al passaggio 2-3 vengono rinominate onAddItem/onNewItemHandler
// e da lí seguono stesso percorso per essere usate nella Modal!!!
