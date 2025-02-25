import { ICoffee } from './reducer.ts'

export enum ActionType {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
  UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY',
}

export function addItemToCartAction(item: ICoffee) {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function removeItemToCartAction(item: ICoffee) {
  return {
    type: ActionType.REMOVE_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function updateItemQuantityAction(item: ICoffee, delta: number) {
  return {
    type: ActionType.UPDATE_ITEM_QUANTITY,
    payload: { item, delta },
  }
}
