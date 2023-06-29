import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../service/api'

interface GithubDataProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  followers: number
  public_repos: number
}

interface GithubDataIssueProps {
  number: number
  title: string
  body: string
}

interface GithubContextType {
  githubData: GithubDataProps
  githubSearchIssue: GithubDataIssueProps[]
  handleIssueSearch: (data: string) => void
}

interface GithubContextProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [githubData, setGithubData] = useState<GithubDataProps>({
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    followers: 0,
    public_repos: 0,
  })

  const [githubSearchIssue, setGithubSearchIssue] = useState<
    GithubDataIssueProps[]
  >([])

  const [issueSearch, setIssueSearch] = useState('')

  const username = 'Romeusorionaet'

  async function fetchGithubProfile() {
    await api
      .get(`/users/${username}`)
      .then((response) => response.data)
      .then((data) => setGithubData(data))
  }

  async function fetchGithubSearchIssues() {
    console.log(issueSearch, 'search')

    await api
      .get(`/search/issues?q=${issueSearch}%20repo:${username}/MyGithubBlog`)
      .then((response) => response.data)
      .then((data) => setGithubSearchIssue(data.items))
  }

  function handleIssueSearch(data: string) {
    setIssueSearch(data)
  }

  console.log(githubSearchIssue)

  useEffect(() => {
    fetchGithubProfile()
  }, [])

  useEffect(() => {
    fetchGithubSearchIssues()
    // stoped here
  })

  return (
    <GithubContext.Provider
      value={{ githubData, githubSearchIssue, handleIssueSearch }}
    >
      {children}
    </GithubContext.Provider>
  )
}
