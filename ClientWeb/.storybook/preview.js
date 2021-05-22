import '!style-loader!css-loader!sass-loader!./../src/_theme.scss'
import '!style-loader!css-loader!sass-loader!./../src/index.scss'
import './style-overrides.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <div className={context.globals.theme}>
      <div class="storybook" style={{ height: '100vh' }}>
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </div>
    </div>
  )
}
export const decorators = [withThemeProvider]
