import { CenteredFormTemplateProps } from './centered-form.types'

export const CenteredFormTemplate = (props: CenteredFormTemplateProps) => {
  return <div className="flex h-full items-center justify-center">{props.children}</div>
}
