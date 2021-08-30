export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>
  label?: string
  isBusy?: boolean
  disabled?: boolean
  severity?: Severity
  fullWidth?: boolean
  className?: string
}

export enum Severity {
  Primary,
  PrimaryOutline,
  Secondary,
}
