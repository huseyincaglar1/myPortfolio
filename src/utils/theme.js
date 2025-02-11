export const themeUtils = {
    isDarkMode: () => {
      if (typeof window === 'undefined') return false;
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    
    toggleTheme: (currentTheme, setTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    },
    
    getInitialTheme: () => {
      if (typeof window === 'undefined') return 'light';
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    success: '#4CAF50',
    error: '#f44336',
  };