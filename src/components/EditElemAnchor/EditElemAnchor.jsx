import EditButton from "@components/UI/Button/EditButton";
import { useState } from "react";
import Modal from "@components/UI/Modal/Modal";
import React from "react";

const EditElemAnchor = ({
  size,
  className,
  initialValue,
  onEditItemHandler,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const openEditModalHandler = () => {
    setOpenEditModal(true);
  };

  const closeEditModalHandler = () => {
    setOpenEditModal(false);
  };

  return (
    <React.Fragment>
      {openEditModal && (
        <Modal
          onSubmitHandler={onEditItemHandler}
          onCloseModal={closeEditModalHandler}
          modalTitle="Edit Element"
          initialValue={initialValue}
        />
      )}
      <div className={className}>
        <EditButton size={size} onClick={openEditModalHandler} />
      </div>
    </React.Fragment>
  );
};

export default EditElemAnchor;
