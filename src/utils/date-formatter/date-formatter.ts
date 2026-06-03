/**
 * Formatea la fecha en formato 'DD/MM/YYYY'.
 * Si el día o el mes es menor que 10, se agrega un cero delante.
 * @param date - fecha con formato 'YYY-MM-DD'
 * @returns fecha formateada con formato 'DD/MM/YYYY' o 'Invalid Date' si la fecha es inválida
 * @example
 * dateFormatter('2026-06-05'); => '05/06/2026'
 * dateFormatter('invalid-date'); => 'Invalid Date'
 */
export const dateFormatter = (date: string): string => {
  const newDate = new Date(date);

  if (Number.isNaN(newDate.getTime())) {
    return 'Invalid Date';
  }

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const yyyy = newDate.getFullYear();

  const dd = `${day < 10 ? '0' : ''}${day}`;
  const mm = `${month < 10 ? '0' : ''}${month}`;

  return `${dd}/${mm}/${yyyy}`;
};
