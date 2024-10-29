export const getSizeClass = (size?: 'sm' | 'md' | 'lg'): string => {
  switch (size) {
    case 'sm':
      return 'h-20 w-20';
    case 'md':
      return 'h-32 w-32';
    case 'lg':
      return 'h-44 w-44';
    default:
      return 'h-32 w-32';
  }
};
