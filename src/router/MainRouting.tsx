import { ErrorPage } from '@/pages/ErrorPage';
import { MainPage } from '@/pages/Main';
import { PasswordRecovery } from '@/pages/PasswordRecovery';
import { PrivacyPage } from '@/pages/Policy/Policy';
import { TermsPage } from '@/pages/Terms/Terms';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    }, {
        path: 'password-recovery',
        element: <PasswordRecovery />,
    }, {
        path: 'terms',
        element: <TermsPage />
    }, {
        path: 'privacy',
        element: <PrivacyPage />
    }
])

export const MainRouting = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}