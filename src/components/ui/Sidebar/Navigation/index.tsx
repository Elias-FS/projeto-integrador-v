import React from 'react';
import { useStore } from '@/zustand-store';// Substitua com o caminho correto

import { NavItem } from './NavItem';

export function Navigation() {
  const { iconsToShow, verify } = useStore(state => ({
    path: state.path,
    iconsToShow: state.iconsToShow,
    verify: state.verify,
  }));

  React.useEffect(() => {
    verify(); // Chama a função verify quando o componente monta
  }, [verify]);

  return (
    <nav className="flex flex-col gap-0.5">
      {iconsToShow && iconsToShow.map((item, index) => (
        <NavItem key={index} icon={item.icon} title={item.title} />
      ))}
    </nav>
  );
}
