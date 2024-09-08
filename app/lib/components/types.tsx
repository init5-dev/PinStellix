export interface ISidebarCategory {
  name: string
  icon: string
  href: string
}

export interface ISidebarGroup {
  name: string
  categories: ISidebarCategory[]
}

