import { store } from 'react-notifications-component'
import { Toast } from '../../components/atoms/atoms-index'
import { ToastTypes } from '../../components/atoms/toast/toast.types'

function notify(title: string, message: string, type: ToastTypes): void {
  store.addNotification({
    title: title,
    message: message,
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: false,
      click: true,
    },
    content: (id: number) => <Toast title={title} text={message} key={id} type={type} />,
  })
}

export const toast = {
  success: (title: string, message: string) => notify(title, message, ToastTypes.Success),
  error: (title: string, message: string) => notify(title, message, ToastTypes.Error),
  info: (title: string, message: string) => notify(title, message, ToastTypes.Info),
}
