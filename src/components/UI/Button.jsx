import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick} className={classes.button}>
      <div>+</div>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
