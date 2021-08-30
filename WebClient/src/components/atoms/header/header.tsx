import { HeaderProps, HeaderType } from './header.types'

export const Header = (props: HeaderProps) => {
  const { children, type = HeaderType.Medium, className = '' } = props

  switch (type) {
    case HeaderType.Big:
      return <h1 className={`${type} ${className}`}>{children}</h1>

    case HeaderType.Medium:
      return <h2 className={`${type} ${className}`}>{children}</h2>

    case HeaderType.Small:
      return <h3 className={`${type} ${className}`}>{children}</h3>
  }
}
