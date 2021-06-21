import { ReactElement } from 'react'

export interface DefaultTemplateProps {
  header: ReactElement
  children: React.ReactElement
  footer: ReactElement
}

export const DefaultTemplate = (props: DefaultTemplateProps) => {
  return (
    <div className="p-grid">
      <div className="p-col-12">{props.header}</div>
      <div className="p-col-12">{props.children}</div>
      <div className="p-col-12">{props.footer}</div>
    </div>
  )
}
