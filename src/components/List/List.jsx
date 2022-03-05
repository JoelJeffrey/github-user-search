import ListItem from "../ListItem/ListItem"
import "./List.css"

function List({ username, userRepos }) {
  return (
    userRepos.length > 0 && (
      <>
        <h2 className="list-title">{username}'s Repositories</h2>
        <ul className="list">
          {userRepos.map((repoData) => (
            <ListItem key={repoData.id} repoData={repoData} />
          ))}
        </ul>
      </>
    )
  )
}

export default List
