import { Minus, Plus } from 'phosphor-react'
import { CounterButton, CounterContainer, Quantity } from './styles.ts'

export function Counter({
  id,
  quantity,
  onQuantityChange,
  width = 'max-content',
}: Readonly<{
  id: string
  quantity: number
  onQuantityChange: (id: string, delta: number) => void
  width?: string
}>) {
  return (
    <CounterContainer width={width}>
      <CounterButton onClick={() => onQuantityChange(id, -1)}>
        <Minus size={14} />
      </CounterButton>

      <Quantity>{quantity}</Quantity>

      <CounterButton onClick={() => onQuantityChange(id, +1)}>
        <Plus size={14} />
      </CounterButton>
    </CounterContainer>
  )
}
