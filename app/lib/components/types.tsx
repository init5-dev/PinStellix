export interface ISidebarCategory {
  name: string
  icon: string
  href: string
}

export interface ISidebarGroup {
  name?: string
  href?: string
  categories: ISidebarCategory[]
  smCols?: number
  mdCols?: number
}
