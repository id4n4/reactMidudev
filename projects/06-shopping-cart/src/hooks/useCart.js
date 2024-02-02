import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)
  const { addToCart, cart, clearCart, removeFromCart } = context
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return {
    addToCart,
    cart,
    clearCart,
    removeFromCart
  }
}
