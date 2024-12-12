import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '@Chan',
  description: '在 @chan,跨越身份与世界线的讨论平台,你的思想自由徘徊在命运的分歧点。分享观点、探讨真理、激发灵感,所有话题都可能改变未来的轨迹。El Psy Congroo.',
};

export default function Home() {
  return (
    <div className={` text-sky-500 dark:text-white`} >你好</div>
  );
}
