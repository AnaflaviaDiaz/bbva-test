export const dateFormatter = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  const dd = `${day < 10 ? '0' : ''}${day}`;
  const mm = `${month < 10 ? '0' : ''}${month}`;

  return `${dd}-${mm}-${yyyy}`;
};
