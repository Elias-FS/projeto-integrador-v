import React from 'react';
import { useStore } from '@/zustand-store';// Substitua com o caminho correto

import { NavItem } from './NavItem';

export function Navigation() {
  const { iconsToShow, verifySideBar } = useStore(state => ({
    iconsToShow: state.iconsToShow,
    verifySideBar: state.verifySideBar,
  }));

  React.useEffect(() => {
    verifySideBar(); // Chama a função verifySideBar quando o componente monta
  }, [verifySideBar]);

  return (
    <nav className="flex flex-col gap-0.5">
      {iconsToShow && iconsToShow.map((item, index) => (
        <NavItem key={index} icon={item.icon} title={item.title} path={item.path} />
      ))}
    </nav>
  );
}
