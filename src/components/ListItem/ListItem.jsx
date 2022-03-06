import "./ListItem.css"

function ListItem({ repoData }) {
  return (
    <li className="repo">
      <span>{repoData?.name}</span>
      <span className="repo-stars">&#9733; {repoData?.stargazers_count}</span>
    </li>
  )
}

export default ListItem
