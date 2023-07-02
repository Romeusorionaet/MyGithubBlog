import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'
import { useNavigate } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { MainContainer, InputContainer, CardsContainer } from './styles'

export function Main() {
  const { githubData, fetchGithubSearchIssues, githubSearchIssue } =
    useContext(GithubContext)

  const navigate = useNavigate()

  function handleIssueCardDetails(issueId: string) {
    navigate(`/details/${issueId}`)
  }

  return (
    <MainContainer>
      <InputContainer>
        <div className="wrapper_repo">
          <p>Publicações</p>
          <span>{githubData.public_repos} Publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => fetchGithubSearchIssues(event.target.value)}
        />
      </InputContainer>

      <CardsContainer>
        {githubSearchIssue &&
          githubSearchIssue.map((issue) => {
            return (
              <div
                className="card"
                onClick={() => handleIssueCardDetails(String(issue.number))}
                key={issue.number}
              >
                <div className="title">
                  <h2>{issue.title}</h2>
                  <span>
                    Há{' '}
                    {formatDistanceToNow(new Date(issue.updated_at), {
                      locale: ptBR,
                    })}
                  </span>
                </div>
                <p>{issue.body}</p>
              </div>
            )
          })}
      </CardsContainer>
    </MainContainer>
  )
}
