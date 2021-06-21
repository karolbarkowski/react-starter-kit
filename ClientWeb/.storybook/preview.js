import '!style-loader!css-loader!sass-loader!./../src/_theme.scss'
import '!style-loader!css-loader!sass-loader!./../src/index.scss'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './style-overrides.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        {
          value: 'light',
          title: 'Light',
          icon: 'circlehollow',
        },
        {
          value: 'dark',
          title: 'Dark',
          icon: 'circle',
        },
      ],
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
