import { MainNavItemProps } from '../../atoms/atoms-index'

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
