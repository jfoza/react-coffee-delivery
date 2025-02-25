import {
  CheckoutContainer,
  CheckoutLeft,
  CheckoutRight,
  Title,
} from './styles.ts'
import { PaymentForm } from './PaymentForm/Index.tsx'
import { SelectedItems } from './SelectedItems/Index.tsx'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <Title>Complete seu pedido</Title>

        <PaymentForm />
      </CheckoutLeft>

      <CheckoutRight>
        <Title>Cafés selecionados</Title>

        <SelectedItems />
      </CheckoutRight>
    </CheckoutContainer>
  )
}
