import { HomeContainer } from './styles.ts'
import { Intro } from '../../components/Intro/Index.tsx'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <h1>Home</h1>
    </HomeContainer>
  )
}
