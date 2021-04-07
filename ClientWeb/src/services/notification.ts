import { notification } from 'antd'

enum NotificationTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

function notify(message: string, description: string, type?: NotificationTypes, onClick?: () => void): void {
  const openMethodRef = type ? notification[type] : notification.open
  openMethodRef({
    message,
    description,
    onClick,
  })
}

export { notify, NotificationTypes }
