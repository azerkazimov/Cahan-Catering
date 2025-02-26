import { create } from 'zustand';
import { ProductProps } from '@/helpers/interfaces/products';

export const useProductStore = create<{
    products: ProductProps[];
    setProducts: (update: (prev: ProductProps[]) => ProductProps[]) => void
}>(set => (
    {
        products: [],
        setProducts: (update) => set(state => ({ products: update(state.products) }))
    }
))