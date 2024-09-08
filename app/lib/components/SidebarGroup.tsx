import SidebarButton from './SidebarButton'
import { ISidebarGroup } from './types'

const SidebarGroup = ({
  name,
  href,
  categories,
  smCols = 2,
  mdCols = 3
}: ISidebarGroup) => {
  return (
    <div className='menu text-base-content min-h-full p-4 space-y-4 flex flex-col items-center justify-center w-full'>
      {name && (
        <div className='divider'>
          {href ? (
            <a href={href} className='btn btn-ghost text-xl font-semibold'>
              {name}
            </a>
          ) : (
            <span className="text-xl font-semibold">{name}</span>
          )}
        </div>
      )}
      <div
        className={`grid grid-cols-${smCols} md:grid-cols-${mdCols} gap-x-2 gap-y-4`}
      >
        {categories.map(({ name, href, icon }, key) => (
          <SidebarButton key={key} name={name} href={href} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default SidebarGroup
