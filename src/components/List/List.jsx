import ListItem from "../ListItem/ListItem"
import "./List.css"

function List({ username, userRepos }) {
  return (
    <>
      <h2 className="list-title">{username}'s Repositories</h2>
      {userRepos.length > 0 ? (
        <ul className="list">
          {userRepos.map((repoData) => (
            <ListItem key={repoData.id} repoData={repoData} />
          ))}
        </ul>
      ) : (
        <span className="list-empty">User doesn't have any repositories</span>
      )}
    </>
  )
}

export default List
