'use client'

import ChanLink from '@/components/Partial/ChanLink';
import styles from './headerBar.module.scss';
import Info from './info';

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
      className="flex justify-center items-center sticky top-0 border-2 border-balck border-solid"
    >
      {/* <Image
        className="absolute -z-10 -left-4"
        src={'/title-png/site-logo.webp'}
        alt="SteinsGate"
        width={250}
        height={65}
      ></Image> */}
      <nav className={styles['nav-bar']}>
        {links.map((link) => {
          return (
            <ChanLink to={link.href} key={link.name}>
              {link.name}
            </ChanLink>
          );
        })}
      </nav>
      <Info></Info>
    </header>
  );
};

export default HeaderBar;
