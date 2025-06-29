export function firstAlphabetLetterNotInName(name: string): string {
  if (!name) return '-';

  let letter = '';
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nameSet = new Set(
    name
      .toUpperCase()
      .split('')
      .filter(char => alphabet.includes(char)),
  );

  for (let i = 0; i < alphabet.length; i++) {
    if (!nameSet.has(alphabet[i])) {
      letter = alphabet[i];
      return letter;
    }
  }

  return letter || '-';
}

export function formatDateToDDMMYYYY(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
