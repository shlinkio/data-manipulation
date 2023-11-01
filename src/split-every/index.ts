/**
 * Split an array into chunks of a specific size
 */
export const splitEvery = <T>(list: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    chunks.push(list.slice(i, i + chunkSize));
  }

  return chunks;
};
