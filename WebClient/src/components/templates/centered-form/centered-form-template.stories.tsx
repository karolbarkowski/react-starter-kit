import { CenteredFormTemplate } from './centered-form-template'

const ContentPlaceholder = () => <h1 className="block p-10">CONTENT</h1>

export default {
  title: 'Templates',
  component: CenteredFormTemplate,
}

export const CenteredFormLayout = () => (
  <CenteredFormTemplate>
    <ContentPlaceholder />
  </CenteredFormTemplate>
)
