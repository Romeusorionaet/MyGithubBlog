import { useContext } from 'react'
import { GithubContext } from '../../../../contexts/GithubContext'

export function Main() {
  const { githubSearchIssue } = useContext(GithubContext)

  // console.log(githubSearchIssue)

  return (
    <div>
      <hr />
      <h2>Main</h2>
      {githubSearchIssue &&
        githubSearchIssue.map((issue) => {
          return (
            <div key={issue.number}>
              <h2>{issue.title}</h2>
              <p>{issue.body}</p>
            </div>
          )
        })}
    </div>
  )
}
