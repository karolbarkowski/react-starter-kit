import { RootTemplateProps } from './root-template.types'

export const RootTemplate = (props: RootTemplateProps) => {
  return (
    <div className="flex flex-col h-screen">
      <header>{props.header}</header>
      <main className="p-4 flex-grow">{props.children}</main>
      <footer>{props.footer}</footer>
    </div>
  )
}
