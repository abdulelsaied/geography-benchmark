export const formatNumber = (num: number | undefined): string => {
  return num ? new Intl.NumberFormat('en-US').format(num) : '';
};