import {
  CardTitle,
  ChosenPaymentMethodButton,
  FormCard,
  PaymentMethodSelectCard,
  PaymentMethodSelectContainer,
} from './styles.ts'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  FormGridContainer,
  FormGroup,
} from '../../../components/FormGridContainer/styles.ts'

export function PaymentForm() {
  return (
    <>
      <FormCard>
        <CardTitle iconColor="yellow-dark">
          <MapPinLine size={22} />

          <div>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CardTitle>

        <FormGridContainer>
          <FormGroup sm={12} md={6} lg={4}>
            <input type="text" placeholder="CEP" />
          </FormGroup>

          <FormGroup col={12}>
            <input type="text" placeholder="Rua" />
          </FormGroup>

          <FormGroup sm={12} md={6} lg={4}>
            <input type="text" placeholder="Número" />
          </FormGroup>

          <FormGroup sm={12} md={6} lg={8}>
            <input type="text" placeholder="Complemento" />
          </FormGroup>

          <FormGroup sm={12} md={6} lg={4}>
            <input type="text" placeholder="Bairro" />
          </FormGroup>

          <FormGroup sm={12} md={6} lg={6}>
            <input type="text" placeholder="Cidade" />
          </FormGroup>

          <FormGroup sm={12} md={6} lg={2}>
            <input type="text" placeholder="UF" />
          </FormGroup>
        </FormGridContainer>
      </FormCard>

      <PaymentMethodSelectCard>
        <CardTitle iconColor="purple">
          <CurrencyDollar size={22} />

          <div>
            <h2>Pagamento</h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </CardTitle>

        <PaymentMethodSelectContainer>
          <ChosenPaymentMethodButton>
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </ChosenPaymentMethodButton>

          <ChosenPaymentMethodButton>
            <Bank size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </ChosenPaymentMethodButton>

          <ChosenPaymentMethodButton>
            <Money size={16} />
            <span>DINHEIRO</span>
          </ChosenPaymentMethodButton>
        </PaymentMethodSelectContainer>
      </PaymentMethodSelectCard>
    </>
  )
}
