export type MainNavProps = {
  userName: string
  children: MainNavItem[]
}

export class MainNavItem {
  label: string
  path: string

  constructor(label: string, path: string) {
    this.label = label
    this.path = path
  }
}
