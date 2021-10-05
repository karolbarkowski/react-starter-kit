import { ButtonProps, Severity } from './button.types'
import { SvgIcons } from '../svg/svg.types'
import { Svg } from './../svg/svg'

const regularStateClassBuild = (severity: Severity): string => {
  switch (severity) {
    case Severity.Primary:
      return 'bg-gray-700 text-white'
    case Severity.PrimaryOutline:
      return 'g-transparent hover:bg-gray-100 text-gray-700 border border-gray-700'
    case Severity.Secondary:
      return 'bg-blue-500 text-blue-100'
  }
}

const hoverStateClassBuild = (severity: Severity): string => {
  switch (severity) {
    case Severity.Primary:
      return 'hover:bg-gray-600'
    case Severity.PrimaryOutline:
      return 'hover:bg-gray-100'
    case Severity.Secondary:
      return 'hover:bg-blue-400'
  }
}

export const Button = ({ onClick, label, isBusy = false, severity = Severity.Primary, disabled = false, fullWidth = false, className = '' }: ButtonProps) => {
  const tailwindClasses = [
    regularStateClassBuild(severity),
    'px-4 py-2 space-x-4 transition-width duration-1000',
    'rounded',
    'inline-flex items-center',
    ...(fullWidth ? ['w-full'] : []),
    ...(!isBusy && !disabled ? [hoverStateClassBuild(severity)] : []),
    ...(disabled || isBusy ? ['disabled:opacity-50', 'cursor-default'] : []),
  ].join(' ')

  return (
    <button disabled={disabled || isBusy} className={`${tailwindClasses} ${className}`} onClick={onClick}>
      {isBusy && <Svg name={SvgIcons.Spinner} spinning />}

      {label && <span className="font-bold">{label}</span>}
    </button>
  )
}
