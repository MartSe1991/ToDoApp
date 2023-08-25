import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${
        props.variant !== undefined ? classes[props.variant] : classes.default
        // props.variant === "danger" ? classes.danger : classes.default QUESTO PERO APPROCCIO PIU SPECIFICO E MENO GENERICO
      }`}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
