import { CenteredFormTemplate } from './centered-form-template'

export default {
  title: 'Templates/Centered Form Layout',
  component: CenteredFormTemplate,
}

const ContentPlaceholder = () => <div style={{ width: '100%', textAlign: 'center', padding: '100px', backgroundColor: '#cacaca', color: '#000' }}>Centered Form</div>

export const CenteredFormLayout = () => (
  <CenteredFormTemplate>
    <ContentPlaceholder />
  </CenteredFormTemplate>
)
