import { Link } from 'react-router-dom'
import './main-nav-item.scss'

export interface MainNavItemProps {
  path: string
  children: string
}

export const MainNavItem = (props: MainNavItemProps) => {
  return (
    <li className="nav-item">
      <Link to={props.path}>{props.children}</Link>
    </li>
  )
}
