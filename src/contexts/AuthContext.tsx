import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { userController, type PredefinedUser } from '../data/predefinedUsers';

type AuthContextType = {
  user: PredefinedUser | null;
  login: (username: string, pin: string) => Promise<boolean>;
  logout: () => void;
  setInitialPin: (newPin: string) => Promise<boolean>;
  isFirstLogin: (username: string) => boolean;
  updateUserPin: (newPin: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<PredefinedUser | null>(null);
  
  useEffect(() => {
    // Initialize users if not already in localStorage
    if (!localStorage.getItem('users')) {
      userController.resetToDefaults();
    }

    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as PredefinedUser;
        if (userController.userExists(parsedUser.username)) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem('currentUser');
        }
      } catch (e) {
        localStorage.removeItem('currentUser');
      }
    }
  }, []);
  const isFirstLogin = (username: string): boolean => {
    return userController.isFirstLogin(username);
  };

  const setInitialPin = async (newPin: string): Promise<boolean> => {
    if (!user) return false;
    return userController.setInitialPin(user.username, newPin);
  };
  const login = async (username: string, pin: string): Promise<boolean> => {
    const authenticatedUser = await userController.authenticateUser(username, pin);
    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
      window.location.href = authenticatedUser.isAdmin
          ? '/ale-nihan/admin'
          : '/ale-nihan/rsvp';
      return true;
    }
    return false;
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    window.location.href = '/ale-nihan/';
  };

  const updateUserPin = (newPin: string) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      pin: newPin
    };
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    userController.updateUser(user.username, { pin: newPin });
  };

  return (
      <AuthContext.Provider
          value={{
            user,
            login,
            logout,
            setInitialPin,
            isFirstLogin,
            updateUserPin
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};