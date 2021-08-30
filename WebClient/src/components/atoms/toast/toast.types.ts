export type ToastProps = {
  title: string
  text: string
  type?: ToastTypes
}

export enum ToastTypes {
  Success = 'bg-green-100 border-green-500 text-green-900',
  Error = 'bg-red-100 border-red-500 text-red-900',
  Info = 'bg-blue-100 border-blue-500 text-blue-900',
}
