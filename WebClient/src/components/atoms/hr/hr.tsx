import { HrProps } from './hr.types'

export const Hr = (props: HrProps) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className="border-b w-1/5 lg:w-1/4"></span>
      <span className="text-xs text-center text-gray-500 uppercase">{props.children}</span>
      <span className="border-b w-1/5 lg:w-1/4"></span>
    </div>
  )
}
