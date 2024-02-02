import { useId } from 'react'
import './filters.css'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
  const { filters: { minPrice, category }, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    })
    )
  }
  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type='range'
          id={minPriceFilterId}
          name='price'
          min='0'
          max='1000'
          onChange={handlePriceChange}
          value={minPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} value={category} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
