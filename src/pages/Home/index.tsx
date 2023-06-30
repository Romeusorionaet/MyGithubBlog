import { Header } from '../../components/Header'
import { Main } from './components/Main'
import { HomeContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <HomeContainer>
      <div className="wrapper_logo">
        <img src={logo} alt="" />
      </div>
      <Header />
      <Main />
    </HomeContainer>
  )
}
