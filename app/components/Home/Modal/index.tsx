'use client'

import React from 'react';
import { useModalStore } from '@/store/temp/modal';
import componentRegistry from './registry';

const Modal: React.FC = () => {
  const { isOpen, componentKey } = useModalStore();

  if (!isOpen || !componentKey) return null;

  const Component = componentRegistry[componentKey];

  return (
    <div className="absolute">
      <Component></Component>
    </div>
  );
};

export default Modal;
