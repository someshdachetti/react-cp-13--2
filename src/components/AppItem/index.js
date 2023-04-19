// Write your code here
import './index.css'

const AppItem = props => {
  const {AppList} = props
  const {appId, appName, imageUrl, category} = AppList

  return (
    <ul className="appsContainer">
      <div>
        <li key={appId}>
          <img className="imgs" src={imageUrl} alt={category} />
          <p className="appName">{appName}</p>
        </li>
      </div>
    </ul>
  )
}
export default AppItem
