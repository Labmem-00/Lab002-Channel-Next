import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Info: React.FC = () => {
  return (
    <div
      id="header-info"
      className="absolute right-4 flex justify-center items-center"
    >
      <div className="avator w-10 h-10 m-4 flex justify-center items-center border-solid border-2 border-yellow-300 rounded-full">
        <button>登录</button>
      </div>
      <div className="config">
        <Icon icon='eos-icons:rotating-gear' width={30} height={30}></Icon>
      </div>
    </div>
  );
};

export default Info;
