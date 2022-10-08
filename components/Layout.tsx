import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
