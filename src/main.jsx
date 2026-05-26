import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/errorPage/errorPage.jsx'
import HomePage from './routes/homepage/homePage.jsx'
import DashboardPage from './routes/dashboardPage/dashboardPage.jsx'
import ChatPage from './routes/chatPage/chatPage.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashBoardLayout from './layouts/dashBoardLayout/DashBoardLayout.jsx'
import SignInPage from './routes/signInPage/signInPage.jsx'
import SignUpPage from './routes/signUpPage/signUpPage.jsx'


const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/sign-in/*',
                element: <SignInPage />,
            },
            {
                path: '/sign-up/*',
                element: <SignUpPage />,
            },
            {
                element: <DashBoardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashboardPage />,
                    },
                    {
                        path: '/dashboard/chats/:id',
                        element: <ChatPage />,
                    },
                ]
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
