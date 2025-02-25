import { ActionType } from './actions.ts'
import { produce } from 'immer'

export interface ICoffee {
  id: string
  name: string
  description: string
  value: number
  selectQuantity: number
  image: string
  tags?: string[]
}

export interface IAddress {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

interface OrdersState {
  products: ICoffee[]
  cartItems: ICoffee[]
  address: IAddress
  totalAmount: number
  deliveryCharge: number
}

export function OrdersReducer(state: OrdersState, action: any): OrdersState {
  switch (action.type) {
    case ActionType.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.item)
      })
    }

    case ActionType.REMOVE_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const index = draft.cartItems.findIndex(
          (item) => item.id === action.payload.item.id,
        )
        if (index !== -1) {
          draft.cartItems.splice(index, 1)
        }
      })
    }

    case ActionType.UPDATE_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const { item, delta } = action.payload
        const newQuantity = Math.max(item.selectQuantity + delta, 0)

        const productIndex = draft.products.findIndex(
          (prod) => prod.id === item.id,
        )
        if (productIndex !== -1) {
          draft.products[productIndex].selectQuantity = newQuantity
        }

        const cartIndex = draft.cartItems.findIndex(
          (cartItem) => cartItem.id === item.id,
        )

        if (cartIndex !== -1) {
          if (newQuantity === 0) {
            draft.cartItems.splice(cartIndex, 1)
          } else {
            draft.cartItems[cartIndex].selectQuantity = newQuantity
          }
        } else if (newQuantity > 0) {
          draft.cartItems.push({ ...item, selectQuantity: newQuantity })
        }
      })
    }
    default:
      return state
  }
}
