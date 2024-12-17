import styles from './headerBar.module.scss';
import Search from './HeaderItem/Search';
import Modal from './HeaderItem/Modal';
import HeaderNav from './HeaderItem/HeaderNav';

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
      <HeaderNav links={links}></HeaderNav>
      <Search></Search>
      <Modal></Modal>
    </header>
  );
};

export default HeaderBar;
