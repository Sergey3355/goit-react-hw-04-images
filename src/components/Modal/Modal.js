import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const ModalRoot = document.querySelector('#ModalRoot');

const Modal = ({onClose, image}) => {
  useEffect(() => {
   const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDown)

    return () =>{
      window.removeEventListener('keydown', keyDown)
    };
  }, [onClose])


  const onBackdropClose = e => {
    if (e.currentTarget === e.target) {
     onClose();
    }
  };

    const { largeImageURL } = image;
    return createPortal(
      <div onClick={onBackdropClose} className={css.Modal_backdrop}>
        <div className={css.Modal_content}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      ModalRoot
    );
  }


export default Modal