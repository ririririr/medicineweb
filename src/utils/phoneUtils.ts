export const getHighlightClass = (
  currentPosition: string,
  position: string,
  highlightColor: string,
  className: string = ''
): string => {
  if (currentPosition === position) {
    return `absolute inset-0 bg-${highlightColor}/30 rounded-2xl ring-4 ring-${highlightColor}/50 ring-offset-2 ring-offset-white/10 shadow-lg shadow-${highlightColor}/30 ${className}`;
  }
  return '';
};