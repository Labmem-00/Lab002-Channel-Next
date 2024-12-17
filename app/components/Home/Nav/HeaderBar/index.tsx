'use client';

import ChanLink from '@/components/Partial/ChanLink';
import styles from './headerBar.module.scss';
import Search from './Search';
import Modal from './Modal';

const links = [
  { name: '主页', href: '/' },
  { name: '世界线', href: '/topic' },
  { name: '圆桌会议', href: '/channel' },
  { name: '关于', href: '/about' },
];

const HeaderBar: React.FC = () => {
  return (
    <header
      id="chan-header"
      className={` ${styles['chan-header']} flex items-center sticky top-0 border-2 border-balck border-solid`}
    >
      <nav className={styles['nav-bar']}>
        {links.map((link) => {
          return (
            <ChanLink to={link.href} key={link.name}>
              {link.name}
            </ChanLink>
          );
        })}
      </nav>
      <Search></Search>
      <Modal></Modal>
    </header>
  );
};

export default HeaderBar;
