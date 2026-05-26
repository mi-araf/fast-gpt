import React from 'react';
import './rootLayout.css';
import { Link, Outlet } from 'react-router-dom';
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div className="rootLayout">
                <header>
                    <Link to="/">
                        <img src="/logo.png" alt="logo" width={50} className='logo' />
                        <span>FASTGPT AI</span>
                    </Link>
                    <div className='user '>
                        <SignInButton className="btn btn-primary">
                            <UserButton  />
                        </SignInButton>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    );
};

export default RootLayout;