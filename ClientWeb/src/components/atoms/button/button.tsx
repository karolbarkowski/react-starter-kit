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
  disabled?: boolean
  icon?: IconProps['name']
}

export const Button = (props: ButtonProps) => {
  const { label, isBusy = false, severity = 'primary', disabled = false, icon } = props

  const iconProps = {
    ...(icon && { icon: IconClassMap[icon] }),
  }

  return <PrimeButton className={`${classMap[severity]} p-button-rounded p-button-sm`} {...iconProps} loading={isBusy} label={label} disabled={disabled} />
}
