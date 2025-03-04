import { CategoryProps } from '@/helpers/interfaces/categories';
import { create } from 'zustand';

export const useProductStore = create<{
    products: CategoryProps[];
    setProducts: (update: (prev: CategoryProps[]) => CategoryProps[]) => void
}>(set => (
    {
        products: [],
        setProducts: (update) => set(state => ({ products: update(state.products) }))
    }
))