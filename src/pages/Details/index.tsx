import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

import { DetailsContainer, HeaderContainer, BodyContainer } from './styles'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

export function Details() {
  const params = useParams()
  const [issueCardDetails, setIssueCardDetails] = useState({
    title: '',
    body: '',
    user: { login: '' },
    updated_at: '',
    comments: '',
  })

  useEffect(() => {
    async function fetchIssueDetails() {
      await api
        .get(`/repos/Romeusorionaet/MyGithubBlog/issues/${params.issueId}`)
        .then((response) => response.data)
        .then((data) => setIssueCardDetails(data))
    }
    fetchIssueDetails()
  }, [params])

  return (
    <DetailsContainer>
      <HeaderContainer>
        <nav>
          <NavLink to="/">
            <CaretLeft size={16} weight="duotone" />
            <span>voltar</span>
          </NavLink>
          <NavLink
            to="https://github.com/Romeusorionaet/MyGithubBlog"
            target="blank"
          >
            <span>ver no github</span>
            <ArrowSquareOut size={16} weight="duotone" />
          </NavLink>
        </nav>

        <h2>{issueCardDetails.title}</h2>

        <div className="summary">
          <div>
            <GithubLogo size={20} color="#7B96B2" weight="fill" />
            <span>{issueCardDetails.user.login}</span>
          </div>

          <div>
            <CalendarBlank size={20} color="#7B96B2" weight="fill" />

            <span>
              Há{' '}
              {issueCardDetails.updated_at &&
                formatDistanceToNow(new Date(issueCardDetails.updated_at), {
                  locale: ptBR,
                })}
            </span>
          </div>

          <div>
            <ChatCircle size={20} color="#7B96B2" weight="fill" />
            <span>{issueCardDetails.comments} comentários</span>
          </div>
        </div>
      </HeaderContainer>

      <BodyContainer>
        <ReactMarkdown className="markdown">
          {issueCardDetails.body}
        </ReactMarkdown>
      </BodyContainer>
    </DetailsContainer>
  )
}
