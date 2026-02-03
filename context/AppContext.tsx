
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, Content, BlogPost, Inquiry, ThemeConfig } from '../types';
import { INITIAL_STATE } from '../constants';

interface AppContextType extends AppState {
  updateContent: (newContent: Partial<Content>) => void;
  updateTheme: (newTheme: Partial<ThemeConfig>) => void;
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => void;
  login: (password: string) => boolean;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('worldclass_state');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('worldclass_state', JSON.stringify(state));
  }, [state]);

  const updateContent = (newContent: Partial<Content>) => {
    setState(prev => ({
      ...prev,
      content: { ...prev.content, ...newContent }
    }));
  };

  const updateTheme = (newTheme: Partial<ThemeConfig>) => {
    setState(prev => ({
      ...prev,
      theme: { ...prev.theme, ...newTheme }
    }));
  };

  const addPost = (post: BlogPost) => {
    setState(prev => ({
      ...prev,
      posts: [post, ...prev.posts]
    }));
  };

  const deletePost = (id: string) => {
    setState(prev => ({
      ...prev,
      posts: prev.posts.filter(p => p.id !== id)
    }));
  };

  const addInquiry = (inquiryData: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      status: 'new'
    };
    setState(prev => ({
      ...prev,
      inquiries: [newInquiry, ...prev.inquiries]
    }));
  };

  const login = (password: string) => {
    if (password === 'admin123') { // Simple mock auth
      setState(prev => ({ ...prev, isAuthenticated: true }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setState(prev => ({ ...prev, isAuthenticated: false }));
  };

  return (
    <AppContext.Provider value={{
      ...state,
      updateContent,
      updateTheme,
      addPost,
      deletePost,
      addInquiry,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
