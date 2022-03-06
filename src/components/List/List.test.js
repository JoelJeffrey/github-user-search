import { render, screen } from "@testing-library/react"
import List from "./List"

const dummyRepoData = [
  {
    id: 1,
    name: "Joel's favorite Repository",
    stargazers_count: 9001,
  },
  {
    id: 2,
    name: "Joel's favorite Repository",
    stargazers_count: 9001,
  },
  {
    id: 3,
    name: "Joel's favorite Repository",
    stargazers_count: 9001,
  },
]

test("renders passed username in header", () => {
  render(<List username="JoelJeffrey" userRepos={[]} />)
  const linkElement = screen.getByText(/JoelJeffrey's Repositories/i)
  expect(linkElement).toBeInTheDocument()
})

test("Renders no repository message", () => {
  render(<List username="JoelJeffrey" userRepos={[]} />)
  const linkElement = screen.getByText(/User doesn't have any repositories/i)
  expect(linkElement).toBeInTheDocument()
})

test("Renders 3 list items", () => {
  render(<List username="JoelJeffrey" userRepos={dummyRepoData} />)
  const allRepos = screen.getAllByText("Joel's favorite Repository")
  expect(allRepos).toHaveLength(3)
})
