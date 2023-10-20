import ClipBoard from "../UI/Icons/ClipBoard";
import classes from "./EmptyList.module.scss";

const EmptyList = () => {
  return (
    <div className={classes.container}>
      <ClipBoard />
      <p className={classes.text}>Please select a list</p>
    </div>
  );
};

export default EmptyList;
