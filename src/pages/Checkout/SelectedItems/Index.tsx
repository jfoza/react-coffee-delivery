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
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { OrdersContext } from '../../../contexts/OrdersContext.tsx'

export function SelectedItems() {
  const baseUrl = window.location.origin

  const { cartItems, updateItemQuantity } = useContext(OrdersContext)

  const handleQuantityChange = (id: string, delta: number) => {
    const coffee = cartItems.find((coffee) => coffee.id === id)
    if (coffee) {
      updateItemQuantity(coffee, delta)
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
                    <ButtonRemove>
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
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
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
          <p>R$ 29,70</p>
          <p>R$ 3,50</p>

          <h2>R$ 33,20</h2>
        </div>
      </OrderSummary>

      <NavLink to="/order-success">
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </NavLink>
    </SelectedItemsCard>
  )
}
