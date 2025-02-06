import {
  Card,
  CartIcon,
  CartQuantity,
  CounterButton,
  CounterContainer,
  Description,
  Footer,
  Image,
  MonetarySymbol,
  Quantity,
  Tag,
  TagsContainer,
  Title,
  Value,
} from './styles.ts'
import { ICoffee } from '../../data'
import { FaShoppingCart } from 'react-icons/fa'
import { Minus, Plus } from 'phosphor-react'

interface ICoffeeProps {
  info: ICoffee
}

export function Coffee({ info }: Readonly<ICoffeeProps>) {
  const baseUrl = window.location.origin
  const tags = info.tags

  return (
    <Card>
      <Image src={`${baseUrl}/coffee/${info.image}`} alt={info.image} />

      <div>
        <TagsContainer>
          {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </TagsContainer>

        <Title>{info.name}</Title>

        <Description>{info.description}</Description>
      </div>

      <Footer>
        <div>
          <MonetarySymbol>R$ </MonetarySymbol>
          <Value>
            {info.value.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Value>
        </div>

        <CartQuantity>
          <CounterContainer>
            <CounterButton>
              <Minus size={14} />
            </CounterButton>

            <Quantity>{1}</Quantity>

            <CounterButton>
              <Plus size={14} />
            </CounterButton>
          </CounterContainer>

          <CartIcon>
            <FaShoppingCart size={18} />
          </CartIcon>
        </CartQuantity>
      </Footer>
    </Card>
  )
}
