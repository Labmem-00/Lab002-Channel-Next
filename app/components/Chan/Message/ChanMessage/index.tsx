import React from 'react';
import styles from './message.module.scss';
import 'animate.css';

export type MessageType = 'warn' | 'success' | 'error' | 'info';

export interface MessageProps {
  message: string;
  type: MessageType;
  richText?: boolean;
}

const messageAnimateMap = {
  warn: 'animate__animated animate__headShake',
  success: 'animate__animated animate__bounceInDown',
  error: 'animate__animated animate__tada',
  info: 'animate__animated animate__jello'
}

const ChanMessage: React.FC<MessageProps> = ({
  message,
  type = 'success',
  richText,
}) => {

  const animationClass = messageAnimateMap[type] 

  return (
    <div className={` ${styles['message-container']}`}>
      <div className={` ${animationClass} ${styles['chan-message']} `}>
        {richText ? (
          <span dangerouslySetInnerHTML={{ __html: richText }} />
        ) : (
          <span>{message}你好</span>
        )}
      </div>
    </div>
  );
};

export default ChanMessage;
