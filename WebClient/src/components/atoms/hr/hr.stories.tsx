import { Story } from '@storybook/react'
import { Hr } from './hr'
import { HrProps } from './hr.types'

export default {
  title: 'Atoms',
  component: Hr,
}

const Template: Story<HrProps> = (args) => {
  return (
    <div style={{ width: '400px' }}>
      <Hr>sample text</Hr>
    </div>
  )
}

export const FormHR = Template.bind({})
