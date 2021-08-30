export interface HeaderProps {
  children: string
  type?: HeaderType
  className?: string
}

export enum HeaderType {
  Big = 'text-4xl font-semibold text-gray-700',
  Medium = 'text-2xl font-semibold text-gray-700',
  Small = 'text-xl font-semibold text-gray-700',
}
