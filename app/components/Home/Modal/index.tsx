'use client';

import React from 'react';
import { useModalStore } from '@/store/temp/modal';
import componentRegistry from './registry';
import styles from './modal.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

const Modal: React.FC = () => {
  const { isOpen, componentKey, closeModal } = useModalStore();
  if (!isOpen || !componentKey) return null;

  const Component = componentRegistry[componentKey];

  return (
    <div id="chan-modal">
      <div className={`${styles['modal-mask']}`} onClick={closeModal}>
        {/* 这是遮罩层 */}
      </div>
      <div className={`${styles['chan-modal']}`}>
        <Component></Component>
        <button onClick={closeModal} className={styles['modal-close']}>
          <Icon className='f' icon="line-md:close-small" width={28} height={28}></Icon>
        </button>
      </div>
    </div>
  );
};

export default Modal;
