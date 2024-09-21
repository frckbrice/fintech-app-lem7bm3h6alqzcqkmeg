import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkv-store';

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    date: string;
}

export interface BalanceState {
    clearTransaction: () => void;
    balance: () => number;
    transactions: Transaction[];
    runTransaction: (transaction: Transaction) => void;
}

export const useBalanceStore = create<BalanceState>()(
    persist((set, get) => ({
        clearTransaction: () => {
            set({ transactions: [] }) // clear only the transaction 
        },
        balance: () => 0,
        transactions: [],
        runTransaction: (transaction: Transaction) => { // add new transaction
            set((state) => ({ transactions: [...state.transactions, transaction] }))
        },
    }), {
        name: 'balance',
        storage: createJSONStorage(() => zustandStorage),
    })
)