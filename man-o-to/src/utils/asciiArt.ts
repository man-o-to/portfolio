export const LOGO_ASCII = [
    ' _',
    '| |   _   _  ___ ___ __ _',
    '| |  | | | |/ __/ __/ _` |',
    '| |__| |_| | (_| (_| (_| |',
    '|_____\\__,_|\\___|\\___\\__,_'
];

export const getLogoBounds = () => {
  const width = Math.max(...LOGO_ASCII.map(line => line.length));
  const height = LOGO_ASCII.length;
  return { width, height };
};

export const isInLogoArea = (col: number, row: number, startCol: number, startRow: number): boolean => {
  const { width, height } = getLogoBounds();
  return (
    col >= startCol &&
    col < startCol + width &&
    row >= startRow &&
    row < startRow + height
  );
};

// Character interpolation functions
const interpolate = (start: number, end: number, t: number): number => {
  return start * (1 - t) + end * t;
};

const easeInOutQuad = (t: number): number => {
  return t < 0.5 
    ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 
    : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
};

export const getLogoChar = (col: number, row: number, startCol: number, startRow: number, progress: number = 1): string | null => {
  if (!isInLogoArea(col, row, startCol, startRow)) return null;
  const logoRow = row - startRow;
  const logoCol = col - startCol;
  
  // Safety check for array bounds
  if (logoRow < 0 || logoRow >= LOGO_ASCII.length || 
      logoCol < 0 || logoCol >= LOGO_ASCII[logoRow].length) {
    return null;
  }
  
  // Get the target character
  const targetChar = LOGO_ASCII[logoRow][logoCol];
  if (!targetChar || targetChar === ' ') return ' ';

  // If progress is 1, return the final character
  if (progress >= 1) return targetChar;

  // Generate a random character for the transition
  const randomChar = String.fromCharCode(Math.floor(Math.random() * 94) + 33); // Printable ASCII characters
  
  // Safety check for character codes
  const targetCode = targetChar.charCodeAt(0);
  const randomCode = randomChar.charCodeAt(0);
  
  if (isNaN(targetCode) || isNaN(randomCode)) {
    return targetChar;
  }
  
  // Interpolate between random and target character
  const charCode = Math.round(interpolate(
    randomCode,
    targetCode,
    easeInOutQuad(progress)
  ));
  
  return String.fromCharCode(charCode);
}; 