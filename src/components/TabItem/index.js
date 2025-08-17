// Write your code here
import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabList, tabChange, isActive} = this.props
    const {tabId, displayText} = tabList

    const clicked = () => {
      tabChange(tabId)
    }
    const active = isActive ? 'active' : ''
    return (
      <li>
        <button className={`button ${active}`} onClick={clicked} type="button">
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
