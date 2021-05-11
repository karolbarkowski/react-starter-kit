import styles from './header.module.scss'

export interface HeaderProps {
  children: string
  type?: 'big' | 'medium' | 'small'
  color?: 'primary' | 'secondary'
}

export const Header = (props: HeaderProps) => {
  const { children, type = 'medium', color = 'primary' } = props

  switch (type) {
    case 'big':
      return <h1 className={`${styles.header} ${styles[color]}`}>{children}</h1>
    case 'small':
      return <h3 className={`${styles.header} ${styles[color]}`}>{children}</h3>
    case 'medium':
    default:
      return <h2 className={`${styles.header} ${styles[color]}`}>{children}</h2>
  }
}
