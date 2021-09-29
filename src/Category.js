import React from "react";
import Modal from "react-modal";

const Category = ({
  openModal,
  afterOpenModal,
  modalIsOpen,
  closeModal,
  customStyles,
}) => {
  return (
    <>
      {" "}
      <div className="gallery-second-part">
        <div className="gallery-second-part-container">
          <div className="gallery-second-catagory">
            <div>
              <div onClick={openModal}>
                <div className="second-catagories">catagories</div>
                <div className="all">All</div>
              </div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="header-container">
                  <div className="header">Catagories</div>

                  <button className="closeButton" onClick={closeModal}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="modal-parts">
                  <div className="modal-all">All</div>
                  <div className="modal-all">Newmedia Art</div>
                  <div className="modal-all">Handicraft</div>
                  <div className="modal-all">Printmaking</div>
                  <div className="modal-all">Drawing</div>
                  <div className="modal-all">Painting</div>
                  <div className="modal-all">Photography</div>
                  <div className="modal-all">Sculpture</div>
                  <div className="modal-all">Design</div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="gallery-second-filter">Filter</div>
        </div>
      </div>
      <div className="gallery-large-section">
        <div className="gallery-large-section-catagories">Categories</div>
        <div className="gallery-large-section-middle">
          <div className="gallery-middle-all">All</div>
          <div className="gallery-middle-parts">Newmedia Art</div>
          <div className="gallery-middle-parts">Handicraft</div>
          <div className="gallery-middle-parts">Printmaking</div>
          <div className="gallery-middle-parts">Drawing</div>
          <div className="gallery-middle-parts">Painting</div>
          <div className="gallery-middle-parts">Photography</div>
          <div className="gallery-middle-parts">Sculpture</div>
          <div className="gallery-middle-parts">Design</div>
        </div>
        <div className="gallery-large-section-right">
          <div className="gallery-large-Price">Price</div>
          <div className="gallery-large-Sorts">Sort By</div>
        </div>
      </div>
    </>
  );
};

export default Category;
