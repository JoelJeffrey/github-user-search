import { render, screen } from "@testing-library/react"
import ListItem from "./ListItem"

const dummyRepoData = {
  name: "Joel's favorite Repository",
  stargazers_count: 9001,
}

test("renders repo name", () => {
  render(<ListItem repoData={dummyRepoData} />)
  const linkElement = screen.getByText(/Joel's Favorite Repository/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders repo star count", () => {
  render(<ListItem repoData={dummyRepoData} />)
  const linkElement = screen.getByText(/9001/i)
  expect(linkElement).toBeInTheDocument()
})
