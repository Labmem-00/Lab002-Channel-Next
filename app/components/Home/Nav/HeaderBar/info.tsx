import React from 'react';

const Info: React.FC = () => {
  return (
    <div
      id="header-info"
      className="absolute right-0 flex justify-center border-2 gap-4 border-solid border-green "
    >
      <div className="avator">avator</div>
      <div className="config">config</div>
      <input type="search" placeholder="Search..."></input>
    </div>
  );
};

export default Info;
