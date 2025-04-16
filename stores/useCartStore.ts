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
  lastUpdated: number | undefined
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  quantity: 0,
  total: 0,
  lastUpdated: undefined,
  setItems: (items) => {
    const total = items.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    const lastUpdated = Date.now();

    const cart = {
      items: items,
      lastUpdated: lastUpdated
    }
    localStorage.setItem('cartItems', JSON.stringify(cart))

    set({ items, total, quantity: items.length, lastUpdated })
  },
  addItem: (item) => {
    const lastUpdated = Date.now();
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

    const cart = {
      items: updatedItems,
      lastUpdated: lastUpdated
    }

    localStorage.setItem('cartItems', JSON.stringify(cart))
    set({ items: updatedItems, total: newTotal, quantity: updatedItems.length, lastUpdated })
  },
  removeItem: (id) => {
    const lastUpdated = Date.now();

    const updatedItems =  get().items.filter((i) => i.id !== id);
    const newTotal = updatedItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    set({ items: updatedItems, total: newTotal, quantity: updatedItems.length, lastUpdated });

    const cart = {
      items: updatedItems,
      lastUpdated: lastUpdated
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cart))  },
  clearCart: () => {
    const lastUpdated = Date.now();

    set({ items: [], total: 0, quantity: 0, lastUpdated })
    const cart = {
      items: [],
      lastUpdated: lastUpdated
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cart))  },
}))

export default useCartStore
