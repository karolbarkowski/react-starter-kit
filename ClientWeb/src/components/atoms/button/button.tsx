import { Button as PrimeButton } from 'primereact/button'
import { IconProps, IconClassMap } from './../icon/icon'

const classMap = {
  primary: '',
  secondary: 'p-button-secondary',
}

export type ButtonProps = {
  label?: string
  isBusy?: boolean
  severity?: 'primary' | 'secondary'
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  icon?: IconProps['name']
}

export const Button = (props: ButtonProps) => {
  const { label, isBusy = false, severity = 'primary', type, disabled = false, icon } = props

  const iconProps = {
    ...(icon && { icon: IconClassMap[icon] }),
  }

  return <PrimeButton type={type} className={`${classMap[severity]} p-button-rounded p-button-sm`} {...iconProps} loading={isBusy} label={label} disabled={disabled} />
}
