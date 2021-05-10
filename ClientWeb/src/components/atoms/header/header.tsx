export type HeaderProps = {
  children: string
  type?: 'big' | 'medium' | 'small'
}

export const Header = (props: HeaderProps) => {
  const { children, type = 'medium' } = props

  switch (type) {
    case 'big':
      return <h1>{children}</h1>
    case 'small':
      return <h3>{children}</h3>
    case 'medium':
    default:
      return <h2>{children}</h2>
  }
}
