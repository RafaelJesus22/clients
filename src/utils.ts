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
