import { Header } from '../../components/Header'
import { Main } from './components/Main'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Main />
    </HomeContainer>
  )
}
