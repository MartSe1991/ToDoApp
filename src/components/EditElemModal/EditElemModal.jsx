import EditButton from "../UI/Button/EditButton";

const EditElemModal = ({ size, className }) => {
  return (
    <div className={className}>
      <EditButton size={size} />
    </div>
  );
};

export default EditElemModal;
