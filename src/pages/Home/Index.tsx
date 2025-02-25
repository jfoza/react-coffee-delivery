import { Grid, HomeContainer, Title } from './styles.ts'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersContext.tsx'
import { Intro } from '../../components/Intro/Index.tsx'
import { CoffeeCard } from './CoffeeCard/Index.tsx'

export function Home() {
  const { products, updateItemQuantity } = useContext(OrdersContext)

  const handleQuantityChange = (id: string, delta: number) => {
    const coffee = products.find((coffee) => coffee.id === id)
    if (coffee) {
      updateItemQuantity(coffee, delta)
    }
  }

  return (
    <HomeContainer>
      <Intro />

      <main>
        <Title>Nossos cafés</Title>

        <Grid>
          {products.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              info={coffee}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </Grid>
      </main>
    </HomeContainer>
  )
}
