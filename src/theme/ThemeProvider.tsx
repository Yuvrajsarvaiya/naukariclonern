/* eslint-disable prettier/prettier */
import React, { PropsWithChildren } from 'react';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type ThemeSchemeType = 'dark' | 'light' | 'system';

type ThemeContextProps = {
  colorScheme: ThemeSchemeType | null;
  setTheme: (themeScheme: ThemeSchemeType) => void;
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  colorScheme: Themes.LIGHT,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [colorScheme, setColorScheme] = React.useState<ThemeSchemeType | null>(
    null,
  );

  const currentTheme: ThemeContextProps = React.useMemo(
    () => ({
      colorScheme,
      setTheme: setColorScheme,
    }),
    [colorScheme],
  );

  if (!colorScheme) {
    return null;
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
