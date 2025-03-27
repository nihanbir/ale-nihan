import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export const AdminRoute = () => {
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        if (user?.isAdmin && location.pathname === '/ale-nihan/index.html') {
            window.location.href = '/ale-nihan/admin';
        }
    }, [user, location]);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};