import classes from "./Backdrop.module.scss";

const Backdrop = ({ onClose, type }) => {
  return (
    <div
      className={`${classes.backdrop} ${
        type === "menu" ? classes.withMenu : classes.withModal
      }`}
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;
