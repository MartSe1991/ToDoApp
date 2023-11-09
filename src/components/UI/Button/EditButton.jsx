import EditPencil from "../Icons/EditPencil";
import classes from "./Button.module.scss";

const EditButton = ({ size, onClick }) => {
  return (
    <button onClick={onClick} className={classes.edit_button}>
      <EditPencil size={size} />
    </button>
  );
};

export default EditButton;
