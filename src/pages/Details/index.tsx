import { useParams } from 'react-router-dom'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'

import { DetailsContainer, SummaryContainer, BodyContainer } from './styles'

export function Details() {
  const params = useParams()
  const [issueCardDetails, setIssueCardDetails] = useState({
    title: '',
    body: '',
    user: { login: '' },
    updated_at: '',
    coments: '',
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
      <div>
        <p>voltar</p>
        <p>ver no github</p>
      </div>

      <h2>title: {issueCardDetails.title}</h2>
      <SummaryContainer>
        <span>comentários: {issueCardDetails.coments}</span>
        <span>data: {issueCardDetails.updated_at}</span>
        <span>user: {issueCardDetails.user.login}</span>
      </SummaryContainer>

      <BodyContainer>
        <p>body: {issueCardDetails.body}</p>
      </BodyContainer>
    </DetailsContainer>
  )
}
