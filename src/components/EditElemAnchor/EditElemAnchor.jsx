import EditButton from "@components/UI/Button/EditButton";
import { useState } from "react";
import Modal from "@components/UI/Modal/Modal";
import React from "react";

const EditElemAnchor = ({ size, className }) => {
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
        <Modal onCloseModal={closeEditModalHandler} modalTitle="Edit Element" />
      )}
      <div className={className}>
        <EditButton size={size} onClick={openEditModalHandler} />
      </div>
    </React.Fragment>
  );
};

export default EditElemAnchor;
