import TrashCanIcon from "../Icons/TrashCanIcon";

const DeleteButton = ({ className, size, removeItemHandler }) => {
  return (
    <div className={className} onClick={removeItemHandler}>
      <TrashCanIcon size={size} />
    </div>
  );
};

export default DeleteButton;

// Clicco il bidoncino rosso accanto Lista attiva se vuoi rimuovere quella lista
// Il click fa partire una funzione che si occupera di rimuove la lista attiva in quel momento
// Con questa funzione faro la copia delle liste esistenti in quel momento e cerchero di creare una nuova lista di liste che non
// contenga quella che voglio eliminare (ovvero quella attiva in quel momento)
// a quel punto mostrero sulla pagina la lista aggiornata (accorciata)
