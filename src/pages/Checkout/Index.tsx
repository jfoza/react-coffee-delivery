import {
  CartEmpty,
  CheckoutContainer,
  CheckoutLeft,
  CheckoutRight,
  NoContent,
  Title,
  Text,
  Form,
} from './styles.ts'
import { Payment } from './Payment/Index.tsx'
import { SelectedItems } from './SelectedItems/Index.tsx'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext.tsx'
import { FaCartPlus } from 'react-icons/fa'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const newOrderValidationSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, { message: 'O CEP deve conter no mínimo 8 caracteres' })
    .max(9, { message: 'O CEP deve conter no máximo 9 caracteres' })
    .regex(/^\d{5}-?\d{3}$/, {
      message: 'Formato inválido de CEP (Ex: 12345-678)',
    }),

  street: zod.string().nonempty({ message: 'O campo Rua é obrigatório' }),

  number: zod.string().nonempty({ message: 'O campo Número é obrigatório' }),

  complement: zod.string().nullable().optional(),

  neighborhood: zod
    .string()
    .nonempty({ message: 'O campo Bairro é obrigatório' }),

  city: zod.string().nonempty({ message: 'O campo Cidade é obrigatório' }),

  state: zod
    .string()
    .length(2, { message: 'O estado deve conter exatamente 2 caracteres' }),
})

type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const { cartItems } = useContext(OrdersContext)
  const navigate = useNavigate()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })

  const { handleSubmit, reset } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    reset()

    navigate('/order-success')
  }

  return (
    <CheckoutContainer>
      {cartItems.length === 0 ? (
        <NoContent>
          <CartEmpty>
            <FaCartPlus size={130} />
          </CartEmpty>

          <Text>
            <h2>Seu carrinho está vazio...</h2>
            <p>
              Que tal adicionar um pouco mais de sabor ao seu dia?
              <br /> ☕️ Seu carrinho está esperando por aquele café especial!
            </p>
          </Text>
        </NoContent>
      ) : (
        <Form onSubmit={handleSubmit(handleCreateNewOrder)}>
          <CheckoutLeft>
            <Title>Complete seu pedido</Title>

            <FormProvider {...newOrderForm}>
              <Payment />
            </FormProvider>
          </CheckoutLeft>

          <CheckoutRight>
            <Title>Cafés selecionados</Title>

            <SelectedItems />
          </CheckoutRight>
        </Form>
      )}
    </CheckoutContainer>
  )
}
