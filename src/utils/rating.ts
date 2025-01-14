// Converte a base rating de 0 a 100 para uma escala de 0 a 5
export const normalizeRating = (baseRating: number) => {
  return Math.round(baseRating / 20);
};
