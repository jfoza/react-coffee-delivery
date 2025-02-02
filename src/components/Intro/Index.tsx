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
            <Flag
              icon={<ShoppingCart />}
              text="Compra simples e segura"
              backgroundColor="yellow-dark"
            />
            <Flag
              icon={<Timer />}
              text="Entrega rápida e rastreada"
              backgroundColor="yellow"
            />
          </section>

          <section>
            <Flag
              icon={<Package />}
              text="Embalagem mantém o café intacto"
              backgroundColor="base-text"
            />

            <Flag
              icon={<Coffee />}
              text="O café chega fresquinho até você"
              backgroundColor="purple"
            />
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
