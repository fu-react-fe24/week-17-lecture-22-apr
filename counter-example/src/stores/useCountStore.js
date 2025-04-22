import { create } from 'zustand';

const useCountStore = create((set) => ({
    count : 0,
    increment : () => {
        set((state) => ({count : state.count + 1}));
    },
    decrement : () => {
        set((state) => {
            if(state.count > 0) {
                return {count : state.count - 1}
            } else {
                return {count : 0}
            }    
        });
    },
    reset : () => {
        set({count : 0});
    }
}));

export default useCountStore;

// Ett "snyggare" och kanske mer komplicerat sätt att skriva sin decrement på
/*
set((state) => (state.count > 0 ? {count: state.count - 1} : {count: 0}));
*/