import ChanTitle from './components/Home/ChanTitle';
import SkipLink from './components/Home/KeyBoard/SkipLink';
import HeaderBar from './components/Home/Nav/HeaderBar';

import './global.css';
import './styles/main.scss';
import { ThemeProvider } from 'next-themes';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ChanTitle></ChanTitle>
        <div id="chan-root" className='mt-28'>
          <ThemeProvider attribute="class" defaultTheme="system">
            <HeaderBar></HeaderBar>   
            <div id='chan' className="flex justify-center gap-4 min-w-0">
              <SkipLink></SkipLink>
              {/* <aside></aside> */}
              <div id="content">
                <main id="main-content">
                  {children}      
                  <footer>footer</footer>
                </main>
                {/* <aside id="r-aside"></aside> */}
              </div>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
