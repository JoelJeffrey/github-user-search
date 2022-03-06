import { useState } from "react"

import List from "./components/List/List"
import "./App.css"

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [username, setUsername] = useState("")
  const [userRepos, setUserRepos] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  function handleOnSearch() {
    setError(null)
    // no reason to call api again when users repos are already fetched
    if (searchValue.toLowerCase() === username.toLowerCase()) {
      setError("already displaying this user's repositories")
      return
    }
    // using 4 characters because that's githubs minimum username length
    if (searchValue.length < 4) {
      setError("minimum of 4 characters required")
      return
    }
    setUserRepos([])
    setUsername("")
    setIsFetching(true)
    // get repos only owned by the searched user, get 100 repos (github api max value)
    fetch(
      `https://api.github.com/users/${searchValue}/repos?type=owner&per_page=100`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw "error fetching users repositories"
        }
      })
      .then((data) => {
        // sort by star count
        data.sort((a, b) => b.stargazers_count - a.stargazers_count)
        setUserRepos(data)
        setUsername(searchValue)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsFetching(false)
        setSearchValue("")
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User's Repository App</h1>
      </header>
      <main>
        <div className="search">
          <input
            className="search-input"
            type="input"
            placeholder="username..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
          <button
            className="search-btn"
            type="submit"
            onClick={handleOnSearch}
            disabled={isFetching}
          >
            Search
          </button>
        </div>
        <div className="main-content">
          {error && <span className="error">{error}</span>}
          {isFetching ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <List username={username} userRepos={userRepos} />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
