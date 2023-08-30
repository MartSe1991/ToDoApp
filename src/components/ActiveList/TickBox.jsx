import classes from "./TickBox.module.scss";

const TickBox = ({ onClick, tickBox }) => {
  return (
    <div
      className={`${classes.box} ${tickBox && classes.ticketed_box}`}
      onClick={onClick}
    />
  );
};

export default TickBox;
