import React from 'react';
import styles from './skipLink.module.scss';

const SkipLink: React.FC = () => {
  return (
    <a href="#main-content" className={styles.skipLink }>               
      跳转到主要内容 / Skip to main content
    </a>
  );
};

export default SkipLink;
