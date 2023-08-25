import classes from "./Button.module.scss";

const AddButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes["add_button"]}>
      <div>+</div>
      <span>{props.children}</span>
    </button>
  );
};

export default AddButton;
