import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
} from 'react'
import { IAddress, ICoffee, OrdersReducer } from '../reducers/orders/reducer.ts'
import {
  addItemToCartAction,
  removeItemToCartAction,
  setPaymentMethodAction,
  updateItemQuantityAction,
} from '../reducers/orders/actions.ts'
import { v4 as uuid4 } from 'uuid'

interface OrdersContextType {
  products: ICoffee[]
  cartItems: ICoffee[]
  address: IAddress
  totalAmount: number
  deliveryCharge: number
  paymentMethod: string
  addItemToCart: (item: ICoffee) => void
  removeItemToCart: (item: ICoffee) => void
  updateItemQuantity: (item: ICoffee, delta: number) => void
  setPaymentMethod: (method: string) => void
}

interface OrdersContextProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrdersContextType)

export function OrdersContextProvider({
  children,
}: Readonly<OrdersContextProviderProps>) {
  const [ordersState, dispatch] = useReducer(
    OrdersReducer,
    {
      products: [
        // 1
        {
          id: uuid4(),
          name: 'Expresso Tradicional',
          description:
            'O tradicional café feito com água quente e grãos moídos',
          value: 9.9,
          selectQuantity: 0,
          image: 'expresso-tradicional.svg',
          tags: ['TRADICIONAL'],
        },
        {
          id: uuid4(),
          name: 'Expresso Americano',
          description: 'Expresso diluído, menos intenso que o tradicional',
          value: 9.9,
          selectQuantity: 0,
          image: 'expresso-americano.svg',
          tags: ['TRADICIONAL'],
        },
        {
          id: uuid4(),
          name: 'Expresso Cremoso',
          description: 'Café expresso tradicional com espuma cremosa',
          value: 9.9,
          selectQuantity: 0,
          image: 'expresso-cremoso.svg',
          tags: ['TRADICIONAL'],
        },
        {
          id: uuid4(),
          name: 'Expresso Gelado',
          description: 'Bebida preparada com café expresso e cubos de gelo',
          value: 9.9,
          selectQuantity: 0,
          image: 'expresso-gelado.svg',
          tags: ['TRADICIONAL', 'GELADO'],
        },

        // 2
        {
          id: uuid4(),
          name: 'Café com Leite',
          description:
            'Meio a meio de expresso tradicional com leite vaporizado',
          value: 9.9,
          selectQuantity: 0,
          image: 'cafe-com-leite.svg',
          tags: ['TRADICIONAL', 'COM LEITE'],
        },
        {
          id: uuid4(),
          name: 'Latte',
          description:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
          value: 9.9,
          selectQuantity: 0,
          image: 'latte.svg',
          tags: ['TRADICIONAL', 'COM LEITE'],
        },
        {
          id: uuid4(),
          name: 'Capuccino',
          description:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
          value: 9.9,
          selectQuantity: 0,
          image: 'capuccino.svg',
          tags: ['TRADICIONAL', 'COM LEITE'],
        },
        {
          id: uuid4(),
          name: 'Macchiato',
          description:
            'Café expresso misturado com um pouco de leite quente e espuma',
          value: 9.9,
          selectQuantity: 0,
          image: 'macchiato.svg',
          tags: ['TRADICIONAL', 'COM LEITE'],
        },

        // 3
        {
          id: uuid4(),
          name: 'Mocaccino',
          description:
            'Café expresso com calda de chocolate, pouco leite e espuma',
          value: 9.9,
          selectQuantity: 0,
          image: 'mocaccino.svg',
          tags: ['TRADICIONAL', 'COM LEITE'],
        },
        {
          id: uuid4(),
          name: 'Chocolate Quente',
          description:
            'Bebida feita com chocolate dissolvido no leite quente e café',
          value: 9.9,
          selectQuantity: 0,
          image: 'chocolate-quente.svg',
          tags: ['ESPECIAL', 'COM LEITE'],
        },
        {
          id: uuid4(),
          name: 'Cubano',
          description:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
          value: 9.9,
          selectQuantity: 0,
          image: 'cubano.svg',
          tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        },
        {
          id: uuid4(),
          name: 'Havaiano',
          description: 'Bebida adocicada preparada com café e leite de coco',
          value: 9.9,
          selectQuantity: 0,
          image: 'havaiano.svg',
          tags: ['ESPECIAL'],
        },

        // 4
        {
          id: uuid4(),
          name: 'Árabe',
          description: 'Bebida preparada com grãos de café árabe e especiarias',
          value: 9.9,
          selectQuantity: 0,
          image: 'arabe.svg',
          tags: ['ESPECIAL'],
        },
        {
          id: uuid4(),
          name: 'Irlandês',
          description:
            'Bebida a base de café, uísque irlandês, açúcar e chantilly',
          value: 9.9,
          selectQuantity: 0,
          image: 'irlandes.svg',
          tags: ['ESPECIAL', 'ALCOÓLICO'],
        },
      ],
      cartItems: [],
      totalAmount: 0,
      deliveryCharge: 0,
    },
    (initialState) => {
      const ordersStoredStateAsJSON = localStorage.getItem(
        '@coffee-delivery:orders-state-1.0.0',
      )

      if (ordersStoredStateAsJSON) {
        return JSON.parse(ordersStoredStateAsJSON)
      }

      const productsStoredStateAsJSON = localStorage.getItem(
        '@coffee-delivery:products-state-1.0.0',
      )

      if (productsStoredStateAsJSON) {
        return JSON.parse(productsStoredStateAsJSON)
      }

      const storedPaymentMethodAsJSON = localStorage.getItem(
        '@coffee-delivery:payment-method',
      )

      if (storedPaymentMethodAsJSON) {
        return JSON.parse(storedPaymentMethodAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState)
    localStorage.setItem('@coffee-delivery:orders-state-1.0.0', stateJSON)
  }, [ordersState])

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState)
    localStorage.setItem('@coffee-delivery:products-state-1.0.0', stateJSON)
  }, [ordersState])

  const addItemToCart = useCallback(
    (item: ICoffee) => {
      dispatch(addItemToCartAction(item))
    },
    [dispatch],
  )

  const removeItemToCart = useCallback(
    (item: ICoffee) => {
      dispatch(removeItemToCartAction(item))
    },
    [dispatch],
  )

  const updateItemQuantity = useCallback(
    (item: ICoffee, delta: number) => {
      dispatch(updateItemQuantityAction(item, delta))
    },
    [dispatch],
  )

  const { products, cartItems, address, deliveryCharge, paymentMethod } =
    ordersState

  const totalAmount = useMemo(() => {
    return cartItems.length > 0
      ? cartItems.reduce(
          (sum, item) => sum + item.value * item.selectQuantity,
          0,
        )
      : 0
  }, [cartItems])

  const setPaymentMethod = useCallback(
    (method: string) => {
      dispatch(setPaymentMethodAction(method))
      localStorage.setItem('@coffee-delivery:payment-method', method)
    },
    [dispatch],
  )

  const contextValue = useMemo(
    () => ({
      products,
      cartItems,
      address,
      totalAmount,
      deliveryCharge,
      paymentMethod,
      addItemToCart,
      removeItemToCart,
      updateItemQuantity,
      setPaymentMethod,
    }),
    [
      products,
      cartItems,
      address,
      totalAmount,
      deliveryCharge,
      paymentMethod,
      addItemToCart,
      removeItemToCart,
      updateItemQuantity,
      setPaymentMethod,
    ],
  )

  return (
    <OrdersContext.Provider value={contextValue}>
      {children}
    </OrdersContext.Provider>
  )
}
