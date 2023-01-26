import { ErrorPage } from '@/pages/ErrorPage';
import { MainPage } from '@/pages/Main';
import { PasswordRecovery } from '@/pages/PasswordRecovery';
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
    }
])

export const MainRouting = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}