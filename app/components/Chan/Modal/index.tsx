/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useState, useEffect } from 'react';
import { useModalStore } from '@/store/temp/components/modal';
import componentRegistry from './registry';
import styles from './modal.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';

const Modal: React.FC = () => {
  const { isOpen, componentKey, closeModal } = useModalStore();
  const [isVisiable, setVisiable] = useState(true);

  useEffect(() => {
    if (isVisiable == true) return;
    const timer = setTimeout(() => {
      closeModal();
      setVisiable(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [isVisiable]);

  if (!isOpen || !componentKey) return null;

  const Component = componentRegistry[componentKey];

  return (
    <div id="chan-modal">
      <div
        className={`${styles['modal-mask']} ${isVisiable ? '' : styles['mask-out']}`}
        onClick={() => {
          setVisiable(false);
        }}
      >
        {/* 这是遮罩层 */}
      </div>
      <div
        className={`${styles['chan-modal']} ${isVisiable ? '' : styles['modal-out']}`}
      >
        <Component>{/*动态弹窗组件*/}</Component>
        <button
          onClick={() => {
            setVisiable(false);
          }}
          className={styles['modal-close']}
        >
          {/* 关闭按钮 */}
          <Icon icon="line-md:close" width={28} height={28}></Icon>
        </button>
      </div>
    </div>
  );
};



export default Modal;
