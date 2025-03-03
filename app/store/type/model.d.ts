/* eslint-disable no-unused-vars */
import type { ComponentKey } from '@/types/components/modal';

export interface ModalStore {
  isOpen: boolean;
  componentKey: ComponentKey | null;
  openModal: <k extends ComponentKey>(key: k) => void;
  closeModal: () => void;
}
