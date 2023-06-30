import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'
import { useNavigate } from 'react-router-dom'

export function Main() {
  const { githubSearchIssue } = useContext(GithubContext)

  const navigate = useNavigate()

  function handleIssueCardDetails(issueId: string) {
    navigate(`/details/${issueId}`)
  }

  return (
    <div>
      <hr />
      <h2>Main</h2>
      {githubSearchIssue &&
        githubSearchIssue.map((issue) => {
          return (
            <div
              onClick={() => handleIssueCardDetails(String(issue.number))}
              key={issue.number}
            >
              <h2>{issue.title}</h2>
              <p>{issue.body}</p>
            </div>
          )
        })}
    </div>
  )
}
