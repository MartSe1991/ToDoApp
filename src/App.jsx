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

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [activeListIndex, setActiveListIndex] = useState(undefined);

  const addListHandler = (uItem) => {
    setItemsList((prevItem) => {
      return [...prevItem, { name: uItem, items: [] }];
    });
  };

  const activeListHandler = (index) => {
    setActiveListIndex(index);
  };

  // aggiungi stringa inserita alla lista selezionata
  const addItemToListHandler = (uItem) => {
    return false;
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
        <ActiveList activeListIndex={activeListIndex} itemsList={itemsList} />
      </div>
    </main>
  );
}

export default App;
