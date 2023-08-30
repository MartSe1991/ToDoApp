import Menu from "./components/MainMenu/Menu";
import ActiveList from "./components/ActiveList/ActiveList";
import classes from "./App.module.scss";
import { useState } from "react";

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

  const addListHandler = (uItem) => {
    setItemsList((prevItem) => {
      return [...prevItem, { title: uItem, items: [] }];
    });
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

  return (
    <main className={classes.main}>
      <div className={classes.column}>
        <Menu
          onAddItem={addListHandler}
          items={itemsList}
          onItemClick={activeListHandler}
          activeListIndex={activeListIndex}
        />
      </div>
      <div className={classes.secondPart}>
        <ActiveList
          activeListIndex={activeListIndex}
          itemsList={itemsList}
          onAddItem={addItemToListHandler}
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
