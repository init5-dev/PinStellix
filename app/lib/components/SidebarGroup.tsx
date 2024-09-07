import SidebarButton from './SidebarButton'
import { ISidebarGroup } from './types'

const SidebarGroup = ({ name, categories }: ISidebarGroup) => {
  return (
    <div className='menu text-base-content min-h-full p-4 space-y-4 flex flex-col items-center justify-center w-full'>
      <div className='divider text-xl font-semibold'>{name}</div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4'>
        {categories.map(({ name, href, icon }, key) => (
          <SidebarButton key={key} name={name} href={href} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default SidebarGroup
