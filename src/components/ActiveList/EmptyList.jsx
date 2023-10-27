import ClipBoard from "../UI/Icons/ClipBoard";
import classes from "./EmptyList.module.scss";

const EmptyList = ({ toggleMenu }) => {
  return (
    <div className={classes.container} onClick={toggleMenu}>
      <ClipBoard />
      <p className={`${classes.text} ${classes.mobile_only}`}>
        Tap anywhere to start
      </p>
      <p className={`${classes.text} ${classes.desktop_only}`}>
        Create a new list to start
      </p>
    </div>
  );
};

export default EmptyList;
