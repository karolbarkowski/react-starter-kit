export const IconClassMap = {
  user: 'pi pi-user',
  facebook: 'pi pi-facebook',
  google: 'pi pi-google',
}

export type IconProps = {
  name: 'user' | 'facebook' | 'google'
}

export const Icon = (props: IconProps) => <i className={IconClassMap[props.name]}></i>
