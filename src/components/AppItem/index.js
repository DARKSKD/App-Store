// Write your code here
import './index.css'
import {Component} from 'react'

class AppItem extends Component {
  render() {
    const {appList} = this.props
    const {imageUrl, appName} = appList
    return (
      <li className="box">
        <img className="logo" src={imageUrl} alt={appName} />
        <p className="paragraph">{appName}</p>
      </li>
    )
  }
}

export default AppItem
