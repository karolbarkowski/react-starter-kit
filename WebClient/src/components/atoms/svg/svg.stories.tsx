import { Svg } from './svg'
import { Story } from '@storybook/react'
import { SvgIcons, SvgProps, SvgSize } from './svg.types'

export default {
  title: 'Atoms',
  component: Svg,
}

const Template: Story<SvgProps> = () => {
  return (
    <>
      <div className="row">
        <h1 className="header">Small</h1>
        <Svg name={SvgIcons.Spinner} spinning />
        <Svg name={SvgIcons.Google} />
      </div>
      <div className="row">
        <h1 className="header">Medium</h1>
        <Svg name={SvgIcons.Spinner} spinning size={SvgSize.medium} />
        <Svg name={SvgIcons.Google} size={SvgSize.medium} />
      </div>
      <div className="row">
        <h1 className="header">Large</h1>
        <Svg name={SvgIcons.Spinner} spinning size={SvgSize.large} />
        <Svg name={SvgIcons.Google} size={SvgSize.large} />
      </div>
    </>
  )
}

export const Svgs = Template.bind({})
