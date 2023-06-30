import { useParams } from 'react-router-dom'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'

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
    <div>
      <h1>Details</h1>
      <span>title: {issueCardDetails.title}</span>
      <br />
      <span>comentários: {issueCardDetails.coments}</span>
      <span>data: {issueCardDetails.updated_at}</span>
      <span>user: {issueCardDetails.user.login}</span>
      <hr />
      <p>body: {issueCardDetails.body}</p>
    </div>
  )
}
