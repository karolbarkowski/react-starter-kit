import { ToastProps, ToastTypes } from './toast.types'

export const Toast = (props: ToastProps) => {
  const colorClasses = props.type || ToastTypes.Info

  return (
    <div className={`flex flex-grow ${colorClasses} border-t-4 rounded-b px-4 py-3 shadow-2xl`} role="alert">
      <div className="flex flex-col">
        <p className="font-bold">{props.title}</p>
        <p className="text-sm mt-2">{props.text}</p>
      </div>
    </div>
  )
}
