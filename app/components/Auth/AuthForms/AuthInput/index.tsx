import React, { PropsWithChildren } from 'react';
import styles from './authInput.module.scss';

interface AuthInputProps extends PropsWithChildren {
  id: string; // 为 input 和 label 提供关联
  type: string;
  label: string; // label 文本
  required?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  id,
  type,
  label,
  required = false,
  children,
}) => {
  return (
    <div className={children ? 'grid grid-cols-2 gap-1 items-end' : '' }>
      <div className={styles['auth-input']}>
        <input
          id={id}
          type={type}
          className={styles['input-entity']}
          required={required}
          aria-labelledby={`${id}-label`} // 增强无障碍性
          autoComplete={id}
          placeholder="" //默认为空
        />
        <label
          id={`${id}-label`}
          htmlFor={id} // 确保 label 和 input 的正确关联
          className={styles['input-placeholder']}
        >
          {label}
        </label>
        <span className={styles['input-underline']}></span>
      </div>
      {children}
    </div>
  );
};

export default AuthInput;
