export type ButtonProps = {
  label: string
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  return <input type="button" className="button-primary" value={props.label} />
}
