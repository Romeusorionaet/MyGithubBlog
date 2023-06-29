import { Header } from '../../components/Header'
import { GithubContext } from '../../contexts/GithubContext'
import { useContext } from 'react'
import { Main } from './components/Main'

export function Home() {
  const { githubData, handleIssueSearch } = useContext(GithubContext)

  return (
    <div>
      <Header />
      <hr />
      <h1>Home</h1>

      <div>
        <h2>Publicações: {githubData.public_repos}</h2>
        <input
          type="text"
          onChange={(event) => handleIssueSearch(event.target.value)}
        />
      </div>

      <div>
        <h2>Issues cards</h2>
        <Main />
      </div>
    </div>
  )
}
