import { Products } from './components/products'

import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

export default function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}
