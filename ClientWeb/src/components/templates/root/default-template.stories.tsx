import { DefaultTemplate } from './default-template'

export default {
  title: 'Templates/Default Layout',
  component: DefaultTemplate,
}

const HeaderPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x120/cccccc/FFFFFF?text=Header" data-lazy-type="image" />
const ContentPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x800/cccccc/FFFFFF?text=Content" data-lazy-type="image" />
const FooterPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x120/cccccc/FFFFFF?text=Footer" data-lazy-type="image" />

export const DefaultLayout = () => <DefaultTemplate Header={<HeaderPlaceholder></HeaderPlaceholder>} Content={<ContentPlaceholder></ContentPlaceholder>} Footer={<FooterPlaceholder></FooterPlaceholder>}></DefaultTemplate>
