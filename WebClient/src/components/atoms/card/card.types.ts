export type CardProps = {
  dropShadow?: boolean
  type?: CardType
  children: JSX.Element | JSX.Element[]
}

export enum CardType {
  Light,
  Dark,
}
