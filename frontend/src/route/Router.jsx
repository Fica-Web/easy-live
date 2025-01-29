import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import FlowraLayout from '../layout/FlowraLayout';

// Lazy-loaded components
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const FlowraHomePage = lazy(() => import('../pages/FlowraHome'));
const OurStoryPage = lazy(() => import('../pages/OurStoryPage'));
const HowToUsePage = lazy(() => import('../pages/HowToUsePage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const UserLoginPage = lazy(() => import('../pages/UserLoginPage'));
const UserSignUpPage = lazy(() => import('../pages/UserSignUpPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
                index: true // Defines this as the default route for "/"
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            },
            {
                path: 'shop',
                element: <ShopPage />
            },
        ],
    },
    {
        path: '/flowra',
        element: <FlowraLayout />,
        children: [
            {
                path: '',
                element: <FlowraHomePage />, // Represents "/flowra"
                index: true // Default route for "/flowra"
            },
            {
                path: 'how-to-use',
                element: <HowToUsePage />,
            },
            {
                path: 'our-story',
                element: <OurStoryPage />, // Represents "/flowra/our-story"
            },
            {
                path: 'blog',
                element: <BlogPage />, 
            },
        ],
    },
    {
        path: '/login',
        element: <UserLoginPage />
    },
    {
        path: '/signup',
        element: <UserSignUpPage />
    },
]);

export default router;