import React from 'react';
import styles from './baseTemplate.module.scss'

interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return (
    <div className={styles.template}>Hello world!</div>
  );
};

// const BaseTemplate2: React.FC = ()=>{
//   return (
//     <div></div>
//   )
// }

export default BaseTemplate;