import { IoMdCart } from 'react-icons/io'
import { Filters } from './Filters'

export const Header = () => {
  return (
    <div>
      <h1>
        Shopping Cart <IoMdCart />
      </h1>
      <Filters />
    </div>
  )
}
