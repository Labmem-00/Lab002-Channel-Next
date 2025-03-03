import { create } from 'zustand';

interface Tempstore {
  temp: number;
  increaseTemp: () => void;
}

const useTempStore = create<Tempstore>((set) => ({
  temp: 0,
  increaseTemp: () => set((state) => ({ temp: state.temp + 1 })),
}));

export { useTempStore };
