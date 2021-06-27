import { RootTemplate } from './root-template'

export default {
  title: 'Templates/Default Layout',
  component: RootTemplate,
}

const HeaderPlaceholder = () => (
  <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', color: 'white' }}>
    <h1>HEADER</h1>
  </div>
)
const ContentPlaceholder = () => (
  <div style={{ display: 'flex', backgroundColor: 'yellow', color: 'white', width: '100%', textAlign: 'center' }}>
    <h1>CONTENT</h1>
  </div>
)
const FooterPlaceholder = () => (
  <div style={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', color: 'white' }}>
    <h1>FOOTER</h1>
  </div>
)

export const DefaultLayout = () => (
  <RootTemplate header={<HeaderPlaceholder></HeaderPlaceholder>} footer={<FooterPlaceholder></FooterPlaceholder>}>
    <ContentPlaceholder />
  </RootTemplate>
)
