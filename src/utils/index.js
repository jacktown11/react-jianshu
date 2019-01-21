export function toK(num) {
  num = Number(num);
  if (isNaN(num)) return null;
  return (num / 1000).toFixed(1).replace('.0', '') + 'k';
}
