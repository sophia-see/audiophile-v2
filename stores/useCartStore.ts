import { create } from 'zustand'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  setItems: (items: CartItem[]) => void
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: number
  quantity: number
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  quantity: 0,
  total: 0,
  setItems: (items) => {
    const total = items.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    localStorage.setItem('cart', JSON.stringify(items))
    set({ items, total, quantity: items.length })
  },
  addItem: (item) => {
    const items = get().items
    const existing = items.find((i) => i.id === item.id);

    let updatedItems = items;

    if (existing) {
      updatedItems = items.map((i) => {
        if (i.id != item.id) return i;
  
        return { 
          ...i, 
          quantity: item.quantity 
        }
      })

      updatedItems = updatedItems.filter((i) => i.quantity > 0);
    } else {
      updatedItems = [...items, item];
    }

    const newTotal = updatedItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    set({ items: updatedItems, total: newTotal, quantity: updatedItems.length })
  },
  removeItem: (id) => {
    const updatedItems =  get().items.filter((i) => i.id !== id);
    const newTotal = updatedItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    set({ items: updatedItems, total: newTotal, quantity: updatedItems.length })
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
  },
  clearCart: () => {
    set({ items: [], total: 0, quantity: 0})
    localStorage.setItem('cartItems', JSON.stringify([]))
  },
}))

export default useCartStore
