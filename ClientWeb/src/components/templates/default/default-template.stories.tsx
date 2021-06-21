import { DefaultTemplate } from './default-template'

export default {
  title: 'Templates/Default Layout',
  component: DefaultTemplate,
}

const HeaderPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x150/cccccc/FFFFFF?text=Header" />
const ContentPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x400/cccccc/FFFFFF?text=Content" />
const FooterPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x150/cccccc/FFFFFF?text=Footer" />

export const DefaultLayout = () => (
  <DefaultTemplate header={<HeaderPlaceholder></HeaderPlaceholder>} footer={<FooterPlaceholder></FooterPlaceholder>}>
    <ContentPlaceholder />
  </DefaultTemplate>
)
