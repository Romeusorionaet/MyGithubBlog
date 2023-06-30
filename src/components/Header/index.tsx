import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import { HeaderContainer, DescriptionContainer } from './styles'
import { Buildings, GithubLogo, Users } from 'phosphor-react'

export function Header() {
  const { githubData } = useContext(GithubContext)

  return (
    <HeaderContainer>
      <div className="wrapper_img">
        <img src={githubData.avatar_url} alt="avatar do usuário" />
      </div>

      <DescriptionContainer>
        <h1>{githubData.name}</h1>
        <p>{githubData.bio}</p>

        <div className="wrapper_summary">
          <div>
            <GithubLogo size={20} weight="fill" />
            <span>{githubData.login}</span>
          </div>

          <div>
            <Buildings size={20} weight="duotone" />
            <p>Em busca de uma oportunidade!</p>
          </div>

          <div>
            <Users size={20} weight="duotone" />
            <span>{githubData.followers}</span>
          </div>
        </div>
      </DescriptionContainer>
    </HeaderContainer>
  )
}
