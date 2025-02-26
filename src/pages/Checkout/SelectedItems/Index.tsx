import {
  CoffeeItem,
  SelectedItemsContainer,
  SelectedItemsCard,
  SelectedCoffees,
  OrderSummary,
  Image,
  CoffeeTitle,
  Info,
  ButtonRemove,
  CoffeeItemLeftContainer,
  CoffeeItemRightContainer,
  Price,
  ConfirmButton,
} from './styles.ts'
import { Counter } from '../../../components/Counter/Index.tsx'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { OrdersContext } from '../../../contexts/OrdersContext.tsx'
import { ICoffee } from '../../../reducers/orders/reducer.ts'

export function SelectedItems() {
  const baseUrl = window.location.origin

  const {
    cartItems,
    totalAmount,
    deliveryCharge,
    updateItemQuantity,
    removeItemToCart,
  } = useContext(OrdersContext)

  const handleQuantityChange = (id: string, delta: number) => {
    const coffee = cartItems.find((coffee) => coffee.id === id)
    if (coffee) {
      updateItemQuantity(coffee, delta)
    }
  }

  const handleRemoveItemToCart = (coffee: ICoffee) => {
    if (coffee) {
      removeItemToCart(coffee)
    }
  }

  return (
    <SelectedItemsCard>
      <SelectedItemsContainer>
        <SelectedCoffees>
          {cartItems.map((coffee) => (
            <CoffeeItem key={coffee.id}>
              <CoffeeItemLeftContainer>
                <Image
                  src={`${baseUrl}/coffee/${coffee.image}`}
                  alt={coffee.image}
                />

                <Info>
                  <CoffeeTitle>{coffee.name}</CoffeeTitle>

                  <div>
                    <Counter
                      id={coffee.id}
                      quantity={coffee.selectQuantity}
                      onQuantityChange={handleQuantityChange}
                    />
                    <ButtonRemove
                      onClick={() => handleRemoveItemToCart(coffee)}
                    >
                      <Trash size={16} /> <span>REMOVER</span>
                    </ButtonRemove>
                  </div>
                </Info>
              </CoffeeItemLeftContainer>

              <CoffeeItemRightContainer>
                <Price>
                  <p>R$</p>
                  <p>
                    {coffee.value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </Price>
              </CoffeeItemRightContainer>
            </CoffeeItem>
          ))}
        </SelectedCoffees>
      </SelectedItemsContainer>

      <OrderSummary>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>

          <h2>Total</h2>
        </div>

        <div>
          <p>
            {totalAmount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <p>
            {deliveryCharge.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>

          <h2>
            {(totalAmount + deliveryCharge).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h2>
        </div>
      </OrderSummary>

      <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
    </SelectedItemsCard>
  )
}
