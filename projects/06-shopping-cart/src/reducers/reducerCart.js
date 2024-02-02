export const cartInitialState = []
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      )
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity++
        return newCart
      }
      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== actionPayload.id)
    }
    case 'CLEAR_CART': {
      return cartInitialState
    }
  }
  return state
}
