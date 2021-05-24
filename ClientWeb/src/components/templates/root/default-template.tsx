export type DefaultTemplateProps = {
  Header: any
  Content: any
  Footer: any
}

export const DefaultTemplate = (props: DefaultTemplateProps) => {
  return (
    <>
      {props.Header}
      {props.Content}
      {props.Footer}
    </>
  )
}
