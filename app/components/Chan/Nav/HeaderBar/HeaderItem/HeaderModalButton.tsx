'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useModalStore } from '@/store/temp/components/modal';

const HeaderModalButton: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModalStore();

  return (
    <div
      id="header-modal"
      className="absolute right-4 flex justify-center items-center"
    >
      <div className="avator w-10 h-10  flex justify-center items-center border-solid border-2 border-yellow-300 rounded-full">
        <button onClick={() => (isOpen ? closeModal() : openModal('account'))}>
          登录
        </button>
      </div>
      <div className="config hidden ld:flex m-4">
        <Icon icon="eos-icons:rotating-gear" width={36} height={36}></Icon>
      </div>
    </div>
  );
};

export default HeaderModalButton;
