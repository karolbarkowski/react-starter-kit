import { CardProps, CardType } from './card.types'

const colorClassBuild = (type: CardType): string => {
  switch (type) {
    case CardType.Light:
      return 'bg-white border-2 border-gray-100'
    case CardType.Dark:
      return 'bg-gray-200 border-2 border-gray-400'
  }
}

export const Card = (props: CardProps) => {
  const { children, dropShadow = false, type = CardType.Light } = props

  const classNames = [colorClassBuild(type), 'flex items-center p-4 rounded-md', ...(dropShadow ? ['shadow-md'] : [])].join(' ')

  return <div className={classNames}>{children}</div>
}
