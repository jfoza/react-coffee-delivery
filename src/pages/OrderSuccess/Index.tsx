import {
  Container,
  OrderSuccessContainer,
  OrderSuccessContent,
  OrderSuccessHeader,
  OrderSuccessImg,
  OrderSuccessLeft,
  OrderSuccessMain,
} from './styles.ts'
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa'
import { PiTimerFill } from 'react-icons/pi'
import { Flag } from '../../components/Flag/Index.tsx'
import orderSuccessIllustration from '../../assets/img/order-success-Illustration.svg'

export function OrderSuccess() {
  return (
    <Container>
      <OrderSuccessContainer>
        <OrderSuccessHeader>
          <h1>Uhu! Pedido confirmado</h1>

          <p>Agora é só aguardar que logo o café chegará até você</p>
        </OrderSuccessHeader>

        <OrderSuccessMain>
          <OrderSuccessLeft>
            <OrderSuccessContent>
              <Flag icon={<FaMapMarkerAlt />} backgroundColor="purple">
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </Flag>

              <Flag icon={<PiTimerFill />} backgroundColor="yellow">
                <p>
                  Previsão de entrega <strong>20 min - 30 min</strong>
                </p>
              </Flag>

              <Flag icon={<FaDollarSign />} backgroundColor="yellow-dark">
                <p>
                  Pagamento na entrega <strong>Cartão de Crédito</strong>
                </p>
              </Flag>
            </OrderSuccessContent>
          </OrderSuccessLeft>

          <OrderSuccessImg src={orderSuccessIllustration} />
        </OrderSuccessMain>
      </OrderSuccessContainer>
    </Container>
  )
}
