import ListIcon from "@components/UI/Icons/ListIcon";
import classes from "./MobileBar.module.scss";

const MobileBar = ({ toggleMenu }) => {
  return (
    <div className={classes.menuTrigger} onClick={toggleMenu}>
      <ListIcon />
    </div>
  );
};

export default MobileBar;
