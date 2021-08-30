import { Story } from '@storybook/react'
import { Link, MemoryRouter } from 'react-router-dom'
import { MainFooter as Footer } from '../main-footer/main-footer'
import { MainFooterProps } from './main.footer.types'

export default {
  title: 'Atoms',
  component: Footer,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

const links = [<Link to="#">First Link</Link>, <Link to="#">Second Link</Link>, <Link to="#">Third Link</Link>]

const Template: Story<MainFooterProps> = (args) => {
  return (
    <>
      <div className="row">
        <Footer
          LeftColumnHeader="Left Column"
          LeftColumnLinks={links}
          MiddleColumnHeader="Middle Column"
          MiddleColumnLinks={links}
          RightColumnHeader="Right Column"
          RightColumnLinks={links}
        />
      </div>
    </>
  )
}

export const MainFooter = Template.bind({})
