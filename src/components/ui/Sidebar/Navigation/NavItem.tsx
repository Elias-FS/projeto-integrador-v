import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
  path: string
}

export function NavItem({ title, icon: Icon, path  }: NavItemProps) {
  return (
    <a
      href={path}
      className="group flex items-center gap-3 rounded px-3 py-2 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-500 dark:hover:bg-zinc-800"
    >
      <Icon className="group-hover:text-zinc-900 h-9 w-9 flex-shrink-0 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-100 dark:group-hover:text-zinc-300">
        {title}
      </span>
    </a>
  )
}