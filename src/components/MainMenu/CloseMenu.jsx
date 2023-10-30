import CloseIcon from "@components/UI/Icons/CloseIcon";
import classes from "./Menu.module.scss";

const CloseMenu = ({ clickHandler }) => {
  return (
    <div onClick={clickHandler} className={classes.close}>
      <CloseIcon />
    </div>
  );
};

export default CloseMenu;
