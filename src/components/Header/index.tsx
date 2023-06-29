import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'

export function Header() {
  const { githubData } = useContext(GithubContext)
  // githubData.map((data) => console.log(data.id))

  return (
    <div>
      <h1>Header</h1>
      {githubData && (
        <div>
          <img src={githubData.avatar_url} alt="avatar do usuário" />
          <h2>{githubData.name}</h2>
          <p>{githubData.bio}</p>
          <hr />
          <span>{githubData.login}</span>
          <p>Em busca de uma oportunidade!</p>
          <span>{githubData.followers}</span>
        </div>
      )}
    </div>
  )
}
