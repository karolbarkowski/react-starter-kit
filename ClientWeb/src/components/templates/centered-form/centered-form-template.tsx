export interface CenteredFormTemplateProps {
  children: React.ReactElement
}

export const CenteredFormTemplate = (props: CenteredFormTemplateProps) => {
  return (
    <div className="p-grid p-justify-center">
      <div className="p-col-12 p-md-8 p-lg-6">{props.children}</div>
    </div>
  )
}
