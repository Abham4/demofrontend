import { create } from "zustand";
import { persist } from 'zustand/middleware'
import  { user } from '../interface/types'
interface Num {
    number: number;
    increaseNumber: (type: any) => void;
    decreaseNumber: (type: any) => void;
    setUser: (type:any) => void;
    user: user;
   // Logout: () => void;
}
 let us:user;
const useStore = create(persist<Num>((set) => ({
    number:123,
    increaseNumber: () => set((state) => ({number: state.number + 1})),
    decreaseNumber: () => set((state) => ({number: state.number - 1})),
    user:us,
    setUser: (user) => set((state) => ({...state, user})),
    // Logout: () => {
    //     set(() => ({ user: null}));
    //     localStorage.removeItem("number")
    //   },
}),
{
    name:"number"
}))
export default useStore;
