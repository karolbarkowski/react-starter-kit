import styles from './card.module.scss'

export type CardProps = {
  dropShadow?: boolean
  className?: 'light' | 'darkened' | 'accent'
  children: JSX.Element | JSX.Element[]
}

export const Card = (props: CardProps) => {
  const { children, dropShadow = false, className = 'primary' } = props

  return <div className={`${styles.card} ${styles[className]} ${dropShadow ? styles.shadow : ''} `}>{children}</div>
}
