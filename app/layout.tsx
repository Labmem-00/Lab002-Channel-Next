import SkipLink from './components/Chan/KeyBoard/SkipLink';
import ChanTitle from './components/Page/Home/ChanTitle';
import Modal from './components/Chan/Modal';
import HeaderBar from './components/Chan/Nav/HeaderBar';

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
        <div id="chan-root" >
          <ThemeProvider attribute="class" defaultTheme="system">
            <ChanTitle></ChanTitle>
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
            <Modal></Modal>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
