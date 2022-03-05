import "./ListItem.css"

function ListItem({ repoData }) {
  return (
    <li className="repo">
      <span className="repo-name">{repoData.name}</span>
      <span className="repo-stars">{repoData.stargazers_count}</span>
    </li>
  )
}

export default ListItem
