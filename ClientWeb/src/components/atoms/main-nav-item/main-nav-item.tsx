import styles from './main-nav-item.module.scss'
import { Link } from 'react-router-dom'

export interface MainNavItemProps {
  path: string
  children: string
}

export const MainNavItem = (props: MainNavItemProps) => {
  return (
    <li className={styles['nav-item']}>
      <Link to={props.path}>{props.children}</Link>
    </li>
  )
}
