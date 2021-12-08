export default function createId(end = 5) {
  const str1 = Math.random().toString(36).substring(2, end);
  const str2 = Math.random().toString(36).substring(2, end).toUpperCase();
  const str3 = Math.random().toString(36).substring(2, end);

  return `${str1}${str2}${str3}`;
}
