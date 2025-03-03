import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TempStore {
  temp: number;
  increaseTemp: () => void;
}

const useTempStore = create<TempStore>()(
  persist(
    (set) => ({
      temp: 0,
      increaseTemp: () => set((state) => ({ temp: state.temp + 1 })),
    }),
    {
      name: 'temp-storage',
    }
  )
);

export { useTempStore };
