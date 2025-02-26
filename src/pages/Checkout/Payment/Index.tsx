import {
  ChosenPaymentMethodButton,
  PaymentMethodSelectCard,
  PaymentMethodSelectContainer,
  CardTitle,
  FormCard,
  Small,
} from './styles.ts'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  FormGridContainer,
  FormGroup,
} from '../../../components/FormGridContainer/styles.ts'
import { useContext } from 'react'
import { OrdersContext } from '../../../contexts/OrdersContext.tsx'

const paymentMethods = [
  {
    id: 'credit_card',
    label: 'CARTÃO DE CRÉDITO',
    icon: <CreditCard size={16} />,
  },
  { id: 'debit_card', label: 'CARTÃO DE DÉBITO', icon: <Bank size={16} /> },
  { id: 'cash', label: 'DINHEIRO', icon: <Money size={16} /> },
]

export function Payment() {
  const { paymentMethod, setPaymentMethod } = useContext(OrdersContext)

  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext()

  const handleSelectPaymentMethod = (method: string) => {
    setValue('paymentMethod', method)
    setPaymentMethod(method)
    trigger('paymentMethod')
  }

  return (
    <div>
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
            <input
              id="zipCode"
              type="text"
              placeholder="CEP"
              {...register('zipCode')}
            />
            {errors.zipCode?.message && (
              <Small>{String(errors.zipCode.message)}</Small>
            )}
          </FormGroup>

          <FormGroup col={12}>
            <input
              id="street"
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
            {errors.street?.message && (
              <Small>{String(errors.street.message)}</Small>
            )}
          </FormGroup>

          <FormGroup sm={12} md={6} lg={4}>
            <input
              id="number"
              type="text"
              placeholder="Número"
              {...register('number')}
            />
            {errors.number?.message && (
              <Small>{String(errors.number.message)}</Small>
            )}
          </FormGroup>

          <FormGroup sm={12} md={6} lg={8}>
            <input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
            {errors.complement?.message && (
              <Small>{String(errors.complement.message)}</Small>
            )}
          </FormGroup>

          <FormGroup sm={12} md={6} lg={4}>
            <input
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {errors.neighborhood?.message && (
              <Small>{String(errors.neighborhood.message)}</Small>
            )}
          </FormGroup>

          <FormGroup sm={12} md={6} lg={6}>
            <input
              id="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            {errors.city?.message && (
              <Small>{String(errors.city.message)}</Small>
            )}
          </FormGroup>

          <FormGroup sm={12} md={6} lg={2}>
            <input
              id="state"
              type="text"
              placeholder="UF"
              {...register('state')}
            />
            {errors.state?.message && (
              <Small>{String(errors.state.message)}</Small>
            )}
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
          {paymentMethods.map((method) => (
            <ChosenPaymentMethodButton
              key={method.id}
              type="button"
              onClick={() => handleSelectPaymentMethod(method.id)}
              className={paymentMethod === method.id ? 'active' : ''}
            >
              {method.icon}
              <span>{method.label}</span>
            </ChosenPaymentMethodButton>
          ))}
        </PaymentMethodSelectContainer>

        {errors.paymentMethod && (
          <Small>{String(errors.paymentMethod.message)}</Small>
        )}
      </PaymentMethodSelectCard>
    </div>
  )
}
