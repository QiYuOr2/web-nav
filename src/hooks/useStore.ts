import { reactive } from 'vue';
import { darkTheme } from 'naive-ui';

export enum Theme {
  light = 'LIGHT',
  dark = 'DARK',
}

type ThemeVariant = {
  isDark: boolean;
  label: string;
  themeConfig: typeof darkTheme | null;
};

const themeVariant: Record<Theme, ThemeVariant> = {
  [Theme.dark]: {
    isDark: true,
    label: '浅色',
    themeConfig: darkTheme,
  },
  [Theme.light]: {
    isDark: false,
    label: '深色',
    themeConfig: null,
  },
};

function createContext() {
  const theme = reactive({ ...themeVariant[Theme.light] });
  const changeTheme = () => {
    const nextTheme = theme.isDark ? Theme.light : Theme.dark;

    const { isDark: nextIsDark, label, themeConfig } = themeVariant[nextTheme];

    theme.isDark = nextIsDark;
    theme.label = label;
    theme.themeConfig = themeConfig;
  };

  return () => ({ theme, changeTheme });
}

export default createContext();
