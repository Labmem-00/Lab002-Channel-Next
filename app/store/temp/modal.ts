import { create } from 'zustand';
import type { ModalStore } from '../type/model';

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  componentKey: null,
  openModal: (key) => set({ isOpen: true, componentKey: key }),
  closeModal: () => set({ isOpen: false, componentKey: null }),
}));

export { useModalStore };
