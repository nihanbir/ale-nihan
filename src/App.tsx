import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { PrivateRoute } from '@/components/PrivateRoute';
import { AdminRoute } from '@/components/AdminRoute';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate} from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";
import LoginPage from '@/pages/LoginPage';
import RsvpPage from "./pages/RsvpPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import {userController} from "@/data/predefinedUsers.ts";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <AuthProvider>
                    <Toaster />
                    <Sonner />
                    <BrowserRouter basename="/ale-nihan">
                        <RouteHandler />
                    </BrowserRouter>
                </AuthProvider>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

const RouteHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('users')) {
            userController.resetToDefaults();
        }
        // Handle redirect from 404 page
        const redirectPath = sessionStorage.getItem('redirect');
        if (redirectPath) {
            sessionStorage.removeItem('redirect');
            navigate(redirectPath, { replace: true });
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route element={<PrivateRoute />}>
                <Route path="/rsvp" element={<RsvpPage />} />
            </Route>
            <Route element={<AdminRoute />}>
                <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;