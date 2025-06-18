import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
  const { theme, setTheme } = useNextTheme();
  
  return {
    theme,
    setTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark')
  };
}