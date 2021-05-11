import './header.scss'

export interface HeaderProps {
  children: string
  type?: 'big' | 'medium' | 'small'
  color?: 'primary' | 'secondary'
}

export const Header = (props: HeaderProps) => {
  const { children, type = 'medium', color = 'primary' } = props

  switch (type) {
    case 'big':
      return <h1 className={color}>{children}</h1>
    case 'small':
      return <h3 className={color}>{children}</h3>
    case 'medium':
    default:
      return <h2 className={color}>{children}</h2>
  }
}
