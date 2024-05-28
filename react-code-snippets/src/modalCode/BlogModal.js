import React, { useState } from 'react';
import './css/blogModa.css'

const BlogModal = ({closeModal, isOpen, content}) => {
 
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
        //   closeModal();
        }
      };
  return (
    <div className="modal-container">
      {isOpen && (
         <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal">
          <div className="modal-header">
            <h2>Blog Title</h2>

            <button onClick={closeModal}>Close</button>
          </div>
          <div className="modal-content">
            <p>
             {content}
             <span>Plz this is inline block</span>
            </p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default BlogModal;
