import { ReactElement } from 'react'

export interface DefaultTemplateProps {
  header: ReactElement
  children: React.ReactElement
  footer: ReactElement
}

export const DefaultTemplate = (props: DefaultTemplateProps) => {
  return (
    <>
      {props.header}
      {props.children}
      {props.footer}
    </>
  )
}
