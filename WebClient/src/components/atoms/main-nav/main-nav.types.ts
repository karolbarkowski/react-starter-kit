export type MainNavProps = {
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
