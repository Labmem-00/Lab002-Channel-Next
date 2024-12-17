import React from 'react';
import styles from '../headerBar.module.scss';
import ChanLink from '@/components/Partial/ChanLink';
import { Icon } from '@iconify/react/dist/iconify.cjs';

type link = {
  name: string;
  href: string;
};

interface HeaderNavProps {
  links: link[];
}

const HeaderNav: React.FC<HeaderNavProps> = ({ links }) => {
  return (
    <nav className={styles['nav-bar']}>
      <div className="ld:hidden">
        <Icon
          icon="line-md:close-to-menu-alt-transition"
          width={36}
          height={36}
        ></Icon>
      </div>
      <div className='hidden ld:flex'>
        {links.map((link) => {
          return (
            <ChanLink to={link.href} key={link.name}>
              {link.name}
            </ChanLink>
          );
        })}
      </div>
    </nav>
  );
};

export default HeaderNav;
