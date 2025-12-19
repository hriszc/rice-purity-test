export const getThemeColors = (isDark: boolean) => ({
  green: isDark ? '#30d158' : '#34c759',
  yellow: isDark ? '#ffd60a' : '#ffcc00',
  orange: isDark ? '#ff9f0a' : '#ff9500',
  red: isDark ? '#ff453a' : '#ff3b30',
  label: isDark ? '#ffffff' : '#000000',
  secondaryLabel: '#8e8e93',
  separator: isDark ? '#38383a' : '#c6c6c8',
  accent: isDark ? '#0a84ff' : '#007aff',
  background: isDark ? '#1C1C1E' : '#FFFFFF',
  secondaryBackground: isDark ? '#000000' : '#F2F2F7',
});
