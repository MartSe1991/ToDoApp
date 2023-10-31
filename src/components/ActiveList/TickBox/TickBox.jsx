import classes from "./TickBox.module.scss";

const TickBox = ({ complete, onSetComplete }) => {
  return (
    <div
      className={`${classes.box} ${complete ? classes.ticketed_box : ""}`}
      onClick={onSetComplete}
    />
  );
};

export default TickBox;
