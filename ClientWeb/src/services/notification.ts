import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

enum NotificationTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'danger',
  Default = 'default',
}

function notify(title: string, message: string, type: NotificationTypes = NotificationTypes.Default): void {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-full',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: false,
    },
  })
}

export { notify, NotificationTypes }
