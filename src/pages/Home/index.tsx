import { Header } from '../../components/Header'
import { GithubContext } from '../../contexts/GithubContext'
import { useContext } from 'react'
import { Main } from './components/Main'
import { HomeContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Home() {
  const { githubData, fetchGithubSearchIssues } = useContext(GithubContext)

  return (
    <HomeContainer>
      <div className="wrapper_logo">
        <img src={logo} alt="" />
      </div>
      <Header />

      <main>
        <h2>Publicações: {githubData.public_repos}</h2>
        <input
          type="text"
          onChange={(event) => fetchGithubSearchIssues(event.target.value)}
        />

        <div>
          <h2>Issues cards</h2>
          <Main />
        </div>
      </main>
    </HomeContainer>
  )
}
