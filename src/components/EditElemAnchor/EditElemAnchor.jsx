import EditButton from "@components/UI/Button/EditButton";

const EditElemAnchor = ({ size, className }) => {
  return (
    <div className={className}>
      <EditButton size={size} />
    </div>
  );
};

export default EditElemAnchor;
