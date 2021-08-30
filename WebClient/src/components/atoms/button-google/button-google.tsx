import { ButtonGoogleProps } from './button-google.types'
import { SvgIcons, SvgSize } from '../svg/svg.types'
import { Svg } from '../svg/svg'

export const ButtonGoogle = ({ onClick, label = '' }: ButtonGoogleProps) => {
  const buttonClasses = 'flex w-full items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100'
  const labelClasses = 'px-4 py-3 w-5/6 text-center text-gray-600 font-bold'

  return (
    <button onClick={onClick} className={buttonClasses}>
      <div className="px-4 py-3">
        <Svg name={SvgIcons.Google} size={SvgSize.medium} />
      </div>
      {label && <h1 className={labelClasses}>{label}</h1>}
    </button>
  )
}
