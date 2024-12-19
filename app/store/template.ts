import { create } from 'zustand';

interface Tempstore {
    temp: number
}

const useTempStore = create<Tempstore>((set)=>({
    temp: 0,
    increaseTemp: () => set((state) => ({temp: state.temp + 1}))
}));

export {useTempStore}