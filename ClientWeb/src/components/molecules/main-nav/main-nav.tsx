import { MainNavItemProps } from '../../atoms/main-nav-item/main-nav-item'

export interface MainNavProps {
  children: React.ReactElement<MainNavItemProps> | React.ReactElement<MainNavItemProps>[]
}

export const MainNav = (props: MainNavProps) => {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  )
}
