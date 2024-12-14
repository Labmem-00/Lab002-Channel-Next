'use client';
import ChanLink from '@/components/Partial/ChanLink';
import styles from './headerBar.module.scss';
import Image from 'next/image';

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
      <Image
        className="absolute -z-10 -left-4"
        src={'/title-png/site-logo.webp'}
        alt="SteinsGate"
        width={250}
        height={65}
      ></Image>
      <nav className={styles['nav-bar']}>
        {links.map((link) => {
          return (
            <ChanLink to={link.href} key={link.name}>
              {link.name}
            </ChanLink>
          );
        })}
      </nav>
      <div
        id="header-func"
        className="absolute right-0 flex justify-center border-2 gap-4 border-solid border-green "
      >
        <div className='avator'>avator</div>
        <div className='config'>config</div>
        <input type="search" placeholder="Search..."></input>
      </div>
    </header>
  );
};

export default HeaderBar;
