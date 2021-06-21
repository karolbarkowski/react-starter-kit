import { ReactElement } from 'react'

export interface RootTemplateProps {
  header: ReactElement
  children: React.ReactElement
  footer: ReactElement
}

export const RootTemplate = (props: RootTemplateProps) => {
  return (
    <div className="p-grid">
      <div className="p-col-12">{props.header}</div>
      <div className="p-col-12">{props.children}</div>
      <div className="p-col-12">{props.footer}</div>
    </div>
  )
}
