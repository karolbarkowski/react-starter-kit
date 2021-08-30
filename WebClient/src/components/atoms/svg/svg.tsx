import { SvgIcons, SvgProps, SvgSize } from './svg.types'
import { ReactComponent as SpinnerSvg } from './../../../assets/svg/spinner.svg'
import { ReactComponent as GoogleSvg } from './../../../assets/svg/google.svg'

export const Svg = ({ name, size = SvgSize.small, spinning = false }: SvgProps) => {
  const classNames = [size, ...(spinning ? ['animate-spin'] : [])].join(' ')

  switch (name) {
    case SvgIcons.Spinner:
      return <SpinnerSvg className={classNames} />

    case SvgIcons.Google:
      return <GoogleSvg className={classNames} />

    default:
      throw new Error('Unsupported svg name')
  }
}
