import ClipBoard from "../UI/Icons/ClipBoard";
import classes from "./EmptyList.module.scss";

const EmptyList = () => {
  return (
    <div className={classes.select}>
      <ClipBoard />
      <p className={classes.text}>Select your List !</p>
    </div>
  );
};

export default EmptyList;
