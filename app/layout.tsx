import SkipLink from './components/KeyBoard/SkipLink';
import ChanLink from './components/Partial/ChanLink';
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <header id="header" className="grid place-items-center border-2 border-solid h-32 " >
            header
            <div>
              @chan
            </div>
          </header>
          <div id="lab-root" className="flex justify-center gap-4 min-w-0">
            <SkipLink></SkipLink>
            <aside id="l-aside">
              <ChanLink to='/channel'>channel</ChanLink>
            </aside>
            <div id="content">
              <main id='main-content'>
                {children}
                <footer>footer</footer>
              </main>
              <aside id="r-aside"></aside>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
