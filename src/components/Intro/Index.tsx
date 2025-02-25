import {
  IntroContainer,
  IntroImgContainer,
  IntroImgTextBottom,
  IntroTextContainer,
  IntroImgTextTop,
} from './styles.ts'
import introImg from '../../assets/img/intro-img.svg'
import { Flag } from '../Flag/Index.tsx'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <IntroTextContainer>
        <IntroImgTextTop>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroImgTextTop>

        <IntroImgTextBottom>
          <section>
            <Flag icon={<ShoppingCart />} backgroundColor="yellow-dark">
              Compra simples e segura
            </Flag>

            <Flag icon={<Timer />} backgroundColor="yellow">
              Entrega rápida e rastreada
            </Flag>
          </section>

          <section>
            <Flag icon={<Package />} backgroundColor="base-text">
              Embalagem mantém o café intacto
            </Flag>

            <Flag icon={<Coffee />} backgroundColor="purple">
              O café chega fresquinho até você
            </Flag>
          </section>
        </IntroImgTextBottom>
      </IntroTextContainer>

      <IntroImgContainer>
        <div>
          <img src={introImg} alt="" />
        </div>
      </IntroImgContainer>
    </IntroContainer>
  )
}
