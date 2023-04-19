// Write your code here

import './index.css'

const TabItem = props => {
  const {TabDetailes, switchingTabs, isTabActive} = props
  const {tabId, displayText} = TabDetailes

  const switchTab = () => {
    switchingTabs(tabId)
  }

  const isTabOn = isTabActive ? 'tabisOn' : ''

  return (
    <ul className="tabListInOrder">
      <li key={tabId}>
        <button type="button" onClick={switchTab} className={`tab ${isTabOn}`}>
          {displayText}
        </button>
      </li>
    </ul>
  )
}
export default TabItem
