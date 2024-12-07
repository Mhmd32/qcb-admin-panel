import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthState } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const login = (username: string) => {
    setAuth({ isAuthenticated: true, user: username });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};