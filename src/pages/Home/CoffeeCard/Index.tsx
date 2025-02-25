import {
  Card,
  CartIcon,
  CartQuantity,
  Description,
  Footer,
  Image,
  MonetarySymbol,
  Tag,
  TagsContainer,
  Title,
  Value,
} from './styles.ts'
import { FaShoppingCart } from 'react-icons/fa'
import { Counter } from '../../../components/Counter/Index.tsx'
import { ICoffee } from '../../../reducers/orders/reducer.ts'

export function CoffeeCard({
  info,
  onQuantityChange,
}: Readonly<{
  info: ICoffee
  onQuantityChange: (id: string, delta: number) => void
}>) {
  const baseUrl = window.location.origin
  return (
    <Card>
      <Image src={`${baseUrl}/coffee/${info.image}`} alt={info.image} />

      <div>
        <TagsContainer>
          {info.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
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
          <Counter
            id={info.id}
            quantity={info.selectQuantity}
            onQuantityChange={onQuantityChange}
            width="72px"
          />

          <CartIcon>
            <FaShoppingCart size={18} />
          </CartIcon>
        </CartQuantity>
      </Footer>
    </Card>
  )
}
