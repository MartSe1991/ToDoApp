import Menu from "./components/MainMenu/Menu";
import ActiveList from "./components/ActiveList/ActiveList";
import classes from "./App.module.scss";
import { useState } from "react";
import ItemsList from "./components/MainMenu/ItemsList";

function App() {
  const [itemsList, setItemsList] = useState([]);

  const itemsListHandler = (uItem) => {
    setItemsList((prevItem) => {
      return [...prevItem, { name: uItem }];
    });
  };

  return (
    <main className={classes.main}>
      <div className={classes.column}>
        <Menu onAddItem={itemsListHandler} />
        <ItemsList items={itemsList} />
      </div>
      <div className={classes.secondPart}>
        <ActiveList />
      </div>
    </main>
  );
}

export default App;
