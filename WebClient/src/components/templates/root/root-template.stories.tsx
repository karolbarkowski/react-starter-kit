import { RootTemplate } from './root-template'

export default {
  title: 'Templates',
  component: RootTemplate,
}

const HeaderPlaceholder = () => <h1 className="block text-green-200 bg-green-800 p-8">HEADER</h1>
const ContentPlaceholder = () => <h1>CONTENT</h1>
const FooterPlaceholder = () => <h1 className="block text-green-200 bg-green-800 p-8">FOOTER</h1>

export const RootLayout = () => (
  <RootTemplate header={<HeaderPlaceholder></HeaderPlaceholder>} footer={<FooterPlaceholder></FooterPlaceholder>}>
    <ContentPlaceholder />
  </RootTemplate>
)
