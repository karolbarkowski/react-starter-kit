export type SvgProps = {
  spinning?: boolean
  size?: SvgSize
  name: SvgIcons
}

export enum SvgSize {
  small = 'h-4',
  medium = 'h-8',
  large = 'h-12',
}

export enum SvgIcons {
  Spinner,
  Google,
}
