import React from "react";
import Category from "../../Category";
// import Modal from "react-modal";

const Store = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="gallery-container">
        <h1>Store</h1>
      </div>
      <div className="abc">
        <Category
          openModal={openModal}
          afterOpenModal={afterOpenModal}
          modalIsOpen={modalIsOpen}
          // Modal={Modal}
          closeModal={closeModal}
          customStyles
        />
      </div>
    </>
  );
};

export default Store;
