import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex justify-between h-[15vh] mt-[5vh] w-4/5 mx-auto border-b-2 border-white">
        <Header />
      </header>
      <main className="flex-1 w-4/5 mx-auto flex flex-col justify-center items-center gap-12 border-b-2 border-white overflow-auto">
        {children}
      </main>
      <footer className="h-[10vh] w-4/5 mx-auto border-t-2 border-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;