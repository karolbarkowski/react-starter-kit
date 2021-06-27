import { CenteredFormTemplate } from './centered-form-template'
import { RootTemplate } from './../root/root-template'

const HeaderPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x150/cccccc/FFFFFF?text=Header" />
const FooterPlaceholder = () => <img alt="" src="https://via.placeholder.com/1200x150/cccccc/FFFFFF?text=Footer" />

export default {
  title: 'Templates/Centered Form Layout',
  component: CenteredFormTemplate,
  decorators: [
    (Story: any) => (
      <RootTemplate header={<HeaderPlaceholder></HeaderPlaceholder>} footer={<FooterPlaceholder></FooterPlaceholder>}>
        <Story />
      </RootTemplate>
    ),
  ],
}

const ContentPlaceholder = () => <div style={{ width: '100%', textAlign: 'center', padding: '100px', backgroundColor: '#cacaca', color: '#000' }}>Centered Form</div>

export const CenteredFormLayout = () => (
  <CenteredFormTemplate>
    <ContentPlaceholder />
  </CenteredFormTemplate>
)
