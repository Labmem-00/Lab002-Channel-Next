'use client';

import { useSpring, animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';
import { useDebounce } from '@/hooks/useDebounce';

const banger = Press_Start_2P({ weight: ['400'], subsets: ['latin'] });
const ChanTitle: React.FC = () => {
  const [aniState, setAniState] = useState(false);
  const [hoverState, setHoverState] = useState(false); // 用来控制鼠标悬浮时显示图片3

  const handleMouseEnter = useDebounce(() => {
      setHoverState(true) 
  },200) 
  const handleMouseLeave = useDebounce(() => {
    setHoverState(false) 
  },200)

  const propsImg = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: {
      opacity: aniState ? 1 : 0,
      transform: aniState ? 'translateY(0)' : 'translateY(30px)',
    },
    config: { tension: 170, friction: 26 },
  });

  const propsText = useSpring({
    transform: aniState ? 'translateX(10px)' : 'translateX(0px)',
    config: { tension: 170, friction: 26 },
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setAniState(true);
    }, 300);
    return () => clearTimeout(timerId);
  }, []);
  return (
    <div className="absolute flex top-8 left-1/2 text-4xl font-extrabold transform -translate-x-1/2">
      <span className="relative bottom-4">
        {aniState && (
          <animated.div style={propsImg}>
            <Image
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={
                hoverState
                  ? '/title-png/title1.png' 
                  : '/title-png/title2.png' 
              } 
              alt=""
              width={80}
              height={80}
            ></Image>
          </animated.div>
        )}
      </span>
      <animated.span className={banger.className} style={propsText}>
        @CHAN
      </animated.span>
    </div>
  );
};

export default ChanTitle;
