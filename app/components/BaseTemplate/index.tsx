import React from 'react';
import styles from './baseTemplate.module.scss'

interface BaseTemplateProps {}

const BaseTemplate: React.FC<BaseTemplateProps> = () => {
  return (
    <div className={styles.template}>Hello world!</div>
  );
};

// const BaseTemplate: React.FC = ()=>{
//   return (
//     <div></div>
//   )
// }

export default BaseTemplate;