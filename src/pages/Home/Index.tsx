import { Grid, HomeContainer, Title } from './styles.ts'
import { Intro } from '../../components/Intro/Index.tsx'
import { coffees } from '../../data'
import { Coffee } from '../../components/Coffee/Index.tsx'

export function Home() {
  return (
    <HomeContainer>
      <Intro />

      <main>
        <Title>Nossos cafés</Title>

        <Grid>
          {coffees.map((coffee) => (
            <Coffee key={coffee.id} info={coffee} />
          ))}
        </Grid>
      </main>
    </HomeContainer>
  )
}
