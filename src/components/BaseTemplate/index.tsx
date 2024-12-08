import styles from './BaseTemplate.module.scss'

interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return <div className={styles.template}>Hello world!</div>;
};

export default BaseTemplate;