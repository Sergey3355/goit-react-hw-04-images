import css from './ImageGalleryItem.module.css';

import Modal from '../Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({item}) => {

  const [shownModal, setshownModal] = useState(false)
  
  const onModal = () => {
    setshownModal(prevState => !prevState)
  };


    const { webformatURL } = item;
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={onModal}
          className={css.imageGalleryItem_image}
          src={webformatURL}
          alt="img"
        />
        {shownModal && <Modal onClose={onModal} image={item} />}
      </li>
    );
  }


ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;
