import { render, screen, fireEvent, getByText } from "@testing-library/react"
import App from "./App"

test("renders main header", () => {
  render(<App />)
  const linkElement = screen.getByText(/Github User's Repository App/i)
  expect(linkElement).toBeInTheDocument()
})

test("updates search input on change", () => {
  const { queryByPlaceholderText } = render(<App />)
  const searchInput = queryByPlaceholderText("username...")
  fireEvent.change(searchInput, { target: { value: "test" } })
  expect(searchInput.value).toBe("test")
})

test("show error about not enough characters to search", () => {
  const { getByText } = render(<App />)
  fireEvent.click(getByText("Search"))
  const linkElement = screen.getByText(/minimum of 4 characters required/i)
  expect(linkElement).toBeInTheDocument()
})
