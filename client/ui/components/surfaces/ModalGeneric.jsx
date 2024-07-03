import React, { useState } from 'react';
import styles from './css/modalG.module.css';

const ModalGeneric = ({ show, onClose, title, children, onConfirm, onRemove, confirmText = "Save", cancelText = "Cancel", removeText = "Remove" }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeButton}>
          &times;
        </button>
        <h2>{title}</h2>
        <div className={styles.modalBody}>
          {children}
        </div>
        <div className={styles.modalFooter}>
          {onRemove && (
            <button onClick={onRemove} className={styles.removeButton}>
              {removeText}
            </button>
          )}
        
          <button onClick={onConfirm} className={styles.confirmButton}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalGeneric;
