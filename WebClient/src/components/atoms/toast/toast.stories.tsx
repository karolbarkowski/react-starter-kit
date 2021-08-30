import { Story } from '@storybook/react'
import { Toast } from './toast'
import { ToastProps, ToastTypes } from './toast.types'

export default {
  title: 'Atoms',
  component: Toast,
}

const Template: Story<ToastProps> = (args) => {
  return (
    <div style={{ width: '400px' }}>
      <div className="row">
        <Toast type={ToastTypes.Success} title="Success Toast" text="Success toast sample meesage." />
      </div>
      <div className="row">
        <Toast type={ToastTypes.Info} title="Info Toast" text="Info toast sample meesage." />
      </div>
      <div className="row">
        <Toast type={ToastTypes.Error} title="Error Toast" text="Error toast sample meesage." />
      </div>
      <div className="row">
        <Toast title="Default Toast" text="Default toast sample meesage." />
      </div>
    </div>
  )
}

export const Toasts = Template.bind({})
